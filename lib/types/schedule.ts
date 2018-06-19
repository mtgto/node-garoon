// This file is generated from WSDL.
/* tslint:disable:max-line-length no-trailing-whitespace */

// [Import]
import * as base from "./base";

// [SimpleType]
export type ScheduleRepeatModifyType = "this" | "after" | "all";
export type ScheduleSearchConditionType = "and" | "or";
export type FacilityReserveEditableUserType = "creator" | "member" | "grantuser";
export type RepeatEventType = "day" | "weekday" | "week" | "1stweek" | "2ndweek" | "3rdweek" | "4thweek" | "lastweek" | "month";
export type PublicType = "public" | "private" | "qualified";
export type EventTypeType = "normal" | "repeat" | "temporary" | "banner";
export type FacilityReserveCustomizeItemTypeType = "string" | "multiple_string" | "menu";

// [ComplexType]
// ScheduleGetEventVersionsRequestType
export interface ScheduleGetEventVersionsRequestTypeAttribute {
    start: string;
    end?: string;
    start_for_daily?: string;
    end_for_daily?: string;
}
export interface ScheduleGetEventVersionsRequestType {
    attributes: ScheduleGetEventVersionsRequestTypeAttribute;
    event_item?: base.ItemVersionType | base.ItemVersionType[];
}
// ScheduleGetEventVersionsResponseType
export interface ScheduleGetEventVersionsResponseType {
    
    event_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// ScheduleGetEventsRequestType
export interface ScheduleGetEventsRequestTypeAttribute {
    start: string;
    end: string;
    start_for_daily?: string;
    end_for_daily?: string;
}
export interface ScheduleGetEventsRequestType {
    attributes: ScheduleGetEventsRequestTypeAttribute;
}
// ScheduleGetEventsResponseType
export interface ScheduleGetEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleGetEventsByIdRequestType
export interface ScheduleGetEventsByIdRequestType {
    
    event_id: base.IDType | base.IDType[];
}
// ScheduleGetEventsByIdResponseType
export interface ScheduleGetEventsByIdResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleGetEventsByTargetRequestType
export interface ScheduleGetEventsByTargetRequestTypeAttribute {
    start: string;
    end: string;
    start_for_daily?: string;
    end_for_daily?: string;
}
export interface ScheduleGetEventsByTargetRequestTypeUserAttribute {
    id: base.IDType;
}
export interface ScheduleGetEventsByTargetRequestTypeUser {
    attributes: ScheduleGetEventsByTargetRequestTypeUserAttribute;
}
export interface ScheduleGetEventsByTargetRequestTypeGroupAttribute {
    id: base.IDType;
}
export interface ScheduleGetEventsByTargetRequestTypeGroup {
    attributes: ScheduleGetEventsByTargetRequestTypeGroupAttribute;
}
export interface ScheduleGetEventsByTargetRequestTypeFacilityAttribute {
    id: base.IDType;
}
export interface ScheduleGetEventsByTargetRequestTypeFacility {
    attributes: ScheduleGetEventsByTargetRequestTypeFacilityAttribute;
}
export interface ScheduleGetEventsByTargetRequestType {
    attributes: ScheduleGetEventsByTargetRequestTypeAttribute;
    user?: ScheduleGetEventsByTargetRequestTypeUser;
    group?: ScheduleGetEventsByTargetRequestTypeGroup;
    facility?: ScheduleGetEventsByTargetRequestTypeFacility;
}
// ScheduleGetEventsByTargetResponseType
export interface ScheduleGetEventsByTargetResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleAddEventsRequestType
export interface ScheduleAddEventsRequestType {
    
    request_token?: string;
    schedule_event: EventType | EventType[];
}
// ScheduleAddEventsResponseType
export interface ScheduleAddEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleModifyEventsRequestType
export interface ScheduleModifyEventsRequestType {
    
    request_token?: string;
    schedule_event: EventType | EventType[];
}
// ScheduleModifyEventsResponseType
export interface ScheduleModifyEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleModifyRepeatEventsOperationType
export interface ScheduleModifyRepeatEventsOperationTypeAttribute {
    type: ScheduleRepeatModifyType;
    date?: string;
}
export interface ScheduleModifyRepeatEventsOperationType {
    attributes: ScheduleModifyRepeatEventsOperationTypeAttribute;
    schedule_event: EventType;
}
// ScheduleModifyRepeatEventsResultType
export interface ScheduleModifyRepeatEventsResultType {
    
    original?: EventType;
    modified?: EventType;
}
// ScheduleModifyRepeatEventsRequestType
export interface ScheduleModifyRepeatEventsRequestType {
    
    request_token?: string;
    operation: ScheduleModifyRepeatEventsOperationType | ScheduleModifyRepeatEventsOperationType[];
}
// ScheduleModifyRepeatEventsResponseType
export interface ScheduleModifyRepeatEventsResponseType {
    
    result?: ScheduleModifyRepeatEventsResultType | ScheduleModifyRepeatEventsResultType[];
}
// ScheduleRemoveEventsRequestType
export interface ScheduleRemoveEventsRequestType {
    
    request_token?: string;
    event_id: base.IDType | base.IDType[];
}
// ScheduleRemoveEventsFromRepeatEventOperationType
export interface ScheduleRemoveEventsFromRepeatEventOperationTypeAttribute {
    event_id: base.IDType;
    type: ScheduleRepeatModifyType;
    date?: string;
}
export interface ScheduleRemoveEventsFromRepeatEventOperationType {
    attributes: ScheduleRemoveEventsFromRepeatEventOperationTypeAttribute;
}
// ScheduleRemoveEventsFromRepeatEventRequestType
export interface ScheduleRemoveEventsFromRepeatEventRequestType {
    
    request_token?: string;
    operation: ScheduleRemoveEventsFromRepeatEventOperationType | ScheduleRemoveEventsFromRepeatEventOperationType[];
}
// ScheduleRemoveEventsFromRepeatEventResponseType
export interface ScheduleRemoveEventsFromRepeatEventResponseType {
    
    result?: ScheduleModifyRepeatEventsResultType | ScheduleModifyRepeatEventsResultType[];
}
// ScheduleSearchEventsRequestType
export interface ScheduleSearchEventsRequestTypeAttribute {
    text: string;
    start?: string;
    end?: string;
    start_for_daily?: string;
    end_for_daily?: string;
    title_search: boolean;
    customer_search: boolean;
    memo_search: boolean;
    follow_search: boolean;
    all_repeat_events: boolean;
}
export interface ScheduleSearchEventsRequestType {
    attributes: ScheduleSearchEventsRequestTypeAttribute;
}
// ScheduleSearchEventsResponseType
export interface ScheduleSearchEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleSearchFreeTimesCandidateType
export interface ScheduleSearchFreeTimesCandidateTypeAttribute {
    start: string;
    end: string;
}
export interface ScheduleSearchFreeTimesCandidateType {
    attributes: ScheduleSearchFreeTimesCandidateTypeAttribute;
}
// ScheduleFreeTimeType
export interface ScheduleFreeTimeTypeAttribute {
    start: string;
    end: string;
    facility_id?: base.IDType;
}
export interface ScheduleFreeTimeType {
    attributes: ScheduleFreeTimeTypeAttribute;
}
// ScheduleSearchFreeTimesRequestType
export interface ScheduleSearchFreeTimesRequestTypeAttribute {
    search_time: string;
    search_condition: ScheduleSearchConditionType;
}
export interface ScheduleSearchFreeTimesRequestType {
    attributes: ScheduleSearchFreeTimesRequestTypeAttribute;
    candidate: ScheduleSearchFreeTimesCandidateType | ScheduleSearchFreeTimesCandidateType[];
    member: MemberType | MemberType[];
}
// ScheduleSearchFreeTimesResponseType
export interface ScheduleSearchFreeTimesResponseType {
    
    candidate?: ScheduleFreeTimeType | ScheduleFreeTimeType[];
}
// ScheduleFollowContentType
export interface ScheduleFollowContentTypeAttribute {
    event_id: base.IDType;
    content: string;
}
export interface ScheduleFollowContentType {
    attributes: ScheduleFollowContentTypeAttribute;
}
// ScheduleAddFollowsRequestType
export interface ScheduleAddFollowsRequestType {
    
    request_token?: string;
    follow: ScheduleFollowContentType | ScheduleFollowContentType[];
}
// ScheduleAddFollowsResponseType
export interface ScheduleAddFollowsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleFollowToRepeatEventContentType
export interface ScheduleFollowToRepeatEventContentTypeAttribute {
    event_id: base.IDType;
    date: string;
    content: string;
}
export interface ScheduleFollowToRepeatEventContentType {
    attributes: ScheduleFollowToRepeatEventContentTypeAttribute;
}
// ScheduleAddFollowsToRepeatEventResultType
export interface ScheduleAddFollowsToRepeatEventResultType {
    
    original?: EventType;
    modified?: EventType;
}
// ScheduleAddFollowsToRepeatEventRequestType
export interface ScheduleAddFollowsToRepeatEventRequestType {
    
    request_token?: string;
    follow: ScheduleFollowToRepeatEventContentType | ScheduleFollowToRepeatEventContentType[];
}
// ScheduleAddFollowsToRepeatEventResponseType
export interface ScheduleAddFollowsToRepeatEventResponseType {
    
    result?: ScheduleAddFollowsToRepeatEventResultType | ScheduleAddFollowsToRepeatEventResultType[];
}
// ScheduleRemoveFollowsRequestType
export interface ScheduleRemoveFollowsRequestType {
    
    request_token?: string;
    follow_id: base.IDType | base.IDType[];
}
// ScheduleCandidateItemType
export interface ScheduleCandidateItemTypeAttribute {
    event_id: base.IDType;
    start: string;
    end: string;
    facility_id?: base.IDType;
}
export interface ScheduleCandidateItemType {
    attributes: ScheduleCandidateItemTypeAttribute;
}
// ScheduleDetermineTemporaryEventsRequestType
export interface ScheduleDetermineTemporaryEventsRequestType {
    
    request_token?: string;
    candidate: ScheduleCandidateItemType | ScheduleCandidateItemType[];
}
// ScheduleDetermineTemporaryEventsResponseType
export interface ScheduleDetermineTemporaryEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleRemoveTemporaryEventCandidatesRequestType
export interface ScheduleRemoveTemporaryEventCandidatesRequestType {
    
    request_token?: string;
    candidate: ScheduleCandidateItemType | ScheduleCandidateItemType[];
}
// ScheduleRemoveTemporaryEventCandidatesResponseType
export interface ScheduleRemoveTemporaryEventCandidatesResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleParticipateEventsRequestType
export interface ScheduleParticipateEventsRequestType {
    
    request_token?: string;
    event_id: base.IDType | base.IDType[];
}
// ScheduleParticipateEventsResponseType
export interface ScheduleParticipateEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleParticipateEventsToRepeatEventOperationType
export interface ScheduleParticipateEventsToRepeatEventOperationTypeAttribute {
    event_id: base.IDType;
    type: ScheduleRepeatModifyType;
    date?: string;
}
export interface ScheduleParticipateEventsToRepeatEventOperationType {
    attributes: ScheduleParticipateEventsToRepeatEventOperationTypeAttribute;
}
// ScheduleParticipateEventsToRepeatEventRequestType
export interface ScheduleParticipateEventsToRepeatEventRequestType {
    
    request_token?: string;
    operation: ScheduleParticipateEventsToRepeatEventOperationType | ScheduleParticipateEventsToRepeatEventOperationType[];
}
// ScheduleParticipateEventsToRepeatEventResponseType
export interface ScheduleParticipateEventsToRepeatEventResponseType {
    
    result?: ScheduleModifyRepeatEventsResultType | ScheduleModifyRepeatEventsResultType[];
}
// ScheduleLeaveEventsRequestType
export interface ScheduleLeaveEventsRequestType {
    
    request_token?: string;
    event_id: base.IDType | base.IDType[];
}
// ScheduleLeaveEventsResponseType
export interface ScheduleLeaveEventsResponseType {
    
    schedule_event?: EventType | EventType[];
}
// ScheduleLeaveEventsFromRepeatEventRequestType
export interface ScheduleLeaveEventsFromRepeatEventRequestType {
    
    request_token?: string;
    operation: ScheduleRemoveEventsFromRepeatEventOperationType | ScheduleRemoveEventsFromRepeatEventOperationType[];
}
// ScheduleLeaveEventsFromRepeatEventResponseType
export interface ScheduleLeaveEventsFromRepeatEventResponseType {
    
    result?: ScheduleModifyRepeatEventsResultType | ScheduleModifyRepeatEventsResultType[];
}
// SchedulePersonalProfileType
export interface SchedulePersonalProfileTypeAttribute {
    start_time_in_dayview?: number;
    end_time_in_dayview?: number;
    show_sunday?: boolean;
    show_end_time?: boolean;
    plan_menu?: string;
    notify_mail?: boolean;
    is_user_address_mail?: boolean;
    notify_mail_address?: base.NonBlankStringType;
}
export interface SchedulePersonalProfileType {
    attributes: SchedulePersonalProfileTypeAttribute;
}
// ScheduleSystemProfileType
export interface ScheduleSystemProfileTypeAttribute {
    plan_menu?: string;
    event_reserve_unit?: number;
    event_repeat_max_time?: number;
    register_private_event?: boolean;
    show_memo?: boolean;
    show_private_event?: boolean;
    show_group_event?: boolean;
    show_holiday?: boolean;
    allow_file_attachment?: boolean;
    allow_attendance_check?: boolean;
}
export interface ScheduleSystemProfileType {
    attributes: ScheduleSystemProfileTypeAttribute;
}
// ScheduleGetProfilesRequestType
export interface ScheduleGetProfilesRequestTypeAttribute {
    include_system_profile?: boolean;
}
export interface ScheduleGetProfilesRequestType {
    attributes: ScheduleGetProfilesRequestTypeAttribute;
}
// ScheduleGetProfilesResponseType
export interface ScheduleGetProfilesResponseType {
    
    personal_profile?: SchedulePersonalProfileType;
    system_profile?: ScheduleSystemProfileType;
}
// ScheduleSetProfilesRequestType
export interface ScheduleSetProfilesRequestType {
    
    request_token?: string;
    personal_profile?: SchedulePersonalProfileType;
}
// ScheduleSetProfilesResponseType
export interface ScheduleSetProfilesResponseType {
    
    personal_profile?: SchedulePersonalProfileType;
}
// ScheduleGetFacilityVersionsRequestType
export interface ScheduleGetFacilityVersionsRequestType {
    
    facility_item?: base.ItemVersionType | base.ItemVersionType[];
}
// ScheduleGetFacilityVersionsResponseType
export interface ScheduleGetFacilityVersionsResponseType {
    
    facility_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// ScheduleGetFacilityProfileVersionsRequestType
export interface ScheduleGetFacilityProfileVersionsRequestType {
    
    facility_profile_item?: base.ItemVersionType | base.ItemVersionType[];
}
// ScheduleGetFacilityProfileVersionsResponseType
export interface ScheduleGetFacilityProfileVersionsResponseType {
    
    facility_profile_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// ScheduleGetFacilityProfilesByIdRequestType
export interface ScheduleGetFacilityProfilesByIdRequestType {
    
    facility_id?: base.IDType | base.IDType[];
}
// ScheduleGetFacilityProfilesByIdResponseType
export interface ScheduleGetFacilityProfilesByIdResponseType {
    
    facility_profile?: FacilityProfileType | FacilityProfileType[];
}
// ScheduleGetFacilitiesByIdRequestType
export interface ScheduleGetFacilitiesByIdRequestType {
    
    facility_id: base.IDType | base.IDType[];
}
// ScheduleGetFacilitiesByIdResponseType
export interface ScheduleGetFacilitiesByIdResponseType {
    
    facility?: FacilityType | FacilityType[];
}
// ScheduleGetFacilityGroupVersionsRequestType
export interface ScheduleGetFacilityGroupVersionsRequestType {
    
    facility_group_item?: base.ItemVersionType | base.ItemVersionType[];
}
// ScheduleGetFacilityGroupVersionsResponseType
export interface ScheduleGetFacilityGroupVersionsResponseType {
    
    facility_group_item?: base.ItemVersionResultType | base.ItemVersionResultType[];
}
// ScheduleGetFacilityGroupsByIdRequestType
export interface ScheduleGetFacilityGroupsByIdRequestType {
    
    facility_group_id: base.IDType | base.IDType[];
}
// ScheduleGetFacilityGroupsByIdResponseType
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    version: base.VersionType;
    order?: number;
    parent_facility_group?: base.IDType;
}
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroup {
    attributes: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupAttribute;
    facility_group?: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityGroup | ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityGroup[];
    facility?: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacility | ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacility[];
}
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityGroupAttribute {
    id: base.IDType;
}
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityGroup {
    attributes: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityGroupAttribute;
}
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityAttribute {
    id: base.IDType;
}
export interface ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacility {
    attributes: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroupFacilityAttribute;
}
export interface ScheduleGetFacilityGroupsByIdResponseType {
    
    facility_group?: ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroup | ScheduleGetFacilityGroupsByIdResponseTypeFacilityGroup[];
}
// ScheduleGetReadAllowUsersRequestType
export interface ScheduleGetReadAllowUsersRequestType {
    
}
// ScheduleGetReadAllowUsersResponseType
export interface ScheduleGetReadAllowUsersResponseType {
    
    user_id?: base.IDType | base.IDType[];
}
// ScheduleGetReadAllowGroupsRequestType
export interface ScheduleGetReadAllowGroupsRequestType {
    
}
// ScheduleGetReadAllowGroupsResponseType
export interface ScheduleGetReadAllowGroupsResponseType {
    
    group_id?: base.IDType | base.IDType[];
}
// ScheduleGetReadAllowFacilitiesRequestType
export interface ScheduleGetReadAllowFacilitiesRequestType {
    
}
// ScheduleGetReadAllowFacilitiesResponseType
export interface ScheduleGetReadAllowFacilitiesResponseType {
    
    facility_id?: base.IDType | base.IDType[];
}
// ScheduleGetAddAllowUsersRequestType
export interface ScheduleGetAddAllowUsersRequestType {
    
}
// ScheduleGetAddAllowUsersResponseType
export interface ScheduleGetAddAllowUsersResponseType {
    
    user_id?: base.IDType | base.IDType[];
}
// ScheduleGetAddAllowGroupsRequestType
export interface ScheduleGetAddAllowGroupsRequestType {
    
}
// ScheduleGetAddAllowGroupsResponseType
export interface ScheduleGetAddAllowGroupsResponseType {
    
    group_id?: base.IDType | base.IDType[];
}
// ScheduleGetAddAllowFacilitiesRequestType
export interface ScheduleGetAddAllowFacilitiesRequestType {
    
}
// ScheduleGetAddAllowFacilitiesResponseType
export interface ScheduleGetAddAllowFacilitiesResponseType {
    
    facility_id?: base.IDType | base.IDType[];
}
// ScheduleGetModifyAllowUsersRequestType
export interface ScheduleGetModifyAllowUsersRequestType {
    
}
// ScheduleGetModifyAllowUsersResponseType
export interface ScheduleGetModifyAllowUsersResponseType {
    
    user_id?: base.IDType | base.IDType[];
}
// ScheduleGetModifyAllowGroupsRequestType
export interface ScheduleGetModifyAllowGroupsRequestType {
    
}
// ScheduleGetModifyAllowGroupsResponseType
export interface ScheduleGetModifyAllowGroupsResponseType {
    
    group_id?: base.IDType | base.IDType[];
}
// ScheduleGetModifyAllowFacilitiesRequestType
export interface ScheduleGetModifyAllowFacilitiesRequestType {
    
}
// ScheduleGetModifyAllowFacilitiesResponseType
export interface ScheduleGetModifyAllowFacilitiesResponseType {
    
    facility_id?: base.IDType | base.IDType[];
}
// ScheduleGetRemoveAllowUsersRequestType
export interface ScheduleGetRemoveAllowUsersRequestType {
    
}
// ScheduleGetRemoveAllowUsersResponseType
export interface ScheduleGetRemoveAllowUsersResponseType {
    
    user_id?: base.IDType | base.IDType[];
}
// ScheduleGetRemoveAllowGroupsRequestType
export interface ScheduleGetRemoveAllowGroupsRequestType {
    
}
// ScheduleGetRemoveAllowGroupsResponseType
export interface ScheduleGetRemoveAllowGroupsResponseType {
    
    group_id?: base.IDType | base.IDType[];
}
// ScheduleGetRemoveAllowFacilitiesRequestType
export interface ScheduleGetRemoveAllowFacilitiesRequestType {
    
}
// ScheduleGetRemoveAllowFacilitiesResponseType
export interface ScheduleGetRemoveAllowFacilitiesResponseType {
    
    facility_id?: base.IDType | base.IDType[];
}
// ScheduleFileDownloadRequestType
export interface ScheduleFileDownloadRequestTypeAttribute {
    file_id: base.IDType;
}
export interface ScheduleFileDownloadRequestType {
    attributes: ScheduleFileDownloadRequestTypeAttribute;
}
// ScheduleFileDownloadResponseType
export interface ScheduleFileDownloadResponseType {
    
    file?: base.FileBodyType;
}
// EventType
export interface EventTypeAttribute {
    id: base.IDType;
    event_type: EventTypeType;
    version: base.VersionType;
    public_type?: PublicType;
    plan?: string;
    detail?: string;
    description?: string;
    timezone: string;
    end_timezone?: string;
    allday?: boolean;
    start_only?: boolean;
    hidden_private?: boolean;
    facility_using_purpose?: string;
}
export interface EventTypeMembers {
    
    member?: MemberType | MemberType[];
}
export interface EventTypeObservers {
    
    observer?: EventTypeObserversObserver | EventTypeObserversObserver[];
}
export interface EventTypeObserversObserverAttribute {
    id: base.IDType;
    order?: number;
}
export interface EventTypeObserversObserver {
    attributes: EventTypeObserversObserverAttribute;
}
export interface EventTypeCustomerAttribute {
    name?: string;
    yomi?: string;
    department?: string;
    zipcode?: string;
    address?: string;
    map?: string;
    route?: string;
    route_time?: string;
    route_fare?: string;
    phone?: string;
    fax?: string;
    url?: string;
}
export interface EventTypeCustomer {
    attributes: EventTypeCustomerAttribute;
}
export interface EventTypeRepeatInfo {
    
    condition: EventTypeRepeatInfoCondition;
    exclusive_datetimes?: EventTypeRepeatInfoExclusiveDatetimes;
}
export interface EventTypeRepeatInfoConditionAttribute {
    type: RepeatEventType;
    start_date: string;
    end_date?: string;
    start_time?: string;
    end_time?: string;
    day?: number;
    week?: number;
}
export interface EventTypeRepeatInfoCondition {
    attributes: EventTypeRepeatInfoConditionAttribute;
}
export interface EventTypeRepeatInfoExclusiveDatetimes {
    
    exclusive_datetime?: EventTypeRepeatInfoExclusiveDatetimesExclusiveDatetime | EventTypeRepeatInfoExclusiveDatetimesExclusiveDatetime[];
}
export interface EventTypeRepeatInfoExclusiveDatetimesExclusiveDatetimeAttribute {
    start: string;
    end: string;
}
export interface EventTypeRepeatInfoExclusiveDatetimesExclusiveDatetime {
    attributes: EventTypeRepeatInfoExclusiveDatetimesExclusiveDatetimeAttribute;
}
export interface EventTypeWhen {
    
    datetime: EventDateTimeType | EventDateTimeType[];
    date: EventDateType | EventDateType[];
}
export interface EventTypeFollows {
    
    follow?: EventTypeFollowsFollow | EventTypeFollowsFollow[];
}
export interface EventTypeFollowsFollowAttribute {
    id: base.IDType;
    version: base.VersionType;
    text?: string;
}
export interface EventTypeFollowsFollow {
    attributes: EventTypeFollowsFollowAttribute;
    creator: base.ChangeLogType;
}
export interface EventTypeFileAttribute {
    id: base.IDType;
    name: base.NonBlankStringType;
    size?: number;
    mime_type?: string;
}
export interface EventTypeFile {
    attributes: EventTypeFileAttribute;
    content?: Buffer;
}
export interface EventType {
    attributes: EventTypeAttribute;
    members?: EventTypeMembers;
    observers?: EventTypeObservers;
    customer?: EventTypeCustomer;
    repeat_info?: EventTypeRepeatInfo;
    when?: EventTypeWhen;
    follows?: EventTypeFollows;
    file?: EventTypeFile | EventTypeFile[];
    remove_file_id?: base.IDType | base.IDType[];
}
// MemberType
export interface MemberTypeUserAttribute {
    id: base.IDType;
    order?: number;
}
export interface MemberTypeUser {
    attributes: MemberTypeUserAttribute;
}
export interface MemberTypeOrganizationAttribute {
    id: base.IDType;
    order?: number;
}
export interface MemberTypeOrganization {
    attributes: MemberTypeOrganizationAttribute;
}
export interface MemberTypeFacilityAttribute {
    id: base.IDType;
    order?: number;
}
export interface MemberTypeFacility {
    attributes: MemberTypeFacilityAttribute;
}
export interface MemberType {
    
    user?: MemberTypeUser;
    organization?: MemberTypeOrganization;
    facility?: MemberTypeFacility;
}
// EventDateType
export interface EventDateTypeAttribute {
    start: string;
    end: string;
}
export interface EventDateType {
    attributes: EventDateTypeAttribute;
}
// EventDateTimeType
export interface EventDateTimeTypeAttribute {
    start: string;
    end?: string;
    facility_id?: base.IDType;
}
export interface EventDateTimeType {
    attributes: EventDateTimeTypeAttribute;
}
// SystemProfileType
export interface SystemProfileTypeAttribute {
    plan_menu: base.NonBlankStringType;
    event_reserve_unit: number;
    event_repeat_max_time: number;
    register_private_event: boolean;
    show_description: boolean;
    show_private_event: boolean;
    show_group_event: boolean;
    show_holiday: boolean;
}
export interface SystemProfileType {
    attributes: SystemProfileTypeAttribute;
}
// FacilityType
export interface FacilityTypeAttribute {
    key: base.IDType;
    name: base.NonBlankStringType;
    version: base.VersionType;
    order?: number;
    description?: string;
    belong_facility_group?: base.IDType;
}
export interface FacilityType {
    attributes: FacilityTypeAttribute;
}
// FacilityProfileType
export interface FacilityProfileTypeAttribute {
    key: base.IDType;
    approval_required: boolean;
}
export interface FacilityProfileType {
    attributes: FacilityProfileTypeAttribute;
}
