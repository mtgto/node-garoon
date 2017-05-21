// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type MessageFolderTypeType = "root" | "received" | "sent" | "draft" | "trash" | "user_folder";
export type MessageConfirmActionType = "Auto" | "Manual";
export type FileOperationType = "create" | "update" | "rollback";

// [ComplexType]
// MessageGetFolderVersionsRequestType
export interface MessageGetFolderVersionsRequestType {
    
    folder_item?: base.ItemVersionType | base.ItemVersionType[];
}

// MessageGetFolderVersionsResponseType
export interface MessageGetFolderVersionsResponseType {
    
    folder_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// MessageRemoveThreadType
export interface MessageRemoveThreadTypeAttribute {
    folder_id: base.IDType;
    thread_id: base.IDType;
}
export interface MessageRemoveThreadType {
    $attributes: MessageRemoveThreadTypeAttribute
}

// MessageFolderType
export interface MessageFolderTypeAttribute extends FolderTypeAttribute {
    folder_type: MessageFolderTypeType;
}
export interface MessageFolderType extends FolderType {
    $attributes: MessageFolderTypeAttribute
}

// MessageGetFoldersByIdRequestType
export interface MessageGetFoldersByIdRequestType {
    
    folder_id: base.IDType | base.IDType[];
}

// MessageGetFoldersByIdResponseType
export interface MessageGetFoldersByIdResponseType {
    
    folder?: MessageFolderType | MessageFolderType[];
}

// MessageGetThreadVersionsRequestType
export interface MessageGetThreadVersionsRequestTypeAttribute {
    start: string;
    end?: string;
}
export interface MessageGetThreadVersionsRequestType {
    $attributes: MessageGetThreadVersionsRequestTypeAttribute
    thread_item?: base.ItemVersionType | base.ItemVersionType[];
    folder_id?: base.IDType | base.IDType[];
}

// MessageGetThreadVersionsResponseType
export interface MessageGetThreadVersionsResponseType {
    
    thread_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// MessageGetThreadsByIdRequestType
export interface MessageGetThreadsByIdRequestType {
    
    thread_id: base.IDType | base.IDType[];
}

// MessageGetThreadsByIdResponseType
export interface MessageGetThreadsByIdResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageCreateThreadType
export interface MessageCreateThreadTypeAttribute {
    draft_id?: base.IDType;
}
export interface MessageCreateThreadTypeFileAttribute {
    id: base.IDType;
}
export interface MessageCreateThreadTypeFile {
    $attributes: MessageCreateThreadTypeFileAttribute
    content: Buffer;
}
export interface MessageCreateThreadType {
    $attributes: MessageCreateThreadTypeAttribute
    thread: ThreadType;
    file?: MessageCreateThreadTypeFile | MessageCreateThreadTypeFile[];
    remove_file_id?: base.IDType | base.IDType[];
}

// MessageCreateThreadsRequestType
export interface MessageCreateThreadsRequestType {
    
    request_token?: string;
    create_thread: MessageCreateThreadType | MessageCreateThreadType[];
}

// MessageCreateThreadsResponseType
export interface MessageCreateThreadsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageModifyThreadsRequestType
export interface MessageModifyThreadsRequestType {
    
    request_token?: string;
    modify_thread: MessageCreateThreadType | MessageCreateThreadType[];
}

// MessageModifyThreadsResponseType
export interface MessageModifyThreadsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageSaveDraftThreadsRequestType
export interface MessageSaveDraftThreadsRequestType {
    
    request_token?: string;
    save_draft_thread: MessageCreateThreadType | MessageCreateThreadType[];
}

// MessageSaveDraftThreadsResponseType
export interface MessageSaveDraftThreadsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageRemoveThreadsRequestType
export interface MessageRemoveThreadsRequestTypeAttribute {
    delete_all_inbox?: boolean;
}
export interface MessageRemoveThreadsRequestType {
    $attributes: MessageRemoveThreadsRequestTypeAttribute
    request_token?: string;
    param: MessageRemoveThreadType | MessageRemoveThreadType[];
}

// MessageConfirmThreadsRequestType
export interface MessageConfirmThreadsRequestType {
    
    request_token?: string;
    thread_id: base.IDType | base.IDType[];
}

// MessageConfirmThreadsResponseType
export interface MessageConfirmThreadsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageSearchThreadsRequestType
export interface MessageSearchThreadsRequestTypeAttribute {
    text: string;
    start?: string;
    end?: string;
    folder_id?: base.IDType;
    search_sub_folders?: boolean;
    title_search: boolean;
    body_search: boolean;
    from_search: boolean;
    addressee_search: boolean;
    follow_search: boolean;
}
export interface MessageSearchThreadsRequestType {
    $attributes: MessageSearchThreadsRequestTypeAttribute
}

// MessageSearchThreadsResponseType
export interface MessageSearchThreadsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageGetFollowsRequestType
export interface MessageGetFollowsRequestTypeAttribute {
    thread_id: base.IDType;
    offset: number;
    limit: number;
}
export interface MessageGetFollowsRequestType {
    $attributes: MessageGetFollowsRequestTypeAttribute
}

// MessageGetFollowsResponseType
export interface MessageGetFollowsResponseType {
    
    follow?: FollowType | FollowType[];
}

// MessageAddFollowType
export interface MessageAddFollowTypeAttribute {
    thread_id: base.IDType;
}
export interface MessageAddFollowTypeFileAttribute {
    id: base.IDType;
}
export interface MessageAddFollowTypeFile {
    $attributes: MessageAddFollowTypeFileAttribute
    content: Buffer;
}
export interface MessageAddFollowType {
    $attributes: MessageAddFollowTypeAttribute
    follow: FollowType;
    file?: MessageAddFollowTypeFile | MessageAddFollowTypeFile[];
}

// MessageAddFollowsRequestType
export interface MessageAddFollowsRequestType {
    
    request_token?: string;
    add_follow: MessageAddFollowType | MessageAddFollowType[];
}

// MessageAddFollowsResponseType
export interface MessageAddFollowsResponseType {
    
    thread?: ThreadType | ThreadType[];
}

// MessageRemoveFollowsRequestType
export interface MessageRemoveFollowsRequestType {
    
    request_token?: string;
    follow_id: base.IDType | base.IDType[];
}

// MessagePersonalProfileType
export interface MessagePersonalProfileTypeAttribute {
    use_trash?: boolean;
    trash_duration?: number;
}
export interface MessagePersonalProfileType {
    $attributes: MessagePersonalProfileTypeAttribute
}

// MessageSystemProfileType
export interface MessageSystemProfileTypeAttribute {
    check_send_confirm?: boolean;
    confirm_action?: MessageConfirmActionType;
}
export interface MessageSystemProfileType {
    $attributes: MessageSystemProfileTypeAttribute
}

// MessageGetProfilesRequestType
export interface MessageGetProfilesRequestTypeAttribute {
    include_system_profile?: boolean;
}
export interface MessageGetProfilesRequestType {
    $attributes: MessageGetProfilesRequestTypeAttribute
}

// MessageGetProfilesResponseType
export interface MessageGetProfilesResponseType {
    
    personal_profile: MessagePersonalProfileType;
    system_profile?: MessageSystemProfileType;
}

// MessageSetProfilesRequestType
export interface MessageSetProfilesRequestType {
    
    request_token?: string;
    personal_profile: MessagePersonalProfileType;
}

// MessageSetProfilesResponseType
export interface MessageSetProfilesResponseType {
    
    personal_profile: MessagePersonalProfileType;
}

// MessageFileDownloadRequestType
export interface MessageFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface MessageFileDownloadRequestType {
    $attributes: MessageFileDownloadRequestTypeAttribute
}

// MessageFileDownloadResponseType
export interface MessageFileDownloadResponseType {
    
    file?: base.FileBodyType;
}

// ThreadType
export interface ThreadTypeAttribute {
    id: base.IDType;
    version: base.VersionType;
    subject: string;
    confirm: boolean;
    snapshot?: string;
    is_draft?: boolean;
}
export interface ThreadTypeAddresseeAttribute {
    user_id?: base.IDType;
    name: base.NonBlankStringType;
    deleted: boolean;
    confirmed?: boolean;
}
export interface ThreadTypeAddressee {
    $attributes: ThreadTypeAddresseeAttribute
}
export interface ThreadTypeContentAttribute {
    body: string;
    html_body?: string;
}
export interface ThreadTypeContent {
    $attributes: ThreadTypeContentAttribute
    file?: ThreadTypeContentFile | ThreadTypeContentFile[];
}
export interface ThreadTypeContentFileAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    size?: number;
    mime_type?: string;
}
export interface ThreadTypeContentFile {
    $attributes: ThreadTypeContentFileAttribute
}
export interface ThreadTypeFollowAttribute {
    id: base.IDType;
    number: base.NonBlankStringType;
}
export interface ThreadTypeFollow {
    $attributes: ThreadTypeFollowAttribute
}
export interface ThreadTypeFolderAttribute {
    id: base.IDType;
}
export interface ThreadTypeFolder {
    $attributes: ThreadTypeFolderAttribute
}
export interface ThreadType {
    $attributes: ThreadTypeAttribute
    addressee?: ThreadTypeAddressee | ThreadTypeAddressee[];
    content: ThreadTypeContent;
    follow?: ThreadTypeFollow | ThreadTypeFollow[];
    folder: ThreadTypeFolder | ThreadTypeFolder[];
    creator?: base.ChangeLogType;
    modifier?: base.ChangeLogType;
}

// FolderType
export interface FolderTypeAttribute {
    id: base.IDType;
    version: base.VersionType;
    name: base.NonBlankStringType;
    description?: string;
    order?: number;
    parent_folder_id?: base.IDType;
}
export interface FolderTypeFolderAttribute {
    id: base.IDType;
}
export interface FolderTypeFolder {
    $attributes: FolderTypeFolderAttribute
}
export interface FolderTypeThreadAttribute {
    id: base.IDType;
}
export interface FolderTypeThread {
    $attributes: FolderTypeThreadAttribute
}
export interface FolderType {
    $attributes: FolderTypeAttribute
    folder?: FolderTypeFolder | FolderTypeFolder[];
    thread?: FolderTypeThread | FolderTypeThread[];
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
    $attributes: FollowTypeFileAttribute
}
export interface FollowType {
    $attributes: FollowTypeAttribute
    file?: FollowTypeFile | FollowTypeFile[];
    creator?: base.ChangeLogType;
}

