// This file is generated from WSDL.
/* tslint:disable:max-line-length no-trailing-whitespace */

// [Import]
import * as base from "./base";

// [SimpleType]
export type FileOperationType = "create" | "update" | "rollback";
export type SearchTargetType = "received" | "send" | "draft" | "all";
export type TargetType = "form_name" | "report_name" | "create_date" | "creator" | "item_data";
export type ConditionType = "include" | "not_include" | "equal" | "not_equal" | "after" | "before" | "bigger" | "and_over" | "smaller" | "or_less";
export type ReportFolderType = "received" | "sent" | "draft" | "all";

// [ComplexType]
// ReportAddFollowType
export interface ReportAddFollowTypeAttribute {
    report_id: base.IDType;
}
export interface ReportAddFollowTypeFileAttribute {
    id: base.IDType;
}
export interface ReportAddFollowTypeFile {
    attributes: ReportAddFollowTypeFileAttribute;
    content: Buffer;
}
export interface ReportAddFollowType {
    attributes: ReportAddFollowTypeAttribute;
    request_token?: string;
    follow: FollowType;
    file?: ReportAddFollowTypeFile | ReportAddFollowTypeFile[];
}
// ReportAddFollowsRequestType
export interface ReportAddFollowsRequestType {
    
    request_token?: string;
    add_follow: ReportAddFollowType | ReportAddFollowType[];
}
// ReportAddFollowsResponseType
export interface ReportAddFollowsResponseType {
    
    report?: ReportType | ReportType[];
}
// ReportGetReportVersionsRequestType
export interface ReportGetReportVersionsRequestTypeAttribute {
    start: string;
    end?: string;
    target?: SearchTargetType;
}
export interface ReportGetReportVersionsRequestType {
    attributes: ReportGetReportVersionsRequestTypeAttribute;
    report_item?: base.ItemVersionType | base.ItemVersionType[];
}
// ReportGetReportVersionsResponseType
export interface ReportGetReportVersionsResponseType {
    
    report_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// ReportGetReportByIdRequestType
export interface ReportGetReportByIdRequestType {
    
    report_id: base.IDType | base.IDType[];
}
// ReportGetReportByIdResponseType
export interface ReportGetReportByIdResponseType {
    
    report?: ReportType | ReportType[];
}
// ReportGetFollowsRequestType
export interface ReportGetFollowsRequestTypeAttribute {
    report_id: base.IDType;
    limit: number;
    offset: number;
}
export interface ReportGetFollowsRequestType {
    attributes: ReportGetFollowsRequestTypeAttribute;
}
// ReportGetFollowsResponseType
export interface ReportGetFollowsResponseType {
    
    follows?: FollowType | FollowType[];
}
// ReportRemoveFollowsRequestType
export interface ReportRemoveFollowsRequestType {
    
    request_token?: string;
    follow_id: base.IDType | base.IDType[];
}
// ReportRemoveReportsRequestType
export interface ReportRemoveReportsRequestType {
    
    request_token?: string;
    report_id: base.IDType | base.IDType[];
}
// ReportSearchReportsRequestType
export interface ReportSearchReportsRequestTypeAttribute {
    target: SearchTargetType;
    keyword: string;
}
export interface ReportSearchReportsRequestType {
    attributes: ReportSearchReportsRequestTypeAttribute;
}
// ReportSearchReportsResponseType
export interface ReportSearchReportsResponseType {
    
    report?: ReportType | ReportType[];
}
// ReportFileDownloadRequestType
export interface ReportFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface ReportFileDownloadRequestType {
    attributes: ReportFileDownloadRequestTypeAttribute;
}
// ReportFileDownloadResponseType
export interface ReportFileDownloadResponseType {
    
    file?: base.FileBodyType;
}
// ReportType
export interface ReportTypeAttribute {
    id: base.IDType;
    subject: string;
    is_draft?: boolean;
}
export interface ReportTypeItems {
    
    item?: ItemType | ItemType[];
    files_item?: FilesItemType | FilesItemType[];
    blank_item?: void | void[];
}
export interface ReportTypeMembers {
    
    user?: UserType | UserType[];
}
export interface ReportTypeNotifyusers {
    
    user?: UserType | UserType[];
}
export interface ReportTypeMaintainers {
    
    user?: UserType | UserType[];
}
export interface ReportType {
    attributes: ReportTypeAttribute;
    items: ReportTypeItems;
    members?: ReportTypeMembers;
    notifyusers?: ReportTypeNotifyusers;
    maintainers?: ReportTypeMaintainers;
    creator?: base.ChangeLogType;
    modifier?: base.ChangeLogType;
}
// UserType
export interface UserTypeAttribute {
    id: base.NonBlankStringType;
    name: string;
}
export interface UserType {
    attributes: UserTypeAttribute;
}
// ItemType
export interface ItemTypeAttribute {
    name: base.NonBlankStringType;
    value: string;
    front?: string;
    back?: string;
}
export interface ItemType {
    attributes: ItemTypeAttribute;
}
// FilesItemType
export interface FilesItemTypeAttribute {
    name: base.NonBlankStringType;
    inline?: boolean;
}
export interface FilesItemTypeFileAttribute {
    name: base.NonBlankStringType;
    file_id: base.IDType;
    size?: number;
    mime_type?: string;
}
export interface FilesItemTypeFile {
    attributes: FilesItemTypeFileAttribute;
}
export interface FilesItemType {
    attributes: FilesItemTypeAttribute;
    file?: FilesItemTypeFile | FilesItemTypeFile[];
}
// FollowType
export interface FollowTypeAttribute {
    id: base.IDType;
    number: base.NonBlankStringType;
    text: string;
    html_text?: string;
}
export interface FollowTypeFileAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    size?: number;
    mime_type?: string;
}
export interface FollowTypeFile {
    attributes: FollowTypeFileAttribute;
}
export interface FollowType {
    attributes: FollowTypeAttribute;
    file?: FollowTypeFile | FollowTypeFile[];
    creator?: base.ChangeLogType;
}
