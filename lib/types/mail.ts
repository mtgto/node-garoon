// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type MailDraftOperationType = "send" | "reply" | "reply_all" | "forward";
export type MailDispositionNotificationType = "open" | "ignore";
export type SaslMechanismType = "LOGIN" | "PLAIN" | "CRAM-MD5" | "DIGEST-MD5" | "GSSAPI" | "KERBEROS_V4" | "KERBEROS_V5" | "NTLM";
export type FilterOperatorType = "AND" | "OR";
export type FilterExprOperatorType = "Including" | "Excluding" | "Equal" | "NotEqual" | "Begin";
export type FilterSizeOperatorType = "LessThanOrEqual" | "GreaterThanOrEqual";
export type MailServerEncryptedConnectionType = "NONE" | "SSL" | "TLS";

// [ComplexType]
// MailGetAccountVersionsRequestType
export interface MailGetAccountVersionsRequestType {
    
    account_item?: base.ItemVersionType | base.ItemVersionType[];
}

// MailGetAccountVersionsResponseType
export interface MailGetAccountVersionsResponseType {
    
    account_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// MailGetAccountsByIdRequestType
export interface MailGetAccountsByIdRequestType {
    
    account_id: base.IDType | base.IDType[];
}

// MailGetAccountsByIdResponseType
export interface MailGetAccountsByIdResponseType {
    
    account?: AccountType | AccountType[];
}

// MailGetMailVersionsRequestType
export interface MailGetMailVersionsRequestTypeAttribute {
    start: Date;
    end?: Date;
}
export interface MailGetMailVersionsRequestType {
    $attributes: MailGetMailVersionsRequestTypeAttribute
    mail_item?: base.ItemVersionType | base.ItemVersionType[];
    folder_id?: base.IDType | base.IDType[];
}

// MailGetMailVersionsResponseType
export interface MailGetMailVersionsResponseType {
    
    mail_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// MailGetMailsByIdRequestType
export interface MailGetMailsByIdRequestType {
    
    mail_id: base.IDType | base.IDType[];
}

// MailGetMailsByIdResponseType
export interface MailGetMailsByIdResponseType {
    
    mail?: MailType | MailType[];
}

// MailSendMailType
export interface MailSendMailTypeAttribute {
    account_id: base.IDType;
    from_string?: base.NonBlankStringType;
    sender_string?: base.NonBlankStringType;
    to_string?: base.NonBlankStringType;
    cc_string?: base.NonBlankStringType;
    bcc_string?: base.NonBlankStringType;
    reply_to_string?: base.NonBlankStringType;
    draft_id?: base.IDType;
}
export interface MailSendMailTypeFileAttribute {
    id: base.IDType;
}
export interface MailSendMailTypeFile {
    $attributes: MailSendMailTypeFileAttribute
    content: Buffer;
}
export interface MailSendMailType {
    $attributes: MailSendMailTypeAttribute
    mail: MailType;
    file?: MailSendMailTypeFile | MailSendMailTypeFile[];
    remove_file_id?: base.IDType | base.IDType[];
}

// MailSendMailsRequestType
export interface MailSendMailsRequestType {
    
    request_token?: string;
    send_mail: MailSendMailType | MailSendMailType[];
}

// MailSendMailsResponseType
export interface MailSendMailsResponseType {
    
    mail?: MailType | MailType[];
}

// MailReplyMailsRequestType
export interface MailReplyMailsRequestTypeAttribute {
    reply_all: boolean;
}
export interface MailReplyMailsRequestType {
    $attributes: MailReplyMailsRequestTypeAttribute
    request_token?: string;
    reply_mail: MailSendMailType | MailSendMailType[];
}

// MailReplyMailsResponseType
export interface MailReplyMailsResponseType {
    
    mail?: MailType | MailType[];
}

// MailForwardMailType
export interface MailForwardMailTypeAttribute extends MailSendMailTypeAttribute {
    mail_id: base.IDType;
}
export interface MailForwardMailType extends MailSendMailType {
    $attributes: MailForwardMailTypeAttribute
}

// MailForwardMailsRequestType
export interface MailForwardMailsRequestType {
    
    request_token?: string;
    forward_mail: MailForwardMailType | MailForwardMailType[];
}

// MailForwardMailsResponseType
export interface MailForwardMailsResponseType {
    
    mail?: MailType | MailType[];
}

// MailDraftMailType
export interface MailDraftMailTypeAttribute extends MailSendMailTypeAttribute {
    operation?: MailDraftOperationType;
}
export interface MailDraftMailType extends MailSendMailType {
    $attributes: MailDraftMailTypeAttribute
}

// MailSaveDraftMailsRequestType
export interface MailSaveDraftMailsRequestType {
    
    request_token?: string;
    save_mail: MailDraftMailType | MailDraftMailType[];
}

// MailSaveDraftMailsResponseType
export interface MailSaveDraftMailsResponseType {
    
    mail?: MailType | MailType[];
}

// MailRemoveMailsRequestType
export interface MailRemoveMailsRequestType {
    
    request_token?: string;
    mail_id: base.IDType | base.IDType[];
}

// MailSearchMailsRequestType
export interface MailSearchMailsRequestTypeAttribute {
    text: string;
    start?: Date;
    end?: Date;
    search_all_accounts: boolean;
    account_id?: base.IDType;
    folder_id?: base.IDType;
    search_sub_folders?: boolean;
    title_search: boolean;
    body_search: boolean;
    from_search: boolean;
    to_search: boolean;
    cc_search: boolean;
    bcc_search: boolean;
}
export interface MailSearchMailsRequestType {
    $attributes: MailSearchMailsRequestTypeAttribute
}

// MailSearchMailsResponseType
export interface MailSearchMailsResponseType {
    
    mail?: MailType | MailType[];
}

// MailOpenDispositionNotificationOperationType
export interface MailOpenDispositionNotificationOperationTypeAttribute {
    account_id: base.IDType;
    mail_id: base.IDType;
    type: MailDispositionNotificationType;
}
export interface MailOpenDispositionNotificationOperationType {
    $attributes: MailOpenDispositionNotificationOperationTypeAttribute
}

// MailOpenDispositionNotificationsRequestType
export interface MailOpenDispositionNotificationsRequestType {
    
    request_token?: string;
    operation: MailOpenDispositionNotificationOperationType | MailOpenDispositionNotificationOperationType[];
}

// MailOpenDispositionNotificationsResponseType
export interface MailOpenDispositionNotificationsResponseType {
    
    mail?: MailType | MailType[];
}

// MailModifyFolderOperationType
export interface MailModifyFolderOperationTypeAttribute {
    account_id: base.IDType;
    parent_folder_id?: base.IDType;
}
export interface MailModifyFolderOperationType {
    $attributes: MailModifyFolderOperationTypeAttribute
    folder: FolderType;
}

// MailAddFoldersRequestType
export interface MailAddFoldersRequestType {
    
    request_token?: string;
    add_folder: MailModifyFolderOperationType | MailModifyFolderOperationType[];
}

// MailAddFoldersResponseType
export interface MailAddFoldersResponseType {
    
    folder?: FolderType | FolderType[];
}

// MailModifyFoldersRequestType
export interface MailModifyFoldersRequestType {
    
    request_token?: string;
    modify_folder: MailModifyFolderOperationType | MailModifyFolderOperationType[];
}

// MailModifyFoldersResponseType
export interface MailModifyFoldersResponseType {
    
    folder?: FolderType | FolderType[];
}

// MailRemoveFoldersRequestType
export interface MailRemoveFoldersRequestType {
    
    request_token?: string;
    folder_id: base.IDType | base.IDType[];
}

// MailMoveMailsOperationType
export interface MailMoveMailsOperationTypeAttribute {
    folder_id: base.IDType;
    mail_id: base.IDType;
}
export interface MailMoveMailsOperationType {
    $attributes: MailMoveMailsOperationTypeAttribute
}

// MailMoveMailsToOtherFolderRequestType
export interface MailMoveMailsToOtherFolderRequestType {
    
    request_token?: string;
    operation: MailMoveMailsOperationType | MailMoveMailsOperationType[];
}

// MailMoveMailsToOtherFolderResponseType
export interface MailMoveMailsToOtherFolderResponseType {
    
    mail?: MailType | MailType[];
}

// MailSignatureType
export interface MailSignatureTypeAttribute {
    account_id: base.IDType;
    name: base.NonBlankStringType;
    content: string;
}
export interface MailSignatureType {
    $attributes: MailSignatureTypeAttribute
}

// MailGetSignaturesRequestType
export interface MailGetSignaturesRequestTypeAttribute {
    account_id: base.IDType;
}
export interface MailGetSignaturesRequestType {
    $attributes: MailGetSignaturesRequestTypeAttribute
}

// MailGetSignaturesResponseType
export interface MailGetSignaturesResponseType {
    
    signature?: MailSignatureType | MailSignatureType[];
}

// MailGetFiltersRequestType
export interface MailGetFiltersRequestTypeAttribute {
    account_id: base.IDType;
}
export interface MailGetFiltersRequestType {
    $attributes: MailGetFiltersRequestTypeAttribute
}

// MailGetFiltersResponseType
export interface MailGetFiltersResponseType {
    
    filter?: FilterType | FilterType[];
}

// MailPersonalProfileType
export interface MailPersonalProfileTypeAttribute {
    show_preview: boolean;
    send_charset: string;
    use_trash: boolean;
    send_vcard?: boolean;
    wrap?: boolean;
    linewidth?: number;
    use_message_disposition_notification: boolean;
    use_status?: boolean;
    use_history?: boolean;
    reply_message_disposition_notification: "None" | "ShowConfirmMessage" | "ReplyAlways" | "ReplyIncludingToOrCC";
}
export interface MailPersonalProfileTypeFromNameAttribute {
    account_id: base.IDType;
    name: base.NonBlankStringType;
}
export interface MailPersonalProfileTypeFromName {
    $attributes: MailPersonalProfileTypeFromNameAttribute
}
export interface MailPersonalProfileType {
    $attributes: MailPersonalProfileTypeAttribute
    from_name?: MailPersonalProfileTypeFromName | MailPersonalProfileTypeFromName[];
}

// MailSizeLimitsType
export interface MailSizeLimitsTypeAttribute {
    total_kb?: number;
    receive_kb?: number;
    send_kb?: number;
}
export interface MailSizeLimitsType {
    $attributes: MailSizeLimitsTypeAttribute
}

// UserAuthoritiesType
export interface UserAuthoritiesTypeAttribute {
    allow_account_all_permission: boolean;
    allow_account_modification: boolean;
    allow_store_on_server: boolean;
    allow_new_mail_check: boolean;
    allow_collective_reception: boolean;
    allow_send_markup_body: boolean;
    allow_display_markup_image: boolean;
    allow_message_disposition_notification: boolean;
    allow_status: boolean;
    allow_history: boolean;
}
export interface UserAuthoritiesType {
    $attributes: UserAuthoritiesTypeAttribute
}

// MailSystemProfileType
export interface MailSystemProfileTypeAttribute {
    disable_client: boolean;
    check_new_mail_at_login: boolean;
}
export interface MailSystemProfileTypeAutoReceiveAttribute {
    interval?: number;
}
export interface MailSystemProfileTypeAutoReceive {
    $attributes: MailSystemProfileTypeAutoReceiveAttribute
    receive_time?: Date | Date[];
}
export interface MailSystemProfileType {
    $attributes: MailSystemProfileTypeAttribute
    auto_receive?: MailSystemProfileTypeAutoReceive;
    limit: MailSizeLimitsType;
    authority: UserAuthoritiesType;
}

// MailGetProfilesRequestType
export interface MailGetProfilesRequestTypeAttribute {
    include_system_profile?: boolean;
}
export interface MailGetProfilesRequestType {
    $attributes: MailGetProfilesRequestTypeAttribute
}

// MailGetProfilesResponseType
export interface MailGetProfilesResponseType {
    
    personal_profile: MailPersonalProfileType;
    system_profile?: MailSystemProfileType;
}

// MailSetProfilesRequestType
export interface MailSetProfilesRequestType {
    
    request_token?: string;
    personal_profile: MailPersonalProfileType;
}

// MailSetProfilesResponseType
export interface MailSetProfilesResponseType {
    
    personal_profile: MailPersonalProfileType;
}

// MailSourceDownloadRequestType
export interface MailSourceDownloadRequestTypeAttribute {
    mail_id: base.IDType;
}
export interface MailSourceDownloadRequestType {
    $attributes: MailSourceDownloadRequestTypeAttribute
}

// MailSourceDownloadResponseType
export interface MailSourceDownloadResponseType {
    
    source?: base.FileBodyType;
}

// MailFileDownloadRequestType
export interface MailFileDownloadRequestTypeAttribute {
    mail_id: base.IDType;
    file_id: base.IDType;
}
export interface MailFileDownloadRequestType {
    $attributes: MailFileDownloadRequestTypeAttribute
}

// MailFileDownloadResponseType
export interface MailFileDownloadResponseType {
    
    file?: base.FileBodyType;
}

// MailUserAccountType
export interface MailUserAccountType {
    
    account_info?: Account_Info;
    mail_setting?: MailSetting;
}

// MailCreateUserAccountRequestType
export interface MailCreateUserAccountRequestType {
    
    request_token?: string;
    mail_user_accounts?: MailUserAccountType | MailUserAccountType[];
}

// MailCreateUserAccountResponseType
export interface MailCreateUserAccountResponseTypeAttribute {
    acc_id: base.IDType;
}
export interface MailCreateUserAccountResponseType {
    $attributes: MailCreateUserAccountResponseTypeAttribute
    user_accounts?: MailUserAccountType | MailUserAccountType[];
}

// MailEditUserAccountRequestType
export interface MailEditUserAccountRequestType {
    
    request_token?: string;
    edit_user_accounts?: MailUserAccountType | MailUserAccountType[];
}

// MailEditUserAccountResponseType
export interface MailEditUserAccountResponseTypeAttribute {
    acc_id: base.IDType;
}
export interface MailEditUserAccountResponseType {
    $attributes: MailEditUserAccountResponseTypeAttribute
    edit_user_accounts?: MailUserAccountType | MailUserAccountType[];
}

// MailDeleteUserAccountRequestType
export interface MailDeleteUserAccountRequestType {
    
    request_token?: string;
    delete_user_accounts?: DeleteUserAccount | DeleteUserAccount[];
}

// NewArrivingEmailType
export interface NewArrivingEmailTypeAttribute {
    id: base.IDType;
    name: string;
    email: string;
    new_mails?: number;
    disabled?: string;
    deleted?: string;
}
export interface NewArrivingEmailType {
    $attributes: NewArrivingEmailTypeAttribute
}

// MailGetNewArrivingEmailRequestType
export interface MailGetNewArrivingEmailRequestType {
    
}

// MailGetNewArrivingEmailResponseType
export interface MailGetNewArrivingEmailResponseType {
    
    account?: NewArrivingEmailType | NewArrivingEmailType[];
}

// MailAddMailServersRequestType
export interface MailAddMailServersRequestType {
    
    request_token?: string;
    server: MailServerInfoType | MailServerInfoType[];
}

// MailAddMailServersResponseType
export interface MailAddMailServersResponseType {
    
    server: MailServerInfoType | MailServerInfoType[];
}

// MailModifyMailServersRequestType
export interface MailModifyMailServersRequestType {
    
    request_token?: string;
    server: MailServerInfoType | MailServerInfoType[];
}

// MailModifyMailServersResponseType
export interface MailModifyMailServersResponseType {
    
    server: MailServerInfoType | MailServerInfoType[];
}

// MailRemoveMailServersRequestType
export interface MailRemoveMailServersRequestType {
    
    request_token?: string;
    server_id: base.IDType | base.IDType[];
}

// ServerType
export interface ServerTypeAttribute {
    key: base.NonBlankStringType;
    name: base.NonBlankStringType;
}
export interface ServerType {
    $attributes: ServerTypeAttribute
    smtp: SmtpServerType;
    pop?: PopServerType;
    imap?: ImapServerType;
}

// SmtpServerType
export interface SmtpServerTypeAttribute extends MailServerTypeAttribute {
    use_pop_account?: boolean;
}
export interface SmtpServerTypePopBeforeSmtpAttribute {
    enable?: boolean;
    wait_seconds?: number;
}
export interface SmtpServerTypePopBeforeSmtp {
    $attributes: SmtpServerTypePopBeforeSmtpAttribute
}
export interface SmtpServerType extends MailServerType {
    $attributes: SmtpServerTypeAttribute
    pop_before_smtp?: SmtpServerTypePopBeforeSmtp;
}

// PopServerType
export interface PopServerTypeAttribute extends MailServerTypeAttribute {
    apop?: boolean;
}
export interface PopServerType extends MailServerType {
    $attributes: PopServerTypeAttribute
}

// ImapServerType
export interface ImapServerType extends MailServerType {
    
}

// MailServerType
export interface MailServerTypeAttribute {
    host: base.NonBlankStringType;
    port?: number;
    timeout?: number;
    over_ssl?: boolean;
    sasl_mechanism?: SaslMechanismType;
}
export interface MailServerType {
    $attributes: MailServerTypeAttribute
}

// AccountType
export interface AccountTypeAttribute {
    key: base.IDType;
    version: base.VersionType;
    user_id: string;
    server_id: string;
    email: base.NonBlankStringType;
    username: string;
    password: string;
}
export interface AccountTypeSignatures {
    
    signature?: AccountTypeSignaturesSignature | AccountTypeSignaturesSignature[];
}
export interface AccountTypeSignaturesSignatureAttribute {
    name: base.NonBlankStringType;
}
export interface AccountTypeSignaturesSignature {
    $attributes: AccountTypeSignaturesSignatureAttribute
}
export interface AccountType {
    $attributes: AccountTypeAttribute
    mailbox?: MailboxType | MailboxType[];
    signatures?: AccountTypeSignatures;
}

// MailboxType
export interface MailboxTypeFilters {
    
    filter?: FilterType | FilterType[];
}
export interface MailboxType {
    
    filters?: MailboxTypeFilters;
    inbox?: BuiltInFolderType;
    sent?: BuiltInFolderType;
    draft?: BuiltInFolderType;
    trash?: BuiltInFolderType;
    folder?: FolderType | FolderType[];
}

// BuiltInFolderType
export interface BuiltInFolderTypeAttribute {
    key: base.NonBlankStringType;
    description?: string;
    subscribe?: boolean;
}
export interface BuiltInFolderTypeMailAttribute {
    id: base.IDType;
}
export interface BuiltInFolderTypeMail {
    $attributes: BuiltInFolderTypeMailAttribute
}
export interface BuiltInFolderType {
    $attributes: BuiltInFolderTypeAttribute
    mail?: BuiltInFolderTypeMail | BuiltInFolderTypeMail[];
}

// FolderType
export interface FolderTypeAttribute extends BuiltInFolderTypeAttribute {
    name: base.NonBlankStringType;
    order?: number;
}
export interface FolderType extends BuiltInFolderType {
    $attributes: FolderTypeAttribute
    folder?: FolderType | FolderType[];
}

// FilterType
export interface FilterTypeAttribute {
    name: base.NonBlankStringType;
    folder: base.NonBlankStringType;
    operator: FilterOperatorType;
    status: string;
}
export interface FilterType {
    $attributes: FilterTypeAttribute
    expr?: FilterExprType;
    size?: FilterSizeType;
}

// FilterExprType
export interface FilterExprTypeAttribute {
    target: "Subject" | "From" | "To" | "CC" | "Header";
    content?: string;
    method: FilterExprOperatorType;
}
export interface FilterExprType {
    $attributes: FilterExprTypeAttribute
}

// FilterSizeType
export interface FilterSizeTypeAttribute {
    target: "Mail";
    content: number;
    method: FilterSizeOperatorType;
}
export interface FilterSizeType {
    $attributes: FilterSizeTypeAttribute
}

// MailType
export interface MailTypeAttribute {
    key: base.IDType;
    version: base.VersionType;
    subject: string;
    body: string;
    html_body?: string;
    date?: Date;
    read?: Date;
    size?: number;
    is_sent?: boolean;
    is_draft?: boolean;
    folder_key: base.IDType;
}
export interface MailTypeFileAttribute {
    name: base.NonBlankStringType;
    id: base.IDType;
    size?: number;
    mime_type?: string;
}
export interface MailTypeFile {
    $attributes: MailTypeFileAttribute
}
export interface MailTypeSourceAttribute {
    id: base.IDType;
    size?: number;
}
export interface MailTypeSource {
    $attributes: MailTypeSourceAttribute
}
export interface MailType {
    $attributes: MailTypeAttribute
    file?: MailTypeFile | MailTypeFile[];
    source?: MailTypeSource;
    from?: MailAddressType;
    sender?: MailAddressType;
    to?: MailAddressType | MailAddressType[];
    cc?: MailAddressType | MailAddressType[];
    bcc?: MailAddressType | MailAddressType[];
    reply_to?: MailAddressType;
    disposition_notification_to?: MailAddressType;
}

// MailAddressType
export interface MailAddressTypeAttribute {
    name?: string;
    address: string;
}
export interface MailAddressType {
    $attributes: MailAddressTypeAttribute
}

// UserProfileType
export interface UserProfileTypeAttribute {
    user_id: string;
    wrap?: boolean;
    linewidth?: number;
    save_send_files?: boolean;
    show_preview?: boolean;
    send_charset?: string;
    send_vcard?: boolean;
    use_trash?: boolean;
    trash_duration?: number;
    use_message_disposition_notification?: boolean;
    reply_message_disposition_notification?: "None" | "ShowConfirmMessage" | "ReplyAlways" | "ReplyIncludingToOrCC";
    use_status?: boolean;
    use_history?: boolean;
}
export interface UserProfileTypeFromNameAttribute {
    account_id: base.IDType;
    name: base.NonBlankStringType;
}
export interface UserProfileTypeFromName {
    $attributes: UserProfileTypeFromNameAttribute
}
export interface UserProfileType {
    $attributes: UserProfileTypeAttribute
    from_name?: UserProfileTypeFromName | UserProfileTypeFromName[];
}

// SystemProfileType
export interface SystemProfileTypeAttribute {
    disable_client?: boolean;
    check_new_mail_at_login?: boolean;
}
export interface SystemProfileTypeAutoReceiveAttribute {
    interval?: number;
}
export interface SystemProfileTypeAutoReceive {
    $attributes: SystemProfileTypeAutoReceiveAttribute
    receive_time?: Date | Date[];
}
export interface SystemProfileType {
    $attributes: SystemProfileTypeAttribute
    auto_receive?: SystemProfileTypeAutoReceive;
    size_limits?: SizeLimitsType;
    user_authorities?: UserAuthoritiesType;
}

// SizeLimitsType
export interface SizeLimitsTypeAttribute {
    total_kb?: number;
    receive_kb?: number;
    send_kb?: number;
}
export interface SizeLimitsType {
    $attributes: SizeLimitsTypeAttribute
}

// UserAuthoritiesType
export interface UserAuthoritiesTypeAttribute {
    account_all_permission?: boolean;
    account_modification?: boolean;
    store_on_server?: boolean;
    new_mail_check?: boolean;
    collective_reception?: boolean;
    send_markup_body?: boolean;
    display_markup_image?: boolean;
    message_disposition_notification?: boolean;
    status?: boolean;
    history?: boolean;
}
export interface UserAuthoritiesType {
    $attributes: UserAuthoritiesTypeAttribute
}

// DeleteUserAccount
export interface DeleteUserAccountAttribute {
    account_id: base.IDType;
    delete_all_email?: boolean;
}
export interface DeleteUserAccount {
    $attributes: DeleteUserAccountAttribute
}

// Account_Info
export interface Account_InfoAttribute {
    account_id: base.IDType;
    user_id: base.IDType;
    user_acount_code: string;
    user_account_name?: string;
}
export interface Account_Info {
    $attributes: Account_InfoAttribute
}

// MailSetting
export interface MailSettingAttribute {
    mail_server_id: string;
    email: string;
    acount_name: string;
    password?: string;
    leave_server_mail?: boolean;
    deactivate_user_account?: boolean;
}
export interface MailSetting {
    $attributes: MailSettingAttribute
}

// MailServerInfoType
export interface MailServerInfoTypeAttribute {
    id: base.IDType;
    server_code: base.NonBlankStringType;
    server_name: base.NonBlankStringType;
}
export interface MailServerInfoTypeOutgoingAttribute {
    server_name: base.NonBlankStringType;
    port_number: number;
    encrypted_connection?: MailServerEncryptedConnectionType;
    smtp_auth?: "NONE" | "PLAIN" | "LOGIN" | "CRAM-MD5" | "DIGEST-MD5";
    account_for_send?: boolean;
    pop_before_smtp?: boolean;
    pop_before_smtp_wait_time?: number;
    timeout?: number;
}
export interface MailServerInfoTypeOutgoing {
    $attributes: MailServerInfoTypeOutgoingAttribute
}
export interface MailServerInfoTypeIncomingAttribute {
    receive_protocol: "POP3" | "IMAP4";
    server_name: base.NonBlankStringType;
    port_number: number;
    use_ssl?: boolean;
    apop_auth_for_pop3?: boolean;
    timeout?: number;
}
export interface MailServerInfoTypeIncoming {
    $attributes: MailServerInfoTypeIncomingAttribute
}
export interface MailServerInfoType {
    $attributes: MailServerInfoTypeAttribute
    outgoing: MailServerInfoTypeOutgoing;
    incoming: MailServerInfoTypeIncoming;
}

