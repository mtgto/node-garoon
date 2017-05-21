#!/usr/bin/env node

// NOTE: This script generate RPC definitions from Cybozu Garoon WSDL.
// It doesn't support for other service's WSDLs.

import {soap} from "strong-soap";
import * as mustache from "mustache";
import * as fs from "fs";

/**
 * SimpleType in XSD.
 */
class SimpleType {
    name: string;
    /**
     * There are 3 types:
     * 1. Standard type name in node.js. ex: "string", "Date"
     * 2. Other simpleType defined in its or other namespace. ex: base.IDType
     * 3. Actual value. ex: "add" | "modify" | "delete"
     */
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

/**
 * ComplexType in XSD.
 */
class ComplexType {
    name: string;
    baseType?: string;
    attributes: Parameter[];
    parameters: Parameter[];
    subtypes: ComplexType[];

    constructor(name: string, attributes: Parameter[], parameters: Parameter[], subtypes: ComplexType[], baseType?: string) {
        this.name = name;
        this.attributes = attributes;
        this.parameters = parameters;
        this.subtypes = subtypes;
        this.baseType = baseType;
    }

    hasAttribute = (): boolean => {
        return this.attributes.length > 0;
    }
}

class Parameter {
    name: string;
    type: string;
    required: boolean;
    isMultiple: boolean;

    constructor(name: string, type: string, required: boolean, isMultiple: boolean) {
        this.name = name;
        this.type = type;
        this.required = required;
        this.isMultiple = isMultiple;
    }
}

const normalizeType = (type: string): string => {
    switch (type) {
        case "string":
        case "anyURI":
        case "date":
        case "dateTime":
        case "time":
            return "string";
        case "positiveInteger":
        case "unsignedLong":
        case "unsignedInt":
        case "byte":
        case "nonNegativeInteger":
        case "integer":
        case "duration":
        case "unsignedShort":
            return "number";
        case "base64Binary":
            return "Buffer";
        default:
            if (type) {
                return type.replace(/\w+:/, "");
            } else {
                return type;
            }
    }
}

/**
 * Parse simple name from namespace.
 * 
 * "http://schemas.cybozu.co.jp/base/2008" => "base"
 * @param namespace 
 */
const parseNamespace = (namespaceURL: string): string => {
    return namespaceURL.split("/")[3];
}

/**
 * Check namespace is standard.
 * 
 * "http://www.w3.org/2001/XMLSchema" => true
 * "http://schemas.cybozu.co.jp/base/2008" => false
 * @param namespace 
 */
const isStandardNamespace = (namespaceURL: string): boolean => {
    return namespaceURL.indexOf("http://schemas.cybozu.co.jp/") === -1 && namespaceURL.indexOf("http://wsdl.cybozu.co.jp/") === -1;
}

const processTypeName = (currentNamespaceURL: string, targetNamespaceURL: string, typeName: string): string => {
    const currentNamespace = parseNamespace(currentNamespaceURL);
    const targetNamespace = parseNamespace(targetNamespaceURL);
    if (isStandardNamespace(targetNamespaceURL) || currentNamespace === targetNamespace) {
        return typeName;
    } else {
        return parseNamespace(targetNamespaceURL) + "." + typeName;
    }
}

/**
 * foo_bar_baz => FooBarBaz
 * @param name 
 */
const classNameFromParameterName = (name: string): string => {
    return name.split("_").map(word => { return word.substring(0, 1).toUpperCase() + word.substring(1); }).join("");
}

const processSimpleType = (namespaceURL: string, type: any, alternateName?: string): SimpleType => {
    const name = type.$name || alternateName;
    let typeName: string | undefined = undefined;
    console.assert(name, "[SimpleType] Unknown name: " + type);
    if (!type.children) {
        console.log("[SimpleType] Unexpected structure: " + type);
    }
    for (const child of type.children) {
        const childClassName = child.constructor.name;
        switch (childClassName) {
            case "Restriction":
                console.log("[Restriction] child.baseType: " + child.base.$name);
                //console.log("[Restriction] child.name: " + child.$name); // baseで全然取れてない. SimpleTypeでは不要
                //console.log("[Restriction] child.required: " + child.$use); // たまにundefined. SimpleTypeでは不要
                if (child.children.length) {
                    for (const grandchild of child.children) {
                        const grandchildClassName = grandchild.constructor.name;
                        console.assert(grandchild.$value, "[Restriction] No value: " + grandchildClassName);
                    }
                    typeName = child.children
                        .filter((grandchild: any) => { return grandchild.name === "enumeration"; })
                        .map((grandchild: any) => { return "\"" + grandchild.$value + "\""; }).join(" | ");
                }
                if (!typeName) {
                    typeName = processTypeName(namespaceURL, child.targetNamespace, normalizeType(child.base.$name));
                }
                break;
            case "Union":
                console.log("[Union] child.baseType: " + child.memberTypes.map((memberType: any) => { return memberType.$name; }).join(" | "));
                typeName = child.memberTypes.map((memberType: any) => {
                    return processTypeName(namespaceURL, memberType.targetNamespace, memberType.$name);
                }).join(" | ");
                break;
            case "Annotation":
                // 値の説明が入ってくるのでコメントとして生成できるといいな
                console.log("[Annotation] この要素は無視されます: " + childClassName);
                break;
            default:
                throw Error("未知の要素です: " + childClassName);
        }
    }
    if (typeName) {
        return new SimpleType(name, typeName);
    } else {
        throw Error("[SimpleType] Failed to define type: " + type);
    }
}

const processAttribute = (namespaceURL: string, attribute: any): Parameter => {
    let name: string;
    let typeName: string;
    let required: boolean;
    // ScheduleModifyRepeatEventsOperationType's attribute "typens:ScheduleRepeatModifyType" type null
    // MyAddressGroupType -> card -> type has no type, $type
    console.assert(
        attribute.type || (attribute.$type && attribute.targetNamespace) || (attribute.children.length > 0 && attribute.children[0].constructor.name === "SimpleType"),
        "[Attribute] attribute.type または attribute.$typeがありません"
    );
    console.assert(attribute.$name, "[Attribute] attribute.$nameがありません");
    name = attribute.$name;
    if (attribute.type) {
        console.assert(attribute.type.$name, "[Attribute] attribute.type.$nameがありません");
        typeName = processTypeName(namespaceURL, attribute.type.targetNamespace, normalizeType(attribute.type.$name));
    } else if (attribute.children.length > 0 && attribute.children[0].constructor.name === "SimpleType") {
        const childType = processSimpleType(namespaceURL, attribute.children[0], "__DUMMY__");
        typeName = childType.type;
    } else {
        typeName = processTypeName(namespaceURL, attribute.targetNamespace, normalizeType(attribute.$type));
    }
    
    console.log("[Attribute]: " + name + ": " + typeName);
    switch (attribute.$use) {
        case "required":
            required = true;
            break;
        case "optional":
            required = false;
            break;
        case "default":
            throw Error("[Attribute] Garoon WSDL has no default attribute in use.");
        case "fixed":
            throw Error("[Attribute] Garoon WSDL has no fixed attribute in use.");
        default:
            // Same as required
            required = true;
    }
    // switch (child.type.constructor.name) {
    //     case "SimpleType":
    //         processSimpleType(namespaceURL, child.type);
    //         break;
    //     default:
    //         throw Error("[Attribute] child.typeが不明: " + child.type.constructor.name);
    // }
    return new Parameter(name, typeName, required, false);
}

const processSequence = (namespaceURL: string, sequence: any, name: string): {parameters: Parameter[], subtypes: ComplexType[]} => {
    if (true || name === "AddressGetPersonalCardVersionsRequestType") {
        console.log("");
    }
    let parameters: Parameter[] = [];
    let subtypes: ComplexType[] = [];
    for (const child of sequence.children) {
        //console.assert(grandchild.type, "[Sequence] child.typeがありません");
        //console.assert(grandchild.$name, "[Sequence] child.$nameがありません");
        // child.typeがある場合 => child.type.$name
        // child.complexTypeがある場合 => child.complexType.$nameはないことがあるので新しい名前をつける
        //const childName: string = child.$name;
        let childRequired: boolean;
        let childIsMultiple: boolean;
        switch (child.constructor.name) {
            case "Element":
                childRequired = child.$minOccurs ? child.$minOccurs > 0 : false;
                // $maxOccurs: undefind | "<int>" | "unbound"
                childIsMultiple = child.$maxOccurs ? child.$maxOccurs > 1 || child.$maxOccurs === "unbounded" : false;
                //const childTypeName: string = processTypeName(namespaceURL, child.type.targetNamespace, normalizeType(grandchild.type.$name));
                let childName: string;
                let childTypeName: string;
                if (child.type) {
                    console.assert(child.$name, "[Sequence] child.$nameがありません");
                    childName = child.$name;
                    childTypeName = processTypeName(namespaceURL, child.type.targetNamespace, normalizeType(child.type.$name));
                    console.assert(childTypeName, "[Sequence] child.type.$nameがありません");
                } else if (child.type === null && child.$type) {
                    // maybe bug in soap library...?
                    console.assert(child.$name, "[Sequence] child.$nameがありません");
                    childName = child.$name;
                    childTypeName = processTypeName(namespaceURL, child.targetNamespace, normalizeType(child.$type));
                } else if (child.complexType) {
                    console.assert(child.$name, "[Sequence] child.$nameがありません");
                    childName = child.$name;
                    const subtype = processComplexType(namespaceURL, child.complexType, name + classNameFromParameterName(childName));
                    subtypes.push(subtype);
                    subtypes = subtypes.concat(subtype.subtypes);
                    childTypeName = subtype.name;
                } else if (child.ref) {
                    console.assert(child.ref.$name, "[Sequence] child.ref.$nameがありません");
                    childName = child.ref.$name;
                    if (child.ref.type) {
                        //throw Error("[Sequence] grandchild.ref.typeほんとにある？");
                        childTypeName = child.ref.type.$name;
                        console.assert(childTypeName, "[Sequence] child.ref.type.$name");
                    } else if (child.ref.complexType) {
                        const subtype = processComplexType(namespaceURL, child.ref.complexType, name + classNameFromParameterName(childName));
                        subtypes.push(subtype);
                        subtypes = subtypes.concat(subtype.subtypes);
                        childTypeName = subtype.name;
                    } else {
                        throw Error("[Sequence] child.refが解決できません");
                    }
                } else {
                    // workflow -> ApplicationType -> items -> blank_item
                    console.assert(child.$name, "[Sequence] child.$nameがありません");
                    childName = child.$name;
                    childTypeName = "void";
                    //throw Error("[Sequence] childが不明");
                }
                console.log("[Sequence]: " + childName + ": " + childTypeName);
                parameters.push(new Parameter(childName, childTypeName, childRequired, childIsMultiple));
                break;
            case "Sequence":
                {
                    const response = processSequence(namespaceURL, child, name);
                    parameters = parameters.concat(response.parameters);
                    subtypes = subtypes.concat(response.subtypes);
                }
                break;
            case "Any":
                break;
            case "Choice":
                //ex: report.ReportType https://cybozudev.zendesk.com/hc/ja/articles/202270214
                // TODO refactor
                {
                    const response = processSequence(namespaceURL, child, name);
                    parameters = parameters.concat(response.parameters);
                    subtypes = subtypes.concat(response.subtypes);
                }
                break;
            default:
                throw Error("[Sequence] childが不明");
        }
    }
    return {parameters: parameters, subtypes: subtypes};
}

const processComplexType = (namespaceURL: string, type: any, alternateName?: string): ComplexType => {
    const name = type.$name || alternateName;
    /**
     * parameters excepts attribute parameters.
     */
    let parameters: Parameter[] = [];
    let attributes: Parameter[] = [];
    let subtypes: ComplexType[] = [];
    let baseType: string | undefined = undefined;
    if (!type.children) {
        console.log("未知の要素です: " + type);
    }
    for (const child of type.children) {
        const childClassName = child.constructor.name;
        let childName: string;
        let childTypeName: string;
        let childRequired: boolean;
        let childIsMultiple: boolean;
        switch (childClassName) {
            case "Attribute":
                attributes.push(processAttribute(namespaceURL, child));
                break;
            case "Sequence":
                {
                    const response = processSequence(namespaceURL, child, name);
                    parameters = parameters.concat(response.parameters);
                    subtypes = subtypes.concat(response.subtypes);
                }
                break;
            case "ComplexContent":
                console.assert(child.children.length === 1, "[ComplexContent] 子が1つではありません");
                console.assert(child.children[0].constructor.name === "Extension", "[ComplexContent] 子がExtensionではありません");
                //const baseComplexType: ComplexType = processComplexType(namespaceURL, child.children[0].base); // 別にパースする必要はない
                if (child.children[0].base) {
                    console.assert(child.children[0].base, "[ComplexContent] baseとなるものがありません");
                    console.assert(child.children[0].base.constructor.name === "ComplexType", "[ComplexContent] baseがComplexTypeではありません");
                    console.assert(child.children[0].base.$name, "[ComplexContent] base.$nameがありません");
                    //console.assert(child.children[0].children.length, "[ComplexContent] 拡張する要素がありません");
                    //console.assert(child.children[0].children.length === 1, "[ComplexContent] 拡張する要素が1つではありません"); Sequence, Attributeからなるときがある
                    baseType = child.children[0].base.$name;
                } else if (child.children[0].$base) {
                    baseType = normalizeType(child.children[0].$base);
                } else {
                    throw Error("[ComplexContent] base is not found.");
                }
                for (const grandchild of child.children[0].children) {
                    switch (grandchild.constructor.name) {
                        case "Attribute":
                            attributes.push(processAttribute(namespaceURL, grandchild));
                            break;
                        case "Sequence":
                            const response = processSequence(namespaceURL, grandchild, name);
                            parameters = parameters.concat(response.parameters);
                            subtypes = subtypes.concat(response.subtypes);
                            break;
                        case "AnyAttribute":
                            // Do nothing
                            break;
                        default:
                            throw Error("[ComplexContent] Unknown type: " + grandchild.constructor.name);
                    }
                    // console.assert(grandchild.type, "[ComplexContent Sequence] grandchild.typeがありません");
                    // console.assert(grandchild.$name, "[ComplexContent Sequence] grandchild.$nameがありません");
                    // const grandchildName: string = grandchild.$name;
                    // const grandchildTypeName: string = processTypeName(namespaceURL, grandchild.type.targetNamespace, normalizeType(grandchild.type.$name));
                    // console.log("[ComplexContent Sequence]: " + grandchildName + ": " + grandchildTypeName);
                }
                break;
            case "SimpleContent":
                console.assert(child.children.length === 1, "[SimpleContent] 子が1つではありません");
                console.assert(child.children[0].constructor.name === "Extension", "[SimpleContent] 子がExtensionではありません");
                console.assert(child.children[0].base, "[SimpleContent] baseとなるものがありません");
                console.assert(child.children[0].base.$name, "[SimpleContent] base.$nameがありません");
                console.assert(child.children[0].children.length, "[SimpleContent] 拡張する要素がありません");
                for (const grandchild of child.children[0].children) {
                    switch (grandchild.constructor.name) {
                        case "Attribute":
                            attributes.push(processAttribute(namespaceURL, grandchild));
                            break;
                        case "AnyAttribute":
                            // Do nothing
                            break;
                        default:
                            throw Error("[SimpleContent] Unknown type: " + grandchild.constructor.name);
                    }
                    // console.assert(grandchild.type, "[ComplexContent Sequence] grandchild.typeがありません");
                    // console.assert(grandchild.$name, "[ComplexContent Sequence] grandchild.$nameがありません");
                    // const grandchildName: string = grandchild.$name;
                    // const grandchildTypeName: string = processTypeName(namespaceURL, grandchild.type.targetNamespace, normalizeType(grandchild.type.$name));
                    // console.log("[ComplexContent Sequence]: " + grandchildName + ": " + grandchildTypeName);
                }
                break;
            case "Choice":
                //ex: report.ReportType https://cybozudev.zendesk.com/hc/ja/articles/202270214
                // TODO refactor
                {
                    const response = processSequence(namespaceURL, child, name);
                    parameters = parameters.concat(response.parameters);
                    subtypes = subtypes.concat(response.subtypes);
                }
                break;
            case "AnyAttribute":
                // Do nothing
                continue;
            case "Annotation":
                // 値の説明が入ってくるのでコメントとして生成できるといいな
                continue;
            default:
                throw Error("[ComplexType] 未知の要素です: " + childClassName);
        }
    }
    return new ComplexType(name, attributes, parameters, subtypes, baseType);
}

// Main

const wsdlUrl = process.env["URL"];
if (!wsdlUrl) {
    console.warn("Usage: URL=<WSDL URL or Path> node generator.js");
    process.exit(1);
}

soap.WSDL.open(wsdlUrl, (err: any, wsdl: soap.WSDL) => {
    const definitions = wsdl.definitions;
    const typesTemplate: string = fs.readFileSync(__dirname + "/../../templates/types.ts.mustache", "utf8");
    let typeMap: {[namespace: string]: {simpleTypes: SimpleType[], complexTypes: ComplexType[]}} = {};
    for (const namespaceURL of Object.keys(definitions.schemas)) {
        const schema = definitions.schemas[namespaceURL];
        const namespace = parseNamespace(namespaceURL);
        let simpleTypes: SimpleType[] = [];
        let complexTypes: ComplexType[] = [];
        console.log("[namespace]: " + namespace);

        for (const child of schema.children) {
            const childClassName = child.constructor.name;
            switch (childClassName) {
                case "SimpleType":
                    simpleTypes.push(processSimpleType(namespaceURL, child));
                    break;
                case "ComplexType":
                    complexTypes.push(processComplexType(namespaceURL, child));
                    break;
                case "Import":
                case "Element":
                    console.log("これらの要素は無視されます: " + childClassName);
                    break;
                default:
                    throw Error("未知の要素です: " + childClassName);
            }
        }
        if (typeMap[namespace]) {
            typeMap[namespace] = {
                simpleTypes: typeMap[namespace].simpleTypes.concat(simpleTypes),
                complexTypes: typeMap[namespace].complexTypes.concat(complexTypes)
            };
        } else {
            typeMap[namespace] = {simpleTypes: simpleTypes, complexTypes: complexTypes};
        }
    }

    for (const namespace of Object.keys(typeMap)) {
        const filename = namespace + ".ts";
        const types = typeMap[namespace];
        fs.writeFileSync(__dirname + "/../types/" + filename, mustache.render(typesTemplate, types));
    }
});
