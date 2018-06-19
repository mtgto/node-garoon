// This file is generated from WSDL.
/* tslint:disable:max-line-length no-trailing-whitespace */

// [Import]
import * as base from "./base";

// [SimpleType]
export type WorkflowFolderType = "unprocessed" | "sent" | "received" | "draft" | "finish";
export type WorkflowStatusType = "unprocessing" | "inprogress" | "sent_back" | "approved" | "rejected" | "withdrawn" | "cancelled" | "completed";
export type WorkflowGetManageRequestFilter = "All" | "In progress" | "Approved" | "Rejected" | "Cancel" | "Complete";
export type StatusType = string;
export type ApproverType = string | base.IDType;
export type StepTypeType = string;
export type StepStatusType = string;

// [ComplexType]
// WorkflowApplicationType
export interface WorkflowApplicationTypeAttribute extends ApplicationTypeAttribute {
    status_type: WorkflowStatusType;
}
export interface WorkflowApplicationType extends ApplicationType {
    attributes: WorkflowApplicationTypeAttribute;
    folder_type?: WorkflowFolderType | WorkflowFolderType[];
}
// WorkflowAvailabilityUserType
export interface WorkflowAvailabilityUserTypeAttribute {
    id: base.IDType;
    workflow: boolean;
    keitai: boolean;
}
export interface WorkflowAvailabilityUserType {
    attributes: WorkflowAvailabilityUserTypeAttribute;
}
// WorkflowGetRequestType
export interface WorkflowGetRequestTypeAttribute {
    request_form_id: base.IDType;
    filter?: WorkflowGetManageRequestFilter;
    start_request_date?: string;
    end_request_date?: string;
    start_approval_date?: string;
    end_approval_date?: string;
    applicant?: base.IDType;
    last_approval?: base.IDType;
    start_to_get_information_from?: base.IDType;
    maximum_request_amount_to_get?: string;
}
export interface WorkflowGetRequestType {
    attributes: WorkflowGetRequestTypeAttribute;
}
// WorkflowGetAttachedFileBodyType
export interface WorkflowGetAttachedFileBodyTypeAttribute {
    request_form_id: base.IDType;
    file_id: base.IDType;
}
export interface WorkflowGetAttachedFileBodyType {
    attributes: WorkflowGetAttachedFileBodyTypeAttribute;
}
// WorkflowGetUnprocessedApplicationVersionsRequestType
export interface WorkflowGetUnprocessedApplicationVersionsRequestType {
    
    application_item?: base.ItemVersionType | base.ItemVersionType[];
}
// WorkflowGetUnprocessedApplicationVersionsResponseType
export interface WorkflowGetUnprocessedApplicationVersionsResponseType {
    
    application_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// WorkflowGetUnprocessedApplicationsByIdRequestType
export interface WorkflowGetUnprocessedApplicationsByIdRequestType {
    
    application_id: base.IDType | base.IDType[];
}
// WorkflowGetUnprocessedApplicationsByIdResponseType
export interface WorkflowGetUnprocessedApplicationsByIdResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetSentApplicationVersionsRequestType
export interface WorkflowGetSentApplicationVersionsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface WorkflowGetSentApplicationVersionsRequestType {
    attributes: WorkflowGetSentApplicationVersionsRequestTypeAttribute;
    application_item?: base.ItemVersionType | base.ItemVersionType[];
}
// WorkflowGetSentApplicationVersionsResponseType
export interface WorkflowGetSentApplicationVersionsResponseType {
    
    application_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// WorkflowGetSentApplicationsByIdRequestType
export interface WorkflowGetSentApplicationsByIdRequestType {
    
    application_id: base.IDType | base.IDType[];
}
// WorkflowGetSentApplicationsByIdResponseType
export interface WorkflowGetSentApplicationsByIdResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetReceivedApplicationVersionsRequestType
export interface WorkflowGetReceivedApplicationVersionsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface WorkflowGetReceivedApplicationVersionsRequestType {
    attributes: WorkflowGetReceivedApplicationVersionsRequestTypeAttribute;
    application_item?: base.ItemVersionType | base.ItemVersionType[];
}
// WorkflowGetReceivedApplicationVersionsResponseType
export interface WorkflowGetReceivedApplicationVersionsResponseType {
    
    application_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// WorkflowGetReceivedApplicationsByIdRequestType
export interface WorkflowGetReceivedApplicationsByIdRequestType {
    
    application_id: base.IDType | base.IDType[];
}
// WorkflowGetReceivedApplicationsByIdResponseType
export interface WorkflowGetReceivedApplicationsByIdResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetApprovalDelegatorsRequestType
export interface WorkflowGetApprovalDelegatorsRequestType {
    
}
// WorkflowGetApprovalDelegatorsResponseType
export interface WorkflowGetApprovalDelegatorsResponseType {
    
    delegator_id?: base.IDType | base.IDType[];
}
// WorkflowGetProxyApprovalsByDelegatorIdRequestType
export interface WorkflowGetProxyApprovalsByDelegatorIdRequestTypeAttribute {
    delegator_id: base.IDType;
    start: string;
    end?: string;
}
export interface WorkflowGetProxyApprovalsByDelegatorIdRequestType {
    attributes: WorkflowGetProxyApprovalsByDelegatorIdRequestTypeAttribute;
}
// WorkflowGetProxyApprovalsByDelegatorIdResponseType
export interface WorkflowGetProxyApprovalsByDelegatorIdResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetPendingApprovalsRequestType
export interface WorkflowGetPendingApprovalsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface WorkflowGetPendingApprovalsRequestType {
    attributes: WorkflowGetPendingApprovalsRequestTypeAttribute;
}
// WorkflowGetPendingApprovalsResponseType
export interface WorkflowGetPendingApprovalsResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowHandleApplicationOperationType
export interface WorkflowHandleApplicationOperationTypeAttribute {
    application_id: base.IDType;
    delegator_id?: base.IDType;
    comment?: string;
}
export interface WorkflowHandleApplicationOperationType {
    attributes: WorkflowHandleApplicationOperationTypeAttribute;
    operation: OperationType;
}
// WorkflowHandleApplicationsRequestType
export interface WorkflowHandleApplicationsRequestType {
    
    request_token?: string;
    handle: WorkflowHandleApplicationOperationType | WorkflowHandleApplicationOperationType[];
}
// WorkflowHandleApplicationsResponseType
export interface WorkflowHandleApplicationsResponseType {
    
    application?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetProxiesRequestType
export interface WorkflowGetProxiesRequestType {
    
}
// WorkflowGetProxiesResponseType
export interface WorkflowGetProxiesResponseTypeProxies {
    
    user_proxy?: WorkflowGetProxiesResponseTypeProxiesUserProxy | WorkflowGetProxiesResponseTypeProxiesUserProxy[];
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxyAttribute {
    user_id: base.IDType;
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxy {
    attributes: WorkflowGetProxiesResponseTypeProxiesUserProxyAttribute;
    proxy_approver?: WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApprover | WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApprover[];
    proxy_applicant?: WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApplicant | WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApplicant[];
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApproverAttribute {
    approver_id: base.IDType;
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApprover {
    attributes: WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApproverAttribute;
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApplicantAttribute {
    applicant_id: base.IDType;
}
export interface WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApplicant {
    attributes: WorkflowGetProxiesResponseTypeProxiesUserProxyProxyApplicantAttribute;
}
export interface WorkflowGetProxiesResponseType {
    
    proxies?: WorkflowGetProxiesResponseTypeProxies;
}
// WorkflowSetProxiesRequestType
export interface WorkflowSetProxiesRequestTypeProxies {
    
    user_proxy?: WorkflowSetProxiesRequestTypeProxiesUserProxy | WorkflowSetProxiesRequestTypeProxiesUserProxy[];
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxyAttribute {
    user_id: base.IDType;
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxy {
    attributes: WorkflowSetProxiesRequestTypeProxiesUserProxyAttribute;
    proxy_approver?: WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApprover | WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApprover[];
    proxy_applicant?: WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApplicant | WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApplicant[];
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApproverAttribute {
    approver_id: base.IDType;
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApprover {
    attributes: WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApproverAttribute;
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApplicantAttribute {
    applicant_id: base.IDType;
}
export interface WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApplicant {
    attributes: WorkflowSetProxiesRequestTypeProxiesUserProxyProxyApplicantAttribute;
}
export interface WorkflowSetProxiesRequestType {
    
    request_token?: string;
    proxies?: WorkflowSetProxiesRequestTypeProxies;
}
// WorkflowSetProxiesResponseType
export interface WorkflowSetProxiesResponseTypeProxies {
    
    user_proxy?: WorkflowSetProxiesResponseTypeProxiesUserProxy | WorkflowSetProxiesResponseTypeProxiesUserProxy[];
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxyAttribute {
    user_id: base.IDType;
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxy {
    attributes: WorkflowSetProxiesResponseTypeProxiesUserProxyAttribute;
    proxy_approver?: WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApprover | WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApprover[];
    proxy_applicant?: WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApplicant | WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApplicant[];
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApproverAttribute {
    approver_id: base.IDType;
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApprover {
    attributes: WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApproverAttribute;
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApplicantAttribute {
    applicant_id: base.IDType;
}
export interface WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApplicant {
    attributes: WorkflowSetProxiesResponseTypeProxiesUserProxyProxyApplicantAttribute;
}
export interface WorkflowSetProxiesResponseType {
    
    proxies?: WorkflowSetProxiesResponseTypeProxies;
}
// WorkflowGetProfilesRequestType
export interface WorkflowGetProfilesRequestType {
    
}
// WorkflowGetProfilesResponseType
export interface WorkflowGetProfilesResponseTypeAttribute {
    use_pending_approvals: boolean;
    use_proxy_approvals: boolean;
    modify_proxies: boolean;
}
export interface WorkflowGetProfilesResponseType {
    attributes: WorkflowGetProfilesResponseTypeAttribute;
}
// WorkflowFileDownloadRequestType
export interface WorkflowFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface WorkflowFileDownloadRequestType {
    attributes: WorkflowFileDownloadRequestTypeAttribute;
}
// WorkflowFileDownloadResponseType
export interface WorkflowFileDownloadResponseType {
    
    file?: base.FileBodyType;
}
// WorkflowGetRequestsRequestType
export interface WorkflowGetRequestsRequestType {
    
    manage_request_parameter?: WorkflowGetRequestType;
}
// WorkflowGetRequestsResponseType
export interface WorkflowGetRequestsResponseType {
    
    category?: RequestManageFormType | RequestManageFormType[];
}
// WorkflowGetRequestByIdRequestType
export interface WorkflowGetRequestByIdRequestType {
    
    request_id: base.IDType | base.IDType[];
}
// WorkflowGetRequestByIdResponseType
export interface WorkflowGetRequestByIdResponseType {
    
    subject?: WorkflowApplicationType | WorkflowApplicationType[];
}
// WorkflowGetAvailabilityUsersRequestType
export interface WorkflowGetAvailabilityUsersRequestType {
    
    user_id: base.IDType | base.IDType[];
}
// WorkflowGetAvailabilityUsersResponseType
export interface WorkflowGetAvailabilityUsersResponseType {
    
    user: WorkflowAvailabilityUserType | WorkflowAvailabilityUserType[];
}
// WorkflowGetAttachedFileBodyRequestType
export interface WorkflowGetAttachedFileBodyRequestType {
    
    parameter: WorkflowGetAttachedFileBodyType | WorkflowGetAttachedFileBodyType[];
}
// WorkflowGetAttachedFileBodyResponseType
export interface WorkflowGetAttachedFileBodyResponseType {
    
    attachment_details: FileAttachedDetail | FileAttachedDetail[];
}
// WorkflowGetListCategoryRequestType
export interface WorkflowGetListCategoryRequestType {
    
}
// WorkflowGetListCategoryResponseType
export interface WorkflowGetListCategoryResponseType {
    
    root: CategoriesType | CategoriesType[];
}
// WorkflowGetRequestFormByCategoryIdsRequestType
export interface WorkflowGetRequestFormByCategoryIdsRequestType {
    
    category_id: base.IDType | base.IDType[];
}
// WorkflowGetRequestFormByCategoryIdsResponseType
export interface WorkflowGetRequestFormByCategoryIdsResponseType {
    
    category: RequestFormType | RequestFormType[];
}
// ApplicationType
export interface ApplicationTypeAttribute {
    id: base.IDType;
    version: base.VersionType;
    status: StatusType;
    name?: string;
    number?: base.NonBlankStringType;
    date: string;
    processing_step: base.IDType;
    urgent?: boolean;
}
export interface ApplicationTypeApplicantAttribute {
    id?: base.IDType;
    name: base.NonBlankStringType;
}
export interface ApplicationTypeApplicant {
    attributes: ApplicationTypeApplicantAttribute;
    proxy?: ApplicationTypeApplicantProxy;
}
export interface ApplicationTypeApplicantProxyAttribute {
    id?: base.IDType;
    name: base.NonBlankStringType;
}
export interface ApplicationTypeApplicantProxy {
    attributes: ApplicationTypeApplicantProxyAttribute;
}
export interface ApplicationTypeItems {
    
    item?: ItemType | ItemType[];
    files_item?: FilesItemType | FilesItemType[];
    blank_item?: void | void[];
}
export interface ApplicationTypeSteps {
    
    step: ApplicationTypeStepsStep | ApplicationTypeStepsStep[];
}
export interface ApplicationTypeStepsStepAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    type: StepTypeType;
    is_approval_step?: base.NonBlankStringType;
}
export interface ApplicationTypeStepsStep {
    attributes: ApplicationTypeStepsStepAttribute;
    processor: ApplicationTypeStepsStepProcessor | ApplicationTypeStepsStepProcessor[];
}
export interface ApplicationTypeStepsStepProcessorAttribute {
    id?: base.IDType;
    processor_name: string;
    date?: string;
    comment?: string;
    result?: base.NonBlankStringType;
}
export interface ApplicationTypeStepsStepProcessor {
    attributes: ApplicationTypeStepsStepProcessorAttribute;
    proxy?: ApplicationTypeStepsStepProcessorProxy;
}
export interface ApplicationTypeStepsStepProcessorProxyAttribute {
    id?: base.IDType;
    processor_name: string;
}
export interface ApplicationTypeStepsStepProcessorProxy {
    attributes: ApplicationTypeStepsStepProcessorProxyAttribute;
}
export interface ApplicationTypeFolderAttribute {
    id: base.IDType;
}
export interface ApplicationTypeFolder {
    attributes: ApplicationTypeFolderAttribute;
}
export interface ApplicationType {
    attributes: ApplicationTypeAttribute;
    applicant: ApplicationTypeApplicant;
    items: ApplicationTypeItems;
    steps: ApplicationTypeSteps;
    operation?: OperationType | OperationType[];
    folder?: ApplicationTypeFolder | ApplicationTypeFolder[];
}
// FolderType
export interface FolderTypeAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
}
export interface FolderTypeApplicationAttribute {
    id: base.IDType;
}
export interface FolderTypeApplication {
    attributes: FolderTypeApplicationAttribute;
}
export interface FolderType {
    attributes: FolderTypeAttribute;
    application?: FolderTypeApplication | FolderTypeApplication[];
}
// OperationType
export interface OperationTypeSentBack {
    
    applicant?: void;
    step?: OperationTypeSentBackStep;
}
export interface OperationTypeSentBackStepAttribute {
    step_id: base.IDType;
}
export interface OperationTypeSentBackStep {
    attributes: OperationTypeSentBackStepAttribute;
}
export interface OperationType {
    
    sent_back?: OperationTypeSentBack;
    approve?: void;
    reject?: void;
    withdraw?: void;
    cancel?: void;
    confirm?: void;
    acknowledge?: void;
}
// ItemType
export interface ItemTypeAttribute {
    name: base.NonBlankStringType;
    value: string;
    right_align?: boolean;
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
// RequestManageFormType
export interface RequestManageFormTypeAttribute {
    id_category?: base.IDType;
    name_category?: string;
}
export interface RequestManageFormTypeManageRequestFormAttribute {
    id_request_form?: base.IDType;
    name_request_form?: string;
}
export interface RequestManageFormTypeManageRequestForm {
    attributes: RequestManageFormTypeManageRequestFormAttribute;
    manage_item_detail?: RequestManageFormTypeManageRequestFormManageItemDetail;
}
export interface RequestManageFormTypeManageRequestFormManageItemDetailAttribute {
    pid: base.IDType;
    number: base.IDType;
    priority: string;
    subject: string;
    status: StatusType;
    applicant: base.IDType;
    last_approver: ApproverType;
    request_date: string;
}
export interface RequestManageFormTypeManageRequestFormManageItemDetail {
    attributes: RequestManageFormTypeManageRequestFormManageItemDetailAttribute;
}
export interface RequestManageFormType {
    attributes: RequestManageFormTypeAttribute;
    manage_request_form?: RequestManageFormTypeManageRequestForm;
}
// CategoriesType
export interface CategoriesTypeAttribute {
    id: base.IDType;
    code: base.NonBlankStringType;
    name: base.NonBlankStringType;
    parent_category?: base.IDType;
    memo?: base.NonBlankStringType;
    create_time?: base.IDType;
    modify_time?: base.IDType;
}
export interface CategoriesType {
    attributes: CategoriesTypeAttribute;
    child_category: CategoryType;
}
// CategoryType
export interface CategoryTypeAttribute {
    id: base.IDType;
    code: base.NonBlankStringType;
    name: base.NonBlankStringType;
    parent_category?: base.IDType;
    memo?: base.NonBlankStringType;
    create_time?: base.IDType;
    modify_time?: base.IDType;
}
export interface CategoryType {
    attributes: CategoryTypeAttribute;
    child_category?: ChildCategoriesType;
}
// ChildCategoriesType
export interface ChildCategoriesTypeAttribute {
    id: base.IDType;
    code: base.NonBlankStringType;
    name: base.NonBlankStringType;
    parent_category?: base.IDType;
    memo?: base.NonBlankStringType;
    create_time?: base.IDType;
    modify_time?: base.IDType;
}
export interface ChildCategoriesType {
    attributes: ChildCategoriesTypeAttribute;
    child_category?: CategoryType | CategoryType[];
}
// RequestFormType
export interface RequestFormTypeAttribute {
    category_id: base.IDType;
}
export interface RequestFormTypeRequestFormAttribute {
    fid: base.IDType;
    type: base.NonBlankStringType;
    name: base.NonBlankStringType;
    active?: base.IDType;
    icon_type?: base.NonBlankStringType;
    icon_id?: base.IDType;
    icon_url?: base.IDType;
}
export interface RequestFormTypeRequestForm {
    attributes: RequestFormTypeRequestFormAttribute;
}
export interface RequestFormType {
    attributes: RequestFormTypeAttribute;
    requestForm: RequestFormTypeRequestForm | RequestFormTypeRequestForm[];
}
// FileAttachedDetail
export interface FileAttachedDetailFileHeaderAttribute {
    file_id: base.IDType;
    request_form_id: base.IDType;
    name: base.NonBlankStringType;
    size: base.NonBlankStringType;
}
export interface FileAttachedDetailFileHeader {
    attributes: FileAttachedDetailFileHeaderAttribute;
}
export interface FileAttachedDetailFileInformationAttribute {
    subject: base.NonBlankStringType;
    versioning: base.NonBlankStringType;
    create_time?: base.IDType;
    modyfy_time?: base.IDType;
    description?: base.NonBlankStringType;
}
export interface FileAttachedDetailFileInformation {
    attributes: FileAttachedDetailFileInformationAttribute;
}
export interface FileAttachedDetail {
    
    file_header: FileAttachedDetailFileHeader;
    file_information: FileAttachedDetailFileInformation;
}
