// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type StatusType = "create" | "update" | "delete";

// [ComplexType]
// NotificationIdType
export interface NotificationIdTypeAttribute {
    module_id: base.IDType;
    item: base.NonBlankStringType;
}
export interface NotificationIdType {
    attributes: NotificationIdTypeAttribute
}

// NotificationItemVersionType
export interface NotificationItemVersionTypeAttribute {
    version: base.VersionType;
}
export interface NotificationItemVersionType {
    attributes: NotificationItemVersionTypeAttribute
    notification_id: NotificationIdType;
}

// NotificationItemVersionResultType
export interface NotificationItemVersionResultTypeAttribute {
    version: base.VersionType;
    operation: base.ItemOperationType;
}
export interface NotificationItemVersionResultType {
    attributes: NotificationItemVersionResultTypeAttribute
    notification_id: NotificationIdType;
}

// NotificationGetNotificationVersionsRequestType
export interface NotificationGetNotificationVersionsRequestTypeAttribute {
    start: string;
    end?: string;
    module_id?: base.IDType;
}
export interface NotificationGetNotificationVersionsRequestType {
    attributes: NotificationGetNotificationVersionsRequestTypeAttribute
    notification_item?: NotificationItemVersionType | NotificationItemVersionType[];
}

// NotificationGetNotificationVersionsResponseType
export interface NotificationGetNotificationVersionsResponseType {
    
    notification_item?: NotificationItemVersionResultType | NotificationItemVersionResultType[];
}

// NotificationGetNotificationsByIdRequestType
export interface NotificationGetNotificationsByIdRequestType {
    
    notification_id: NotificationIdType | NotificationIdType[];
}

// NotificationGetNotificationsByIdResponseType
export interface NotificationGetNotificationsByIdResponseType {
    
    notification?: NotificationType | NotificationType[];
}

// NotificationGetNotificationHistoryVersionsRequestType
export interface NotificationGetNotificationHistoryVersionsRequestTypeAttribute {
    start: string;
    end?: string;
    module_id?: base.IDType;
}
export interface NotificationGetNotificationHistoryVersionsRequestType {
    attributes: NotificationGetNotificationHistoryVersionsRequestTypeAttribute
    notification_history_item?: NotificationItemVersionType | NotificationItemVersionType[];
}

// NotificationGetNotificationHistoryVersionsResponseType
export interface NotificationGetNotificationHistoryVersionsResponseType {
    
    notification_history_item?: NotificationItemVersionResultType | NotificationItemVersionResultType[];
}

// NotificationGetNotificationHistoriesByIdRequestType
export interface NotificationGetNotificationHistoriesByIdRequestType {
    
    notification_history_id: NotificationIdType | NotificationIdType[];
}

// NotificationGetNotificationHistoriesByIdResponseType
export interface NotificationGetNotificationHistoriesByIdResponseType {
    
    notification_history?: NotificationType | NotificationType[];
}

// NotificationConfirmNotificationRequestType
export interface NotificationConfirmNotificationRequestType {
    
    request_token?: string;
    notification_id: NotificationIdType | NotificationIdType[];
}

// NotificationConfirmNotificationResponseType
export interface NotificationConfirmNotificationResponseType {
    
    notification?: NotificationType | NotificationType[];
}

// NotificationPersonalProfileType
export interface NotificationPersonalProfileTypeAttribute {
    save_notification_duration?: number;
    save_notification_history_duration?: number;
}
export interface NotificationPersonalProfileType {
    attributes: NotificationPersonalProfileTypeAttribute
}

// NotificationGetProfilesRequestType
export interface NotificationGetProfilesRequestType {
    
}

// NotificationGetProfilesResponseType
export interface NotificationGetProfilesResponseType {
    
    personal_profile: NotificationPersonalProfileType;
}

// NotificationSetProfilesRequestType
export interface NotificationSetProfilesRequestType {
    
    request_token?: string;
    personal_profile: NotificationPersonalProfileType;
}

// NotificationSetProfilesResponseType
export interface NotificationSetProfilesResponseType {
    
    personal_profile: NotificationPersonalProfileType;
}

// NotificationType
export interface NotificationTypeAttribute {
    module_id: base.IDType;
    item: base.NonBlankStringType;
    status: StatusType;
    is_history: boolean;
    read_datetime?: string;
    receive_datetime?: string;
    subject?: string;
    subject_url?: string;
    subject_icon?: string;
    abstract?: string;
    abstract_url?: string;
    abstract_icon?: string;
    sender_name?: string;
    sender_id?: base.IDType;
    sender_url?: string;
    group_name?: string;
    attached?: boolean;
    version: base.VersionType;
}
export interface NotificationType {
    attributes: NotificationTypeAttribute
}

