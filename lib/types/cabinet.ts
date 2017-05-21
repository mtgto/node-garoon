// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]

// [ComplexType]
// CabinetGetFolderInfoRequestType
export interface CabinetGetFolderInfoRequestType {
    
}

// CabinetGetFolderInfoResponseType
export interface CabinetGetFolderInfoResponseType {
    
    folder_information?: FolderInformationType;
}

// CabinetGetFileInfoRequestType
export interface CabinetGetFileInfoRequestTypeAttribute {
    hid: base.IDType;
}
export interface CabinetGetFileInfoRequestType {
    $attributes: CabinetGetFileInfoRequestTypeAttribute
}

// CabinetGetFileInfoResponseType
export interface CabinetGetFileInfoResponseType {
    
    file_information?: FileInformationType;
}

// CabinetFileDownloadRequestType
export interface CabinetFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface CabinetFileDownloadRequestType {
    $attributes: CabinetFileDownloadRequestTypeAttribute
}

// CabinetFileDownloadResponseType
export interface CabinetFileDownloadResponseType {
    
    file?: base.FileBodyType;
}

// CabinetAddFileRequestType
export interface CabinetAddFileRequestTypeAttribute {
    hid: base.IDType;
    name: string;
    title?: string;
    version?: base.IDType;
    description?: string;
}
export interface CabinetAddFileRequestType {
    $attributes: CabinetAddFileRequestTypeAttribute
    request_token?: string;
    content: Buffer;
}

// CabinetAddFileResponseType
export interface CabinetAddFileResponseType {
    
    file: SimpleFileType;
}

// CabinetUpdateFileRequestType
export interface CabinetUpdateFileRequestTypeAttribute {
    file_id: base.IDType;
    name: string;
    comment?: string;
}
export interface CabinetUpdateFileRequestType {
    $attributes: CabinetUpdateFileRequestTypeAttribute
    request_token?: string;
    content: Buffer;
}

// CabinetUpdateFileResponseType
export interface CabinetUpdateFileResponseType {
    
    file: SimpleFileInformationType;
}

// CabinetUpdateFileInformationRequestType
export interface CabinetUpdateFileInformationRequestTypeAttribute {
    file_id: base.IDType;
    title?: string;
    version?: base.IDType;
    description?: string;
}
export interface CabinetUpdateFileInformationRequestType {
    $attributes: CabinetUpdateFileInformationRequestTypeAttribute
    request_token?: string;
}

// CabinetUpdateFileInformationResponseType
export interface CabinetUpdateFileInformationResponseType {
    
    file: SimpleFileInformationType;
}

// CabinetDeleteFilesRequestType
export interface CabinetDeleteFilesRequestType {
    
    request_token?: string;
    file_id: base.IDType | base.IDType[];
}

// FolderInformationType
export interface FolderInformationType {
    
    root: FolderType;
}

// FolderType
export interface FolderTypeAttribute {
    id: base.IDType;
    code: string;
    list_index: number;
}
export interface FolderType {
    $attributes: FolderTypeAttribute
    title: string;
    description: string;
    creator_id: string;
    creator_login_name: string;
    creator_display_name: string;
    create_time: string;
    modifier_id: string;
    modifier_login_name: string;
    modifier_display_name: string;
    modify_time: string;
    folders?: FoldersType;
}

// FoldersType
export interface FoldersTypeAttribute {
    parent_id: base.IDType;
    parent_code: string;
}
export interface FoldersType {
    $attributes: FoldersTypeAttribute
    folder?: FolderType | FolderType[];
}

// FileInformationType
export interface FileInformationType {
    
    files: FilesType;
}

// SimpleFileType
export interface SimpleFileTypeAttribute {
    id: base.IDType;
    folder_id: base.IDType;
}
export interface SimpleFileType {
    $attributes: SimpleFileTypeAttribute
    title: string;
    max_version: number;
    name: string;
    size: number;
    mime_type: string;
    description?: string;
    creator_id: base.IDType;
    creator_login_name: string;
    creator_display_name: string;
    create_time: string;
    modifier_id?: base.IDType;
    modifier_login_name?: string;
    modifier_display_name?: string;
    modify_time?: string;
}

// SimpleFileInformationType
export interface SimpleFileInformationTypeAttribute {
    id: base.IDType;
    folder_id: base.IDType;
}
export interface SimpleFileInformationType {
    $attributes: SimpleFileInformationTypeAttribute
    title: string;
    max_version: number;
    name: string;
    size: number;
    mime_type: string;
    description?: string;
    creator_id: base.IDType;
    creator_login_name: string;
    creator_display_name: string;
    create_time: string;
    modifier_id?: base.IDType;
    modifier_login_name?: string;
    modifier_display_name?: string;
    modify_time?: string;
}

// FileType
export interface FileTypeHistories {
    
    history: HistoryType | HistoryType[];
}
export interface FileType extends SimpleFileType {
    
    histories: FileTypeHistories;
}

// FilesType
export interface FilesTypeAttribute {
    parent_id: base.IDType;
    parent_code: string;
}
export interface FilesType {
    $attributes: FilesTypeAttribute
    file?: FileType | FileType[];
}

// HistoryType
export interface HistoryType {
    
    version: number;
    active: number;
    name: string;
    action: number;
    comment: string;
    modifier_id: base.IDType;
    modifier_login_name: string;
    modifier_display_name: string;
    modify_time: string;
}

