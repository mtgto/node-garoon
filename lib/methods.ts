// This file is generated from WSDL.
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

    protected callMethod = <I, O>(methodName: string, input: I, method: soap.SoapMethod): Promise<O> => {
        throw Error("Not implemented.");
    }

    BaseGetUserVersions = (input: base.BaseGetUserVersionsRequestType): Promise<base.BaseGetUserVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetUserVersionsRequestType, base.BaseGetUserVersionsResponseType>("BaseGetUserVersions", input, client.BaseService.BasePort.BaseGetUserVersions);
        });
    }

    BaseGetUsersById = (input: base.BaseGetUsersByIdRequestType): Promise<base.BaseGetUsersByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetUsersByIdRequestType, base.BaseGetUsersByIdResponseType>("BaseGetUsersById", input, client.BaseService.BasePort.BaseGetUsersById);
        });
    }

    BaseGetUsersByLoginName = (input: base.BaseGetUsersByLoginNameRequestType): Promise<base.BaseGetUsersByLoginNameResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetUsersByLoginNameRequestType, base.BaseGetUsersByLoginNameResponseType>("BaseGetUsersByLoginName", input, client.BaseService.BasePort.BaseGetUsersByLoginName);
        });
    }

    BaseGetOrganizationVersions = (input: base.BaseGetOrganizationVersionsRequestType): Promise<base.BaseGetOrganizationVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetOrganizationVersionsRequestType, base.BaseGetOrganizationVersionsResponseType>("BaseGetOrganizationVersions", input, client.BaseService.BasePort.BaseGetOrganizationVersions);
        });
    }

    BaseGetOrganizationsById = (input: base.BaseGetOrganizationsByIdRequestType): Promise<base.BaseGetOrganizationsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetOrganizationsByIdRequestType, base.BaseGetOrganizationsByIdResponseType>("BaseGetOrganizationsById", input, client.BaseService.BasePort.BaseGetOrganizationsById);
        });
    }

    BaseGetMyGroupVersions = (input: base.BaseGetMyGroupVersionsRequestType): Promise<base.BaseGetMyGroupVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetMyGroupVersionsRequestType, base.BaseGetMyGroupVersionsResponseType>("BaseGetMyGroupVersions", input, client.BaseService.BasePort.BaseGetMyGroupVersions);
        });
    }

    BaseGetMyGroupsById = (input: base.BaseGetMyGroupsByIdRequestType): Promise<base.BaseGetMyGroupsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetMyGroupsByIdRequestType, base.BaseGetMyGroupsByIdResponseType>("BaseGetMyGroupsById", input, client.BaseService.BasePort.BaseGetMyGroupsById);
        });
    }

    BaseGetFrequentUsers = (input: base.BaseGetFrequentUsersRequestType): Promise<base.BaseGetFrequentUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetFrequentUsersRequestType, base.BaseGetFrequentUsersResponseType>("BaseGetFrequentUsers", input, client.BaseService.BasePort.BaseGetFrequentUsers);
        });
    }

    BaseGetFrequentOrganizations = (input: base.BaseGetFrequentOrganizationsRequestType): Promise<base.BaseGetFrequentOrganizationsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetFrequentOrganizationsRequestType, base.BaseGetFrequentOrganizationsResponseType>("BaseGetFrequentOrganizations", input, client.BaseService.BasePort.BaseGetFrequentOrganizations);
        });
    }

    BaseGetCalendarEvents = (input: base.BaseGetCalendarEventsRequestType): Promise<base.BaseGetCalendarEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetCalendarEventsRequestType, base.BaseGetCalendarEventsResponseType>("BaseGetCalendarEvents", input, client.BaseService.BasePort.BaseGetCalendarEvents);
        });
    }

    BaseGetApplicationStatus = (input: base.BaseGetApplicationStatusRequestType): Promise<base.BaseGetApplicationStatusResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetApplicationStatusRequestType, base.BaseGetApplicationStatusResponseType>("BaseGetApplicationStatus", input, client.BaseService.BasePort.BaseGetApplicationStatus);
        });
    }

    BaseGetApplicationInformation = (input: base.BaseGetApplicationInformationRequestType): Promise<base.BaseGetApplicationInformationResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetApplicationInformationRequestType, base.BaseGetApplicationInformationResponseType>("BaseGetApplicationInformation", input, client.BaseService.BasePort.BaseGetApplicationInformation);
        });
    }

    BaseFileDownload = (input: base.BaseFileDownloadRequestType): Promise<base.BaseFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseFileDownloadRequestType, base.BaseFileDownloadResponseType>("BaseFileDownload", input, client.BaseService.BasePort.BaseFileDownload);
        });
    }

    BaseGetRegionsList = (input: base.BaseGetRegionsListRequestType): Promise<base.BaseGetRegionsListResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetRegionsListRequestType, base.BaseGetRegionsListResponseType>("BaseGetRegionsList", input, client.BaseService.BasePort.BaseGetRegionsList);
        });
    }

    BaseGetTimezoneVersion = (input: base.BaseGetTimezoneVersionRequestType): Promise<base.BaseGetTimezoneVersionResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseGetTimezoneVersionRequestType, base.BaseGetTimezoneVersionResponseType>("BaseGetTimezoneVersion", input, client.BaseService.BasePort.BaseGetTimezoneVersion);
        });
    }

    BaseManagerApplication = (input: base.BaseManagerApplicationRequestType): Promise<base.BaseManagerApplicationResponseType> => {
        return this.client.then(client => {
            return this.callMethod<base.BaseManagerApplicationRequestType, base.BaseManagerApplicationResponseType>("BaseManagerApplication", input, client.BaseService.BasePort.BaseManagerApplication);
        });
    }

    ScheduleGetEventVersions = (input: schedule.ScheduleGetEventVersionsRequestType): Promise<schedule.ScheduleGetEventVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetEventVersionsRequestType, schedule.ScheduleGetEventVersionsResponseType>("ScheduleGetEventVersions", input, client.ScheduleService.SchedulePort.ScheduleGetEventVersions);
        });
    }

    ScheduleGetEvents = (input: schedule.ScheduleGetEventsRequestType): Promise<schedule.ScheduleGetEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetEventsRequestType, schedule.ScheduleGetEventsResponseType>("ScheduleGetEvents", input, client.ScheduleService.SchedulePort.ScheduleGetEvents);
        });
    }

    ScheduleGetEventsById = (input: schedule.ScheduleGetEventsByIdRequestType): Promise<schedule.ScheduleGetEventsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetEventsByIdRequestType, schedule.ScheduleGetEventsByIdResponseType>("ScheduleGetEventsById", input, client.ScheduleService.SchedulePort.ScheduleGetEventsById);
        });
    }

    ScheduleGetEventsByTarget = (input: schedule.ScheduleGetEventsByTargetRequestType): Promise<schedule.ScheduleGetEventsByTargetResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetEventsByTargetRequestType, schedule.ScheduleGetEventsByTargetResponseType>("ScheduleGetEventsByTarget", input, client.ScheduleService.SchedulePort.ScheduleGetEventsByTarget);
        });
    }

    ScheduleAddEvents = (input: schedule.ScheduleAddEventsRequestType): Promise<schedule.ScheduleAddEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleAddEventsRequestType, schedule.ScheduleAddEventsResponseType>("ScheduleAddEvents", input, client.ScheduleService.SchedulePort.ScheduleAddEvents);
        });
    }

    ScheduleModifyEvents = (input: schedule.ScheduleModifyEventsRequestType): Promise<schedule.ScheduleModifyEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleModifyEventsRequestType, schedule.ScheduleModifyEventsResponseType>("ScheduleModifyEvents", input, client.ScheduleService.SchedulePort.ScheduleModifyEvents);
        });
    }

    ScheduleModifyRepeatEvents = (input: schedule.ScheduleModifyRepeatEventsRequestType): Promise<schedule.ScheduleModifyRepeatEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleModifyRepeatEventsRequestType, schedule.ScheduleModifyRepeatEventsResponseType>("ScheduleModifyRepeatEvents", input, client.ScheduleService.SchedulePort.ScheduleModifyRepeatEvents);
        });
    }

    ScheduleRemoveEvents = (input: schedule.ScheduleRemoveEventsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleRemoveEventsRequestType, void>("ScheduleRemoveEvents", input, client.ScheduleService.SchedulePort.ScheduleRemoveEvents);
        });
    }

    ScheduleRemoveEventsFromRepeatEvent = (input: schedule.ScheduleRemoveEventsFromRepeatEventRequestType): Promise<schedule.ScheduleRemoveEventsFromRepeatEventResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleRemoveEventsFromRepeatEventRequestType, schedule.ScheduleRemoveEventsFromRepeatEventResponseType>("ScheduleRemoveEventsFromRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleRemoveEventsFromRepeatEvent);
        });
    }

    ScheduleSearchEvents = (input: schedule.ScheduleSearchEventsRequestType): Promise<schedule.ScheduleSearchEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleSearchEventsRequestType, schedule.ScheduleSearchEventsResponseType>("ScheduleSearchEvents", input, client.ScheduleService.SchedulePort.ScheduleSearchEvents);
        });
    }

    ScheduleSearchFreeTimes = (input: schedule.ScheduleSearchFreeTimesRequestType): Promise<schedule.ScheduleSearchFreeTimesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleSearchFreeTimesRequestType, schedule.ScheduleSearchFreeTimesResponseType>("ScheduleSearchFreeTimes", input, client.ScheduleService.SchedulePort.ScheduleSearchFreeTimes);
        });
    }

    ScheduleAddFollows = (input: schedule.ScheduleAddFollowsRequestType): Promise<schedule.ScheduleAddFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleAddFollowsRequestType, schedule.ScheduleAddFollowsResponseType>("ScheduleAddFollows", input, client.ScheduleService.SchedulePort.ScheduleAddFollows);
        });
    }

    ScheduleAddFollowsToRepeatEvent = (input: schedule.ScheduleAddFollowsToRepeatEventRequestType): Promise<schedule.ScheduleAddFollowsToRepeatEventResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleAddFollowsToRepeatEventRequestType, schedule.ScheduleAddFollowsToRepeatEventResponseType>("ScheduleAddFollowsToRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleAddFollowsToRepeatEvent);
        });
    }

    ScheduleRemoveFollows = (input: schedule.ScheduleRemoveFollowsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleRemoveFollowsRequestType, void>("ScheduleRemoveFollows", input, client.ScheduleService.SchedulePort.ScheduleRemoveFollows);
        });
    }

    ScheduleDetermineTemporaryEvents = (input: schedule.ScheduleDetermineTemporaryEventsRequestType): Promise<schedule.ScheduleDetermineTemporaryEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleDetermineTemporaryEventsRequestType, schedule.ScheduleDetermineTemporaryEventsResponseType>("ScheduleDetermineTemporaryEvents", input, client.ScheduleService.SchedulePort.ScheduleDetermineTemporaryEvents);
        });
    }

    ScheduleRemoveTemporaryEventCandidates = (input: schedule.ScheduleRemoveTemporaryEventCandidatesRequestType): Promise<schedule.ScheduleRemoveTemporaryEventCandidatesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleRemoveTemporaryEventCandidatesRequestType, schedule.ScheduleRemoveTemporaryEventCandidatesResponseType>("ScheduleRemoveTemporaryEventCandidates", input, client.ScheduleService.SchedulePort.ScheduleRemoveTemporaryEventCandidates);
        });
    }

    ScheduleParticipateEvents = (input: schedule.ScheduleParticipateEventsRequestType): Promise<schedule.ScheduleParticipateEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleParticipateEventsRequestType, schedule.ScheduleParticipateEventsResponseType>("ScheduleParticipateEvents", input, client.ScheduleService.SchedulePort.ScheduleParticipateEvents);
        });
    }

    ScheduleParticipateEventsToRepeatEvent = (input: schedule.ScheduleParticipateEventsToRepeatEventRequestType): Promise<schedule.ScheduleParticipateEventsToRepeatEventResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleParticipateEventsToRepeatEventRequestType, schedule.ScheduleParticipateEventsToRepeatEventResponseType>("ScheduleParticipateEventsToRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleParticipateEventsToRepeatEvent);
        });
    }

    ScheduleLeaveEvents = (input: schedule.ScheduleLeaveEventsRequestType): Promise<schedule.ScheduleLeaveEventsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleLeaveEventsRequestType, schedule.ScheduleLeaveEventsResponseType>("ScheduleLeaveEvents", input, client.ScheduleService.SchedulePort.ScheduleLeaveEvents);
        });
    }

    ScheduleLeaveEventsFromRepeatEvent = (input: schedule.ScheduleLeaveEventsFromRepeatEventRequestType): Promise<schedule.ScheduleLeaveEventsFromRepeatEventResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleLeaveEventsFromRepeatEventRequestType, schedule.ScheduleLeaveEventsFromRepeatEventResponseType>("ScheduleLeaveEventsFromRepeatEvent", input, client.ScheduleService.SchedulePort.ScheduleLeaveEventsFromRepeatEvent);
        });
    }

    ScheduleGetProfiles = (input: schedule.ScheduleGetProfilesRequestType): Promise<schedule.ScheduleGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetProfilesRequestType, schedule.ScheduleGetProfilesResponseType>("ScheduleGetProfiles", input, client.ScheduleService.SchedulePort.ScheduleGetProfiles);
        });
    }

    ScheduleSetProfiles = (input: schedule.ScheduleSetProfilesRequestType): Promise<schedule.ScheduleSetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleSetProfilesRequestType, schedule.ScheduleSetProfilesResponseType>("ScheduleSetProfiles", input, client.ScheduleService.SchedulePort.ScheduleSetProfiles);
        });
    }

    ScheduleGetFacilityVersions = (input: schedule.ScheduleGetFacilityVersionsRequestType): Promise<schedule.ScheduleGetFacilityVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilityVersionsRequestType, schedule.ScheduleGetFacilityVersionsResponseType>("ScheduleGetFacilityVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityVersions);
        });
    }

    ScheduleGetFacilityProfileVersions = (input: schedule.ScheduleGetFacilityProfileVersionsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilityProfileVersionsRequestType, void>("ScheduleGetFacilityProfileVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityProfileVersions);
        });
    }

    ScheduleGetFacilityProfilesById = (input: schedule.ScheduleGetFacilityProfilesByIdRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilityProfilesByIdRequestType, void>("ScheduleGetFacilityProfilesById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityProfilesById);
        });
    }

    ScheduleGetFacilitiesById = (input: schedule.ScheduleGetFacilitiesByIdRequestType): Promise<schedule.ScheduleGetFacilitiesByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilitiesByIdRequestType, schedule.ScheduleGetFacilitiesByIdResponseType>("ScheduleGetFacilitiesById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilitiesById);
        });
    }

    ScheduleGetFacilityGroupsVersions = (input: schedule.ScheduleGetFacilityGroupVersionsRequestType): Promise<schedule.ScheduleGetFacilityGroupVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilityGroupVersionsRequestType, schedule.ScheduleGetFacilityGroupVersionsResponseType>("ScheduleGetFacilityGroupsVersions", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityGroupsVersions);
        });
    }

    ScheduleGetFacilityGroupsById = (input: schedule.ScheduleGetFacilityGroupsByIdRequestType): Promise<schedule.ScheduleGetFacilityGroupsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetFacilityGroupsByIdRequestType, schedule.ScheduleGetFacilityGroupsByIdResponseType>("ScheduleGetFacilityGroupsById", input, client.ScheduleService.SchedulePort.ScheduleGetFacilityGroupsById);
        });
    }

    ScheduleGetReadAllowUsers = (input: schedule.ScheduleGetReadAllowUsersRequestType): Promise<schedule.ScheduleGetReadAllowUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetReadAllowUsersRequestType, schedule.ScheduleGetReadAllowUsersResponseType>("ScheduleGetReadAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowUsers);
        });
    }

    ScheduleGetReadAllowGroups = (input: schedule.ScheduleGetReadAllowGroupsRequestType): Promise<schedule.ScheduleGetReadAllowGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetReadAllowGroupsRequestType, schedule.ScheduleGetReadAllowGroupsResponseType>("ScheduleGetReadAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowGroups);
        });
    }

    ScheduleGetReadAllowFacilities = (input: schedule.ScheduleGetReadAllowFacilitiesRequestType): Promise<schedule.ScheduleGetReadAllowFacilitiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetReadAllowFacilitiesRequestType, schedule.ScheduleGetReadAllowFacilitiesResponseType>("ScheduleGetReadAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetReadAllowFacilities);
        });
    }

    ScheduleGetAddAllowUsers = (input: schedule.ScheduleGetAddAllowUsersRequestType): Promise<schedule.ScheduleGetAddAllowUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetAddAllowUsersRequestType, schedule.ScheduleGetAddAllowUsersResponseType>("ScheduleGetAddAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowUsers);
        });
    }

    ScheduleGetAddAllowGroups = (input: schedule.ScheduleGetAddAllowGroupsRequestType): Promise<schedule.ScheduleGetAddAllowGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetAddAllowGroupsRequestType, schedule.ScheduleGetAddAllowGroupsResponseType>("ScheduleGetAddAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowGroups);
        });
    }

    ScheduleGetAddAllowFacilities = (input: schedule.ScheduleGetAddAllowFacilitiesRequestType): Promise<schedule.ScheduleGetAddAllowFacilitiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetAddAllowFacilitiesRequestType, schedule.ScheduleGetAddAllowFacilitiesResponseType>("ScheduleGetAddAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetAddAllowFacilities);
        });
    }

    ScheduleGetModifyAllowUsers = (input: schedule.ScheduleGetModifyAllowUsersRequestType): Promise<schedule.ScheduleGetModifyAllowUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetModifyAllowUsersRequestType, schedule.ScheduleGetModifyAllowUsersResponseType>("ScheduleGetModifyAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowUsers);
        });
    }

    ScheduleGetModifyAllowGroups = (input: schedule.ScheduleGetModifyAllowGroupsRequestType): Promise<schedule.ScheduleGetModifyAllowGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetModifyAllowGroupsRequestType, schedule.ScheduleGetModifyAllowGroupsResponseType>("ScheduleGetModifyAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowGroups);
        });
    }

    ScheduleGetModifyAllowFacilities = (input: schedule.ScheduleGetModifyAllowFacilitiesRequestType): Promise<schedule.ScheduleGetModifyAllowFacilitiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetModifyAllowFacilitiesRequestType, schedule.ScheduleGetModifyAllowFacilitiesResponseType>("ScheduleGetModifyAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetModifyAllowFacilities);
        });
    }

    ScheduleGetRemoveAllowUsers = (input: schedule.ScheduleGetRemoveAllowUsersRequestType): Promise<schedule.ScheduleGetRemoveAllowUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetRemoveAllowUsersRequestType, schedule.ScheduleGetRemoveAllowUsersResponseType>("ScheduleGetRemoveAllowUsers", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowUsers);
        });
    }

    ScheduleGetRemoveAllowGroups = (input: schedule.ScheduleGetRemoveAllowGroupsRequestType): Promise<schedule.ScheduleGetRemoveAllowGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetRemoveAllowGroupsRequestType, schedule.ScheduleGetRemoveAllowGroupsResponseType>("ScheduleGetRemoveAllowGroups", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowGroups);
        });
    }

    ScheduleGetRemoveAllowFacilities = (input: schedule.ScheduleGetRemoveAllowFacilitiesRequestType): Promise<schedule.ScheduleGetRemoveAllowFacilitiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleGetRemoveAllowFacilitiesRequestType, schedule.ScheduleGetRemoveAllowFacilitiesResponseType>("ScheduleGetRemoveAllowFacilities", input, client.ScheduleService.SchedulePort.ScheduleGetRemoveAllowFacilities);
        });
    }

    ScheduleFileDownload = (input: schedule.ScheduleFileDownloadRequestType): Promise<schedule.ScheduleFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<schedule.ScheduleFileDownloadRequestType, schedule.ScheduleFileDownloadResponseType>("ScheduleFileDownload", input, client.ScheduleService.SchedulePort.ScheduleFileDownload);
        });
    }

    AddressGetPersonalCardVersions = (input: address.AddressGetPersonalCardVersionsRequestType): Promise<address.AddressGetPersonalCardVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetPersonalCardVersionsRequestType, address.AddressGetPersonalCardVersionsResponseType>("AddressGetPersonalCardVersions", input, client.AddressService.AddressPort.AddressGetPersonalCardVersions);
        });
    }

    AddressGetPersonalCardsById = (input: address.AddressGetPersonalCardsByIdRequestType): Promise<address.AddressGetPersonalCardsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetPersonalCardsByIdRequestType, address.AddressGetPersonalCardsByIdResponseType>("AddressGetPersonalCardsById", input, client.AddressService.AddressPort.AddressGetPersonalCardsById);
        });
    }

    AddressGetSharedCardVersions = (input: address.AddressGetSharedCardVersionsRequestType): Promise<address.AddressGetSharedCardVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetSharedCardVersionsRequestType, address.AddressGetSharedCardVersionsResponseType>("AddressGetSharedCardVersions", input, client.AddressService.AddressPort.AddressGetSharedCardVersions);
        });
    }

    AddressGetSharedCardsById = (input: address.AddressGetSharedCardsByIdRequestType): Promise<address.AddressGetSharedCardsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetSharedCardsByIdRequestType, address.AddressGetSharedCardsByIdResponseType>("AddressGetSharedCardsById", input, client.AddressService.AddressPort.AddressGetSharedCardsById);
        });
    }

    AddressGetPersonalBookVersions = (input: address.AddressGetPersonalBookVersionsRequestType): Promise<address.AddressGetPersonalBookVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetPersonalBookVersionsRequestType, address.AddressGetPersonalBookVersionsResponseType>("AddressGetPersonalBookVersions", input, client.AddressService.AddressPort.AddressGetPersonalBookVersions);
        });
    }

    AddressGetPersonalBooksById = (input: address.AddressGetPersonalBooksByIdRequestType): Promise<address.AddressGetPersonalBooksByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetPersonalBooksByIdRequestType, address.AddressGetPersonalBooksByIdResponseType>("AddressGetPersonalBooksById", input, client.AddressService.AddressPort.AddressGetPersonalBooksById);
        });
    }

    AddressGetSharedBookVersions = (input: address.AddressGetSharedBookVersionsRequestType): Promise<address.AddressGetSharedBookVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetSharedBookVersionsRequestType, address.AddressGetSharedBookVersionsResponseType>("AddressGetSharedBookVersions", input, client.AddressService.AddressPort.AddressGetSharedBookVersions);
        });
    }

    AddressGetSharedBooksById = (input: address.AddressGetSharedBooksByIdRequestType): Promise<address.AddressGetSharedBooksByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetSharedBooksByIdRequestType, address.AddressGetSharedBooksByIdResponseType>("AddressGetSharedBooksById", input, client.AddressService.AddressPort.AddressGetSharedBooksById);
        });
    }

    AddressAddCards = (input: address.AddressAddCardsRequestType): Promise<address.AddressAddCardsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressAddCardsRequestType, address.AddressAddCardsResponseType>("AddressAddCards", input, client.AddressService.AddressPort.AddressAddCards);
        });
    }

    AddressModifyCards = (input: address.AddressModifyCardsRequestType): Promise<address.AddressModifyCardsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressModifyCardsRequestType, address.AddressModifyCardsResponseType>("AddressModifyCards", input, client.AddressService.AddressPort.AddressModifyCards);
        });
    }

    AddressRemovePersonalCards = (input: address.AddressRemovePersonalCardsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressRemovePersonalCardsRequestType, void>("AddressRemovePersonalCards", input, client.AddressService.AddressPort.AddressRemovePersonalCards);
        });
    }

    AddressRemoveSharedCards = (input: address.AddressRemoveSharedCardsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressRemoveSharedCardsRequestType, void>("AddressRemoveSharedCards", input, client.AddressService.AddressPort.AddressRemoveSharedCards);
        });
    }

    AddressSearchCards = (input: address.AddressSearchCardsRequestType): Promise<address.AddressSearchCardsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressSearchCardsRequestType, address.AddressSearchCardsResponseType>("AddressSearchCards", input, client.AddressService.AddressPort.AddressSearchCards);
        });
    }

    AddressCopyPersonalCardsToOtherBook = (input: address.AddressCopyPersonalCardsToOtherBookRequestType): Promise<address.AddressCopyPersonalCardsToOtherBookResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressCopyPersonalCardsToOtherBookRequestType, address.AddressCopyPersonalCardsToOtherBookResponseType>("AddressCopyPersonalCardsToOtherBook", input, client.AddressService.AddressPort.AddressCopyPersonalCardsToOtherBook);
        });
    }

    AddressGetMyAddressGroupVersions = (input: address.AddressGetMyAddressGroupVersionsRequestType): Promise<address.AddressGetMyAddressGroupVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetMyAddressGroupVersionsRequestType, address.AddressGetMyAddressGroupVersionsResponseType>("AddressGetMyAddressGroupVersions", input, client.AddressService.AddressPort.AddressGetMyAddressGroupVersions);
        });
    }

    AddressGetMyAddressGroupsById = (input: address.AddressGetMyAddressGroupsByIdRequestType): Promise<address.AddressGetMyAddressGroupsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetMyAddressGroupsByIdRequestType, address.AddressGetMyAddressGroupsByIdResponseType>("AddressGetMyAddressGroupsById", input, client.AddressService.AddressPort.AddressGetMyAddressGroupsById);
        });
    }

    AddressAddMyAddressGroups = (input: address.AddressAddMyAddressGroupsRequestType): Promise<address.AddressAddMyAddressGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressAddMyAddressGroupsRequestType, address.AddressAddMyAddressGroupsResponseType>("AddressAddMyAddressGroups", input, client.AddressService.AddressPort.AddressAddMyAddressGroups);
        });
    }

    AddressModifyMyAddressGroups = (input: address.AddressModifyMyAddressGroupsRequestType): Promise<address.AddressModifyMyAddressGroupsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressModifyMyAddressGroupsRequestType, address.AddressModifyMyAddressGroupsResponseType>("AddressModifyMyAddressGroups", input, client.AddressService.AddressPort.AddressModifyMyAddressGroups);
        });
    }

    AddressRemoveMyAddressGroups = (input: address.AddressRemoveMyAddressGroupsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressRemoveMyAddressGroupsRequestType, void>("AddressRemoveMyAddressGroups", input, client.AddressService.AddressPort.AddressRemoveMyAddressGroups);
        });
    }

    AddressModifyCardsInMyAddressGroup = (input: address.AddressModifyCardsInMyAddressGroupRequestType): Promise<address.AddressModifyCardsInMyAddressGroupResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressModifyCardsInMyAddressGroupRequestType, address.AddressModifyCardsInMyAddressGroupResponseType>("AddressModifyCardsInMyAddressGroup", input, client.AddressService.AddressPort.AddressModifyCardsInMyAddressGroup);
        });
    }

    AddressGetProfiles = (input: address.AddressGetProfilesRequestType): Promise<address.AddressGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetProfilesRequestType, address.AddressGetProfilesResponseType>("AddressGetProfiles", input, client.AddressService.AddressPort.AddressGetProfiles);
        });
    }

    AddressSetProfiles = (input: address.AddressSetProfilesRequestType): Promise<address.AddressSetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressSetProfilesRequestType, address.AddressSetProfilesResponseType>("AddressSetProfiles", input, client.AddressService.AddressPort.AddressSetProfiles);
        });
    }

    AddressGetReadAllowBooks = (input: address.AddressGetReadAllowBooksRequestType): Promise<address.AddressGetReadAllowBooksResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetReadAllowBooksRequestType, address.AddressGetReadAllowBooksResponseType>("AddressGetReadAllowBooks", input, client.AddressService.AddressPort.AddressGetReadAllowBooks);
        });
    }

    AddressGetModifyAllowBooks = (input: address.AddressGetModifyAllowBooksRequestType): Promise<address.AddressGetModifyAllowBooksResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressGetModifyAllowBooksRequestType, address.AddressGetModifyAllowBooksResponseType>("AddressGetModifyAllowBooks", input, client.AddressService.AddressPort.AddressGetModifyAllowBooks);
        });
    }

    AddressFileDownload = (input: address.AddressFileDownloadRequestType): Promise<address.AddressFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<address.AddressFileDownloadRequestType, address.AddressFileDownloadResponseType>("AddressFileDownload", input, client.AddressService.AddressPort.AddressFileDownload);
        });
    }

    WorkflowGetUnprocessedApplicationVersions = (input: workflow.WorkflowGetUnprocessedApplicationVersionsRequestType): Promise<workflow.WorkflowGetUnprocessedApplicationVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetUnprocessedApplicationVersionsRequestType, workflow.WorkflowGetUnprocessedApplicationVersionsResponseType>("WorkflowGetUnprocessedApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetUnprocessedApplicationVersions);
        });
    }

    WorkflowGetUnprocessedApplicationsById = (input: workflow.WorkflowGetUnprocessedApplicationsByIdRequestType): Promise<workflow.WorkflowGetUnprocessedApplicationsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetUnprocessedApplicationsByIdRequestType, workflow.WorkflowGetUnprocessedApplicationsByIdResponseType>("WorkflowGetUnprocessedApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetUnprocessedApplicationsById);
        });
    }

    WorkflowGetSentApplicationVersions = (input: workflow.WorkflowGetSentApplicationVersionsRequestType): Promise<workflow.WorkflowGetSentApplicationVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetSentApplicationVersionsRequestType, workflow.WorkflowGetSentApplicationVersionsResponseType>("WorkflowGetSentApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetSentApplicationVersions);
        });
    }

    WorkflowGetSentApplicationsById = (input: workflow.WorkflowGetSentApplicationsByIdRequestType): Promise<workflow.WorkflowGetSentApplicationsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetSentApplicationsByIdRequestType, workflow.WorkflowGetSentApplicationsByIdResponseType>("WorkflowGetSentApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetSentApplicationsById);
        });
    }

    WorkflowGetReceivedApplicationVersions = (input: workflow.WorkflowGetReceivedApplicationVersionsRequestType): Promise<workflow.WorkflowGetReceivedApplicationVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetReceivedApplicationVersionsRequestType, workflow.WorkflowGetReceivedApplicationVersionsResponseType>("WorkflowGetReceivedApplicationVersions", input, client.WorkflowService.WorkflowPort.WorkflowGetReceivedApplicationVersions);
        });
    }

    WorkflowGetReceivedApplicationsById = (input: workflow.WorkflowGetReceivedApplicationsByIdRequestType): Promise<workflow.WorkflowGetReceivedApplicationsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetReceivedApplicationsByIdRequestType, workflow.WorkflowGetReceivedApplicationsByIdResponseType>("WorkflowGetReceivedApplicationsById", input, client.WorkflowService.WorkflowPort.WorkflowGetReceivedApplicationsById);
        });
    }

    WorkflowGetApprovalDelegators = (input: workflow.WorkflowGetApprovalDelegatorsRequestType): Promise<workflow.WorkflowGetApprovalDelegatorsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetApprovalDelegatorsRequestType, workflow.WorkflowGetApprovalDelegatorsResponseType>("WorkflowGetApprovalDelegators", input, client.WorkflowService.WorkflowPort.WorkflowGetApprovalDelegators);
        });
    }

    WorkflowGetProxyApprovalsByDelegatorId = (input: workflow.WorkflowGetProxyApprovalsByDelegatorIdRequestType): Promise<workflow.WorkflowGetProxyApprovalsByDelegatorIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetProxyApprovalsByDelegatorIdRequestType, workflow.WorkflowGetProxyApprovalsByDelegatorIdResponseType>("WorkflowGetProxyApprovalsByDelegatorId", input, client.WorkflowService.WorkflowPort.WorkflowGetProxyApprovalsByDelegatorId);
        });
    }

    WorkflowGetPendingApprovals = (input: workflow.WorkflowGetPendingApprovalsRequestType): Promise<workflow.WorkflowGetPendingApprovalsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetPendingApprovalsRequestType, workflow.WorkflowGetPendingApprovalsResponseType>("WorkflowGetPendingApprovals", input, client.WorkflowService.WorkflowPort.WorkflowGetPendingApprovals);
        });
    }

    WorkflowHandleApplications = (input: workflow.WorkflowHandleApplicationsRequestType): Promise<workflow.WorkflowHandleApplicationsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowHandleApplicationsRequestType, workflow.WorkflowHandleApplicationsResponseType>("WorkflowHandleApplications", input, client.WorkflowService.WorkflowPort.WorkflowHandleApplications);
        });
    }

    WorkflowGetProxies = (input: workflow.WorkflowGetProxiesRequestType): Promise<workflow.WorkflowGetProxiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetProxiesRequestType, workflow.WorkflowGetProxiesResponseType>("WorkflowGetProxies", input, client.WorkflowService.WorkflowPort.WorkflowGetProxies);
        });
    }

    WorkflowSetProxies = (input: workflow.WorkflowSetProxiesRequestType): Promise<workflow.WorkflowSetProxiesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowSetProxiesRequestType, workflow.WorkflowSetProxiesResponseType>("WorkflowSetProxies", input, client.WorkflowService.WorkflowPort.WorkflowSetProxies);
        });
    }

    WorkflowGetProfiles = (input: workflow.WorkflowGetProfilesRequestType): Promise<workflow.WorkflowGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetProfilesRequestType, workflow.WorkflowGetProfilesResponseType>("WorkflowGetProfiles", input, client.WorkflowService.WorkflowPort.WorkflowGetProfiles);
        });
    }

    WorkflowFileDownload = (input: workflow.WorkflowFileDownloadRequestType): Promise<workflow.WorkflowFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowFileDownloadRequestType, workflow.WorkflowFileDownloadResponseType>("WorkflowFileDownload", input, client.WorkflowService.WorkflowPort.WorkflowFileDownload);
        });
    }

    WorkflowGetRequests = (input: workflow.WorkflowGetRequestsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetRequestsRequestType, void>("WorkflowGetRequests", input, client.WorkflowService.WorkflowPort.WorkflowGetRequests);
        });
    }

    WorkflowGetRequestById = (input: workflow.WorkflowGetRequestByIdRequestType): Promise<workflow.WorkflowGetRequestByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetRequestByIdRequestType, workflow.WorkflowGetRequestByIdResponseType>("WorkflowGetRequestById", input, client.WorkflowService.WorkflowPort.WorkflowGetRequestById);
        });
    }

    WorkflowGetAvailabilityUsers = (input: workflow.WorkflowGetAvailabilityUsersRequestType): Promise<workflow.WorkflowGetAvailabilityUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetAvailabilityUsersRequestType, workflow.WorkflowGetAvailabilityUsersResponseType>("WorkflowGetAvailabilityUsers", input, client.WorkflowService.WorkflowPort.WorkflowGetAvailabilityUsers);
        });
    }

    WorkflowGetAttachedFileBody = (input: workflow.WorkflowGetAttachedFileBodyRequestType): Promise<workflow.WorkflowGetListCategoryResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetAttachedFileBodyRequestType, workflow.WorkflowGetListCategoryResponseType>("WorkflowGetAttachedFileBody", input, client.WorkflowService.WorkflowPort.WorkflowGetAttachedFileBody);
        });
    }

    WorkflowGetCategories = (input: workflow.WorkflowGetListCategoryRequestType): Promise<workflow.WorkflowGetListCategoryResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetListCategoryRequestType, workflow.WorkflowGetListCategoryResponseType>("WorkflowGetCategories", input, client.WorkflowService.WorkflowPort.WorkflowGetCategories);
        });
    }

    WorkflowGetRequestFormByCategoryIds = (input: workflow.WorkflowGetRequestFormByCategoryIdsRequestType): Promise<workflow.WorkflowGetRequestFormByCategoryIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<workflow.WorkflowGetRequestFormByCategoryIdsRequestType, workflow.WorkflowGetRequestFormByCategoryIdsResponseType>("WorkflowGetRequestFormByCategoryIds", input, client.WorkflowService.WorkflowPort.WorkflowGetRequestFormByCategoryIds);
        });
    }

    MailGetAccountVersions = (input: mail.MailGetAccountVersionsRequestType): Promise<mail.MailGetAccountVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetAccountVersionsRequestType, mail.MailGetAccountVersionsResponseType>("MailGetAccountVersions", input, client.MailService.MailPort.MailGetAccountVersions);
        });
    }

    MailGetAccountsById = (input: mail.MailGetAccountsByIdRequestType): Promise<mail.MailGetAccountsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetAccountsByIdRequestType, mail.MailGetAccountsByIdResponseType>("MailGetAccountsById", input, client.MailService.MailPort.MailGetAccountsById);
        });
    }

    MailGetMailVersions = (input: mail.MailGetMailVersionsRequestType): Promise<mail.MailGetMailVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetMailVersionsRequestType, mail.MailGetMailVersionsResponseType>("MailGetMailVersions", input, client.MailService.MailPort.MailGetMailVersions);
        });
    }

    MailGetMailsById = (input: mail.MailGetMailsByIdRequestType): Promise<mail.MailGetMailsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetMailsByIdRequestType, mail.MailGetMailsByIdResponseType>("MailGetMailsById", input, client.MailService.MailPort.MailGetMailsById);
        });
    }

    MailSendMails = (input: mail.MailSendMailsRequestType): Promise<mail.MailSendMailsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailSendMailsRequestType, mail.MailSendMailsResponseType>("MailSendMails", input, client.MailService.MailPort.MailSendMails);
        });
    }

    MailReplyMails = (input: mail.MailReplyMailsRequestType): Promise<mail.MailReplyMailsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailReplyMailsRequestType, mail.MailReplyMailsResponseType>("MailReplyMails", input, client.MailService.MailPort.MailReplyMails);
        });
    }

    MailForwardMails = (input: mail.MailForwardMailsRequestType): Promise<mail.MailForwardMailsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailForwardMailsRequestType, mail.MailForwardMailsResponseType>("MailForwardMails", input, client.MailService.MailPort.MailForwardMails);
        });
    }

    MailSaveDraftMails = (input: mail.MailSaveDraftMailsRequestType): Promise<mail.MailSaveDraftMailsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailSaveDraftMailsRequestType, mail.MailSaveDraftMailsResponseType>("MailSaveDraftMails", input, client.MailService.MailPort.MailSaveDraftMails);
        });
    }

    MailRemoveMails = (input: mail.MailRemoveMailsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailRemoveMailsRequestType, void>("MailRemoveMails", input, client.MailService.MailPort.MailRemoveMails);
        });
    }

    MailSearchMails = (input: mail.MailSearchMailsRequestType): Promise<mail.MailSearchMailsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailSearchMailsRequestType, mail.MailSearchMailsResponseType>("MailSearchMails", input, client.MailService.MailPort.MailSearchMails);
        });
    }

    MailOpenDispositionNotifications = (input: mail.MailOpenDispositionNotificationsRequestType): Promise<mail.MailOpenDispositionNotificationsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailOpenDispositionNotificationsRequestType, mail.MailOpenDispositionNotificationsResponseType>("MailOpenDispositionNotifications", input, client.MailService.MailPort.MailOpenDispositionNotifications);
        });
    }

    MailAddFolders = (input: mail.MailAddFoldersRequestType): Promise<mail.MailAddFoldersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailAddFoldersRequestType, mail.MailAddFoldersResponseType>("MailAddFolders", input, client.MailService.MailPort.MailAddFolders);
        });
    }

    MailModifyFolders = (input: mail.MailModifyFoldersRequestType): Promise<mail.MailModifyFoldersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailModifyFoldersRequestType, mail.MailModifyFoldersResponseType>("MailModifyFolders", input, client.MailService.MailPort.MailModifyFolders);
        });
    }

    MailRemoveFolders = (input: mail.MailRemoveFoldersRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailRemoveFoldersRequestType, void>("MailRemoveFolders", input, client.MailService.MailPort.MailRemoveFolders);
        });
    }

    MailMoveMailsToOtherFolder = (input: mail.MailMoveMailsToOtherFolderRequestType): Promise<mail.MailMoveMailsToOtherFolderResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailMoveMailsToOtherFolderRequestType, mail.MailMoveMailsToOtherFolderResponseType>("MailMoveMailsToOtherFolder", input, client.MailService.MailPort.MailMoveMailsToOtherFolder);
        });
    }

    MailGetSignatures = (input: mail.MailGetSignaturesRequestType): Promise<mail.MailGetSignaturesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetSignaturesRequestType, mail.MailGetSignaturesResponseType>("MailGetSignatures", input, client.MailService.MailPort.MailGetSignatures);
        });
    }

    MailGetFilters = (input: mail.MailGetFiltersRequestType): Promise<mail.MailGetFiltersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetFiltersRequestType, mail.MailGetFiltersResponseType>("MailGetFilters", input, client.MailService.MailPort.MailGetFilters);
        });
    }

    MailGetProfiles = (input: mail.MailGetProfilesRequestType): Promise<mail.MailGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetProfilesRequestType, mail.MailGetProfilesResponseType>("MailGetProfiles", input, client.MailService.MailPort.MailGetProfiles);
        });
    }

    MailSetProfiles = (input: mail.MailSetProfilesRequestType): Promise<mail.MailSetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailSetProfilesRequestType, mail.MailSetProfilesResponseType>("MailSetProfiles", input, client.MailService.MailPort.MailSetProfiles);
        });
    }

    MailSourceDownload = (input: mail.MailSourceDownloadRequestType): Promise<mail.MailSourceDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailSourceDownloadRequestType, mail.MailSourceDownloadResponseType>("MailSourceDownload", input, client.MailService.MailPort.MailSourceDownload);
        });
    }

    MailFileDownload = (input: mail.MailFileDownloadRequestType): Promise<mail.MailFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailFileDownloadRequestType, mail.MailFileDownloadResponseType>("MailFileDownload", input, client.MailService.MailPort.MailFileDownload);
        });
    }

    MailCreateUserAccount = (input: mail.MailCreateUserAccountRequestType): Promise<mail.MailCreateUserAccountResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailCreateUserAccountRequestType, mail.MailCreateUserAccountResponseType>("MailCreateUserAccount", input, client.MailService.MailPort.MailCreateUserAccount);
        });
    }

    MailEditUserAccount = (input: mail.MailEditUserAccountRequestType): Promise<mail.MailEditUserAccountResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailEditUserAccountRequestType, mail.MailEditUserAccountResponseType>("MailEditUserAccount", input, client.MailService.MailPort.MailEditUserAccount);
        });
    }

    MailDeleteUserAccount = (input: mail.MailDeleteUserAccountRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailDeleteUserAccountRequestType, void>("MailDeleteUserAccount", input, client.MailService.MailPort.MailDeleteUserAccount);
        });
    }

    MailGetNewArrivingEmail = (input: mail.MailGetNewArrivingEmailRequestType): Promise<mail.MailGetNewArrivingEmailResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailGetNewArrivingEmailRequestType, mail.MailGetNewArrivingEmailResponseType>("MailGetNewArrivingEmail", input, client.MailService.MailPort.MailGetNewArrivingEmail);
        });
    }

    MailAddMailServers = (input: mail.MailAddMailServersRequestType): Promise<mail.MailAddMailServersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailAddMailServersRequestType, mail.MailAddMailServersResponseType>("MailAddMailServers", input, client.MailService.MailPort.MailAddMailServers);
        });
    }

    MailModifyMailServers = (input: mail.MailModifyMailServersRequestType): Promise<mail.MailModifyMailServersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailModifyMailServersRequestType, mail.MailModifyMailServersResponseType>("MailModifyMailServers", input, client.MailService.MailPort.MailModifyMailServers);
        });
    }

    MailRemoveMailServers = (input: mail.MailRemoveMailServersRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<mail.MailRemoveMailServersRequestType, void>("MailRemoveMailServers", input, client.MailService.MailPort.MailRemoveMailServers);
        });
    }

    MessageGetFolderVersions = (input: message.MessageGetFolderVersionsRequestType): Promise<message.MessageGetFolderVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetFolderVersionsRequestType, message.MessageGetFolderVersionsResponseType>("MessageGetFolderVersions", input, client.MessageService.MessagePort.MessageGetFolderVersions);
        });
    }

    MessageGetFoldersById = (input: message.MessageGetFoldersByIdRequestType): Promise<message.MessageGetFoldersByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetFoldersByIdRequestType, message.MessageGetFoldersByIdResponseType>("MessageGetFoldersById", input, client.MessageService.MessagePort.MessageGetFoldersById);
        });
    }

    MessageGetThreadVersions = (input: message.MessageGetThreadVersionsRequestType): Promise<message.MessageGetThreadVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetThreadVersionsRequestType, message.MessageGetThreadVersionsResponseType>("MessageGetThreadVersions", input, client.MessageService.MessagePort.MessageGetThreadVersions);
        });
    }

    MessageGetThreadsById = (input: message.MessageGetThreadsByIdRequestType): Promise<message.MessageGetThreadsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetThreadsByIdRequestType, message.MessageGetThreadsByIdResponseType>("MessageGetThreadsById", input, client.MessageService.MessagePort.MessageGetThreadsById);
        });
    }

    MessageCreateThreads = (input: message.MessageCreateThreadsRequestType): Promise<message.MessageCreateThreadsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageCreateThreadsRequestType, message.MessageCreateThreadsResponseType>("MessageCreateThreads", input, client.MessageService.MessagePort.MessageCreateThreads);
        });
    }

    MessageModifyThreads = (input: message.MessageModifyThreadsRequestType): Promise<message.MessageModifyThreadsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageModifyThreadsRequestType, message.MessageModifyThreadsResponseType>("MessageModifyThreads", input, client.MessageService.MessagePort.MessageModifyThreads);
        });
    }

    MessageSaveDraftThreads = (input: message.MessageSaveDraftThreadsRequestType): Promise<message.MessageSaveDraftThreadsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageSaveDraftThreadsRequestType, message.MessageSaveDraftThreadsResponseType>("MessageSaveDraftThreads", input, client.MessageService.MessagePort.MessageSaveDraftThreads);
        });
    }

    MessageConfirmThreads = (input: message.MessageConfirmThreadsRequestType): Promise<message.MessageConfirmThreadsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageConfirmThreadsRequestType, message.MessageConfirmThreadsResponseType>("MessageConfirmThreads", input, client.MessageService.MessagePort.MessageConfirmThreads);
        });
    }

    MessageRemoveThreads = (input: message.MessageRemoveThreadsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageRemoveThreadsRequestType, void>("MessageRemoveThreads", input, client.MessageService.MessagePort.MessageRemoveThreads);
        });
    }

    MessageSearchThreads = (input: message.MessageSearchThreadsRequestType): Promise<message.MessageSearchThreadsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageSearchThreadsRequestType, message.MessageSearchThreadsResponseType>("MessageSearchThreads", input, client.MessageService.MessagePort.MessageSearchThreads);
        });
    }

    MessageGetFollows = (input: message.MessageGetFollowsRequestType): Promise<message.MessageGetFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetFollowsRequestType, message.MessageGetFollowsResponseType>("MessageGetFollows", input, client.MessageService.MessagePort.MessageGetFollows);
        });
    }

    MessageAddFollows = (input: message.MessageAddFollowsRequestType): Promise<message.MessageAddFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageAddFollowsRequestType, message.MessageAddFollowsResponseType>("MessageAddFollows", input, client.MessageService.MessagePort.MessageAddFollows);
        });
    }

    MessageRemoveFollows = (input: message.MessageRemoveFollowsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageRemoveFollowsRequestType, void>("MessageRemoveFollows", input, client.MessageService.MessagePort.MessageRemoveFollows);
        });
    }

    MessageGetProfiles = (input: message.MessageGetProfilesRequestType): Promise<message.MessageGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageGetProfilesRequestType, message.MessageGetProfilesResponseType>("MessageGetProfiles", input, client.MessageService.MessagePort.MessageGetProfiles);
        });
    }

    MessageSetProfiles = (input: message.MessageSetProfilesRequestType): Promise<message.MessageSetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageSetProfilesRequestType, message.MessageSetProfilesResponseType>("MessageSetProfiles", input, client.MessageService.MessagePort.MessageSetProfiles);
        });
    }

    MessageFileDownload = (input: message.MessageFileDownloadRequestType): Promise<message.MessageFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<message.MessageFileDownloadRequestType, message.MessageFileDownloadResponseType>("MessageFileDownload", input, client.MessageService.MessagePort.MessageFileDownload);
        });
    }

    NotificationGetNotificationVersions = (input: notification.NotificationGetNotificationVersionsRequestType): Promise<notification.NotificationGetNotificationVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationGetNotificationVersionsRequestType, notification.NotificationGetNotificationVersionsResponseType>("NotificationGetNotificationVersions", input, client.NotificationService.NotificationPort.NotificationGetNotificationVersions);
        });
    }

    NotificationGetNotificationsById = (input: notification.NotificationGetNotificationsByIdRequestType): Promise<notification.NotificationGetNotificationsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationGetNotificationsByIdRequestType, notification.NotificationGetNotificationsByIdResponseType>("NotificationGetNotificationsById", input, client.NotificationService.NotificationPort.NotificationGetNotificationsById);
        });
    }

    NotificationGetNotificationHistoryVersions = (input: notification.NotificationGetNotificationHistoryVersionsRequestType): Promise<notification.NotificationGetNotificationHistoryVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationGetNotificationHistoryVersionsRequestType, notification.NotificationGetNotificationHistoryVersionsResponseType>("NotificationGetNotificationHistoryVersions", input, client.NotificationService.NotificationPort.NotificationGetNotificationHistoryVersions);
        });
    }

    NotificationGetNotificationHistoriesById = (input: notification.NotificationGetNotificationHistoriesByIdRequestType): Promise<notification.NotificationGetNotificationHistoriesByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationGetNotificationHistoriesByIdRequestType, notification.NotificationGetNotificationHistoriesByIdResponseType>("NotificationGetNotificationHistoriesById", input, client.NotificationService.NotificationPort.NotificationGetNotificationHistoriesById);
        });
    }

    NotificationConfirmNotification = (input: notification.NotificationConfirmNotificationRequestType): Promise<notification.NotificationConfirmNotificationResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationConfirmNotificationRequestType, notification.NotificationConfirmNotificationResponseType>("NotificationConfirmNotification", input, client.NotificationService.NotificationPort.NotificationConfirmNotification);
        });
    }

    NotificationGetProfiles = (input: notification.NotificationGetProfilesRequestType): Promise<notification.NotificationGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationGetProfilesRequestType, notification.NotificationGetProfilesResponseType>("NotificationGetProfiles", input, client.NotificationService.NotificationPort.NotificationGetProfiles);
        });
    }

    NotificationSetProfiles = (input: notification.NotificationSetProfilesRequestType): Promise<notification.NotificationSetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<notification.NotificationSetProfilesRequestType, notification.NotificationSetProfilesResponseType>("NotificationSetProfiles", input, client.NotificationService.NotificationPort.NotificationSetProfiles);
        });
    }

    CBWebSrvGetWeatherLocations = (input: cbwebsrv.CBWebSrvGetWeatherLocationsRequestType): Promise<cbwebsrv.CBWebSrvGetWeatherLocationsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cbwebsrv.CBWebSrvGetWeatherLocationsRequestType, cbwebsrv.CBWebSrvGetWeatherLocationsResponseType>("CBWebSrvGetWeatherLocations", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeatherLocations);
        });
    }

    CBWebSrvGetWeathersByLocation = (input: cbwebsrv.CBWebSrvGetWeathersByLocationRequestType): Promise<cbwebsrv.CBWebSrvGetWeathersByLocationResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cbwebsrv.CBWebSrvGetWeathersByLocationRequestType, cbwebsrv.CBWebSrvGetWeathersByLocationResponseType>("CBWebSrvGetWeathersByLocation", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeathersByLocation);
        });
    }

    CBWebSrvGetWeathers = (input: cbwebsrv.CBWebSrvGetWeathersRequestType): Promise<cbwebsrv.CBWebSrvGetWeathersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cbwebsrv.CBWebSrvGetWeathersRequestType, cbwebsrv.CBWebSrvGetWeathersResponseType>("CBWebSrvGetWeathers", input, client.CybozuWebSrvService.CBWebSrvPort.CBWebSrvGetWeathers);
        });
    }

    ReportGetReportVersions = (input: report.ReportGetReportVersionsRequestType): Promise<report.ReportGetReportVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportGetReportVersionsRequestType, report.ReportGetReportVersionsResponseType>("ReportGetReportVersions", input, client.ReportService.ReportPort.ReportGetReportVersions);
        });
    }

    ReportGetReportById = (input: report.ReportGetReportByIdRequestType): Promise<report.ReportGetReportByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportGetReportByIdRequestType, report.ReportGetReportByIdResponseType>("ReportGetReportById", input, client.ReportService.ReportPort.ReportGetReportById);
        });
    }

    ReportAddFollows = (input: report.ReportAddFollowsRequestType): Promise<report.ReportAddFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportAddFollowsRequestType, report.ReportAddFollowsResponseType>("ReportAddFollows", input, client.ReportService.ReportPort.ReportAddFollows);
        });
    }

    ReportGetFollows = (input: report.ReportGetFollowsRequestType): Promise<report.ReportGetFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportGetFollowsRequestType, report.ReportGetFollowsResponseType>("ReportGetFollows", input, client.ReportService.ReportPort.ReportGetFollows);
        });
    }

    ReportRemoveFollows = (input: report.ReportRemoveFollowsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportRemoveFollowsRequestType, void>("ReportRemoveFollows", input, client.ReportService.ReportPort.ReportRemoveFollows);
        });
    }

    ReportRemoveReports = (input: report.ReportRemoveReportsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportRemoveReportsRequestType, void>("ReportRemoveReports", input, client.ReportService.ReportPort.ReportRemoveReports);
        });
    }

    ReportSearchReports = (input: report.ReportSearchReportsRequestType): Promise<report.ReportSearchReportsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportSearchReportsRequestType, report.ReportSearchReportsResponseType>("ReportSearchReports", input, client.ReportService.ReportPort.ReportSearchReports);
        });
    }

    ReportFileDownload = (input: report.ReportFileDownloadRequestType): Promise<report.ReportFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<report.ReportFileDownloadRequestType, report.ReportFileDownloadResponseType>("ReportFileDownload", input, client.ReportService.ReportPort.ReportFileDownload);
        });
    }

    CabinetGetFolderInfo = (input: cabinet.CabinetGetFolderInfoRequestType): Promise<cabinet.CabinetGetFolderInfoResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetGetFolderInfoRequestType, cabinet.CabinetGetFolderInfoResponseType>("CabinetGetFolderInfo", input, client.CabinetService.CabinetPort.CabinetGetFolderInfo);
        });
    }

    CabinetGetFileInfo = (input: cabinet.CabinetGetFileInfoRequestType): Promise<cabinet.CabinetGetFileInfoResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetGetFileInfoRequestType, cabinet.CabinetGetFileInfoResponseType>("CabinetGetFileInfo", input, client.CabinetService.CabinetPort.CabinetGetFileInfo);
        });
    }

    CabinetFileDownload = (input: cabinet.CabinetFileDownloadRequestType): Promise<cabinet.CabinetFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetFileDownloadRequestType, cabinet.CabinetFileDownloadResponseType>("CabinetFileDownload", input, client.CabinetService.CabinetPort.CabinetFileDownload);
        });
    }

    CabinetAddFile = (input: cabinet.CabinetAddFileRequestType): Promise<cabinet.CabinetAddFileResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetAddFileRequestType, cabinet.CabinetAddFileResponseType>("CabinetAddFile", input, client.CabinetService.CabinetPort.CabinetAddFile);
        });
    }

    CabinetUpdateFile = (input: cabinet.CabinetUpdateFileRequestType): Promise<cabinet.CabinetUpdateFileResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetUpdateFileRequestType, cabinet.CabinetUpdateFileResponseType>("CabinetUpdateFile", input, client.CabinetService.CabinetPort.CabinetUpdateFile);
        });
    }

    CabinetUpdateFileInformation = (input: cabinet.CabinetUpdateFileInformationRequestType): Promise<cabinet.CabinetUpdateFileInformationResponseType> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetUpdateFileInformationRequestType, cabinet.CabinetUpdateFileInformationResponseType>("CabinetUpdateFileInformation", input, client.CabinetService.CabinetPort.CabinetUpdateFileInformation);
        });
    }

    CabinetDeleteFiles = (input: cabinet.CabinetDeleteFilesRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<cabinet.CabinetDeleteFilesRequestType, void>("CabinetDeleteFiles", input, client.CabinetService.CabinetPort.CabinetDeleteFiles);
        });
    }

    AdminCountUsers = (input: admin.AdminCountUsersRequestType): Promise<admin.AdminCountUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountUsersRequestType, admin.AdminCountUsersResponseType>("AdminCountUsers", input, client.AdminService.AdminPort.AdminCountUsers);
        });
    }

    AdminGetUserIds = (input: admin.AdminGetUserIdsRequestType): Promise<admin.AdminGetUserIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetUserIdsRequestType, admin.AdminGetUserIdsResponseType>("AdminGetUserIds", input, client.AdminService.AdminPort.AdminGetUserIds);
        });
    }

    AdminGetUserDetailByIds = (input: admin.AdminGetUserDetailByIdsRequestType): Promise<admin.AdminGetUserDetailByIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetUserDetailByIdsRequestType, admin.AdminGetUserDetailByIdsResponseType>("AdminGetUserDetailByIds", input, client.AdminService.AdminPort.AdminGetUserDetailByIds);
        });
    }

    AdminCountOrgs = (input: admin.AdminCountOrgsRequestType): Promise<admin.AdminCountOrgsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountOrgsRequestType, admin.AdminCountOrgsResponseType>("AdminCountOrgs", input, client.AdminService.AdminPort.AdminCountOrgs);
        });
    }

    AdminGetOrgIds = (input: admin.AdminGetOrgIdsRequestType): Promise<admin.AdminGetOrgIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetOrgIdsRequestType, admin.AdminGetOrgIdsResponseType>("AdminGetOrgIds", input, client.AdminService.AdminPort.AdminGetOrgIds);
        });
    }

    AdminGetOrgDetailByIds = (input: admin.AdminGetOrgDetailByIdsRequestType): Promise<admin.AdminGetOrgDetailByIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetOrgDetailByIdsRequestType, admin.AdminGetOrgDetailByIdsResponseType>("AdminGetOrgDetailByIds", input, client.AdminService.AdminPort.AdminGetOrgDetailByIds);
        });
    }

    AdminCountChildOrgs = (input: admin.AdminCountChildOrgsRequestType): Promise<admin.AdminCountChildOrgsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountChildOrgsRequestType, admin.AdminCountChildOrgsResponseType>("AdminCountChildOrgs", input, client.AdminService.AdminPort.AdminCountChildOrgs);
        });
    }

    AdminGetChildOrgs = (input: admin.AdminGetChildOrgsRequestType): Promise<admin.AdminGetChildOrgsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetChildOrgsRequestType, admin.AdminGetChildOrgsResponseType>("AdminGetChildOrgs", input, client.AdminService.AdminPort.AdminGetChildOrgs);
        });
    }

    AdminCountUsersInOrg = (input: admin.AdminCountUsersInOrgRequestType): Promise<admin.AdminCountUsersInOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountUsersInOrgRequestType, admin.AdminCountUsersInOrgResponseType>("AdminCountUsersInOrg", input, client.AdminService.AdminPort.AdminCountUsersInOrg);
        });
    }

    AdminGetUserIdsInOrg = (input: admin.AdminGetUserIdsInOrgRequestType): Promise<admin.AdminGetUserIdsInOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetUserIdsInOrgRequestType, admin.AdminGetUserIdsInOrgResponseType>("AdminGetUserIdsInOrg", input, client.AdminService.AdminPort.AdminGetUserIdsInOrg);
        });
    }

    AdminCountNoGroupUsers = (input: admin.AdminCountNoGroupUsersRequestType): Promise<admin.AdminCountNoGroupUsersResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountNoGroupUsersRequestType, admin.AdminCountNoGroupUsersResponseType>("AdminCountNoGroupUsers", input, client.AdminService.AdminPort.AdminCountNoGroupUsers);
        });
    }

    AdminGetNoGroupUserIds = (input: admin.AdminGetNoGroupUserIdsRequestType): Promise<admin.AdminGetNoGroupUserIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetNoGroupUserIdsRequestType, admin.AdminGetNoGroupUserIdsResponseType>("AdminGetNoGroupUserIds", input, client.AdminService.AdminPort.AdminGetNoGroupUserIds);
        });
    }

    AdminCountOrgsOfUser = (input: admin.AdminCountOrgsOfUserRequestType): Promise<admin.AdminCountOrgsOfUserResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminCountOrgsOfUserRequestType, admin.AdminCountOrgsOfUserResponseType>("AdminCountOrgsOfUser", input, client.AdminService.AdminPort.AdminCountOrgsOfUser);
        });
    }

    AdminGetOrgIdsOfUser = (input: admin.AdminGetOrgIdsOfUserRequestType): Promise<admin.AdminGetOrgIdsOfUserResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetOrgIdsOfUserRequestType, admin.AdminGetOrgIdsOfUserResponseType>("AdminGetOrgIdsOfUser", input, client.AdminService.AdminPort.AdminGetOrgIdsOfUser);
        });
    }

    AdminGetParentOrgId = (input: admin.AdminGetParentOrgIdRequestType): Promise<admin.AdminGetParentOrgIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetParentOrgIdRequestType, admin.AdminGetParentOrgIdResponseType>("AdminGetParentOrgId", input, client.AdminService.AdminPort.AdminGetParentOrgId);
        });
    }

    AdminGetUserIdByLoginName = (input: admin.AdminGetUserIdByLoginNameRequestType): Promise<admin.AdminGetUserIdByLoginNameResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetUserIdByLoginNameRequestType, admin.AdminGetUserIdByLoginNameResponseType>("AdminGetUserIdByLoginName", input, client.AdminService.AdminPort.AdminGetUserIdByLoginName);
        });
    }

    AdminAddUserAccount = (input: admin.AdminAddUserAccountRequestType): Promise<admin.AdminAddUserAccountResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminAddUserAccountRequestType, admin.AdminAddUserAccountResponseType>("AdminAddUserAccount", input, client.AdminService.AdminPort.AdminAddUserAccount);
        });
    }

    AdminModifyUserAccount = (input: admin.AdminModifyUserAccountRequestType): Promise<admin.AdminModifyUserAccountResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminModifyUserAccountRequestType, admin.AdminModifyUserAccountResponseType>("AdminModifyUserAccount", input, client.AdminService.AdminPort.AdminModifyUserAccount);
        });
    }

    AdminRemoveUsersByIds = (input: admin.AdminRemoveUsersByIdsRequestType): Promise<admin.AdminRemoveUsersByIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminRemoveUsersByIdsRequestType, admin.AdminRemoveUsersByIdsResponseType>("AdminRemoveUsersByIds", input, client.AdminService.AdminPort.AdminRemoveUsersByIds);
        });
    }

    AdminGetOrgIdByOrgCode = (input: admin.AdminGetOrgIdByOrgCodeRequestType): Promise<admin.AdminGetOrgIdByOrgCodeResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminGetOrgIdByOrgCodeRequestType, admin.AdminGetOrgIdByOrgCodeResponseType>("AdminGetOrgIdByOrgCode", input, client.AdminService.AdminPort.AdminGetOrgIdByOrgCode);
        });
    }

    AdminAddOrg = (input: admin.AdminAddOrgRequestType): Promise<admin.AdminAddOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminAddOrgRequestType, admin.AdminAddOrgResponseType>("AdminAddOrg", input, client.AdminService.AdminPort.AdminAddOrg);
        });
    }

    AdminModifyOrgInfo = (input: admin.AdminModifyOrgInfoRequestType): Promise<admin.AdminModifyOrgInfoResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminModifyOrgInfoRequestType, admin.AdminModifyOrgInfoResponseType>("AdminModifyOrgInfo", input, client.AdminService.AdminPort.AdminModifyOrgInfo);
        });
    }

    AdminRemoveOrgsByIds = (input: admin.AdminRemoveOrgsByIdsRequestType): Promise<admin.AdminRemoveOrgsByIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminRemoveOrgsByIdsRequestType, admin.AdminRemoveOrgsByIdsResponseType>("AdminRemoveOrgsByIds", input, client.AdminService.AdminPort.AdminRemoveOrgsByIds);
        });
    }

    AdminAddUsersToOrg = (input: admin.AdminAddUsersToOrgRequestType): Promise<admin.AdminAddUsersToOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminAddUsersToOrgRequestType, admin.AdminAddUsersToOrgResponseType>("AdminAddUsersToOrg", input, client.AdminService.AdminPort.AdminAddUsersToOrg);
        });
    }

    AdminSetOrgsOfUser = (input: admin.AdminSetOrgsOfUserRequestType): Promise<admin.AdminSetOrgsOfUserResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminSetOrgsOfUserRequestType, admin.AdminSetOrgsOfUserResponseType>("AdminSetOrgsOfUser", input, client.AdminService.AdminPort.AdminSetOrgsOfUser);
        });
    }

    AdminAddChildrenOfOrg = (input: admin.AdminAddChildrenOfOrgRequestType): Promise<admin.AdminAddChildrenOfOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminAddChildrenOfOrgRequestType, admin.AdminAddChildrenOfOrgResponseType>("AdminAddChildrenOfOrg", input, client.AdminService.AdminPort.AdminAddChildrenOfOrg);
        });
    }

    AdminRemoveUsersFromOrg = (input: admin.AdminRemoveUsersFromOrgRequestType): Promise<admin.AdminRemoveUsersFromOrgResponseType> => {
        return this.client.then(client => {
            return this.callMethod<admin.AdminRemoveUsersFromOrgRequestType, admin.AdminRemoveUsersFromOrgResponseType>("AdminRemoveUsersFromOrg", input, client.AdminService.AdminPort.AdminRemoveUsersFromOrg);
        });
    }

    UtilLogin = (input: util_api.UtilLoginRequestType): Promise<util_api.UtilLoginResponseType> => {
        return this.client.then(client => {
            return this.callMethod<util_api.UtilLoginRequestType, util_api.UtilLoginResponseType>("UtilLogin", input, client.UtilService.UtilPort.UtilLogin);
        });
    }

    UtilLogout = (input: util_api.UtilLogoutRequestType): Promise<util_api.UtilLogoutResponseType> => {
        return this.client.then(client => {
            return this.callMethod<util_api.UtilLogoutRequestType, util_api.UtilLogoutResponseType>("UtilLogout", input, client.UtilService.UtilPort.UtilLogout);
        });
    }

    UtilGetRequestToken = (input: util_api.UtilGetRequestTokenRequestType): Promise<util_api.UtilGetRequestTokenResponseType> => {
        return this.client.then(client => {
            return this.callMethod<util_api.UtilGetRequestTokenRequestType, util_api.UtilGetRequestTokenResponseType>("UtilGetRequestToken", input, client.UtilService.UtilPort.UtilGetRequestToken);
        });
    }

    UtilGetLoginUserId = (input: util_api.UtilGetLoginUserIdRequestType): Promise<util_api.UtilGetLoginUserIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<util_api.UtilGetLoginUserIdRequestType, util_api.UtilGetLoginUserIdResponseType>("UtilGetLoginUserId", input, client.UtilService.UtilPort.UtilGetLoginUserId);
        });
    }

    StarGetStarsById = (input: star.StarGetStarsByIdRequestType): Promise<star.StarGetStarsByIdResponseType> => {
        return this.client.then(client => {
            return this.callMethod<star.StarGetStarsByIdRequestType, star.StarGetStarsByIdResponseType>("StarGetStarsById", input, client.StarService.StarPort.StarGetStarsById);
        });
    }

    StarGetStarVersions = (input: star.StarGetStarVersionsRequestType): Promise<star.StarGetStarVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<star.StarGetStarVersionsRequestType, star.StarGetStarVersionsResponseType>("StarGetStarVersions", input, client.StarService.StarPort.StarGetStarVersions);
        });
    }

    StarAddStars = (input: star.StarAddStarsRequestType): Promise<star.StarAddStarsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<star.StarAddStarsRequestType, star.StarAddStarsResponseType>("StarAddStars", input, client.StarService.StarPort.StarAddStars);
        });
    }

    StarRemoveStars = (input: star.StarRemoveStarsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<star.StarRemoveStarsRequestType, void>("StarRemoveStars", input, client.StarService.StarPort.StarRemoveStars);
        });
    }

    StarGetProfiles = (input: star.StarGetProfilesRequestType): Promise<star.StarGetProfilesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<star.StarGetProfilesRequestType, star.StarGetProfilesResponseType>("StarGetProfiles", input, client.StarService.StarPort.StarGetProfiles);
        });
    }

    BulletinGetCategoryVersions = (input: bulletin.BulletinGetCategoryVersionsRequestType): Promise<bulletin.BulletinGetCategoryVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetCategoryVersionsRequestType, bulletin.BulletinGetCategoryVersionsResponseType>("BulletinGetCategoryVersions", input, client.BulletinService.BulletinPort.BulletinGetCategoryVersions);
        });
    }

    BulletinGetCategories = (input: bulletin.BulletinGetCategoriesRequestType): Promise<bulletin.BulletinGetCategoriesResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetCategoriesRequestType, bulletin.BulletinGetCategoriesResponseType>("BulletinGetCategories", input, client.BulletinService.BulletinPort.BulletinGetCategories);
        });
    }

    BulletinGetTopicVersions = (input: bulletin.BulletinGetTopicVersionsRequestType): Promise<bulletin.BulletinGetTopicVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetTopicVersionsRequestType, bulletin.BulletinGetTopicVersionsResponseType>("BulletinGetTopicVersions", input, client.BulletinService.BulletinPort.BulletinGetTopicVersions);
        });
    }

    BulletinGetDraftTopicVersions = (input: bulletin.BulletinGetDraftTopicVersionsRequestType): Promise<bulletin.BulletinGetDraftTopicVersionsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetDraftTopicVersionsRequestType, bulletin.BulletinGetDraftTopicVersionsResponseType>("BulletinGetDraftTopicVersions", input, client.BulletinService.BulletinPort.BulletinGetDraftTopicVersions);
        });
    }

    BulletinGetTopics = (input: bulletin.BulletinGetTopicsRequestType): Promise<bulletin.BulletinGetTopicsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetTopicsRequestType, bulletin.BulletinGetTopicsResponseType>("BulletinGetTopics", input, client.BulletinService.BulletinPort.BulletinGetTopics);
        });
    }

    BulletinGetTopicByIds = (input: bulletin.BulletinGetTopicByIdsRequestType): Promise<bulletin.BulletinGetTopicByIdsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetTopicByIdsRequestType, bulletin.BulletinGetTopicByIdsResponseType>("BulletinGetTopicByIds", input, client.BulletinService.BulletinPort.BulletinGetTopicByIds);
        });
    }

    BulletinFileDownload = (input: bulletin.BulletinFileDownloadRequestType): Promise<bulletin.BulletinFileDownloadResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinFileDownloadRequestType, bulletin.BulletinFileDownloadResponseType>("BulletinFileDownload", input, client.BulletinService.BulletinPort.BulletinFileDownload);
        });
    }

    BulletinCreateTopics = (input: bulletin.BulletinCreateTopicsRequestType): Promise<bulletin.BulletinCreateTopicsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinCreateTopicsRequestType, bulletin.BulletinCreateTopicsResponseType>("BulletinCreateTopics", input, client.BulletinService.BulletinPort.BulletinCreateTopics);
        });
    }

    BulletinModifyTopics = (input: bulletin.BulletinModifyTopicsRequestType): Promise<bulletin.BulletinModifyTopicsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinModifyTopicsRequestType, bulletin.BulletinModifyTopicsResponseType>("BulletinModifyTopics", input, client.BulletinService.BulletinPort.BulletinModifyTopics);
        });
    }

    BulletinSaveDraftTopics = (input: bulletin.BulletinSaveDraftTopicsRequestType): Promise<bulletin.BulletinSaveDraftTopicsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinSaveDraftTopicsRequestType, bulletin.BulletinSaveDraftTopicsResponseType>("BulletinSaveDraftTopics", input, client.BulletinService.BulletinPort.BulletinSaveDraftTopics);
        });
    }

    BulletinRemoveTopics = (input: bulletin.BulletinRemoveTopicsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinRemoveTopicsRequestType, void>("BulletinRemoveTopics", input, client.BulletinService.BulletinPort.BulletinRemoveTopics);
        });
    }

    BulletinSearchTopics = (input: bulletin.BulletinSearchTopicsRequestType): Promise<bulletin.BulletinSearchTopicsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinSearchTopicsRequestType, bulletin.BulletinSearchTopicsResponseType>("BulletinSearchTopics", input, client.BulletinService.BulletinPort.BulletinSearchTopics);
        });
    }

    BulletinGetFollows = (input: bulletin.BulletinGetFollowsRequestType): Promise<bulletin.BulletinGetFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinGetFollowsRequestType, bulletin.BulletinGetFollowsResponseType>("BulletinGetFollows", input, client.BulletinService.BulletinPort.BulletinGetFollows);
        });
    }

    BulletinAddFollows = (input: bulletin.BulletinAddFollowsRequestType): Promise<bulletin.BulletinAddFollowsResponseType> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinAddFollowsRequestType, bulletin.BulletinAddFollowsResponseType>("BulletinAddFollows", input, client.BulletinService.BulletinPort.BulletinAddFollows);
        });
    }

    BulletinRemoveFollows = (input: bulletin.BulletinRemoveFollowsRequestType): Promise<void> => {
        return this.client.then(client => {
            return this.callMethod<bulletin.BulletinRemoveFollowsRequestType, void>("BulletinRemoveFollows", input, client.BulletinService.BulletinPort.BulletinRemoveFollows);
        });
    }
}
