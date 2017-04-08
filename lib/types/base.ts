// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type ItemOperationType = "add" | "modify" | "remove";
export type BaseCalendarEventTypeType = "public_holiday" | "memorial_day" | "system_memo" | "user_memo";
export type BaseApplicationStatusType = "active" | "deactive" | "license_expired";
export type RightsType = "allow" | "deny";
export type NonBlankStringType = string;
export type IPPhoneURIType = string;
export type IDType = NonBlankStringType;
export type VersionType = NonBlankStringType;

// [ComplexType]
// FaultMessageType
export interface FaultMessageTypeAttribute {
    code: NonBlankStringType;
    diagnosis: string;
    cause: string;
    counter_measure: string;
}
export interface FaultMessageType {
    $attributes: FaultMessageTypeAttribute
}

// ItemVersionType
export interface ItemVersionTypeAttribute {
    id: IDType;
    version: VersionType;
}
export interface ItemVersionType {
    $attributes: ItemVersionTypeAttribute
}

// ItemVersionResultType
export interface ItemVersionResultTypeAttribute {
    id: IDType;
    version: VersionType;
    operation: ItemOperationType;
}
export interface ItemVersionResultType {
    $attributes: ItemVersionResultTypeAttribute
}

// FileBodyType
export interface FileBodyType {
    
    content: Buffer;
}

// BaseGetUserVersionsRequestType
export interface BaseGetUserVersionsRequestType {
    
    user_item?: ItemVersionType | ItemVersionType[];
}

// BaseGetUserVersionsResponseType
export interface BaseGetUserVersionsResponseType {
    
    user_item?: ItemVersionResultType | ItemVersionResultType[];
}

// BaseGetUsersByIdRequestType
export interface BaseGetUsersByIdRequestType {
    
    user_id: IDType | IDType[];
}

// BaseGetUsersByIdResponseType
export interface BaseGetUsersByIdResponseType {
    
    user?: UserType | UserType[];
}

// BaseGetUsersByLoginNameRequestType
export interface BaseGetUsersByLoginNameRequestType {
    
    login_name: NonBlankStringType | NonBlankStringType[];
}

// BaseGetUsersByLoginNameResponseType
export interface BaseGetUsersByLoginNameResponseType {
    
    user?: UserType | UserType[];
}

// BaseGetOrganizationVersionsRequestType
export interface BaseGetOrganizationVersionsRequestType {
    
    organization_item?: ItemVersionType | ItemVersionType[];
}

// BaseGetOrganizationVersionsResponseType
export interface BaseGetOrganizationVersionsResponseType {
    
    organization_item?: ItemVersionResultType | ItemVersionResultType[];
}

// BaseGetOrganizationsByIdRequestType
export interface BaseGetOrganizationsByIdRequestType {
    
    organization_id: IDType | IDType[];
}

// BaseGetOrganizationsByIdResponseType
export interface BaseGetOrganizationsByIdResponseType {
    
    organization?: OrganizationType | OrganizationType[];
}

// BaseGetMyGroupVersionsRequestType
export interface BaseGetMyGroupVersionsRequestType {
    
    my_group_item?: ItemVersionType | ItemVersionType[];
}

// BaseGetMyGroupVersionsResponseType
export interface BaseGetMyGroupVersionsResponseType {
    
    my_group_item?: ItemVersionResultType | ItemVersionResultType[];
}

// BaseMyGroupType
export interface BaseMyGroupType extends GroupType {
    
    belong_member?: IDType | IDType[];
}

// BaseGetMyGroupsByIdRequestType
export interface BaseGetMyGroupsByIdRequestType {
    
    my_group_id: IDType | IDType[];
}

// BaseGetMyGroupsByIdResponseType
export interface BaseGetMyGroupsByIdResponseType {
    
    my_group?: BaseMyGroupType | BaseMyGroupType[];
}

// BaseGetFrequentUsersRequestType
export interface BaseGetFrequentUsersRequestType {
    
}

// BaseGetFrequentUsersResponseType
export interface BaseGetFrequentUsersResponseType {
    
    user_id?: IDType | IDType[];
}

// BaseGetFrequentOrganizationsRequestType
export interface BaseGetFrequentOrganizationsRequestType {
    
}

// BaseGetFrequentOrganizationsResponseType
export interface BaseGetFrequentOrganizationsResponseType {
    
    organization_id?: IDType | IDType[];
}

// BaseCalendarEventType
export interface BaseCalendarEventTypeAttribute {
    date: Date;
    content: string;
    type: BaseCalendarEventTypeType;
}
export interface BaseCalendarEventType {
    $attributes: BaseCalendarEventTypeAttribute
}

// BaseGetCalendarEventsRequestType
export interface BaseGetCalendarEventsRequestType {
    
}

// BaseGetCalendarEventsResponseType
export interface BaseGetCalendarEventsResponseType {
    
    calendar_event?: BaseCalendarEventType | BaseCalendarEventType[];
}

// BaseApplicationType
export interface BaseApplicationTypeAttribute {
    code: NonBlankStringType;
    status: BaseApplicationStatusType;
}
export interface BaseApplicationType {
    $attributes: BaseApplicationTypeAttribute
}

// BaseGetApplicationStatusRequestType
export interface BaseGetApplicationStatusRequestType {
    
}

// BaseGetApplicationStatusResponseType
export interface BaseGetApplicationStatusResponseType {
    
    application?: BaseApplicationType | BaseApplicationType[];
}

// BaseApplicationInformationType
export interface BaseApplicationInformationTypeAttribute {
    module_id: IDType;
    name: NonBlankStringType;
    url: string;
    available_feature: number;
}
export interface BaseApplicationInformationTypeAppIconAttribute {
    id: NonBlankStringType;
    url: string;
}
export interface BaseApplicationInformationTypeAppIcon {
    $attributes: BaseApplicationInformationTypeAppIconAttribute
}
export interface BaseApplicationInformationTypeAvailableClientAttribute {
    name: NonBlankStringType;
}
export interface BaseApplicationInformationTypeAvailableClient {
    $attributes: BaseApplicationInformationTypeAvailableClientAttribute
}
export interface BaseApplicationInformationType {
    $attributes: BaseApplicationInformationTypeAttribute
    app_icon?: BaseApplicationInformationTypeAppIcon | BaseApplicationInformationTypeAppIcon[];
    available_client?: BaseApplicationInformationTypeAvailableClient | BaseApplicationInformationTypeAvailableClient[];
}

// BaseGetApplicationInformationRequestType
export interface BaseGetApplicationInformationRequestType {
    
}

// BaseGetApplicationInformationResponseType
export interface BaseGetApplicationInformationResponseType {
    
    application?: BaseApplicationInformationType | BaseApplicationInformationType[];
}

// BaseFileDownloadRequestType
export interface BaseFileDownloadRequestTypeAttribute {
    file_id: IDType;
}
export interface BaseFileDownloadRequestType {
    $attributes: BaseFileDownloadRequestTypeAttribute
}

// BaseFileDownloadResponseType
export interface BaseFileDownloadResponseType {
    
    file?: FileBodyType;
}

// BaseGetRegionsListRequestType
export interface BaseGetRegionsListRequestType {
    
}

// BaseGetRegionsListResponseType
export interface BaseGetRegionsListResponseType {
    
    region?: RegionType | RegionType[];
}

// BaseGetTimezoneVersionRequestType
export interface BaseGetTimezoneVersionRequestType {
    
}

// BaseGetTimezoneVersionResponseType
export interface BaseGetTimezoneVersionResponseType {
    
    timezone_version?: string;
}

// BaseManagerApplicationType
export interface BaseManagerApplicationTypeAttribute {
    code: string;
    active: boolean;
}
export interface BaseManagerApplicationType {
    $attributes: BaseManagerApplicationTypeAttribute
}

// BaseManagerApplicationRequestType
export interface BaseManagerApplicationRequestType {
    
    application?: BaseManagerApplicationType | BaseManagerApplicationType[];
}

// BaseManagerApplicationResponseType
export interface BaseManagerApplicationResponseType {
    
    request_token?: string;
    application?: BaseApplicationType | BaseApplicationType[];
}

// UserType
export interface UserTypeAttribute {
    key: IDType;
    version: VersionType;
    order?: number;
    name?: string;
    status?: number;
    reading?: string;
    url?: string;
    email?: string;
    phone?: string;
    birth_date?: Date;
    join_date?: Date;
    employee_number?: string;
    extension_number?: string;
    employment_pattern?: string;
    title?: string;
    office?: string;
    description?: string;
    primary_organization?: IDType;
}
export interface UserTypePhotoAttribute {
    file_id: IDType;
    version: VersionType;
    name: NonBlankStringType;
    size?: number;
    mime_type?: string;
}
export interface UserTypePhoto {
    $attributes: UserTypePhotoAttribute
}
export interface UserTypeOrganizationAttribute {
    id: IDType;
}
export interface UserTypeOrganization {
    $attributes: UserTypeOrganizationAttribute
}
export interface UserTypeAcl {
    
    ace?: AceType | AceType[];
}
export interface UserType {
    $attributes: UserTypeAttribute
    photo?: UserTypePhoto;
    organization?: UserTypeOrganization | UserTypeOrganization[];
    acl?: UserTypeAcl;
}

// ListType
export interface ListTypeAttribute {
    key: IDType;
    name: string;
    order?: number;
    description: string;
}
export interface ListType {
    $attributes: ListTypeAttribute
}

// OrganizationType
export interface OrganizationTypeAttribute extends GroupTypeAttribute {
    parent_organization?: IDType;
}
export interface OrganizationTypeAcl {
    
    ace?: AceType | AceType[];
}
export interface OrganizationType extends GroupType {
    $attributes: OrganizationTypeAttribute
    organization?: OrganizationType | OrganizationType[];
    members?: MembersType;
    acl?: OrganizationTypeAcl;
}

// GroupType
export interface GroupTypeAttribute {
    key: IDType;
    name: string;
    version: VersionType;
    description?: string;
    order?: number;
}
export interface GroupType {
    $attributes: GroupTypeAttribute
}

// MembersType
export interface MembersTypeUserAttribute {
    id: IDType;
}
export interface MembersTypeUser {
    $attributes: MembersTypeUserAttribute
}
export interface MembersType {
    
    user?: MembersTypeUser | MembersTypeUser[];
}

// FileType
export interface FileTypeAttribute {
    id: IDType;
    version: VersionType;
    name: string;
    size?: number;
    mime_type?: string;
}
export interface FileType {
    $attributes: FileTypeAttribute
    content: Buffer;
}

// AceType
export interface AceTypeAttribute {
    action: string;
    rights: RightsType;
    quick?: boolean;
    order?: number;
}
export interface AceTypeStaticGroup extends GroupType {
    
    members: MembersType;
    acl?: AceTypeStaticGroupAcl;
}
export interface AceTypeStaticGroupAcl {
    
    ace?: AceType | AceType[];
}
export interface AceTypeDynamicGroupAttribute extends GroupTypeAttribute {
    condition: string;
}
export interface AceTypeDynamicGroup extends GroupType {
    $attributes: AceTypeDynamicGroupAttribute
    acl?: AceTypeDynamicGroupAcl;
}
export interface AceTypeDynamicGroupAcl {
    
    ace?: AceType | AceType[];
}
export interface AceType {
    $attributes: AceTypeAttribute
    user?: UserType;
    static_group?: AceTypeStaticGroup;
    dynamic_group?: AceTypeDynamicGroup;
    organization?: OrganizationType;
}

// TextType
export interface TextTypeMarkup {
    
}
export interface TextType {
    
    plain: string;
    markup?: TextTypeMarkup;
}

// ChangeLogType
export interface ChangeLogTypeAttribute {
    user_id?: IDType;
    name: NonBlankStringType;
    date: Date;
}
export interface ChangeLogType {
    $attributes: ChangeLogTypeAttribute
}

// RegionType
export interface RegionTypeAttribute {
    name: string;
}
export interface RegionTypeCityAttribute {
    name: string;
    timezone: string;
}
export interface RegionTypeCity {
    $attributes: RegionTypeCityAttribute
}
export interface RegionType {
    $attributes: RegionTypeAttribute
    city?: RegionTypeCity | RegionTypeCity[];
}

