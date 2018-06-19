// This file is generated from WSDL.
/* tslint:disable:max-line-length no-trailing-whitespace */

// [Import]
import * as base from "./base";

// [SimpleType]

// [ComplexType]
// UtilLoginRequestType
export interface UtilLoginRequestType {
    
    login_name: string;
    password: string;
}
// UtilLoginResponseType
export interface UtilLoginResponseType {
    
    login_name: string;
    status: string;
    cookie?: string;
}
// UtilLogoutRequestType
export interface UtilLogoutRequestType {
    
}
// UtilLogoutResponseType
export interface UtilLogoutResponseType {
    
    login_name: string;
    status: string;
}
// UtilGetRequestTokenRequestType
export interface UtilGetRequestTokenRequestType {
    
}
// UtilGetRequestTokenResponseType
export interface UtilGetRequestTokenResponseType {
    
    request_token: string;
}
// UtilGetLoginUserIdRequestType
export interface UtilGetLoginUserIdRequestType {
    
}
// UtilGetLoginUserIdResponseType
export interface UtilGetLoginUserIdResponseType {
    
    user_id: base.IDType;
}
