// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type ModuleIdType = "grn.schedule" | "grn.mail" | "grn.message" | "grn.cabinet" | "grn.report" | "grn.bulletin";
export type BulletinType = "normal" | "draft" | "wait";

// [ComplexType]
// StarIDType
export interface StarIDTypeAttribute {
    module_id: base.IDType;
    item: base.NonBlankStringType;
}
export interface StarIDType {
    $attributes: StarIDTypeAttribute
}

// StarGetStarsByIdRequestType
export interface StarGetStarsByIdRequestType {
    
    star_id: base.IDType | base.IDType[];
}

// StarGetStarsByIdResponseType
export interface StarGetStarsByIdResponseType {
    
    star_data?: StarDataType | StarDataType[];
}

// StarGetStarVersionsRequestType
export interface StarGetStarVersionsRequestType {
    
    star_item?: base.ItemVersionType | base.ItemVersionType[];
}

// StarGetStarVersionsResponseType
export interface StarGetStarVersionsResponseType {
    
    star_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// StarRemoveStarsRequestType
export interface StarRemoveStarsRequestTypeStarItemAttribute extends StarIDTypeAttribute {
    date?: string;
    is_draft?: boolean;
}
export interface StarRemoveStarsRequestTypeStarItem extends StarIDType {
    $attributes: StarRemoveStarsRequestTypeStarItemAttribute
}
export interface StarRemoveStarsRequestType {
    
    request_token?: string;
    star_item: StarRemoveStarsRequestTypeStarItem | StarRemoveStarsRequestTypeStarItem[];
}

// StarAddStarsRequestType
export interface StarAddStarsRequestTypeStarItemAttribute extends StarIDTypeAttribute {
    date?: string;
    is_draft?: boolean;
}
export interface StarAddStarsRequestTypeStarItem extends StarIDType {
    $attributes: StarAddStarsRequestTypeStarItemAttribute
}
export interface StarAddStarsRequestType {
    
    request_token?: string;
    star_item: StarAddStarsRequestTypeStarItem | StarAddStarsRequestTypeStarItem[];
}

// StarAddStarsResponseType
export interface StarAddStarsResponseType {
    
    star_data?: StarDataType | StarDataType[];
}

// StarGetProfilesRequestType
export interface StarGetProfilesRequestType {
    
}

// StarGetProfilesResponseType
export interface StarGetProfilesResponseTypeAttribute {
    star_num_allow: number;
}
export interface StarGetProfilesResponseType {
    $attributes: StarGetProfilesResponseTypeAttribute
}

// StarDataType
export interface StarDataTypeAttribute {
    id: base.IDType;
    module_id: ModuleIdType;
    item: base.NonBlankStringType;
    subject: string;
    version: base.VersionType;
}
export interface StarDataType {
    $attributes: StarDataTypeAttribute
}

