// This file is generated from WSDL.
/* tslint:disable:max-line-length */
import {soap} from "strong-soap";
import {RPC} from "./rpc";

import * as address from "./types/address";
import * as admin from "./types/admin";
import * as base from "./types/base";
import * as bulletin from "./types/bulletin";
import * as cabinet from "./types/cabinet";
import * as cbwebsrv from "./types/cbwebsrv";
import * as mail from "./types/mail";
import * as message from "./types/message";
import * as notification from "./types/notification";
import * as report from "./types/report";
import * as schedule from "./types/schedule";
import * as star from "./types/star";
import * as util_api from "./types/util_api";
import * as workflow from "./types/workflow";

export class GaroonClient {
    protected client: Promise<soap.Client & RPC>;

    public BaseGetUserVersions = (input: base.BaseGetUserVersionsRequestType): Promise<base.BaseGetUserVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetUserVersionsRequestType, base.BaseGetUserVersionsResponseType>(
                "BaseGetUserVersions", input, client.BaseService.BasePort.BaseGetUserVersions));

    public BaseGetUsersById = (input: base.BaseGetUsersByIdRequestType): Promise<base.BaseGetUsersByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetUsersByIdRequestType, base.BaseGetUsersByIdResponseType>(
                "BaseGetUsersById", input, client.BaseService.BasePort.BaseGetUsersById));

    public BaseGetUsersByLoginName = (input: base.BaseGetUsersByLoginNameRequestType): Promise<base.BaseGetUsersByLoginNameResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetUsersByLoginNameRequestType, base.BaseGetUsersByLoginNameResponseType>(
                "BaseGetUsersByLoginName", input, client.BaseService.BasePort.BaseGetUsersByLoginName));

    public BaseGetOrganizationVersions = (input: base.BaseGetOrganizationVersionsRequestType): Promise<base.BaseGetOrganizationVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetOrganizationVersionsRequestType, base.BaseGetOrganizationVersionsResponseType>(
                "BaseGetOrganizationVersions", input, client.BaseService.BasePort.BaseGetOrganizationVersions));

    public BaseGetOrganizationsById = (input: base.BaseGetOrganizationsByIdRequestType): Promise<base.BaseGetOrganizationsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetOrganizationsByIdRequestType, base.BaseGetOrganizationsByIdResponseType>(
                "BaseGetOrganizationsById", input, client.BaseService.BasePort.BaseGetOrganizationsById));

    public BaseGetMyGroupVersions = (input: base.BaseGetMyGroupVersionsRequestType): Promise<base.BaseGetMyGroupVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetMyGroupVersionsRequestType, base.BaseGetMyGroupVersionsResponseType>(
                "BaseGetMyGroupVersions", input, client.BaseService.BasePort.BaseGetMyGroupVersions));

    public BaseGetMyGroupsById = (input: base.BaseGetMyGroupsByIdRequestType): Promise<base.BaseGetMyGroupsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetMyGroupsByIdRequestType, base.BaseGetMyGroupsByIdResponseType>(
                "BaseGetMyGroupsById", input, client.BaseService.BasePort.BaseGetMyGroupsById));

    public BaseGetFrequentUsers = (input: base.BaseGetFrequentUsersRequestType): Promise<base.BaseGetFrequentUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetFrequentUsersRequestType, base.BaseGetFrequentUsersResponseType>(
                "BaseGetFrequentUsers", input, client.BaseService.BasePort.BaseGetFrequentUsers));

    public BaseGetFrequentOrganizations = (input: base.BaseGetFrequentOrganizationsRequestType): Promise<base.BaseGetFrequentOrganizationsResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetFrequentOrganizationsRequestType, base.BaseGetFrequentOrganizationsResponseType>(
                "BaseGetFrequentOrganizations", input, client.BaseService.BasePort.BaseGetFrequentOrganizations));

    public BaseGetCalendarEvents = (input: base.BaseGetCalendarEventsRequestType): Promise<base.BaseGetCalendarEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetCalendarEventsRequestType, base.BaseGetCalendarEventsResponseType>(
                "BaseGetCalendarEvents", input, client.BaseService.BasePort.BaseGetCalendarEvents));

    public BaseGetApplicationStatus = (input: base.BaseGetApplicationStatusRequestType): Promise<base.BaseGetApplicationStatusResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetApplicationStatusRequestType, base.BaseGetApplicationStatusResponseType>(
                "BaseGetApplicationStatus", input, client.BaseService.BasePort.BaseGetApplicationStatus));

    public BaseGetApplicationInformation = (input: base.BaseGetApplicationInformationRequestType): Promise<base.BaseGetApplicationInformationResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetApplicationInformationRequestType, base.BaseGetApplicationInformationResponseType>(
                "BaseGetApplicationInformation", input, client.BaseService.BasePort.BaseGetApplicationInformation));

    public BaseFileDownload = (input: base.BaseFileDownloadRequestType): Promise<base.BaseFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseFileDownloadRequestType, base.BaseFileDownloadResponseType>(
                "BaseFileDownload", input, client.BaseService.BasePort.BaseFileDownload));

    public BaseGetRegionsList = (input: base.BaseGetRegionsListRequestType): Promise<base.BaseGetRegionsListResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetRegionsListRequestType, base.BaseGetRegionsListResponseType>(
                "BaseGetRegionsList", input, client.BaseService.BasePort.BaseGetRegionsList));

    public BaseGetTimezoneVersion = (input: base.BaseGetTimezoneVersionRequestType): Promise<base.BaseGetTimezoneVersionResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseGetTimezoneVersionRequestType, base.BaseGetTimezoneVersionResponseType>(
                "BaseGetTimezoneVersion", input, client.BaseService.BasePort.BaseGetTimezoneVersion));

    public BaseManagerApplication = (input: base.BaseManagerApplicationRequestType): Promise<base.BaseManagerApplicationResponseType> =>
        this.client.then(client =>
            this.callMethod<base.BaseManagerApplicationRequestType, base.BaseManagerApplicationResponseType>(
                "BaseManagerApplication", input, client.BaseService.BasePort.BaseManagerApplication));

    public ScheduleGetEventVersions = (input: schedule.ScheduleGetEventVersionsRequestType): Promise<schedule.ScheduleGetEventVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetEventVersionsRequestType, schedule.ScheduleGetEventVersionsResponseType>(
                "ScheduleGetEventVersions", input, client.ScheduleService.SchedulePort.ScheduleGetEventVersions));

    public ScheduleGetEvents = (input: schedule.ScheduleGetEventsRequestType): Promise<schedule.ScheduleGetEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetEventsRequestType, schedule.ScheduleGetEventsResponseType>(
                "ScheduleGetEvents", input, client.ScheduleService.SchedulePort.ScheduleGetEvents));

    public ScheduleGetEventsById = (input: schedule.ScheduleGetEventsByIdRequestType): Promise<schedule.ScheduleGetEventsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetEventsByIdRequestType, schedule.ScheduleGetEventsByIdResponseType>(
                "ScheduleGetEventsById", input, client.ScheduleService.SchedulePort.ScheduleGetEventsById));

    public ScheduleGetEventsByTarget = (input: schedule.ScheduleGetEventsByTargetRequestType): Promise<schedule.ScheduleGetEventsByTargetResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetEventsByTargetRequestType, schedule.ScheduleGetEventsByTargetResponseType>(
                "ScheduleGetEventsByTarget", input, client.ScheduleService.SchedulePort.ScheduleGetEventsByTarget));

    public ScheduleAddEvents = (input: schedule.ScheduleAddEventsRequestType): Promise<schedule.ScheduleAddEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleAddEventsRequestType, schedule.ScheduleAddEventsResponseType>(
                "ScheduleAddEvents", input, client.ScheduleService.SchedulePort.ScheduleAddEvents));

    public ScheduleModifyEvents = (input: schedule.ScheduleModifyEventsRequestType): Promise<schedule.ScheduleModifyEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleModifyEventsRequestType, schedule.ScheduleModifyEventsResponseType>(
                "ScheduleModifyEvents", input, client.ScheduleService.SchedulePort.ScheduleModifyEvents));

    public ScheduleModifyRepeatEvents = (input: schedule.ScheduleModifyRepeatEventsRequestType): Promise<schedule.ScheduleModifyRepeatEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleModifyRepeatEventsRequestType, schedule.ScheduleModifyRepeatEventsResponseType>(
                "ScheduleModifyRepeatEvents", input, client.ScheduleService.SchedulePort.ScheduleModifyRepeatEvents));

    public ScheduleRemoveEvents = (input: schedule.ScheduleRemoveEventsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleRemoveEventsRequestType, void>(
                "ScheduleRemoveEvents", input, client.ScheduleService.SchedulePort.ScheduleRemoveEvents));

    public ScheduleRemoveEventsFromRepeatEvent = (input: schedule.ScheduleRemoveEventsFromRepeatEventRequestType): Promise<schedule.ScheduleRemoveEventsFromRepeatEventResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleRemoveEventsFromRepeatEventRequestType, schedule.ScheduleRemoveEventsFromRepeatEventResponseType>(
                "ScheduleRemoveEventsFromRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleRemoveEventsFromRepeatEvent));

    public ScheduleSearchEvents = (input: schedule.ScheduleSearchEventsRequestType): Promise<schedule.ScheduleSearchEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleSearchEventsRequestType, schedule.ScheduleSearchEventsResponseType>(
                "ScheduleSearchEvents", input, client.ScheduleService.SchedulePort.ScheduleSearchEvents));

    public ScheduleSearchFreeTimes = (input: schedule.ScheduleSearchFreeTimesRequestType): Promise<schedule.ScheduleSearchFreeTimesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleSearchFreeTimesRequestType, schedule.ScheduleSearchFreeTimesResponseType>(
                "ScheduleSearchFreeTimes", input, client.ScheduleService.SchedulePort.ScheduleSearchFreeTimes));

    public ScheduleAddFollows = (input: schedule.ScheduleAddFollowsRequestType): Promise<schedule.ScheduleAddFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleAddFollowsRequestType, schedule.ScheduleAddFollowsResponseType>(
                "ScheduleAddFollows", input, client.ScheduleService.SchedulePort.ScheduleAddFollows));

    public ScheduleAddFollowsToRepeatEvent = (input: schedule.ScheduleAddFollowsToRepeatEventRequestType): Promise<schedule.ScheduleAddFollowsToRepeatEventResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleAddFollowsToRepeatEventRequestType, schedule.ScheduleAddFollowsToRepeatEventResponseType>(
                "ScheduleAddFollowsToRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleAddFollowsToRepeatEvent));

    public ScheduleRemoveFollows = (input: schedule.ScheduleRemoveFollowsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleRemoveFollowsRequestType, void>(
                "ScheduleRemoveFollows", input, client.ScheduleService.SchedulePort.ScheduleRemoveFollows));

    public ScheduleDetermineTemporaryEvents = (input: schedule.ScheduleDetermineTemporaryEventsRequestType): Promise<schedule.ScheduleDetermineTemporaryEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleDetermineTemporaryEventsRequestType, schedule.ScheduleDetermineTemporaryEventsResponseType>(
                "ScheduleDetermineTemporaryEvents", input, client.ScheduleService.SchedulePort.ScheduleDetermineTemporaryEvents));

    public ScheduleRemoveTemporaryEventCandidates = (input: schedule.ScheduleRemoveTemporaryEventCandidatesRequestType): Promise<schedule.ScheduleRemoveTemporaryEventCandidatesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleRemoveTemporaryEventCandidatesRequestType, schedule.ScheduleRemoveTemporaryEventCandidatesResponseType>(
                "ScheduleRemoveTemporaryEventCandidates", input, client.ScheduleService.SchedulePort.ScheduleRemoveTemporaryEventCandidates));

    public ScheduleParticipateEvents = (input: schedule.ScheduleParticipateEventsRequestType): Promise<schedule.ScheduleParticipateEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleParticipateEventsRequestType, schedule.ScheduleParticipateEventsResponseType>(
                "ScheduleParticipateEvents", input, client.ScheduleService.SchedulePort.ScheduleParticipateEvents));

    public ScheduleParticipateEventsToRepeatEvent = (input: schedule.ScheduleParticipateEventsToRepeatEventRequestType): Promise<schedule.ScheduleParticipateEventsToRepeatEventResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleParticipateEventsToRepeatEventRequestType, schedule.ScheduleParticipateEventsToRepeatEventResponseType>(
                "ScheduleParticipateEventsToRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleParticipateEventsToRepeatEvent));

    public ScheduleLeaveEvents = (input: schedule.ScheduleLeaveEventsRequestType): Promise<schedule.ScheduleLeaveEventsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleLeaveEventsRequestType, schedule.ScheduleLeaveEventsResponseType>(
                "ScheduleLeaveEvents", input, client.ScheduleService.SchedulePort.ScheduleLeaveEvents));

    public ScheduleLeaveEventsFromRepeatEvent = (input: schedule.ScheduleLeaveEventsFromRepeatEventRequestType): Promise<schedule.ScheduleLeaveEventsFromRepeatEventResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleLeaveEventsFromRepeatEventRequestType, schedule.ScheduleLeaveEventsFromRepeatEventResponseType>(
                "ScheduleLeaveEventsFromRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleLeaveEventsFromRepeatEvent));

    public ScheduleGetProfiles = (input: schedule.ScheduleGetProfilesRequestType): Promise<schedule.ScheduleGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetProfilesRequestType, schedule.ScheduleGetProfilesResponseType>(
                "ScheduleGetProfiles", input, client.ScheduleService.SchedulePort.ScheduleGetProfiles));

    public ScheduleSetProfiles = (input: schedule.ScheduleSetProfilesRequestType): Promise<schedule.ScheduleSetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleSetProfilesRequestType, schedule.ScheduleSetProfilesResponseType>(
                "ScheduleSetProfiles", input, client.ScheduleService.SchedulePort.ScheduleSetProfiles));

    public ScheduleGetFacilityVersions = (input: schedule.ScheduleGetFacilityVersionsRequestType): Promise<schedule.ScheduleGetFacilityVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilityVersionsRequestType, schedule.ScheduleGetFacilityVersionsResponseType>(
                "ScheduleGetFacilityVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityVersions));

    public ScheduleGetFacilityProfileVersions = (input: schedule.ScheduleGetFacilityProfileVersionsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilityProfileVersionsRequestType, void>(
                "ScheduleGetFacilityProfileVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityProfileVersions));

    public ScheduleGetFacilityProfilesById = (input: schedule.ScheduleGetFacilityProfilesByIdRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilityProfilesByIdRequestType, void>(
                "ScheduleGetFacilityProfilesById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityProfilesById));

    public ScheduleGetFacilitiesById = (input: schedule.ScheduleGetFacilitiesByIdRequestType): Promise<schedule.ScheduleGetFacilitiesByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilitiesByIdRequestType, schedule.ScheduleGetFacilitiesByIdResponseType>(
                "ScheduleGetFacilitiesById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilitiesById));

    public ScheduleGetFacilityGroupsVersions = (input: schedule.ScheduleGetFacilityGroupVersionsRequestType): Promise<schedule.ScheduleGetFacilityGroupVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilityGroupVersionsRequestType, schedule.ScheduleGetFacilityGroupVersionsResponseType>(
                "ScheduleGetFacilityGroupsVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityGroupsVersions));

    public ScheduleGetFacilityGroupsById = (input: schedule.ScheduleGetFacilityGroupsByIdRequestType): Promise<schedule.ScheduleGetFacilityGroupsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetFacilityGroupsByIdRequestType, schedule.ScheduleGetFacilityGroupsByIdResponseType>(
                "ScheduleGetFacilityGroupsById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityGroupsById));

    public ScheduleGetReadAllowUsers = (input: schedule.ScheduleGetReadAllowUsersRequestType): Promise<schedule.ScheduleGetReadAllowUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetReadAllowUsersRequestType, schedule.ScheduleGetReadAllowUsersResponseType>(
                "ScheduleGetReadAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowUsers));

    public ScheduleGetReadAllowGroups = (input: schedule.ScheduleGetReadAllowGroupsRequestType): Promise<schedule.ScheduleGetReadAllowGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetReadAllowGroupsRequestType, schedule.ScheduleGetReadAllowGroupsResponseType>(
                "ScheduleGetReadAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowGroups));

    public ScheduleGetReadAllowFacilities = (input: schedule.ScheduleGetReadAllowFacilitiesRequestType): Promise<schedule.ScheduleGetReadAllowFacilitiesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetReadAllowFacilitiesRequestType, schedule.ScheduleGetReadAllowFacilitiesResponseType>(
                "ScheduleGetReadAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowFacilities));

    public ScheduleGetAddAllowUsers = (input: schedule.ScheduleGetAddAllowUsersRequestType): Promise<schedule.ScheduleGetAddAllowUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetAddAllowUsersRequestType, schedule.ScheduleGetAddAllowUsersResponseType>(
                "ScheduleGetAddAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowUsers));

    public ScheduleGetAddAllowGroups = (input: schedule.ScheduleGetAddAllowGroupsRequestType): Promise<schedule.ScheduleGetAddAllowGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetAddAllowGroupsRequestType, schedule.ScheduleGetAddAllowGroupsResponseType>(
                "ScheduleGetAddAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowGroups));

    public ScheduleGetAddAllowFacilities = (input: schedule.ScheduleGetAddAllowFacilitiesRequestType): Promise<schedule.ScheduleGetAddAllowFacilitiesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetAddAllowFacilitiesRequestType, schedule.ScheduleGetAddAllowFacilitiesResponseType>(
                "ScheduleGetAddAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowFacilities));

    public ScheduleGetModifyAllowUsers = (input: schedule.ScheduleGetModifyAllowUsersRequestType): Promise<schedule.ScheduleGetModifyAllowUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetModifyAllowUsersRequestType, schedule.ScheduleGetModifyAllowUsersResponseType>(
                "ScheduleGetModifyAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowUsers));

    public ScheduleGetModifyAllowGroups = (input: schedule.ScheduleGetModifyAllowGroupsRequestType): Promise<schedule.ScheduleGetModifyAllowGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetModifyAllowGroupsRequestType, schedule.ScheduleGetModifyAllowGroupsResponseType>(
                "ScheduleGetModifyAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowGroups));

    public ScheduleGetModifyAllowFacilities = (input: schedule.ScheduleGetModifyAllowFacilitiesRequestType): Promise<schedule.ScheduleGetModifyAllowFacilitiesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetModifyAllowFacilitiesRequestType, schedule.ScheduleGetModifyAllowFacilitiesResponseType>(
                "ScheduleGetModifyAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowFacilities));

    public ScheduleGetRemoveAllowUsers = (input: schedule.ScheduleGetRemoveAllowUsersRequestType): Promise<schedule.ScheduleGetRemoveAllowUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetRemoveAllowUsersRequestType, schedule.ScheduleGetRemoveAllowUsersResponseType>(
                "ScheduleGetRemoveAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowUsers));

    public ScheduleGetRemoveAllowGroups = (input: schedule.ScheduleGetRemoveAllowGroupsRequestType): Promise<schedule.ScheduleGetRemoveAllowGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetRemoveAllowGroupsRequestType, schedule.ScheduleGetRemoveAllowGroupsResponseType>(
                "ScheduleGetRemoveAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowGroups));

    public ScheduleGetRemoveAllowFacilities = (input: schedule.ScheduleGetRemoveAllowFacilitiesRequestType): Promise<schedule.ScheduleGetRemoveAllowFacilitiesResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleGetRemoveAllowFacilitiesRequestType, schedule.ScheduleGetRemoveAllowFacilitiesResponseType>(
                "ScheduleGetRemoveAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowFacilities));

    public ScheduleFileDownload = (input: schedule.ScheduleFileDownloadRequestType): Promise<schedule.ScheduleFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<schedule.ScheduleFileDownloadRequestType, schedule.ScheduleFileDownloadResponseType>(
                "ScheduleFileDownload", input, client.ScheduleService.SchedulePort.ScheduleFileDownload));

    public AddressGetPersonalCardVersions = (input: address.AddressGetPersonalCardVersionsRequestType): Promise<address.AddressGetPersonalCardVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetPersonalCardVersionsRequestType, address.AddressGetPersonalCardVersionsResponseType>(
                "AddressGetPersonalCardVersions", input, client.AddressService.AddressPort.AddressGetPersonalCardVersions));

    public AddressGetPersonalCardsById = (input: address.AddressGetPersonalCardsByIdRequestType): Promise<address.AddressGetPersonalCardsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetPersonalCardsByIdRequestType, address.AddressGetPersonalCardsByIdResponseType>(
                "AddressGetPersonalCardsById", input, client.AddressService.AddressPort.AddressGetPersonalCardsById));

    public AddressGetSharedCardVersions = (input: address.AddressGetSharedCardVersionsRequestType): Promise<address.AddressGetSharedCardVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetSharedCardVersionsRequestType, address.AddressGetSharedCardVersionsResponseType>(
                "AddressGetSharedCardVersions", input, client.AddressService.AddressPort.AddressGetSharedCardVersions));

    public AddressGetSharedCardsById = (input: address.AddressGetSharedCardsByIdRequestType): Promise<address.AddressGetSharedCardsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetSharedCardsByIdRequestType, address.AddressGetSharedCardsByIdResponseType>(
                "AddressGetSharedCardsById", input, client.AddressService.AddressPort.AddressGetSharedCardsById));

    public AddressGetPersonalBookVersions = (input: address.AddressGetPersonalBookVersionsRequestType): Promise<address.AddressGetPersonalBookVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetPersonalBookVersionsRequestType, address.AddressGetPersonalBookVersionsResponseType>(
                "AddressGetPersonalBookVersions", input, client.AddressService.AddressPort.AddressGetPersonalBookVersions));

    public AddressGetPersonalBooksById = (input: address.AddressGetPersonalBooksByIdRequestType): Promise<address.AddressGetPersonalBooksByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetPersonalBooksByIdRequestType, address.AddressGetPersonalBooksByIdResponseType>(
                "AddressGetPersonalBooksById", input, client.AddressService.AddressPort.AddressGetPersonalBooksById));

    public AddressGetSharedBookVersions = (input: address.AddressGetSharedBookVersionsRequestType): Promise<address.AddressGetSharedBookVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetSharedBookVersionsRequestType, address.AddressGetSharedBookVersionsResponseType>(
                "AddressGetSharedBookVersions", input, client.AddressService.AddressPort.AddressGetSharedBookVersions));

    public AddressGetSharedBooksById = (input: address.AddressGetSharedBooksByIdRequestType): Promise<address.AddressGetSharedBooksByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetSharedBooksByIdRequestType, address.AddressGetSharedBooksByIdResponseType>(
                "AddressGetSharedBooksById", input, client.AddressService.AddressPort.AddressGetSharedBooksById));

    public AddressAddCards = (input: address.AddressAddCardsRequestType): Promise<address.AddressAddCardsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressAddCardsRequestType, address.AddressAddCardsResponseType>(
                "AddressAddCards", input, client.AddressService.AddressPort.AddressAddCards));

    public AddressModifyCards = (input: address.AddressModifyCardsRequestType): Promise<address.AddressModifyCardsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressModifyCardsRequestType, address.AddressModifyCardsResponseType>(
                "AddressModifyCards", input, client.AddressService.AddressPort.AddressModifyCards));

    public AddressRemovePersonalCards = (input: address.AddressRemovePersonalCardsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<address.AddressRemovePersonalCardsRequestType, void>(
                "AddressRemovePersonalCards", input, client.AddressService.AddressPort.AddressRemovePersonalCards));

    public AddressRemoveSharedCards = (input: address.AddressRemoveSharedCardsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<address.AddressRemoveSharedCardsRequestType, void>(
                "AddressRemoveSharedCards", input, client.AddressService.AddressPort.AddressRemoveSharedCards));

    public AddressSearchCards = (input: address.AddressSearchCardsRequestType): Promise<address.AddressSearchCardsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressSearchCardsRequestType, address.AddressSearchCardsResponseType>(
                "AddressSearchCards", input, client.AddressService.AddressPort.AddressSearchCards));

    public AddressCopyPersonalCardsToOtherBook = (input: address.AddressCopyPersonalCardsToOtherBookRequestType): Promise<address.AddressCopyPersonalCardsToOtherBookResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressCopyPersonalCardsToOtherBookRequestType, address.AddressCopyPersonalCardsToOtherBookResponseType>(
                "AddressCopyPersonalCardsToOtherBook", input, client.AddressService.AddressPort.AddressCopyPersonalCardsToOtherBook));

    public AddressGetMyAddressGroupVersions = (input: address.AddressGetMyAddressGroupVersionsRequestType): Promise<address.AddressGetMyAddressGroupVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetMyAddressGroupVersionsRequestType, address.AddressGetMyAddressGroupVersionsResponseType>(
                "AddressGetMyAddressGroupVersions", input, client.AddressService.AddressPort.AddressGetMyAddressGroupVersions));

    public AddressGetMyAddressGroupsById = (input: address.AddressGetMyAddressGroupsByIdRequestType): Promise<address.AddressGetMyAddressGroupsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetMyAddressGroupsByIdRequestType, address.AddressGetMyAddressGroupsByIdResponseType>(
                "AddressGetMyAddressGroupsById", input, client.AddressService.AddressPort.AddressGetMyAddressGroupsById));

    public AddressAddMyAddressGroups = (input: address.AddressAddMyAddressGroupsRequestType): Promise<address.AddressAddMyAddressGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressAddMyAddressGroupsRequestType, address.AddressAddMyAddressGroupsResponseType>(
                "AddressAddMyAddressGroups", input, client.AddressService.AddressPort.AddressAddMyAddressGroups));

    public AddressModifyMyAddressGroups = (input: address.AddressModifyMyAddressGroupsRequestType): Promise<address.AddressModifyMyAddressGroupsResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressModifyMyAddressGroupsRequestType, address.AddressModifyMyAddressGroupsResponseType>(
                "AddressModifyMyAddressGroups", input, client.AddressService.AddressPort.AddressModifyMyAddressGroups));

    public AddressRemoveMyAddressGroups = (input: address.AddressRemoveMyAddressGroupsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<address.AddressRemoveMyAddressGroupsRequestType, void>(
                "AddressRemoveMyAddressGroups", input, client.AddressService.AddressPort.AddressRemoveMyAddressGroups));

    public AddressModifyCardsInMyAddressGroup = (input: address.AddressModifyCardsInMyAddressGroupRequestType): Promise<address.AddressModifyCardsInMyAddressGroupResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressModifyCardsInMyAddressGroupRequestType, address.AddressModifyCardsInMyAddressGroupResponseType>(
                "AddressModifyCardsInMyAddressGroup", input, client.AddressService.AddressPort.AddressModifyCardsInMyAddressGroup));

    public AddressGetProfiles = (input: address.AddressGetProfilesRequestType): Promise<address.AddressGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetProfilesRequestType, address.AddressGetProfilesResponseType>(
                "AddressGetProfiles", input, client.AddressService.AddressPort.AddressGetProfiles));

    public AddressSetProfiles = (input: address.AddressSetProfilesRequestType): Promise<address.AddressSetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressSetProfilesRequestType, address.AddressSetProfilesResponseType>(
                "AddressSetProfiles", input, client.AddressService.AddressPort.AddressSetProfiles));

    public AddressGetReadAllowBooks = (input: address.AddressGetReadAllowBooksRequestType): Promise<address.AddressGetReadAllowBooksResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetReadAllowBooksRequestType, address.AddressGetReadAllowBooksResponseType>(
                "AddressGetReadAllowBooks", input, client.AddressService.AddressPort.AddressGetReadAllowBooks));

    public AddressGetModifyAllowBooks = (input: address.AddressGetModifyAllowBooksRequestType): Promise<address.AddressGetModifyAllowBooksResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressGetModifyAllowBooksRequestType, address.AddressGetModifyAllowBooksResponseType>(
                "AddressGetModifyAllowBooks", input, client.AddressService.AddressPort.AddressGetModifyAllowBooks));

    public AddressFileDownload = (input: address.AddressFileDownloadRequestType): Promise<address.AddressFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<address.AddressFileDownloadRequestType, address.AddressFileDownloadResponseType>(
                "AddressFileDownload", input, client.AddressService.AddressPort.AddressFileDownload));

    public WorkflowGetUnprocessedApplicationVersions = (input: workflow.WorkflowGetUnprocessedApplicationVersionsRequestType): Promise<workflow.WorkflowGetUnprocessedApplicationVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetUnprocessedApplicationVersionsRequestType, workflow.WorkflowGetUnprocessedApplicationVersionsResponseType>(
                "WorkflowGetUnprocessedApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetUnprocessedApplicationVersions));

    public WorkflowGetUnprocessedApplicationsById = (input: workflow.WorkflowGetUnprocessedApplicationsByIdRequestType): Promise<workflow.WorkflowGetUnprocessedApplicationsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetUnprocessedApplicationsByIdRequestType, workflow.WorkflowGetUnprocessedApplicationsByIdResponseType>(
                "WorkflowGetUnprocessedApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetUnprocessedApplicationsById));

    public WorkflowGetSentApplicationVersions = (input: workflow.WorkflowGetSentApplicationVersionsRequestType): Promise<workflow.WorkflowGetSentApplicationVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetSentApplicationVersionsRequestType, workflow.WorkflowGetSentApplicationVersionsResponseType>(
                "WorkflowGetSentApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetSentApplicationVersions));

    public WorkflowGetSentApplicationsById = (input: workflow.WorkflowGetSentApplicationsByIdRequestType): Promise<workflow.WorkflowGetSentApplicationsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetSentApplicationsByIdRequestType, workflow.WorkflowGetSentApplicationsByIdResponseType>(
                "WorkflowGetSentApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetSentApplicationsById));

    public WorkflowGetReceivedApplicationVersions = (input: workflow.WorkflowGetReceivedApplicationVersionsRequestType): Promise<workflow.WorkflowGetReceivedApplicationVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetReceivedApplicationVersionsRequestType, workflow.WorkflowGetReceivedApplicationVersionsResponseType>(
                "WorkflowGetReceivedApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetReceivedApplicationVersions));

    public WorkflowGetReceivedApplicationsById = (input: workflow.WorkflowGetReceivedApplicationsByIdRequestType): Promise<workflow.WorkflowGetReceivedApplicationsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetReceivedApplicationsByIdRequestType, workflow.WorkflowGetReceivedApplicationsByIdResponseType>(
                "WorkflowGetReceivedApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetReceivedApplicationsById));

    public WorkflowGetApprovalDelegators = (input: workflow.WorkflowGetApprovalDelegatorsRequestType): Promise<workflow.WorkflowGetApprovalDelegatorsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetApprovalDelegatorsRequestType, workflow.WorkflowGetApprovalDelegatorsResponseType>(
                "WorkflowGetApprovalDelegators", input, client.WorkflowService.WorkflowPort.WorkflowGetApprovalDelegators));

    public WorkflowGetProxyApprovalsByDelegatorId = (input: workflow.WorkflowGetProxyApprovalsByDelegatorIdRequestType): Promise<workflow.WorkflowGetProxyApprovalsByDelegatorIdResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetProxyApprovalsByDelegatorIdRequestType, workflow.WorkflowGetProxyApprovalsByDelegatorIdResponseType>(
                "WorkflowGetProxyApprovalsByDelegatorId", input, client.WorkflowService.WorkflowPort.WorkflowGetProxyApprovalsByDelegatorId));

    public WorkflowGetPendingApprovals = (input: workflow.WorkflowGetPendingApprovalsRequestType): Promise<workflow.WorkflowGetPendingApprovalsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetPendingApprovalsRequestType, workflow.WorkflowGetPendingApprovalsResponseType>(
                "WorkflowGetPendingApprovals", input, client.WorkflowService.WorkflowPort.WorkflowGetPendingApprovals));

    public WorkflowHandleApplications = (input: workflow.WorkflowHandleApplicationsRequestType): Promise<workflow.WorkflowHandleApplicationsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowHandleApplicationsRequestType, workflow.WorkflowHandleApplicationsResponseType>(
                "WorkflowHandleApplications", input, client.WorkflowService.WorkflowPort.WorkflowHandleApplications));

    public WorkflowGetProxies = (input: workflow.WorkflowGetProxiesRequestType): Promise<workflow.WorkflowGetProxiesResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetProxiesRequestType, workflow.WorkflowGetProxiesResponseType>(
                "WorkflowGetProxies", input, client.WorkflowService.WorkflowPort.WorkflowGetProxies));

    public WorkflowSetProxies = (input: workflow.WorkflowSetProxiesRequestType): Promise<workflow.WorkflowSetProxiesResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowSetProxiesRequestType, workflow.WorkflowSetProxiesResponseType>(
                "WorkflowSetProxies", input, client.WorkflowService.WorkflowPort.WorkflowSetProxies));

    public WorkflowGetProfiles = (input: workflow.WorkflowGetProfilesRequestType): Promise<workflow.WorkflowGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetProfilesRequestType, workflow.WorkflowGetProfilesResponseType>(
                "WorkflowGetProfiles", input, client.WorkflowService.WorkflowPort.WorkflowGetProfiles));

    public WorkflowFileDownload = (input: workflow.WorkflowFileDownloadRequestType): Promise<workflow.WorkflowFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowFileDownloadRequestType, workflow.WorkflowFileDownloadResponseType>(
                "WorkflowFileDownload", input, client.WorkflowService.WorkflowPort.WorkflowFileDownload));

    public WorkflowGetRequests = (input: workflow.WorkflowGetRequestsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetRequestsRequestType, void>(
                "WorkflowGetRequests", input, client.WorkflowService.WorkflowPort.WorkflowGetRequests));

    public WorkflowGetRequestById = (input: workflow.WorkflowGetRequestByIdRequestType): Promise<workflow.WorkflowGetRequestByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetRequestByIdRequestType, workflow.WorkflowGetRequestByIdResponseType>(
                "WorkflowGetRequestById", input, client.WorkflowService.WorkflowPort.WorkflowGetRequestById));

    public WorkflowGetAvailabilityUsers = (input: workflow.WorkflowGetAvailabilityUsersRequestType): Promise<workflow.WorkflowGetAvailabilityUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetAvailabilityUsersRequestType, workflow.WorkflowGetAvailabilityUsersResponseType>(
                "WorkflowGetAvailabilityUsers", input, client.WorkflowService.WorkflowPort.WorkflowGetAvailabilityUsers));

    public WorkflowGetAttachedFileBody = (input: workflow.WorkflowGetAttachedFileBodyRequestType): Promise<workflow.WorkflowGetListCategoryResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetAttachedFileBodyRequestType, workflow.WorkflowGetListCategoryResponseType>(
                "WorkflowGetAttachedFileBody", input, client.WorkflowService.WorkflowPort.WorkflowGetAttachedFileBody));

    public WorkflowGetCategories = (input: workflow.WorkflowGetListCategoryRequestType): Promise<workflow.WorkflowGetListCategoryResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetListCategoryRequestType, workflow.WorkflowGetListCategoryResponseType>(
                "WorkflowGetCategories", input, client.WorkflowService.WorkflowPort.WorkflowGetCategories));

    public WorkflowGetRequestFormByCategoryIds = (input: workflow.WorkflowGetRequestFormByCategoryIdsRequestType): Promise<workflow.WorkflowGetRequestFormByCategoryIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<workflow.WorkflowGetRequestFormByCategoryIdsRequestType, workflow.WorkflowGetRequestFormByCategoryIdsResponseType>(
                "WorkflowGetRequestFormByCategoryIds", input, client.WorkflowService.WorkflowPort.WorkflowGetRequestFormByCategoryIds));

    public MailGetAccountVersions = (input: mail.MailGetAccountVersionsRequestType): Promise<mail.MailGetAccountVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetAccountVersionsRequestType, mail.MailGetAccountVersionsResponseType>(
                "MailGetAccountVersions", input, client.MailService.MailPort.MailGetAccountVersions));

    public MailGetAccountsById = (input: mail.MailGetAccountsByIdRequestType): Promise<mail.MailGetAccountsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetAccountsByIdRequestType, mail.MailGetAccountsByIdResponseType>(
                "MailGetAccountsById", input, client.MailService.MailPort.MailGetAccountsById));

    public MailGetMailVersions = (input: mail.MailGetMailVersionsRequestType): Promise<mail.MailGetMailVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetMailVersionsRequestType, mail.MailGetMailVersionsResponseType>(
                "MailGetMailVersions", input, client.MailService.MailPort.MailGetMailVersions));

    public MailGetMailsById = (input: mail.MailGetMailsByIdRequestType): Promise<mail.MailGetMailsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetMailsByIdRequestType, mail.MailGetMailsByIdResponseType>(
                "MailGetMailsById", input, client.MailService.MailPort.MailGetMailsById));

    public MailSendMails = (input: mail.MailSendMailsRequestType): Promise<mail.MailSendMailsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailSendMailsRequestType, mail.MailSendMailsResponseType>(
                "MailSendMails", input, client.MailService.MailPort.MailSendMails));

    public MailReplyMails = (input: mail.MailReplyMailsRequestType): Promise<mail.MailReplyMailsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailReplyMailsRequestType, mail.MailReplyMailsResponseType>(
                "MailReplyMails", input, client.MailService.MailPort.MailReplyMails));

    public MailForwardMails = (input: mail.MailForwardMailsRequestType): Promise<mail.MailForwardMailsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailForwardMailsRequestType, mail.MailForwardMailsResponseType>(
                "MailForwardMails", input, client.MailService.MailPort.MailForwardMails));

    public MailSaveDraftMails = (input: mail.MailSaveDraftMailsRequestType): Promise<mail.MailSaveDraftMailsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailSaveDraftMailsRequestType, mail.MailSaveDraftMailsResponseType>(
                "MailSaveDraftMails", input, client.MailService.MailPort.MailSaveDraftMails));

    public MailRemoveMails = (input: mail.MailRemoveMailsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<mail.MailRemoveMailsRequestType, void>(
                "MailRemoveMails", input, client.MailService.MailPort.MailRemoveMails));

    public MailSearchMails = (input: mail.MailSearchMailsRequestType): Promise<mail.MailSearchMailsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailSearchMailsRequestType, mail.MailSearchMailsResponseType>(
                "MailSearchMails", input, client.MailService.MailPort.MailSearchMails));

    public MailOpenDispositionNotifications = (input: mail.MailOpenDispositionNotificationsRequestType): Promise<mail.MailOpenDispositionNotificationsResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailOpenDispositionNotificationsRequestType, mail.MailOpenDispositionNotificationsResponseType>(
                "MailOpenDispositionNotifications", input, client.MailService.MailPort.MailOpenDispositionNotifications));

    public MailAddFolders = (input: mail.MailAddFoldersRequestType): Promise<mail.MailAddFoldersResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailAddFoldersRequestType, mail.MailAddFoldersResponseType>(
                "MailAddFolders", input, client.MailService.MailPort.MailAddFolders));

    public MailModifyFolders = (input: mail.MailModifyFoldersRequestType): Promise<mail.MailModifyFoldersResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailModifyFoldersRequestType, mail.MailModifyFoldersResponseType>(
                "MailModifyFolders", input, client.MailService.MailPort.MailModifyFolders));

    public MailRemoveFolders = (input: mail.MailRemoveFoldersRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<mail.MailRemoveFoldersRequestType, void>(
                "MailRemoveFolders", input, client.MailService.MailPort.MailRemoveFolders));

    public MailMoveMailsToOtherFolder = (input: mail.MailMoveMailsToOtherFolderRequestType): Promise<mail.MailMoveMailsToOtherFolderResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailMoveMailsToOtherFolderRequestType, mail.MailMoveMailsToOtherFolderResponseType>(
                "MailMoveMailsToOtherFolder", input, client.MailService.MailPort.MailMoveMailsToOtherFolder));

    public MailGetSignatures = (input: mail.MailGetSignaturesRequestType): Promise<mail.MailGetSignaturesResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetSignaturesRequestType, mail.MailGetSignaturesResponseType>(
                "MailGetSignatures", input, client.MailService.MailPort.MailGetSignatures));

    public MailGetFilters = (input: mail.MailGetFiltersRequestType): Promise<mail.MailGetFiltersResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetFiltersRequestType, mail.MailGetFiltersResponseType>(
                "MailGetFilters", input, client.MailService.MailPort.MailGetFilters));

    public MailGetProfiles = (input: mail.MailGetProfilesRequestType): Promise<mail.MailGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetProfilesRequestType, mail.MailGetProfilesResponseType>(
                "MailGetProfiles", input, client.MailService.MailPort.MailGetProfiles));

    public MailSetProfiles = (input: mail.MailSetProfilesRequestType): Promise<mail.MailSetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailSetProfilesRequestType, mail.MailSetProfilesResponseType>(
                "MailSetProfiles", input, client.MailService.MailPort.MailSetProfiles));

    public MailSourceDownload = (input: mail.MailSourceDownloadRequestType): Promise<mail.MailSourceDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailSourceDownloadRequestType, mail.MailSourceDownloadResponseType>(
                "MailSourceDownload", input, client.MailService.MailPort.MailSourceDownload));

    public MailFileDownload = (input: mail.MailFileDownloadRequestType): Promise<mail.MailFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailFileDownloadRequestType, mail.MailFileDownloadResponseType>(
                "MailFileDownload", input, client.MailService.MailPort.MailFileDownload));

    public MailCreateUserAccount = (input: mail.MailCreateUserAccountRequestType): Promise<mail.MailCreateUserAccountResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailCreateUserAccountRequestType, mail.MailCreateUserAccountResponseType>(
                "MailCreateUserAccount", input, client.MailService.MailPort.MailCreateUserAccount));

    public MailEditUserAccount = (input: mail.MailEditUserAccountRequestType): Promise<mail.MailEditUserAccountResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailEditUserAccountRequestType, mail.MailEditUserAccountResponseType>(
                "MailEditUserAccount", input, client.MailService.MailPort.MailEditUserAccount));

    public MailDeleteUserAccount = (input: mail.MailDeleteUserAccountRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<mail.MailDeleteUserAccountRequestType, void>(
                "MailDeleteUserAccount", input, client.MailService.MailPort.MailDeleteUserAccount));

    public MailGetNewArrivingEmail = (input: mail.MailGetNewArrivingEmailRequestType): Promise<mail.MailGetNewArrivingEmailResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailGetNewArrivingEmailRequestType, mail.MailGetNewArrivingEmailResponseType>(
                "MailGetNewArrivingEmail", input, client.MailService.MailPort.MailGetNewArrivingEmail));

    public MailAddMailServers = (input: mail.MailAddMailServersRequestType): Promise<mail.MailAddMailServersResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailAddMailServersRequestType, mail.MailAddMailServersResponseType>(
                "MailAddMailServers", input, client.MailService.MailPort.MailAddMailServers));

    public MailModifyMailServers = (input: mail.MailModifyMailServersRequestType): Promise<mail.MailModifyMailServersResponseType> =>
        this.client.then(client =>
            this.callMethod<mail.MailModifyMailServersRequestType, mail.MailModifyMailServersResponseType>(
                "MailModifyMailServers", input, client.MailService.MailPort.MailModifyMailServers));

    public MailRemoveMailServers = (input: mail.MailRemoveMailServersRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<mail.MailRemoveMailServersRequestType, void>(
                "MailRemoveMailServers", input, client.MailService.MailPort.MailRemoveMailServers));

    public MessageGetFolderVersions = (input: message.MessageGetFolderVersionsRequestType): Promise<message.MessageGetFolderVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetFolderVersionsRequestType, message.MessageGetFolderVersionsResponseType>(
                "MessageGetFolderVersions", input, client.MessageService.MessagePort.MessageGetFolderVersions));

    public MessageGetFoldersById = (input: message.MessageGetFoldersByIdRequestType): Promise<message.MessageGetFoldersByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetFoldersByIdRequestType, message.MessageGetFoldersByIdResponseType>(
                "MessageGetFoldersById", input, client.MessageService.MessagePort.MessageGetFoldersById));

    public MessageGetThreadVersions = (input: message.MessageGetThreadVersionsRequestType): Promise<message.MessageGetThreadVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetThreadVersionsRequestType, message.MessageGetThreadVersionsResponseType>(
                "MessageGetThreadVersions", input, client.MessageService.MessagePort.MessageGetThreadVersions));

    public MessageGetThreadsById = (input: message.MessageGetThreadsByIdRequestType): Promise<message.MessageGetThreadsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetThreadsByIdRequestType, message.MessageGetThreadsByIdResponseType>(
                "MessageGetThreadsById", input, client.MessageService.MessagePort.MessageGetThreadsById));

    public MessageCreateThreads = (input: message.MessageCreateThreadsRequestType): Promise<message.MessageCreateThreadsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageCreateThreadsRequestType, message.MessageCreateThreadsResponseType>(
                "MessageCreateThreads", input, client.MessageService.MessagePort.MessageCreateThreads));

    public MessageModifyThreads = (input: message.MessageModifyThreadsRequestType): Promise<message.MessageModifyThreadsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageModifyThreadsRequestType, message.MessageModifyThreadsResponseType>(
                "MessageModifyThreads", input, client.MessageService.MessagePort.MessageModifyThreads));

    public MessageSaveDraftThreads = (input: message.MessageSaveDraftThreadsRequestType): Promise<message.MessageSaveDraftThreadsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageSaveDraftThreadsRequestType, message.MessageSaveDraftThreadsResponseType>(
                "MessageSaveDraftThreads", input, client.MessageService.MessagePort.MessageSaveDraftThreads));

    public MessageConfirmThreads = (input: message.MessageConfirmThreadsRequestType): Promise<message.MessageConfirmThreadsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageConfirmThreadsRequestType, message.MessageConfirmThreadsResponseType>(
                "MessageConfirmThreads", input, client.MessageService.MessagePort.MessageConfirmThreads));

    public MessageRemoveThreads = (input: message.MessageRemoveThreadsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<message.MessageRemoveThreadsRequestType, void>(
                "MessageRemoveThreads", input, client.MessageService.MessagePort.MessageRemoveThreads));

    public MessageSearchThreads = (input: message.MessageSearchThreadsRequestType): Promise<message.MessageSearchThreadsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageSearchThreadsRequestType, message.MessageSearchThreadsResponseType>(
                "MessageSearchThreads", input, client.MessageService.MessagePort.MessageSearchThreads));

    public MessageGetFollows = (input: message.MessageGetFollowsRequestType): Promise<message.MessageGetFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetFollowsRequestType, message.MessageGetFollowsResponseType>(
                "MessageGetFollows", input, client.MessageService.MessagePort.MessageGetFollows));

    public MessageAddFollows = (input: message.MessageAddFollowsRequestType): Promise<message.MessageAddFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageAddFollowsRequestType, message.MessageAddFollowsResponseType>(
                "MessageAddFollows", input, client.MessageService.MessagePort.MessageAddFollows));

    public MessageRemoveFollows = (input: message.MessageRemoveFollowsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<message.MessageRemoveFollowsRequestType, void>(
                "MessageRemoveFollows", input, client.MessageService.MessagePort.MessageRemoveFollows));

    public MessageGetProfiles = (input: message.MessageGetProfilesRequestType): Promise<message.MessageGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageGetProfilesRequestType, message.MessageGetProfilesResponseType>(
                "MessageGetProfiles", input, client.MessageService.MessagePort.MessageGetProfiles));

    public MessageSetProfiles = (input: message.MessageSetProfilesRequestType): Promise<message.MessageSetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageSetProfilesRequestType, message.MessageSetProfilesResponseType>(
                "MessageSetProfiles", input, client.MessageService.MessagePort.MessageSetProfiles));

    public MessageFileDownload = (input: message.MessageFileDownloadRequestType): Promise<message.MessageFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<message.MessageFileDownloadRequestType, message.MessageFileDownloadResponseType>(
                "MessageFileDownload", input, client.MessageService.MessagePort.MessageFileDownload));

    public NotificationGetNotificationVersions = (input: notification.NotificationGetNotificationVersionsRequestType): Promise<notification.NotificationGetNotificationVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationGetNotificationVersionsRequestType, notification.NotificationGetNotificationVersionsResponseType>(
                "NotificationGetNotificationVersions", input, client.NotificationService.NotificationPort.NotificationGetNotificationVersions));

    public NotificationGetNotificationsById = (input: notification.NotificationGetNotificationsByIdRequestType): Promise<notification.NotificationGetNotificationsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationGetNotificationsByIdRequestType, notification.NotificationGetNotificationsByIdResponseType>(
                "NotificationGetNotificationsById", input, client.NotificationService.NotificationPort.NotificationGetNotificationsById));

    public NotificationGetNotificationHistoryVersions = (input: notification.NotificationGetNotificationHistoryVersionsRequestType): Promise<notification.NotificationGetNotificationHistoryVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationGetNotificationHistoryVersionsRequestType, notification.NotificationGetNotificationHistoryVersionsResponseType>(
                "NotificationGetNotificationHistoryVersions", input, client.NotificationService.NotificationPort.NotificationGetNotificationHistoryVersions));

    public NotificationGetNotificationHistoriesById = (input: notification.NotificationGetNotificationHistoriesByIdRequestType): Promise<notification.NotificationGetNotificationHistoriesByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationGetNotificationHistoriesByIdRequestType, notification.NotificationGetNotificationHistoriesByIdResponseType>(
                "NotificationGetNotificationHistoriesById", input, client.NotificationService.NotificationPort.NotificationGetNotificationHistoriesById));

    public NotificationConfirmNotification = (input: notification.NotificationConfirmNotificationRequestType): Promise<notification.NotificationConfirmNotificationResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationConfirmNotificationRequestType, notification.NotificationConfirmNotificationResponseType>(
                "NotificationConfirmNotification", input, client.NotificationService.NotificationPort.NotificationConfirmNotification));

    public NotificationGetProfiles = (input: notification.NotificationGetProfilesRequestType): Promise<notification.NotificationGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationGetProfilesRequestType, notification.NotificationGetProfilesResponseType>(
                "NotificationGetProfiles", input, client.NotificationService.NotificationPort.NotificationGetProfiles));

    public NotificationSetProfiles = (input: notification.NotificationSetProfilesRequestType): Promise<notification.NotificationSetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<notification.NotificationSetProfilesRequestType, notification.NotificationSetProfilesResponseType>(
                "NotificationSetProfiles", input, client.NotificationService.NotificationPort.NotificationSetProfiles));

    public CBWebSrvGetWeatherLocations = (input: cbwebsrv.CBWebSrvGetWeatherLocationsRequestType): Promise<cbwebsrv.CBWebSrvGetWeatherLocationsResponseType> =>
        this.client.then(client =>
            this.callMethod<cbwebsrv.CBWebSrvGetWeatherLocationsRequestType, cbwebsrv.CBWebSrvGetWeatherLocationsResponseType>(
                "CBWebSrvGetWeatherLocations", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeatherLocations));

    public CBWebSrvGetWeathersByLocation = (input: cbwebsrv.CBWebSrvGetWeathersByLocationRequestType): Promise<cbwebsrv.CBWebSrvGetWeathersByLocationResponseType> =>
        this.client.then(client =>
            this.callMethod<cbwebsrv.CBWebSrvGetWeathersByLocationRequestType, cbwebsrv.CBWebSrvGetWeathersByLocationResponseType>(
                "CBWebSrvGetWeathersByLocation", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeathersByLocation));

    public CBWebSrvGetWeathers = (input: cbwebsrv.CBWebSrvGetWeathersRequestType): Promise<cbwebsrv.CBWebSrvGetWeathersResponseType> =>
        this.client.then(client =>
            this.callMethod<cbwebsrv.CBWebSrvGetWeathersRequestType, cbwebsrv.CBWebSrvGetWeathersResponseType>(
                "CBWebSrvGetWeathers", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeathers));

    public ReportGetReportVersions = (input: report.ReportGetReportVersionsRequestType): Promise<report.ReportGetReportVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportGetReportVersionsRequestType, report.ReportGetReportVersionsResponseType>(
                "ReportGetReportVersions", input, client.ReportService.ReportPort.ReportGetReportVersions));

    public ReportGetReportById = (input: report.ReportGetReportByIdRequestType): Promise<report.ReportGetReportByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportGetReportByIdRequestType, report.ReportGetReportByIdResponseType>(
                "ReportGetReportById", input, client.ReportService.ReportPort.ReportGetReportById));

    public ReportAddFollows = (input: report.ReportAddFollowsRequestType): Promise<report.ReportAddFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportAddFollowsRequestType, report.ReportAddFollowsResponseType>(
                "ReportAddFollows", input, client.ReportService.ReportPort.ReportAddFollows));

    public ReportGetFollows = (input: report.ReportGetFollowsRequestType): Promise<report.ReportGetFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportGetFollowsRequestType, report.ReportGetFollowsResponseType>(
                "ReportGetFollows", input, client.ReportService.ReportPort.ReportGetFollows));

    public ReportRemoveFollows = (input: report.ReportRemoveFollowsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<report.ReportRemoveFollowsRequestType, void>(
                "ReportRemoveFollows", input, client.ReportService.ReportPort.ReportRemoveFollows));

    public ReportRemoveReports = (input: report.ReportRemoveReportsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<report.ReportRemoveReportsRequestType, void>(
                "ReportRemoveReports", input, client.ReportService.ReportPort.ReportRemoveReports));

    public ReportSearchReports = (input: report.ReportSearchReportsRequestType): Promise<report.ReportSearchReportsResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportSearchReportsRequestType, report.ReportSearchReportsResponseType>(
                "ReportSearchReports", input, client.ReportService.ReportPort.ReportSearchReports));

    public ReportFileDownload = (input: report.ReportFileDownloadRequestType): Promise<report.ReportFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<report.ReportFileDownloadRequestType, report.ReportFileDownloadResponseType>(
                "ReportFileDownload", input, client.ReportService.ReportPort.ReportFileDownload));

    public CabinetGetFolderInfo = (input: cabinet.CabinetGetFolderInfoRequestType): Promise<cabinet.CabinetGetFolderInfoResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetGetFolderInfoRequestType, cabinet.CabinetGetFolderInfoResponseType>(
                "CabinetGetFolderInfo", input, client.CabinetService.CabinetPort.CabinetGetFolderInfo));

    public CabinetGetFileInfo = (input: cabinet.CabinetGetFileInfoRequestType): Promise<cabinet.CabinetGetFileInfoResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetGetFileInfoRequestType, cabinet.CabinetGetFileInfoResponseType>(
                "CabinetGetFileInfo", input, client.CabinetService.CabinetPort.CabinetGetFileInfo));

    public CabinetFileDownload = (input: cabinet.CabinetFileDownloadRequestType): Promise<cabinet.CabinetFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetFileDownloadRequestType, cabinet.CabinetFileDownloadResponseType>(
                "CabinetFileDownload", input, client.CabinetService.CabinetPort.CabinetFileDownload));

    public CabinetAddFile = (input: cabinet.CabinetAddFileRequestType): Promise<cabinet.CabinetAddFileResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetAddFileRequestType, cabinet.CabinetAddFileResponseType>(
                "CabinetAddFile", input, client.CabinetService.CabinetPort.CabinetAddFile));

    public CabinetUpdateFile = (input: cabinet.CabinetUpdateFileRequestType): Promise<cabinet.CabinetUpdateFileResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetUpdateFileRequestType, cabinet.CabinetUpdateFileResponseType>(
                "CabinetUpdateFile", input, client.CabinetService.CabinetPort.CabinetUpdateFile));

    public CabinetUpdateFileInformation = (input: cabinet.CabinetUpdateFileInformationRequestType): Promise<cabinet.CabinetUpdateFileInformationResponseType> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetUpdateFileInformationRequestType, cabinet.CabinetUpdateFileInformationResponseType>(
                "CabinetUpdateFileInformation", input, client.CabinetService.CabinetPort.CabinetUpdateFileInformation));

    public CabinetDeleteFiles = (input: cabinet.CabinetDeleteFilesRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<cabinet.CabinetDeleteFilesRequestType, void>(
                "CabinetDeleteFiles", input, client.CabinetService.CabinetPort.CabinetDeleteFiles));

    public AdminCountUsers = (input: admin.AdminCountUsersRequestType): Promise<admin.AdminCountUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountUsersRequestType, admin.AdminCountUsersResponseType>(
                "AdminCountUsers", input, client.AdminService.AdminPort.AdminCountUsers));

    public AdminGetUserIds = (input: admin.AdminGetUserIdsRequestType): Promise<admin.AdminGetUserIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetUserIdsRequestType, admin.AdminGetUserIdsResponseType>(
                "AdminGetUserIds", input, client.AdminService.AdminPort.AdminGetUserIds));

    public AdminGetUserDetailByIds = (input: admin.AdminGetUserDetailByIdsRequestType): Promise<admin.AdminGetUserDetailByIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetUserDetailByIdsRequestType, admin.AdminGetUserDetailByIdsResponseType>(
                "AdminGetUserDetailByIds", input, client.AdminService.AdminPort.AdminGetUserDetailByIds));

    public AdminCountOrgs = (input: admin.AdminCountOrgsRequestType): Promise<admin.AdminCountOrgsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountOrgsRequestType, admin.AdminCountOrgsResponseType>(
                "AdminCountOrgs", input, client.AdminService.AdminPort.AdminCountOrgs));

    public AdminGetOrgIds = (input: admin.AdminGetOrgIdsRequestType): Promise<admin.AdminGetOrgIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetOrgIdsRequestType, admin.AdminGetOrgIdsResponseType>(
                "AdminGetOrgIds", input, client.AdminService.AdminPort.AdminGetOrgIds));

    public AdminGetOrgDetailByIds = (input: admin.AdminGetOrgDetailByIdsRequestType): Promise<admin.AdminGetOrgDetailByIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetOrgDetailByIdsRequestType, admin.AdminGetOrgDetailByIdsResponseType>(
                "AdminGetOrgDetailByIds", input, client.AdminService.AdminPort.AdminGetOrgDetailByIds));

    public AdminCountChildOrgs = (input: admin.AdminCountChildOrgsRequestType): Promise<admin.AdminCountChildOrgsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountChildOrgsRequestType, admin.AdminCountChildOrgsResponseType>(
                "AdminCountChildOrgs", input, client.AdminService.AdminPort.AdminCountChildOrgs));

    public AdminGetChildOrgs = (input: admin.AdminGetChildOrgsRequestType): Promise<admin.AdminGetChildOrgsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetChildOrgsRequestType, admin.AdminGetChildOrgsResponseType>(
                "AdminGetChildOrgs", input, client.AdminService.AdminPort.AdminGetChildOrgs));

    public AdminCountUsersInOrg = (input: admin.AdminCountUsersInOrgRequestType): Promise<admin.AdminCountUsersInOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountUsersInOrgRequestType, admin.AdminCountUsersInOrgResponseType>(
                "AdminCountUsersInOrg", input, client.AdminService.AdminPort.AdminCountUsersInOrg));

    public AdminGetUserIdsInOrg = (input: admin.AdminGetUserIdsInOrgRequestType): Promise<admin.AdminGetUserIdsInOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetUserIdsInOrgRequestType, admin.AdminGetUserIdsInOrgResponseType>(
                "AdminGetUserIdsInOrg", input, client.AdminService.AdminPort.AdminGetUserIdsInOrg));

    public AdminCountNoGroupUsers = (input: admin.AdminCountNoGroupUsersRequestType): Promise<admin.AdminCountNoGroupUsersResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountNoGroupUsersRequestType, admin.AdminCountNoGroupUsersResponseType>(
                "AdminCountNoGroupUsers", input, client.AdminService.AdminPort.AdminCountNoGroupUsers));

    public AdminGetNoGroupUserIds = (input: admin.AdminGetNoGroupUserIdsRequestType): Promise<admin.AdminGetNoGroupUserIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetNoGroupUserIdsRequestType, admin.AdminGetNoGroupUserIdsResponseType>(
                "AdminGetNoGroupUserIds", input, client.AdminService.AdminPort.AdminGetNoGroupUserIds));

    public AdminCountOrgsOfUser = (input: admin.AdminCountOrgsOfUserRequestType): Promise<admin.AdminCountOrgsOfUserResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminCountOrgsOfUserRequestType, admin.AdminCountOrgsOfUserResponseType>(
                "AdminCountOrgsOfUser", input, client.AdminService.AdminPort.AdminCountOrgsOfUser));

    public AdminGetOrgIdsOfUser = (input: admin.AdminGetOrgIdsOfUserRequestType): Promise<admin.AdminGetOrgIdsOfUserResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetOrgIdsOfUserRequestType, admin.AdminGetOrgIdsOfUserResponseType>(
                "AdminGetOrgIdsOfUser", input, client.AdminService.AdminPort.AdminGetOrgIdsOfUser));

    public AdminGetParentOrgId = (input: admin.AdminGetParentOrgIdRequestType): Promise<admin.AdminGetParentOrgIdResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetParentOrgIdRequestType, admin.AdminGetParentOrgIdResponseType>(
                "AdminGetParentOrgId", input, client.AdminService.AdminPort.AdminGetParentOrgId));

    public AdminGetUserIdByLoginName = (input: admin.AdminGetUserIdByLoginNameRequestType): Promise<admin.AdminGetUserIdByLoginNameResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetUserIdByLoginNameRequestType, admin.AdminGetUserIdByLoginNameResponseType>(
                "AdminGetUserIdByLoginName", input, client.AdminService.AdminPort.AdminGetUserIdByLoginName));

    public AdminAddUserAccount = (input: admin.AdminAddUserAccountRequestType): Promise<admin.AdminAddUserAccountResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminAddUserAccountRequestType, admin.AdminAddUserAccountResponseType>(
                "AdminAddUserAccount", input, client.AdminService.AdminPort.AdminAddUserAccount));

    public AdminModifyUserAccount = (input: admin.AdminModifyUserAccountRequestType): Promise<admin.AdminModifyUserAccountResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminModifyUserAccountRequestType, admin.AdminModifyUserAccountResponseType>(
                "AdminModifyUserAccount", input, client.AdminService.AdminPort.AdminModifyUserAccount));

    public AdminRemoveUsersByIds = (input: admin.AdminRemoveUsersByIdsRequestType): Promise<admin.AdminRemoveUsersByIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminRemoveUsersByIdsRequestType, admin.AdminRemoveUsersByIdsResponseType>(
                "AdminRemoveUsersByIds", input, client.AdminService.AdminPort.AdminRemoveUsersByIds));

    public AdminGetOrgIdByOrgCode = (input: admin.AdminGetOrgIdByOrgCodeRequestType): Promise<admin.AdminGetOrgIdByOrgCodeResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminGetOrgIdByOrgCodeRequestType, admin.AdminGetOrgIdByOrgCodeResponseType>(
                "AdminGetOrgIdByOrgCode", input, client.AdminService.AdminPort.AdminGetOrgIdByOrgCode));

    public AdminAddOrg = (input: admin.AdminAddOrgRequestType): Promise<admin.AdminAddOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminAddOrgRequestType, admin.AdminAddOrgResponseType>(
                "AdminAddOrg", input, client.AdminService.AdminPort.AdminAddOrg));

    public AdminModifyOrgInfo = (input: admin.AdminModifyOrgInfoRequestType): Promise<admin.AdminModifyOrgInfoResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminModifyOrgInfoRequestType, admin.AdminModifyOrgInfoResponseType>(
                "AdminModifyOrgInfo", input, client.AdminService.AdminPort.AdminModifyOrgInfo));

    public AdminRemoveOrgsByIds = (input: admin.AdminRemoveOrgsByIdsRequestType): Promise<admin.AdminRemoveOrgsByIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminRemoveOrgsByIdsRequestType, admin.AdminRemoveOrgsByIdsResponseType>(
                "AdminRemoveOrgsByIds", input, client.AdminService.AdminPort.AdminRemoveOrgsByIds));

    public AdminAddUsersToOrg = (input: admin.AdminAddUsersToOrgRequestType): Promise<admin.AdminAddUsersToOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminAddUsersToOrgRequestType, admin.AdminAddUsersToOrgResponseType>(
                "AdminAddUsersToOrg", input, client.AdminService.AdminPort.AdminAddUsersToOrg));

    public AdminSetOrgsOfUser = (input: admin.AdminSetOrgsOfUserRequestType): Promise<admin.AdminSetOrgsOfUserResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminSetOrgsOfUserRequestType, admin.AdminSetOrgsOfUserResponseType>(
                "AdminSetOrgsOfUser", input, client.AdminService.AdminPort.AdminSetOrgsOfUser));

    public AdminAddChildrenOfOrg = (input: admin.AdminAddChildrenOfOrgRequestType): Promise<admin.AdminAddChildrenOfOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminAddChildrenOfOrgRequestType, admin.AdminAddChildrenOfOrgResponseType>(
                "AdminAddChildrenOfOrg", input, client.AdminService.AdminPort.AdminAddChildrenOfOrg));

    public AdminRemoveUsersFromOrg = (input: admin.AdminRemoveUsersFromOrgRequestType): Promise<admin.AdminRemoveUsersFromOrgResponseType> =>
        this.client.then(client =>
            this.callMethod<admin.AdminRemoveUsersFromOrgRequestType, admin.AdminRemoveUsersFromOrgResponseType>(
                "AdminRemoveUsersFromOrg", input, client.AdminService.AdminPort.AdminRemoveUsersFromOrg));

    public UtilLogin = (input: util_api.UtilLoginRequestType): Promise<util_api.UtilLoginResponseType> =>
        this.client.then(client =>
            this.callMethod<util_api.UtilLoginRequestType, util_api.UtilLoginResponseType>(
                "UtilLogin", input, client.UtilService.UtilPort.UtilLogin));

    public UtilLogout = (input: util_api.UtilLogoutRequestType): Promise<util_api.UtilLogoutResponseType> =>
        this.client.then(client =>
            this.callMethod<util_api.UtilLogoutRequestType, util_api.UtilLogoutResponseType>(
                "UtilLogout", input, client.UtilService.UtilPort.UtilLogout));

    public UtilGetRequestToken = (input: util_api.UtilGetRequestTokenRequestType): Promise<util_api.UtilGetRequestTokenResponseType> =>
        this.client.then(client =>
            this.callMethod<util_api.UtilGetRequestTokenRequestType, util_api.UtilGetRequestTokenResponseType>(
                "UtilGetRequestToken", input, client.UtilService.UtilPort.UtilGetRequestToken));

    public UtilGetLoginUserId = (input: util_api.UtilGetLoginUserIdRequestType): Promise<util_api.UtilGetLoginUserIdResponseType> =>
        this.client.then(client =>
            this.callMethod<util_api.UtilGetLoginUserIdRequestType, util_api.UtilGetLoginUserIdResponseType>(
                "UtilGetLoginUserId", input, client.UtilService.UtilPort.UtilGetLoginUserId));

    public StarGetStarsById = (input: star.StarGetStarsByIdRequestType): Promise<star.StarGetStarsByIdResponseType> =>
        this.client.then(client =>
            this.callMethod<star.StarGetStarsByIdRequestType, star.StarGetStarsByIdResponseType>(
                "StarGetStarsById", input, client.StarService.StarPort.StarGetStarsById));

    public StarGetStarVersions = (input: star.StarGetStarVersionsRequestType): Promise<star.StarGetStarVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<star.StarGetStarVersionsRequestType, star.StarGetStarVersionsResponseType>(
                "StarGetStarVersions", input, client.StarService.StarPort.StarGetStarVersions));

    public StarAddStars = (input: star.StarAddStarsRequestType): Promise<star.StarAddStarsResponseType> =>
        this.client.then(client =>
            this.callMethod<star.StarAddStarsRequestType, star.StarAddStarsResponseType>(
                "StarAddStars", input, client.StarService.StarPort.StarAddStars));

    public StarRemoveStars = (input: star.StarRemoveStarsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<star.StarRemoveStarsRequestType, void>(
                "StarRemoveStars", input, client.StarService.StarPort.StarRemoveStars));

    public StarGetProfiles = (input: star.StarGetProfilesRequestType): Promise<star.StarGetProfilesResponseType> =>
        this.client.then(client =>
            this.callMethod<star.StarGetProfilesRequestType, star.StarGetProfilesResponseType>(
                "StarGetProfiles", input, client.StarService.StarPort.StarGetProfiles));

    public BulletinGetCategoryVersions = (input: bulletin.BulletinGetCategoryVersionsRequestType): Promise<bulletin.BulletinGetCategoryVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetCategoryVersionsRequestType, bulletin.BulletinGetCategoryVersionsResponseType>(
                "BulletinGetCategoryVersions", input, client.BulletinService.BulletinPort.BulletinGetCategoryVersions));

    public BulletinGetCategories = (input: bulletin.BulletinGetCategoriesRequestType): Promise<bulletin.BulletinGetCategoriesResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetCategoriesRequestType, bulletin.BulletinGetCategoriesResponseType>(
                "BulletinGetCategories", input, client.BulletinService.BulletinPort.BulletinGetCategories));

    public BulletinGetTopicVersions = (input: bulletin.BulletinGetTopicVersionsRequestType): Promise<bulletin.BulletinGetTopicVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetTopicVersionsRequestType, bulletin.BulletinGetTopicVersionsResponseType>(
                "BulletinGetTopicVersions", input, client.BulletinService.BulletinPort.BulletinGetTopicVersions));

    public BulletinGetDraftTopicVersions = (input: bulletin.BulletinGetDraftTopicVersionsRequestType): Promise<bulletin.BulletinGetDraftTopicVersionsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetDraftTopicVersionsRequestType, bulletin.BulletinGetDraftTopicVersionsResponseType>(
                "BulletinGetDraftTopicVersions", input, client.BulletinService.BulletinPort.BulletinGetDraftTopicVersions));

    public BulletinGetTopics = (input: bulletin.BulletinGetTopicsRequestType): Promise<bulletin.BulletinGetTopicsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetTopicsRequestType, bulletin.BulletinGetTopicsResponseType>(
                "BulletinGetTopics", input, client.BulletinService.BulletinPort.BulletinGetTopics));

    public BulletinGetTopicByIds = (input: bulletin.BulletinGetTopicByIdsRequestType): Promise<bulletin.BulletinGetTopicByIdsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetTopicByIdsRequestType, bulletin.BulletinGetTopicByIdsResponseType>(
                "BulletinGetTopicByIds", input, client.BulletinService.BulletinPort.BulletinGetTopicByIds));

    public BulletinFileDownload = (input: bulletin.BulletinFileDownloadRequestType): Promise<bulletin.BulletinFileDownloadResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinFileDownloadRequestType, bulletin.BulletinFileDownloadResponseType>(
                "BulletinFileDownload", input, client.BulletinService.BulletinPort.BulletinFileDownload));

    public BulletinCreateTopics = (input: bulletin.BulletinCreateTopicsRequestType): Promise<bulletin.BulletinCreateTopicsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinCreateTopicsRequestType, bulletin.BulletinCreateTopicsResponseType>(
                "BulletinCreateTopics", input, client.BulletinService.BulletinPort.BulletinCreateTopics));

    public BulletinModifyTopics = (input: bulletin.BulletinModifyTopicsRequestType): Promise<bulletin.BulletinModifyTopicsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinModifyTopicsRequestType, bulletin.BulletinModifyTopicsResponseType>(
                "BulletinModifyTopics", input, client.BulletinService.BulletinPort.BulletinModifyTopics));

    public BulletinSaveDraftTopics = (input: bulletin.BulletinSaveDraftTopicsRequestType): Promise<bulletin.BulletinSaveDraftTopicsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinSaveDraftTopicsRequestType, bulletin.BulletinSaveDraftTopicsResponseType>(
                "BulletinSaveDraftTopics", input, client.BulletinService.BulletinPort.BulletinSaveDraftTopics));

    public BulletinRemoveTopics = (input: bulletin.BulletinRemoveTopicsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinRemoveTopicsRequestType, void>(
                "BulletinRemoveTopics", input, client.BulletinService.BulletinPort.BulletinRemoveTopics));

    public BulletinSearchTopics = (input: bulletin.BulletinSearchTopicsRequestType): Promise<bulletin.BulletinSearchTopicsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinSearchTopicsRequestType, bulletin.BulletinSearchTopicsResponseType>(
                "BulletinSearchTopics", input, client.BulletinService.BulletinPort.BulletinSearchTopics));

    public BulletinGetFollows = (input: bulletin.BulletinGetFollowsRequestType): Promise<bulletin.BulletinGetFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinGetFollowsRequestType, bulletin.BulletinGetFollowsResponseType>(
                "BulletinGetFollows", input, client.BulletinService.BulletinPort.BulletinGetFollows));

    public BulletinAddFollows = (input: bulletin.BulletinAddFollowsRequestType): Promise<bulletin.BulletinAddFollowsResponseType> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinAddFollowsRequestType, bulletin.BulletinAddFollowsResponseType>(
                "BulletinAddFollows", input, client.BulletinService.BulletinPort.BulletinAddFollows));

    public BulletinRemoveFollows = (input: bulletin.BulletinRemoveFollowsRequestType): Promise<void> =>
        this.client.then(client =>
            this.callMethod<bulletin.BulletinRemoveFollowsRequestType, void>(
                "BulletinRemoveFollows", input, client.BulletinService.BulletinPort.BulletinRemoveFollows));

    protected callMethod = <I, O>(methodName: string, input: I, method: soap.SoapMethod): Promise<O> => {
        throw Error("Not implemented.");
    }
}
