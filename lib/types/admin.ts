// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]

// [ComplexType]
// AdminCountUsersRequestType
export interface AdminCountUsersRequestType {
    
}

// AdminCountUsersResponseType
export interface AdminCountUsersResponseType {
    
    number_users?: number;
}

// AdminGetUserIdsRequestType
export interface AdminGetUserIdsRequestType {
    
    offset?: number;
    limit?: number;
}

// AdminGetUserIdsResponseType
export interface AdminGetUserIdsResponseType {
    
    number_users: number;
    userId?: number | number[];
}

// AdminGetUserDetailByIdsRequestType
export interface AdminGetUserDetailByIdsRequestType {
    
    userId: number | number[];
}

// AdminGetUserDetailByIdsResponseType
export interface AdminGetUserDetailByIdsResponseType {
    
    number_users: number;
    userDetail?: UserDetail | UserDetail[];
}

// AdminCountOrgsRequestType
export interface AdminCountOrgsRequestType {
    
}

// AdminCountOrgsResponseType
export interface AdminCountOrgsResponseType {
    
    number_orgs: number;
}

// AdminGetOrgIdsRequestType
export interface AdminGetOrgIdsRequestType {
    
    offset?: number;
    limit?: number;
}

// AdminGetOrgIdsResponseType
export interface AdminGetOrgIdsResponseType {
    
    number_orgs: number;
    orgId?: number | number[];
}

// AdminGetOrgDetailByIdsRequestType
export interface AdminGetOrgDetailByIdsRequestType {
    
    orgId: number | number[];
}

// AdminGetOrgDetailByIdsResponseType
export interface AdminGetOrgDetailByIdsResponseType {
    
    number_orgs: number;
    orgDetail?: OrgDetail | OrgDetail[];
}

// AdminCountChildOrgsRequestType
export interface AdminCountChildOrgsRequestType {
    
    parent_orgId: number;
}

// AdminCountChildOrgsResponseType
export interface AdminCountChildOrgsResponseType {
    
    parent_orgId: number;
    number_child_orgs: number;
}

// AdminGetChildOrgsRequestType
export interface AdminGetChildOrgsRequestType {
    
    parent_orgId: number;
    offset?: number;
    limit?: number;
}

// AdminGetChildOrgsResponseType
export interface AdminGetChildOrgsResponseType {
    
    parent_orgId: number;
    number_child_orgs: number;
    orgId?: number | number[];
}

// AdminCountUsersInOrgRequestType
export interface AdminCountUsersInOrgRequestType {
    
    orgId: number;
}

// AdminCountUsersInOrgResponseType
export interface AdminCountUsersInOrgResponseType {
    
    orgId: number;
    number_users: number;
}

// AdminGetUserIdsInOrgRequestType
export interface AdminGetUserIdsInOrgRequestType {
    
    orgId: number;
    offset?: number;
    limit?: number;
}

// AdminGetUserIdsInOrgResponseType
export interface AdminGetUserIdsInOrgResponseType {
    
    orgId: number;
    number_users: number;
    userId?: number | number[];
}

// AdminCountNoGroupUsersRequestType
export interface AdminCountNoGroupUsersRequestType {
    
}

// AdminCountNoGroupUsersResponseType
export interface AdminCountNoGroupUsersResponseType {
    
    number_users: number;
}

// AdminGetNoGroupUserIdsRequestType
export interface AdminGetNoGroupUserIdsRequestType {
    
    offset?: number;
    limit?: number;
}

// AdminGetNoGroupUserIdsResponseType
export interface AdminGetNoGroupUserIdsResponseType {
    
    number_users: number;
    userId?: number | number[];
}

// AdminCountOrgsOfUserRequestType
export interface AdminCountOrgsOfUserRequestType {
    
    userId: number;
}

// AdminCountOrgsOfUserResponseType
export interface AdminCountOrgsOfUserResponseType {
    
    userId: number;
    number_orgs: number;
}

// AdminGetOrgIdsOfUserRequestType
export interface AdminGetOrgIdsOfUserRequestType {
    
    userId: number;
}

// AdminGetOrgIdsOfUserResponseType
export interface AdminGetOrgIdsOfUserResponseType {
    
    userId: number;
    number_orgs: number;
    orgId?: number | number[];
}

// AdminGetParentOrgIdRequestType
export interface AdminGetParentOrgIdRequestType {
    
    child_orgId: number;
}

// AdminGetParentOrgIdResponseType
export interface AdminGetParentOrgIdResponseType {
    
    child_orgId: number;
    parent_orgId: number;
}

// AdminGetUserIdByLoginNameRequestType
export interface AdminGetUserIdByLoginNameRequestType {
    
    login_name: string;
}

// AdminGetUserIdByLoginNameResponseType
export interface AdminGetUserIdByLoginNameResponseType {
    
    login_name: string;
    userId: number;
}

// AdminAddUserAccountRequestType
export interface AdminAddUserAccountRequestType {
    
    request_token?: string;
    login_name: string;
    display_name: string;
    password_raw?: string;
    user_info?: UserInfoType;
}

// AdminAddUserAccountResponseType
export interface AdminAddUserAccountResponseType {
    
    userAccount?: UserDetail;
}

// AdminModifyUserAccountRequestType
export interface AdminModifyUserAccountRequestType {
    
    request_token?: string;
    userId: number;
    login_name?: string;
    display_name?: string;
    password_raw?: string;
    user_info?: UserInfoType;
}

// AdminModifyUserAccountResponseType
export interface AdminModifyUserAccountResponseType {
    
    userAccount: UserDetail;
}

// AdminRemoveUsersByIdsRequestType
export interface AdminRemoveUsersByIdsRequestType {
    
    request_token?: string;
    userId: number | number[];
}

// AdminRemoveUsersByIdsResponseType
export interface AdminRemoveUsersByIdsResponseType {
    
    number_accounts_affected: number;
    affected_userId?: number | number[];
}

// AdminGetOrgIdByOrgCodeRequestType
export interface AdminGetOrgIdByOrgCodeRequestType {
    
    org_code: string;
}

// AdminGetOrgIdByOrgCodeResponseType
export interface AdminGetOrgIdByOrgCodeResponseType {
    
    org_code: string;
    orgId: number;
}

// AdminAddOrgRequestType
export interface AdminAddOrgRequestType {
    
    request_token?: string;
    org_code: string;
    org_name: string;
    parent_orgId?: number;
}

// AdminAddOrgResponseType
export interface AdminAddOrgResponseType {
    
    org_info: OrgDetail;
    parent_orgId?: number;
}

// AdminModifyOrgInfoRequestType
export interface AdminModifyOrgInfoRequestType {
    
    request_token?: string;
    orgId: number;
    org_code?: string;
    org_name?: string;
}

// AdminModifyOrgInfoResponseType
export interface AdminModifyOrgInfoResponseType {
    
    org_info: OrgDetail;
}

// AdminRemoveOrgsByIdsRequestType
export interface AdminRemoveOrgsByIdsRequestType {
    
    request_token?: string;
    orgId: number | number[];
}

// AdminRemoveOrgsByIdsResponseType
export interface AdminRemoveOrgsByIdsResponseType {
    
    number_orgs_affected: number;
    affected_orgId?: number | number[];
}

// AdminAddUsersToOrgRequestType
export interface AdminAddUsersToOrgRequestType {
    
    request_token?: string;
    orgId: number;
    userId: number | number[];
}

// AdminAddUsersToOrgResponseType
export interface AdminAddUsersToOrgResponseType {
    
    number_relationships_affected: number;
    affected_orgId: number;
    affected_userId?: number | number[];
}

// AdminSetOrgsOfUserRequestType
export interface AdminSetOrgsOfUserRequestType {
    
    request_token?: string;
    userId: number;
    orgId: number | number[];
}

// AdminSetOrgsOfUserResponseType
export interface AdminSetOrgsOfUserResponseType {
    
    number_relationships_affected: number;
    affected_userId?: number;
    affected_orgId?: number | number[];
}

// AdminAddChildrenOfOrgRequestType
export interface AdminAddChildrenOfOrgRequestType {
    
    request_token?: string;
    parent_orgId: number;
    child_orgId: number | number[];
}

// AdminAddChildrenOfOrgResponseType
export interface AdminAddChildrenOfOrgResponseType {
    
    number_relationships_affected: number;
    affected_parent_orgId: number;
    affected_child_orgId: number | number[];
}

// AdminRemoveUsersFromOrgRequestType
export interface AdminRemoveUsersFromOrgRequestType {
    
    request_token?: string;
    orgId: number;
    userId: number | number[];
}

// AdminRemoveUsersFromOrgResponseType
export interface AdminRemoveUsersFromOrgResponseType {
    
    number_relationships_affected: number;
    affected_orgId: number;
    affected_userId?: number | number[];
}

// UserDetail
export interface UserDetail {
    
    userId: number;
    login_name: string;
    display_name: string;
}

// OrgDetail
export interface OrgDetail {
    
    orgId: number;
    org_code: string;
    org_name: string;
}

// UserInfoType
export interface UserInfoTypeAttribute {
    primary_group?: base.IDType;
    position?: number;
    invalid?: boolean;
    sort_key?: string;
    email_address?: string;
    description?: string;
    post?: string;
    telephone_number?: string;
    url?: string;
    locale?: base.IDType;
    base?: base.IDType;
}
export interface UserInfoType {
    attributes: UserInfoTypeAttribute
    image?: base.FileType;
    organization?: number | number[];
}

