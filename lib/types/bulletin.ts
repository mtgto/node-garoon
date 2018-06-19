// This file is generated from WSDL.
/* tslint:disable:max-line-length no-trailing-whitespace */

// [Import]
import * as base from "./base";

// [SimpleType]

// [ComplexType]
// BulletinGetCategoryVersionsRequestType
export interface BulletinGetCategoryVersionsRequestType {
    
    category_item?: base.ItemVersionType | base.ItemVersionType[];
}
// BulletinGetCategoryVersionsResponseType
export interface BulletinGetCategoryVersionsResponseType {
    
    category_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// BulletinGetCategoriesRequestType
export interface BulletinGetCategoriesRequestType {
    
}
// BulletinGetCategoriesResponseType
export interface BulletinGetCategoriesResponseType {
    
    categories?: CategoryInformationType;
}
// BulletinGetTopicVersionsRequestType
export interface BulletinGetTopicVersionsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface BulletinGetTopicVersionsRequestType {
    attributes: BulletinGetTopicVersionsRequestTypeAttribute;
    topic_item?: base.ItemVersionType | base.ItemVersionType[];
    category_id?: base.IDType | base.IDType[];
}
// BulletinGetTopicVersionsResponseType
export interface BulletinGetTopicVersionsResponseType {
    
    topic_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// BulletinGetDraftTopicVersionsRequestType
export interface BulletinGetDraftTopicVersionsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface BulletinGetDraftTopicVersionsRequestType {
    attributes: BulletinGetDraftTopicVersionsRequestTypeAttribute;
    topic_item?: base.ItemVersionType | base.ItemVersionType[];
}
// BulletinGetDraftTopicVersionsResponseType
export interface BulletinGetDraftTopicVersionsResponseType {
    
    topic_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// BulletinGetTopicsRequestType
export interface BulletinGetTopicsRequestType {
    
    category_id: base.IDType | base.IDType[];
}
// BulletinGetTopicsResponseType
export interface BulletinGetTopicsResponseType {
    
    category?: TopicsList | TopicsList[];
}
// BulletinGetTopicByIdsRequestType
export interface BulletinGetTopicByIdsRequestTypeTopicsAttribute {
    topic_id: base.IDType;
    is_draft: boolean;
}
export interface BulletinGetTopicByIdsRequestTypeTopics {
    attributes: BulletinGetTopicByIdsRequestTypeTopicsAttribute;
}
export interface BulletinGetTopicByIdsRequestType {
    
    topics?: BulletinGetTopicByIdsRequestTypeTopics | BulletinGetTopicByIdsRequestTypeTopics[];
}
// BulletinGetTopicByIdsResponseType
export interface BulletinGetTopicByIdsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinFileDownloadRequestType
export interface BulletinFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface BulletinFileDownloadRequestType {
    attributes: BulletinFileDownloadRequestTypeAttribute;
}
// BulletinFileDownloadResponseType
export interface BulletinFileDownloadResponseType {
    
    file?: base.FileBodyType;
}
// BulletinCreateTopicType
export interface BulletinCreateTopicTypeAttribute {
    draft_id?: base.IDType;
}
export interface BulletinCreateTopicTypeFileAttribute {
    id: base.IDType;
}
export interface BulletinCreateTopicTypeFile {
    attributes: BulletinCreateTopicTypeFileAttribute;
    content: Buffer;
}
export interface BulletinCreateTopicType {
    attributes: BulletinCreateTopicTypeAttribute;
    topic: TopicType;
    file?: BulletinCreateTopicTypeFile | BulletinCreateTopicTypeFile[];
    remove_file_id?: base.IDType | base.IDType[];
}
// BulletinModifyTopicType
export interface BulletinModifyTopicTypeFileAttribute {
    id: base.IDType;
}
export interface BulletinModifyTopicTypeFile {
    attributes: BulletinModifyTopicTypeFileAttribute;
    content: Buffer;
}
export interface BulletinModifyTopicType {
    
    topic: TopicType;
    file?: BulletinModifyTopicTypeFile | BulletinModifyTopicTypeFile[];
    remove_file_id?: base.IDType | base.IDType[];
}
// BulletinCreateTopicsRequestType
export interface BulletinCreateTopicsRequestType {
    
    request_token?: string;
    create_topic: BulletinCreateTopicType | BulletinCreateTopicType[];
}
// BulletinCreateTopicsResponseType
export interface BulletinCreateTopicsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinModifyTopicsRequestType
export interface BulletinModifyTopicsRequestType {
    
    request_token?: string;
    modify_topic: BulletinModifyTopicType | BulletinModifyTopicType[];
}
// BulletinModifyTopicsResponseType
export interface BulletinModifyTopicsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinSaveDraftTopicsRequestType
export interface BulletinSaveDraftTopicsRequestType {
    
    request_token?: string;
    save_draft_topic: BulletinCreateTopicType | BulletinCreateTopicType[];
}
// BulletinSaveDraftTopicsResponseType
export interface BulletinSaveDraftTopicsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinRemoveTopicsRequestType
export interface BulletinRemoveTopicsRequestTypeTopicsAttribute {
    topic_id: base.IDType;
    is_draft: boolean;
}
export interface BulletinRemoveTopicsRequestTypeTopics {
    attributes: BulletinRemoveTopicsRequestTypeTopicsAttribute;
}
export interface BulletinRemoveTopicsRequestType {
    
    request_token?: string;
    topics?: BulletinRemoveTopicsRequestTypeTopics | BulletinRemoveTopicsRequestTypeTopics[];
}
// BulletinSearchTopicsRequestType
export interface BulletinSearchTopicsRequestTypeAttribute {
    text: string;
    sensitive?: boolean;
    start: string;
    end?: string;
    category_id: base.IDType;
    search_sub_categories: boolean;
    title_search: boolean;
    body_search: boolean;
    from_search: boolean;
    follow_search: boolean;
}
export interface BulletinSearchTopicsRequestType {
    attributes: BulletinSearchTopicsRequestTypeAttribute;
}
// BulletinSearchTopicsResponseType
export interface BulletinSearchTopicsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinGetFollowsRequestType
export interface BulletinGetFollowsRequestTypeAttribute {
    topic_id: base.IDType;
    offset: number;
    limit: number;
}
export interface BulletinGetFollowsRequestType {
    attributes: BulletinGetFollowsRequestTypeAttribute;
}
// BulletinGetFollowsResponseType
export interface BulletinGetFollowsResponseType {
    
    follow?: FollowType | FollowType[];
}
// BulletinAddFollowType
export interface BulletinAddFollowTypeAttribute {
    topic_id: base.IDType;
}
export interface BulletinAddFollowTypeFileAttribute {
    id: base.IDType;
}
export interface BulletinAddFollowTypeFile {
    attributes: BulletinAddFollowTypeFileAttribute;
    content: Buffer;
}
export interface BulletinAddFollowType {
    attributes: BulletinAddFollowTypeAttribute;
    follow: FollowType;
    file?: BulletinAddFollowTypeFile | BulletinAddFollowTypeFile[];
}
// BulletinAddFollowsRequestType
export interface BulletinAddFollowsRequestType {
    
    request_token?: string;
    add_follow: BulletinAddFollowType | BulletinAddFollowType[];
}
// BulletinAddFollowsResponseType
export interface BulletinAddFollowsResponseType {
    
    topic?: TopicType | TopicType[];
}
// BulletinRemoveFollowsRequestType
export interface BulletinRemoveFollowsRequestType {
    
    request_token?: string;
    follow_id: base.IDType | base.IDType[];
}
// CategoryInformationType
export interface CategoryInformationType {
    
    root: CategoryType;
}
// CategoryType
export interface CategoryTypeAttribute {
    id: base.IDType;
    code: string;
    list_index: number;
}
export interface CategoryType {
    attributes: CategoryTypeAttribute;
    name: string;
    description: string;
    creator_id: string;
    creator_login_name: string;
    creator_display_name: string;
    create_time: string;
    modifier_id: string;
    modifier_login_name: string;
    modifier_display_name: string;
    modify_time: string;
    categories?: CategoriesType;
}
// CategoriesType
export interface CategoriesTypeAttribute {
    parent_id: base.IDType;
    parent_code: string;
}
export interface CategoriesType {
    attributes: CategoriesTypeAttribute;
    category?: CategoryType | CategoryType[];
}
// TopicsList
export interface TopicsListAttribute {
    category_id: base.IDType;
}
export interface TopicsListTopicAttribute {
    id: base.IDType;
}
export interface TopicsListTopic {
    attributes: TopicsListTopicAttribute;
}
export interface TopicsList {
    attributes: TopicsListAttribute;
    topic?: TopicsListTopic | TopicsListTopic[];
}
// TopicType
export interface TopicTypeAttribute {
    id: base.IDType;
    creator_group_id?: base.IDType;
    version: base.VersionType;
    subject: string;
    is_draft?: boolean;
    start_datetime?: string;
    end_datetime?: string;
    start_is_datetime?: boolean;
    end_is_datetime?: boolean;
    can_follow: boolean;
    published?: boolean;
    unread?: boolean;
    expired?: boolean;
    category_id: base.IDType;
}
export interface TopicTypeContentAttribute {
    body: string;
    html_body?: string;
}
export interface TopicTypeContent {
    attributes: TopicTypeContentAttribute;
    file?: TopicTypeContentFile | TopicTypeContentFile[];
}
export interface TopicTypeContentFileAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    size?: number;
    mime_type?: string;
}
export interface TopicTypeContentFile {
    attributes: TopicTypeContentFileAttribute;
}
export interface TopicTypeFollowAttribute {
    id: base.IDType;
    number: base.NonBlankStringType;
}
export interface TopicTypeFollow {
    attributes: TopicTypeFollowAttribute;
}
export interface TopicType {
    attributes: TopicTypeAttribute;
    content: TopicTypeContent;
    follow?: TopicTypeFollow | TopicTypeFollow[];
    creator?: base.ChangeLogType;
    modifier?: base.ChangeLogType;
}
// FollowsList
export interface FollowsListAttribute {
    topic_id: base.IDType;
}
export interface FollowsListFollowAttribute {
    id: base.IDType;
    number: base.NonBlankStringType;
}
export interface FollowsListFollow {
    attributes: FollowsListFollowAttribute;
}
export interface FollowsList {
    attributes: FollowsListAttribute;
    follow?: FollowsListFollow | FollowsListFollow[];
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
