// This file is generated from WSDL.

// [Import]
import * as base from "./base";

// [SimpleType]
export type TargetType = "user" | "group" | "role" | "dynamic_role";

// [ComplexType]
// AddressGetPersonalCardVersionsRequestType
export interface AddressGetPersonalCardVersionsRequestType {
    
    card_item?: base.ItemVersionType | base.ItemVersionType[];
}

// AddressGetPersonalCardVersionsResponseType
export interface AddressGetPersonalCardVersionsResponseType {
    
    card_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// AddressGetPersonalCardsByIdRequestType
export interface AddressGetPersonalCardsByIdRequestType {
    
    card_id: base.IDType | base.IDType[];
}

// AddressGetPersonalCardsByIdResponseType
export interface AddressGetPersonalCardsByIdResponseType {
    
    card?: CardType | CardType[];
}

// AddressGetSharedCardVersionsRequestType
export interface AddressGetSharedCardVersionsRequestTypeAttribute {
    book_id: base.IDType;
}
export interface AddressGetSharedCardVersionsRequestType {
    attributes: AddressGetSharedCardVersionsRequestTypeAttribute
    card_item?: base.ItemVersionType | base.ItemVersionType[];
}

// AddressGetSharedCardVersionsResponseType
export interface AddressGetSharedCardVersionsResponseType {
    
    card_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// AddressGetSharedCardsByIdRequestType
export interface AddressGetSharedCardsByIdRequestTypeAttribute {
    book_id: base.IDType;
}
export interface AddressGetSharedCardsByIdRequestType {
    attributes: AddressGetSharedCardsByIdRequestTypeAttribute
    card_id: base.IDType | base.IDType[];
}

// AddressGetSharedCardsByIdResponseType
export interface AddressGetSharedCardsByIdResponseType {
    
    card?: CardType | CardType[];
}

// AddressGetPersonalBookVersionsRequestType
export interface AddressGetPersonalBookVersionsRequestType {
    
    book_item?: base.ItemVersionType | base.ItemVersionType[];
}

// AddressGetPersonalBookVersionsResponseType
export interface AddressGetPersonalBookVersionsResponseType {
    
    book_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// AddressGetPersonalBooksByIdRequestType
export interface AddressGetPersonalBooksByIdRequestType {
    
    book_id: base.IDType | base.IDType[];
}

// AddressGetPersonalBooksByIdResponseType
export interface AddressGetPersonalBooksByIdResponseType {
    
    book?: BookType | BookType[];
}

// AddressGetSharedBookVersionsRequestType
export interface AddressGetSharedBookVersionsRequestType {
    
    book_item?: base.ItemVersionType | base.ItemVersionType[];
}

// AddressGetSharedBookVersionsResponseType
export interface AddressGetSharedBookVersionsResponseType {
    
    book_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// AddressGetSharedBooksByIdRequestType
export interface AddressGetSharedBooksByIdRequestType {
    
    book_id: base.IDType | base.IDType[];
}

// AddressGetSharedBooksByIdResponseType
export interface AddressGetSharedBooksByIdResponseType {
    
    book?: BookType | BookType[];
}

// AddressCardContainsFileType
export interface AddressCardContainsFileTypeFileAttribute {
    id: base.IDType;
}
export interface AddressCardContainsFileTypeFile {
    attributes: AddressCardContainsFileTypeFileAttribute
    content: Buffer;
}
export interface AddressCardContainsFileType {
    
    card: CardType;
    file?: AddressCardContainsFileTypeFile | AddressCardContainsFileTypeFile[];
}

// AddressAddCardsRequestType
export interface AddressAddCardsRequestType {
    
    request_token?: string;
    add_card: AddressCardContainsFileType | AddressCardContainsFileType[];
}

// AddressAddCardsResponseType
export interface AddressAddCardsResponseType {
    
    card?: CardType | CardType[];
}

// AddressModifyCardsRequestType
export interface AddressModifyCardsRequestType {
    
    request_token?: string;
    modify_card: AddressCardContainsFileType | AddressCardContainsFileType[];
}

// AddressModifyCardsResponseType
export interface AddressModifyCardsResponseType {
    
    card?: CardType | CardType[];
}

// AddressRemovePersonalCardsRequestType
export interface AddressRemovePersonalCardsRequestType {
    
    request_token?: string;
    card_id: base.IDType | base.IDType[];
}

// AddressRemovePersonalCardsResponseType
export interface AddressRemovePersonalCardsResponseType {
    
}

// AddressRemoveSharedCardsRequestType
export interface AddressRemoveSharedCardsRequestTypeAttribute {
    book_id: base.IDType;
}
export interface AddressRemoveSharedCardsRequestType {
    attributes: AddressRemoveSharedCardsRequestTypeAttribute
    request_token?: string;
    card_id: base.IDType | base.IDType[];
}

// AddressRemoveSharedCardsResponseType
export interface AddressRemoveSharedCardsResponseType {
    
}

// AddressSearchCardsRequestType
export interface AddressSearchCardsRequestTypeAttribute {
    book_id: base.IDType;
    case_sensitive: boolean;
    text: string;
}
export interface AddressSearchCardsRequestType {
    attributes: AddressSearchCardsRequestTypeAttribute
}

// AddressSearchCardsResponseType
export interface AddressSearchCardsResponseType {
    
    card?: CardType | CardType[];
}

// AddressCopyItemType
export interface AddressCopyItemTypeAttribute {
    copied_book_id: base.IDType;
    card_id: base.IDType;
}
export interface AddressCopyItemType {
    attributes: AddressCopyItemTypeAttribute
}

// AddressCopyPersonalCardsToOtherBookRequestType
export interface AddressCopyPersonalCardsToOtherBookRequestType {
    
    request_token?: string;
    copy_item: AddressCopyItemType | AddressCopyItemType[];
}

// AddressCopyPersonalCardsToOtherBookResponseType
export interface AddressCopyPersonalCardsToOtherBookResponseType {
    
    card?: CardType | CardType[];
}

// AddressGetMyAddressGroupVersionsRequestType
export interface AddressGetMyAddressGroupVersionsRequestType {
    
    my_address_group_item?: base.ItemVersionType | base.ItemVersionType[];
}

// AddressGetMyAddressGroupVersionsResponseType
export interface AddressGetMyAddressGroupVersionsResponseType {
    
    my_address_group_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}

// AddressGetMyAddressGroupsByIdRequestType
export interface AddressGetMyAddressGroupsByIdRequestType {
    
    my_address_group_id: base.IDType | base.IDType[];
}

// AddressGetMyAddressGroupsByIdResponseType
export interface AddressGetMyAddressGroupsByIdResponseType {
    
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressAddMyAddressGroupsRequestType
export interface AddressAddMyAddressGroupsRequestType {
    
    request_token?: string;
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressAddMyAddressGroupsResponseType
export interface AddressAddMyAddressGroupsResponseType {
    
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressModifyMyAddressGroupsRequestType
export interface AddressModifyMyAddressGroupsRequestType {
    
    request_token?: string;
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressModifyMyAddressGroupsResponseType
export interface AddressModifyMyAddressGroupsResponseType {
    
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressRemoveMyAddressGroupsRequestType
export interface AddressRemoveMyAddressGroupsRequestType {
    
    request_token?: string;
    my_address_group_id: base.IDType | base.IDType[];
}

// AddressRemoveMyAddressGroupsResponseType
export interface AddressRemoveMyAddressGroupsResponseType {
    
}

// AddressModifyCardsInMyAddressGroupRequestType
export interface AddressModifyCardsInMyAddressGroupRequestType {
    
    request_token?: string;
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressModifyCardsInMyAddressGroupResponseType
export interface AddressModifyCardsInMyAddressGroupResponseType {
    
    my_address_group?: MyAddressGroupType | MyAddressGroupType[];
}

// AddressGetProfilesRequestType
export interface AddressGetProfilesRequestType {
    
}

// AddressGetProfilesResponseType
export interface AddressGetProfilesResponseTypeAttribute {
    attendee_menu: string;
    use_personal_book: boolean;
    use_shared_book: boolean;
}
export interface AddressGetProfilesResponseType {
    attributes: AddressGetProfilesResponseTypeAttribute
}

// AddressSetProfilesRequestType
export interface AddressSetProfilesRequestTypeAttribute {
    attendee_menu: string;
}
export interface AddressSetProfilesRequestType {
    attributes: AddressSetProfilesRequestTypeAttribute
    request_token?: string;
}

// AddressSetProfilesResponseType
export interface AddressSetProfilesResponseTypeAttribute {
    attendee_menu: string;
}
export interface AddressSetProfilesResponseType {
    attributes: AddressSetProfilesResponseTypeAttribute
}

// AddressGetReadAllowBooksRequestType
export interface AddressGetReadAllowBooksRequestType {
    
}

// AddressGetReadAllowBooksResponseType
export interface AddressGetReadAllowBooksResponseType {
    
    book_id?: base.IDType | base.IDType[];
}

// AddressGetModifyAllowBooksRequestType
export interface AddressGetModifyAllowBooksRequestType {
    
}

// AddressGetModifyAllowBooksResponseType
export interface AddressGetModifyAllowBooksResponseType {
    
    book_id?: base.IDType | base.IDType[];
}

// AddressFileDownloadRequestType
export interface AddressFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface AddressFileDownloadRequestType {
    attributes: AddressFileDownloadRequestTypeAttribute
}

// AddressFileDownloadResponseType
export interface AddressFileDownloadResponseType {
    
    file?: base.FileBodyType;
}

// BookType
export interface BookTypeAttribute {
    key: base.IDType;
    book_id: base.IDType;
    name: base.NonBlankStringType;
    type: base.NonBlankStringType;
    version: base.VersionType;
    user_id?: base.IDType;
}
export interface BookTypeCards {
    
    card?: BookTypeCardsCard | BookTypeCardsCard[];
}
export interface BookTypeCardsCardAttribute {
    id: base.IDType;
}
export interface BookTypeCardsCard {
    attributes: BookTypeCardsCardAttribute
}
export interface BookTypeAcl {
    
    ace?: base.AceType | base.AceType[];
}
export interface BookTypePrivilegeAttribute {
    target: string;
    target_type: string;
}
export interface BookTypePrivilege {
    attributes: BookTypePrivilegeAttribute
}
export interface BookType {
    attributes: BookTypeAttribute
    form?: FormConfigType;
    cards?: BookTypeCards;
    acl?: BookTypeAcl | BookTypeAcl[];
    privilege?: BookTypePrivilege | BookTypePrivilege[];
}

// FormConfigType
export interface FormConfigTypeAttribute {
    key: base.IDType;
    version: base.VersionType;
}
export interface FormConfigTypeCustom {
    
    string?: StringFieldConfigType;
    text?: TextFieldConfigType;
    url?: UrlFieldConfigType;
    file?: FileFieldConfigType;
    email?: EMailFieldConfigType;
    ipphone?: IPPhoneFieldConfigType;
    menu?: MenuFieldConfigType;
}
export interface FormConfigType {
    attributes: FormConfigTypeAttribute
    subject?: FieldConfigType;
    personal_name?: NameFieldConfigType;
    personal_reading?: NameFieldConfigType;
    company_name?: FieldConfigType;
    company_reading?: FieldConfigType;
    section?: FieldConfigType;
    zip_code?: FieldConfigType;
    physical_address?: FieldConfigType;
    map?: FieldConfigType;
    route?: FieldConfigType;
    company_tel?: FieldConfigType;
    company_fax?: FieldConfigType;
    url?: FieldConfigType;
    post?: FieldConfigType;
    personal_tel?: FieldConfigType;
    email?: FieldConfigType;
    image?: FieldConfigType;
    description?: FieldConfigType;
    custom?: FormConfigTypeCustom;
}

// FieldConfigType
export interface FieldConfigTypeAttribute {
    name: base.NonBlankStringType;
    field_code: base.NonBlankStringType;
    using?: boolean;
    public?: boolean;
    listing?: boolean;
    necessary?: boolean;
    allow_modification?: boolean;
    sso_id?: string;
}
export interface FieldConfigType {
    attributes: FieldConfigTypeAttribute
}

// NameFieldConfigType
export interface NameFieldConfigTypeAttribute extends FieldConfigTypeAttribute {
    number_of_parts: number;
}
export interface NameFieldConfigType extends FieldConfigType {
    attributes: NameFieldConfigTypeAttribute
}

// StringFieldConfigType
export interface StringFieldConfigType extends FieldConfigType {
    
}

// TextFieldConfigType
export interface TextFieldConfigType extends FieldConfigType {
    
}

// UrlFieldConfigType
export interface UrlFieldConfigTypeAttribute extends FieldConfigTypeAttribute {
    image: boolean;
}
export interface UrlFieldConfigType extends FieldConfigType {
    attributes: UrlFieldConfigTypeAttribute
}

// FileFieldConfigType
export interface FileFieldConfigType extends FieldConfigType {
    
}

// EMailFieldConfigType
export interface EMailFieldConfigType extends FieldConfigType {
    
}

// IPPhoneFieldConfigType
export interface IPPhoneFieldConfigType extends FieldConfigType {
    
}

// MenuFieldConfigType
export interface MenuFieldConfigType extends FieldConfigType {
    
    item: string | string[];
}

// CardType
export interface CardTypeAttribute {
    book_id: base.IDType;
    id: base.IDType;
    version: base.VersionType;
}
export interface CardTypeCustom {
    
    string?: CardTypeCustomString;
    text?: CardTypeCustomText;
    url?: CardTypeCustomUrl;
    file?: CardTypeCustomFile;
    email?: CardTypeCustomEmail;
    ipphone?: CardTypeCustomIpphone;
    menu?: CardTypeCustomMenu;
}
export interface CardTypeCustomStringAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomString {
    attributes: CardTypeCustomStringAttribute
}
export interface CardTypeCustomTextAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomText {
    attributes: CardTypeCustomTextAttribute
}
export interface CardTypeCustomUrlAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomUrl {
    attributes: CardTypeCustomUrlAttribute
}
export interface CardTypeCustomFileAttribute extends FileFieldValueTypeAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomFile extends FileFieldValueType {
    attributes: CardTypeCustomFileAttribute
}
export interface CardTypeCustomEmailAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomEmail {
    attributes: CardTypeCustomEmailAttribute
}
export interface CardTypeCustomIpphoneAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomIpphone {
    attributes: CardTypeCustomIpphoneAttribute
}
export interface CardTypeCustomMenuAttribute {
    field_code: base.NonBlankStringType;
}
export interface CardTypeCustomMenu {
    attributes: CardTypeCustomMenuAttribute
}
export interface CardType {
    attributes: CardTypeAttribute
    creator: base.ChangeLogType;
    modifier?: base.ChangeLogType;
    subject?: string;
    personal_name?: NameFieldValueType;
    personal_reading?: NameFieldValueType;
    company_name?: string;
    company_reading?: string;
    section?: string;
    zip_code?: string;
    physical_address?: string;
    map?: string;
    route?: RouteFieldValueType;
    company_tel?: string;
    company_fax?: string;
    url?: string;
    post?: string;
    personal_tel?: string;
    email?: string;
    image?: FileFieldValueType;
    description?: string;
    custom?: CardTypeCustom;
}

// NameFieldValueType
export interface NameFieldValueType {
    
    part: string | string[];
}

// RouteFieldValueType
export interface RouteFieldValueType {
    
    path?: string;
    time?: string;
    fare?: string;
}

// StringFieldValueType
export interface StringFieldValueType {
    
}

// TextFieldValueType
export interface TextFieldValueType {
    
}

// UrlFieldValueType
export interface UrlFieldValueType {
    
}

// FileFieldValueType
export interface FileFieldValueTypeAttribute {
    name: base.NonBlankStringType;
    file_id: base.IDType;
    mime_type?: string;
    size?: number;
}
export interface FileFieldValueType {
    attributes: FileFieldValueTypeAttribute
}

// EMailFieldValueType
export interface EMailFieldValueType {
    
}

// IPPhoneFieldValueType
export interface IPPhoneFieldValueType {
    
}

// MenuFieldValueType
export interface MenuFieldValueType {
    
}

// BookUsePermissionType
export interface BookUsePermissionTypeAclAttribute {
    target: base.NonBlankStringType;
    target_type: TargetType;
}
export interface BookUsePermissionTypeAcl {
    attributes: BookUsePermissionTypeAclAttribute
}
export interface BookUsePermissionType {
    
    acl?: BookUsePermissionTypeAcl | BookUsePermissionTypeAcl[];
}

// MyAddressGroupType
export interface MyAddressGroupTypeAttribute {
    id: base.IDType;
    version: base.VersionType;
    name: base.NonBlankStringType;
    description?: string;
}
export interface MyAddressGroupTypeUserAttribute {
    key: base.IDType;
}
export interface MyAddressGroupTypeUser {
    attributes: MyAddressGroupTypeUserAttribute
}
export interface MyAddressGroupTypeCardAttribute {
    key: base.IDType;
    type: "private" | "shared";
}
export interface MyAddressGroupTypeCard {
    attributes: MyAddressGroupTypeCardAttribute
}
export interface MyAddressGroupType {
    attributes: MyAddressGroupTypeAttribute
    user?: MyAddressGroupTypeUser | MyAddressGroupTypeUser[];
    card?: MyAddressGroupTypeCard | MyAddressGroupTypeCard[];
}

