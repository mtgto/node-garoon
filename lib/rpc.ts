// This file is generated from WSDL.

import {soap} from "strong-soap";

export interface RPC {
    BaseService: {
        BasePort: {
                BaseGetUserVersions: soap.SoapMethod;
                BaseGetUsersById: soap.SoapMethod;
                BaseGetUsersByLoginName: soap.SoapMethod;
                BaseGetOrganizationVersions: soap.SoapMethod;
                BaseGetOrganizationsById: soap.SoapMethod;
                BaseGetMyGroupVersions: soap.SoapMethod;
                BaseGetMyGroupsById: soap.SoapMethod;
                BaseGetFrequentUsers: soap.SoapMethod;
                BaseGetFrequentOrganizations: soap.SoapMethod;
                BaseGetCalendarEvents: soap.SoapMethod;
                BaseGetApplicationStatus: soap.SoapMethod;
                BaseGetApplicationInformation: soap.SoapMethod;
                BaseFileDownload: soap.SoapMethod;
                BaseGetRegionsList: soap.SoapMethod;
                BaseGetTimezoneVersion: soap.SoapMethod;
                BaseManagerApplication: soap.SoapMethod;
        }
    }
    ScheduleService: {
        SchedulePort: {
                ScheduleGetEventVersions: soap.SoapMethod;
                ScheduleGetEvents: soap.SoapMethod;
                ScheduleGetEventsById: soap.SoapMethod;
                ScheduleGetEventsByTarget: soap.SoapMethod;
                ScheduleAddEvents: soap.SoapMethod;
                ScheduleModifyEvents: soap.SoapMethod;
                ScheduleModifyRepeatEvents: soap.SoapMethod;
                ScheduleRemoveEvents: soap.SoapMethod;
                ScheduleRemoveEventsFromRepeatEvent: soap.SoapMethod;
                ScheduleSearchEvents: soap.SoapMethod;
                ScheduleSearchFreeTimes: soap.SoapMethod;
                ScheduleAddFollows: soap.SoapMethod;
                ScheduleAddFollowsToRepeatEvent: soap.SoapMethod;
                ScheduleRemoveFollows: soap.SoapMethod;
                ScheduleDetermineTemporaryEvents: soap.SoapMethod;
                ScheduleRemoveTemporaryEventCandidates: soap.SoapMethod;
                ScheduleParticipateEvents: soap.SoapMethod;
                ScheduleParticipateEventsToRepeatEvent: soap.SoapMethod;
                ScheduleLeaveEvents: soap.SoapMethod;
                ScheduleLeaveEventsFromRepeatEvent: soap.SoapMethod;
                ScheduleGetProfiles: soap.SoapMethod;
                ScheduleSetProfiles: soap.SoapMethod;
                ScheduleGetFacilityVersions: soap.SoapMethod;
                ScheduleGetFacilityProfileVersions: soap.SoapMethod;
                ScheduleGetFacilityProfilesById: soap.SoapMethod;
                ScheduleGetFacilitiesById: soap.SoapMethod;
                ScheduleGetFacilityGroupsVersions: soap.SoapMethod;
                ScheduleGetFacilityGroupsById: soap.SoapMethod;
                ScheduleGetReadAllowUsers: soap.SoapMethod;
                ScheduleGetReadAllowGroups: soap.SoapMethod;
                ScheduleGetReadAllowFacilities: soap.SoapMethod;
                ScheduleGetAddAllowUsers: soap.SoapMethod;
                ScheduleGetAddAllowGroups: soap.SoapMethod;
                ScheduleGetAddAllowFacilities: soap.SoapMethod;
                ScheduleGetModifyAllowUsers: soap.SoapMethod;
                ScheduleGetModifyAllowGroups: soap.SoapMethod;
                ScheduleGetModifyAllowFacilities: soap.SoapMethod;
                ScheduleGetRemoveAllowUsers: soap.SoapMethod;
                ScheduleGetRemoveAllowGroups: soap.SoapMethod;
                ScheduleGetRemoveAllowFacilities: soap.SoapMethod;
                ScheduleFileDownload: soap.SoapMethod;
        }
    }
    AddressService: {
        AddressPort: {
                AddressGetPersonalCardVersions: soap.SoapMethod;
                AddressGetPersonalCardsById: soap.SoapMethod;
                AddressGetSharedCardVersions: soap.SoapMethod;
                AddressGetSharedCardsById: soap.SoapMethod;
                AddressGetPersonalBookVersions: soap.SoapMethod;
                AddressGetPersonalBooksById: soap.SoapMethod;
                AddressGetSharedBookVersions: soap.SoapMethod;
                AddressGetSharedBooksById: soap.SoapMethod;
                AddressAddCards: soap.SoapMethod;
                AddressModifyCards: soap.SoapMethod;
                AddressRemovePersonalCards: soap.SoapMethod;
                AddressRemoveSharedCards: soap.SoapMethod;
                AddressSearchCards: soap.SoapMethod;
                AddressCopyPersonalCardsToOtherBook: soap.SoapMethod;
                AddressGetMyAddressGroupVersions: soap.SoapMethod;
                AddressGetMyAddressGroupsById: soap.SoapMethod;
                AddressAddMyAddressGroups: soap.SoapMethod;
                AddressModifyMyAddressGroups: soap.SoapMethod;
                AddressRemoveMyAddressGroups: soap.SoapMethod;
                AddressModifyCardsInMyAddressGroup: soap.SoapMethod;
                AddressGetProfiles: soap.SoapMethod;
                AddressSetProfiles: soap.SoapMethod;
                AddressGetReadAllowBooks: soap.SoapMethod;
                AddressGetModifyAllowBooks: soap.SoapMethod;
                AddressFileDownload: soap.SoapMethod;
        }
    }
    WorkflowService: {
        WorkflowPort: {
                WorkflowGetUnprocessedApplicationVersions: soap.SoapMethod;
                WorkflowGetUnprocessedApplicationsById: soap.SoapMethod;
                WorkflowGetSentApplicationVersions: soap.SoapMethod;
                WorkflowGetSentApplicationsById: soap.SoapMethod;
                WorkflowGetReceivedApplicationVersions: soap.SoapMethod;
                WorkflowGetReceivedApplicationsById: soap.SoapMethod;
                WorkflowGetApprovalDelegators: soap.SoapMethod;
                WorkflowGetProxyApprovalsByDelegatorId: soap.SoapMethod;
                WorkflowGetPendingApprovals: soap.SoapMethod;
                WorkflowHandleApplications: soap.SoapMethod;
                WorkflowGetProxies: soap.SoapMethod;
                WorkflowSetProxies: soap.SoapMethod;
                WorkflowGetProfiles: soap.SoapMethod;
                WorkflowFileDownload: soap.SoapMethod;
                WorkflowGetRequests: soap.SoapMethod;
                WorkflowGetRequestById: soap.SoapMethod;
                WorkflowGetAvailabilityUsers: soap.SoapMethod;
                WorkflowGetAttachedFileBody: soap.SoapMethod;
                WorkflowGetCategories: soap.SoapMethod;
                WorkflowGetRequestFormByCategoryIds: soap.SoapMethod;
        }
    }
    MailService: {
        MailPort: {
                MailGetAccountVersions: soap.SoapMethod;
                MailGetAccountsById: soap.SoapMethod;
                MailGetMailVersions: soap.SoapMethod;
                MailGetMailsById: soap.SoapMethod;
                MailSendMails: soap.SoapMethod;
                MailReplyMails: soap.SoapMethod;
                MailForwardMails: soap.SoapMethod;
                MailSaveDraftMails: soap.SoapMethod;
                MailRemoveMails: soap.SoapMethod;
                MailSearchMails: soap.SoapMethod;
                MailOpenDispositionNotifications: soap.SoapMethod;
                MailAddFolders: soap.SoapMethod;
                MailModifyFolders: soap.SoapMethod;
                MailRemoveFolders: soap.SoapMethod;
                MailMoveMailsToOtherFolder: soap.SoapMethod;
                MailGetSignatures: soap.SoapMethod;
                MailGetFilters: soap.SoapMethod;
                MailGetProfiles: soap.SoapMethod;
                MailSetProfiles: soap.SoapMethod;
                MailSourceDownload: soap.SoapMethod;
                MailFileDownload: soap.SoapMethod;
                MailCreateUserAccount: soap.SoapMethod;
                MailEditUserAccount: soap.SoapMethod;
                MailDeleteUserAccount: soap.SoapMethod;
                MailGetNewArrivingEmail: soap.SoapMethod;
                MailAddMailServers: soap.SoapMethod;
                MailModifyMailServers: soap.SoapMethod;
                MailRemoveMailServers: soap.SoapMethod;
        }
    }
    MessageService: {
        MessagePort: {
                MessageGetFolderVersions: soap.SoapMethod;
                MessageGetFoldersById: soap.SoapMethod;
                MessageGetThreadVersions: soap.SoapMethod;
                MessageGetThreadsById: soap.SoapMethod;
                MessageCreateThreads: soap.SoapMethod;
                MessageModifyThreads: soap.SoapMethod;
                MessageSaveDraftThreads: soap.SoapMethod;
                MessageConfirmThreads: soap.SoapMethod;
                MessageRemoveThreads: soap.SoapMethod;
                MessageSearchThreads: soap.SoapMethod;
                MessageGetFollows: soap.SoapMethod;
                MessageAddFollows: soap.SoapMethod;
                MessageRemoveFollows: soap.SoapMethod;
                MessageGetProfiles: soap.SoapMethod;
                MessageSetProfiles: soap.SoapMethod;
                MessageFileDownload: soap.SoapMethod;
        }
    }
    NotificationService: {
        NotificationPort: {
                NotificationGetNotificationVersions: soap.SoapMethod;
                NotificationGetNotificationsById: soap.SoapMethod;
                NotificationGetNotificationHistoryVersions: soap.SoapMethod;
                NotificationGetNotificationHistoriesById: soap.SoapMethod;
                NotificationConfirmNotification: soap.SoapMethod;
                NotificationGetProfiles: soap.SoapMethod;
                NotificationSetProfiles: soap.SoapMethod;
        }
    }
    CybozuWebSrvService: {
        CBWebSrvPort: {
                CBWebSrvGetWeatherLocations: soap.SoapMethod;
                CBWebSrvGetWeathersByLocation: soap.SoapMethod;
                CBWebSrvGetWeathers: soap.SoapMethod;
        }
    }
    ReportService: {
        ReportPort: {
                ReportGetReportVersions: soap.SoapMethod;
                ReportGetReportById: soap.SoapMethod;
                ReportAddFollows: soap.SoapMethod;
                ReportGetFollows: soap.SoapMethod;
                ReportRemoveFollows: soap.SoapMethod;
                ReportRemoveReports: soap.SoapMethod;
                ReportSearchReports: soap.SoapMethod;
                ReportFileDownload: soap.SoapMethod;
        }
    }
    CabinetService: {
        CabinetPort: {
                CabinetGetFolderInfo: soap.SoapMethod;
                CabinetGetFileInfo: soap.SoapMethod;
                CabinetFileDownload: soap.SoapMethod;
                CabinetAddFile: soap.SoapMethod;
                CabinetUpdateFile: soap.SoapMethod;
                CabinetUpdateFileInformation: soap.SoapMethod;
                CabinetDeleteFiles: soap.SoapMethod;
        }
    }
    AdminService: {
        AdminPort: {
                AdminCountUsers: soap.SoapMethod;
                AdminGetUserIds: soap.SoapMethod;
                AdminGetUserDetailByIds: soap.SoapMethod;
                AdminCountOrgs: soap.SoapMethod;
                AdminGetOrgIds: soap.SoapMethod;
                AdminGetOrgDetailByIds: soap.SoapMethod;
                AdminCountChildOrgs: soap.SoapMethod;
                AdminGetChildOrgs: soap.SoapMethod;
                AdminCountUsersInOrg: soap.SoapMethod;
                AdminGetUserIdsInOrg: soap.SoapMethod;
                AdminCountNoGroupUsers: soap.SoapMethod;
                AdminGetNoGroupUserIds: soap.SoapMethod;
                AdminCountOrgsOfUser: soap.SoapMethod;
                AdminGetOrgIdsOfUser: soap.SoapMethod;
                AdminGetParentOrgId: soap.SoapMethod;
                AdminGetUserIdByLoginName: soap.SoapMethod;
                AdminAddUserAccount: soap.SoapMethod;
                AdminModifyUserAccount: soap.SoapMethod;
                AdminRemoveUsersByIds: soap.SoapMethod;
                AdminGetOrgIdByOrgCode: soap.SoapMethod;
                AdminAddOrg: soap.SoapMethod;
                AdminModifyOrgInfo: soap.SoapMethod;
                AdminRemoveOrgsByIds: soap.SoapMethod;
                AdminAddUsersToOrg: soap.SoapMethod;
                AdminSetOrgsOfUser: soap.SoapMethod;
                AdminAddChildrenOfOrg: soap.SoapMethod;
                AdminRemoveUsersFromOrg: soap.SoapMethod;
        }
    }
    UtilService: {
        UtilPort: {
                UtilLogin: soap.SoapMethod;
                UtilLogout: soap.SoapMethod;
                UtilGetRequestToken: soap.SoapMethod;
                UtilGetLoginUserId: soap.SoapMethod;
        }
    }
    StarService: {
        StarPort: {
                StarGetStarsById: soap.SoapMethod;
                StarGetStarVersions: soap.SoapMethod;
                StarAddStars: soap.SoapMethod;
                StarRemoveStars: soap.SoapMethod;
                StarGetProfiles: soap.SoapMethod;
        }
    }
    BulletinService: {
        BulletinPort: {
                BulletinGetCategoryVersions: soap.SoapMethod;
                BulletinGetCategories: soap.SoapMethod;
                BulletinGetTopicVersions: soap.SoapMethod;
                BulletinGetDraftTopicVersions: soap.SoapMethod;
                BulletinGetTopics: soap.SoapMethod;
                BulletinGetTopicByIds: soap.SoapMethod;
                BulletinFileDownload: soap.SoapMethod;
                BulletinCreateTopics: soap.SoapMethod;
                BulletinModifyTopics: soap.SoapMethod;
                BulletinSaveDraftTopics: soap.SoapMethod;
                BulletinRemoveTopics: soap.SoapMethod;
                BulletinSearchTopics: soap.SoapMethod;
                BulletinGetFollows: soap.SoapMethod;
                BulletinAddFollows: soap.SoapMethod;
                BulletinRemoveFollows: soap.SoapMethod;
        }
    }
}
