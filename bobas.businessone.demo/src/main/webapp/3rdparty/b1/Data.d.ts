﻿/**
 * @license
 * Copyright Color-Coding Studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */
/// <reference path="./bo/UserFields.d.ts" />
/// <reference path="./bo/Documents.d.ts" />
declare namespace sap {
    export namespace b1 {

        export enum AmountCatTypeEnum {
            act_Open = 0,
            act_Invoiced = 1,
        }

        export enum TaxWebSitesServiceDataInterfaces {
            twssTaxWebSite = 0,
            twssTaxWebSitesParams = 1,
            twssTaxWebSiteParams = 2,
        }

        export enum AssetTypeEnum {
            atAssetTypeGeneral = 0,
            atAssetTypeLowValueAsset = 1,
        }

        export enum ProjectManagementTimeSheetServiceDataInterfaces {
            pmtssPM_TimeSheetData = 0,
            pmtssPM_TimeSheetLineDataCollection = 1,
            pmtssPM_TimeSheetLineData = 2,
            pmtssPM_TimeSheetParams = 3,
        }

        export enum CalculationBaseEnum {
            cbYearly = 0,
            cbMonthly = 1,
        }

        export enum SPEDContabilAccountPurposeCode {
            spedContasDeAtivo = 0,
            spedContasDePassivo = 1,
            spedPatrimonioLiquido = 2,
            spedContasDeResultado = 3,
            spedContasDeCompensacao = 4,
            spedOutras = 5,
        }

        export enum CampaignTypeEnum {
            ctEmail = 0,
            ctMail = 1,
            ctFax = 2,
            ctPhoneCall = 3,
            ctMeeting = 4,
            ctSMS = 5,
            ctWeb = 6,
            ctOthers = 7,
        }

        export enum BoUTBTableType {
            bott_NoObject = 0,
            bott_MasterData = 1,
            bott_MasterDataLines = 2,
            bott_Document = 3,
            bott_DocumentLines = 4,
            bott_NoObjectAutoIncrement = 5,
        }

        export enum RecurringTransactionServiceDataInterfaces {
            rtsRclRecurringTransactionParamsCollection = 0,
            rtsRclRecurringTransactionParams = 1,
            rtsRclRecurringTransactionCollection = 2,
            rtsRclRecurringTransaction = 3,
            rtsRclRecurringExecutionParams = 4,
        }

        export enum ClosingOptionEnum {
            coByCurrentSystemDate = 1,
            coByOriginalDocumentDate = 2,
            coBySpecifiedDate = 3,
        }

        export enum BoDataServerTypes {
            dst_MSSQL = 1,
            dst_DB_2 = 2,
            dst_SYBASE = 3,
            dst_MSSQL2005 = 4,
            dst_MAXDB = 5,
            dst_MSSQL2008 = 6,
            dst_MSSQL2012 = 7,
            dst_MSSQL2014 = 8,
            dst_HANADB = 9,
            dst_MSSQL2016 = 10,
        }

        export enum BoConsumptionMethod {
            cm_BackwardForward = 0,
            cm_ForwardBackward = 1,
        }

        export enum CampaignAssignToEnum {
            catUser = 0,
            catEmployee = 1,
        }

        export enum FixedAssetItemsServiceDataInterfaces {
            faisFixedAssetValues = 0,
            faisFixedAssetValuesCollection = 1,
            faisFixedAssetValuesParams = 2,
            faisFixedAssetEndBalance = 3,
        }

        export enum AuthenticateUserResultsEnum {
            aturNotConnectedToCompany = -8033,
            aturUsernamePasswordMatch = 0,
            aturLogOnUserNotAdmin = -8031,
            aturBadUserOrPassword = -8023,
            aturUserHasBeenLocked = -8024,
            aturPasswordExpired = -8025,
            aturDBErrors = -8032,
        }

        export enum TaxCodeDeterminationsTCDServiceDataInterfaces {
            tcdsTaxDeterminationsTCDParams = 0,
            tcdsTaxDeterminationTCD = 1,
            tcdsTaxDeterminationTCDParams = 2,
        }

        export enum CancelStatusEnum {
            csYes = 0,
            csNo = 1,
            csCancellation = 2,
        }

        export enum PrintOnEnum {
            poBlankPaper = 0,
            poOverflowCheckStock = 1,
            poOverflowBlankPaper = 2,
            poDefault = 3,
        }

        export enum BoAdEpnsDistribMethods {
            aedm_None = 0,
            aedm_Quantity = 1,
            aedm_Volume = 2,
            aedm_Weight = 3,
            aedm_Equally = 4,
            aedm_RowTotal = 5,
        }

        export enum BoPayTermDueTypes {
            pdt_MonthEnd = 0,
            pdt_HalfMonth = 1,
            pdt_MonthStart = 2,
            pdt_None = 3,
        }

        export enum SeriesServiceDataInterfaces {
            ssdiSeries = 0,
            ssdiSeriesCollection = 1,
            ssdiSeriesParams = 2,
            ssdiDocumentSeriesParams = 3,
            ssdiDocumentSeriesUserParams = 4,
            ssdiDocumentTypeParams = 5,
            ssdiDocumentChangeMenuName = 6,
            ssdiElectronicSeries = 7,
            ssdiElectronicSeriesCollection = 8,
            ssdiElectronicSeriesParams = 9,
            ssdiDefaultElectronicSeriesParams = 10,
        }

        export enum TypeOfAdvancedRulesEnum {
            toar_General = 0,
            toar_Warehouse = 1,
            toar_ItemGroup = 2,
        }

        export enum BrazilFuelIndexersServiceDataInterfaces {
            bfisBrazilFuelIndexer = 0,
            bfisBrazilFuelIndexersParams = 1,
            bfisBrazilFuelIndexerParams = 2,
        }

        export enum PaymentCalculationServiceDataInterfaces {
            pcsdiPaymentBPCode = 0,
            pcsdiPaymentInvoiceEntry = 1,
            pcsdiPaymentInvoiceEntries = 2,
            pcsdiPaymentAmountParams = 3,
            pcsdiPaymentAmountParamsCollection = 4,
        }

        export enum BoVatStatus {
            vExempted = 0,
            vLiable = 1,
            vEC = 2,
        }

        export enum BoPaymentsObjectType {
            bopot_IncomingPayments = 0,
            bopot_OutgoingPayments = 1,
        }

        export enum BoUPTOptions {
            bou_FullReadNone = 0,
            bou_FullNone = 1,
        }

        export enum BoDocSpecialLineType {
            dslt_Text = 0,
            dslt_Subtotal = 1,
        }

        export enum BoReportLayoutItemTypeEnum {
            rlitPageHeader = 0,
            rlitStartOfReport = 1,
            rlitRepetitiveAreaHeader = 2,
            rlitRepetitiveArea = 3,
            rlitRepetitiveAreaFooter = 4,
            rlitEndOfReport = 5,
            rlitPageFooter = 6,
            rlitTextField = 7,
            rlitPictureField = 8,
            rlitUserField = 9,
        }

        export enum GovPayCodePeriodicityEnum {
            gpcpMonth = 0,
            gpcpQuarter = 1,
            gpcpHalfMonth = 2,
            gpcpTenDays = 3,
        }

        export enum BoOpexStatus {
            bos_Open = 0,
            bos_Close = 1,
        }

        export enum CycleCountDeterminationCycleByEnum {
            ccdcbItemGroup = 0,
            ccdcbWarehouseSublevel1 = 1,
            ccdcbWarehouseSublevel2 = 2,
            ccdcbWarehouseSublevel3 = 3,
            ccdcbWarehouseSublevel4 = 4,
        }

        export enum ResourceCapacityBaseTypeEnum {
            rcbtNone = 0,
            rcbtProductionOrder = 202,
        }

        export enum ApprovalTemplateConditionTypeEnum {
            atctUndefined = 0,
            atctDeviationFromCreditLine = 1,
            atctDeviationFromObligo = 2,
            atctGrossProfitPercent = 3,
            atctDiscountPercent = 4,
            atctDeviationFromBudget = 5,
            atctTotalDocument = 6,
            atctItemCode = 7,
            atctTotalLine = 8,
            atctCountedQuantity = 9,
            atctQuantity = 10,
            atctVariance = 11,
            atctVariancePercent = 12,
        }

        export enum DrawingMethodEnum {
            dmNone = 0,
            dmQuantity = 1,
            dmTotal = 2,
            dmAll = 3,
        }

        export enum BoBOTFromStatus {
            btfs_Sent = 0,
            btfs_Generated = 1,
            btfs_Deposited = 2,
            btfs_Paid = 3,
        }

        export enum MessagesServiceDataInterfaces {
            msdiMessage = 0,
            msdiMessageHeader = 1,
            msdiMessageHeaders = 2,
        }

        export enum BankStatementStatusEnum {
            bssExecuted = 0,
            bssDraft = 1,
            bssOld = 2,
        }

        export enum EmployeeTransferProcessingStatusEnum {
            etps_New = 0,
            etps_Sent = 1,
            etps_Accepted = 2,
            etps_Error = 3,
        }

        export enum BoGenderTypes {
            gt_Female = 0,
            gt_Male = 1,
            gt_Undefined = 2,
        }

        export enum BoTaxTypes {
            tt_Yes = 0,
            tt_No = 1,
            tt_UseTax = 2,
            tt_OffsetTax = 3,
        }

        export enum BoSubPeriodTypeEnum {
            spt_Year = 0,
            spt_Quarters = 1,
            spt_Months = 2,
            spt_Days = 3,
        }

        export enum BoDocSummaryTypes {
            dNoSummary = 0,
            dByItems = 1,
            dByDocuments = 2,
        }

        export enum ResourcePropertiesServiceDataInterfaces {
            rpsdiResourceProperty = 0,
            rpsdiResourcePropertyParamsCollection = 1,
            rpsdiResourcePropertyParams = 2,
        }

        export enum BoWfTransOpt {
            wf_RollBack = 1,
            wf_Commit = 0,
        }

        export enum TaxRateDeterminationEnum {
            trd_PostingDate = 0,
            trd_DocumentDate = 1,
        }

        export enum BoClosingDateProcedureDueMonthEnum {
            bocpddm_MonthEnd = 0,
            bocpddm_HalfMonth = 1,
            bocpddm_MonthStart = 2,
            bocpddm_None = 3,
        }

        export enum BOEDocumentTypesServiceDataInterfaces {
            boedtsBOEDocumentTypes = 0,
            boedtsBOEDocumentType = 1,
            boedtsBOEDocumentTypesParams = 2,
            boedtsBOEDocumentTypeParams = 3,
        }

        export enum ServiceTypes {
            MessagesService = 81,
            SeriesService = 35,
            ReportLayoutsService = 232,
            FormPreferencesService = 41,
            AccountsService = 1001,
            BusinessPartnersService = 1002,
            UserMenuService = 2002,
            ApprovalStagesService = 120,
            AlertManagementService = 80,
            ApprovalTemplatesService = 121,
            ReportFilterService = 180,
            ExternalCallsService = 10000020,
            ProjectsService = 63,
            BankStatementsService = 10000003,
            CustomsDeclarationService = 283,
            AlternativeItemsService = 107,
            AccountCategoryService = 238,
            BOEDocumentTypesService = 267,
            BOEPortfoliosService = 268,
            BOEInstructionsService = 269,
            CountriesService = 129,
            SalesOpportunityInterestsSetupService = 98,
            SalesOpportunitySourcesSetupService = 100,
            SalesOpportunityCompetitorsSetupService = 109,
            SalesOpportunityReasonsSetupService = 102,
            PredefinedTextsService = 215,
            BusinessPartnerPropertiesService = 44,
            ServiceCallStatusService = 167,
            ServiceCallProblemTypesService = 169,
            DepartmentsService = 119,
            EmployeeRolesSetupService = 172,
            BranchesService = 118,
            ServiceCallTypesService = 168,
            ServiceCallOriginsService = 192,
            ServiceCallSolutionStatusService = 188,
            CashDiscountsService = 133,
            DimensionsService = 251,
            DNFCodeSetupService = 140000041,
            ProfitCentersService = 61,
            NCMCodesSetupService = 257,
            DunningTermsService = 196,
            DistributionRulesService = 62,
            FinancialYearsService = 10000073,
            SectionsService = 10000074,
            CertificateSeriesService = 10000075,
            NatureOfAssesseesService = 10000077,
            MaterialRevaluationFIFOService = 1006,
            StatesService = 130,
            PaymentBlocksService = 159,
            BankChargesAllocationCodesService = 239,
            MaterialGroupsService = 256,
            ServiceGroupsService = 255,
            CheckLinesService = 27,
            CreditLinesService = 72,
            BOELinesService = 181,
            DepositsService = 25,
            ChangeLogsService = 130000000,
            ApprovalRequestsService = 122,
            DeductionTaxSubGroupsService = 530000000,
            EmployeeTransfersService = 480000001,
            GTIsService = 1230000004,
            CockpitsService = 1210000000,
            TaxWebSitesService = 1160000000,
            CashFlowLineItemsService = 242,
            TaxCodeDeterminationsService = 540000005,
            ReportTypesService = 10000196,
            ActivitiesService = 1007,
            AccrualTypesService = 540000048,
            CostCenterTypesService = 540000042,
            ElectronicFileFormatsService = 410000005,
            DashboardPackagesService = 1210000008,
            NFModelsService = 540000056,
            ExternalReconciliationsService = 26,
            BrazilNumericIndexersService = 540000066,
            BrazilStringIndexersService = 540000065,
            BrazilFuelIndexersService = 540000067,
            BrazilBeverageIndexersService = 540000068,
            BlanketAgreementsService = 1250000025,
            LandedCostsService = 69,
            ExtendedTranslationsService = 1320000005,
            KPIsService = 1320000000,
            TargetGroupsService = 1320000002,
            CampaignsService = 1320000012,
            PartnersSetupsService = 108,
            JournalEntryDocumentTypeService = 1560000001,
            EmployeeIDTypeService = 1560000000,
            TransactionCodesService = 45,
            LegalDataService = 540000073,
            ServiceTaxPostingService = 1520000001,
            BatchNumberDetailsService = 10000044,
            SerialNumberDetailsService = 10000045,
            OccurrenceCodesService = 1320000032,
            RetornoCodesService = 1320000028,
            BrazilMultiIndexersService = 1720000001,
            DepreciationTypePoolsService = 1470000004,
            DepreciationTypesService = 1470000000,
            DeterminationCriteriasService = 1470000048,
            GLAccountAdvancedRulesService = 1470000057,
            WarehouseSublevelCodesService = 10000205,
            BinLocationAttributesService = 10000204,
            BinLocationFieldsService = 10000203,
            BinLocationsService = 10000206,
            EnhancedDiscountGroupsService = 1470000077,
            DepreciationAreasService = 1470000003,
            FAAccountDeterminationsService = 1470000002,
            AssetClassesService = 1470000032,
            AssetDocument_AssetCapitalizationService = 1470000049,
            AssetDocument_AssetCapitalizationCreditMemoService = 1470000060,
            AssetDocument_AssetTransferService = 1470000090,
            AssetDocument_AssetManualDepreciationService = 1470000075,
            AssetDocument_AssetRetirementService = 1470000094,
            BarCodesService = 1470000062,
            UnitOfMeasurementGroupsService = 10000197,
            UnitOfMeasurementsService = 10000199,
            FixedAssetItemsService = 1470000074,
            AssetDepreciationGroupsService = 1470000220,
            AssetGroupsService = 1470000046,
            AttributeGroupsService = 1470000226,
            IntrastatConfigurationService = 1470000035,
            IntegrationPackagesConfigureService = 1470000264,
            EmployeePositionService = 210,
            TerminationReasonService = 174,
            EmployeeStatusService = 173,
            MaterialRevaluationSNBService = 1980000001,
            TrackingNotesService = 1980000009,
            InventoryPostingsService = 10000071,
            InventoryCountingsService = 1470000065,
            InventoryOpeningBalancesService = 310000001,
            EmailGroupsService = 234000004,
            NFTaxCategoriesService = 264,
            GovPayCodesService = 243000001,
            TaxCodeDeterminationsTCDService = 266,
            FiscalPrinterService = 541,
            POSDailySummaryService = 231000008,
            CycleCountDeterminationsService = 1470000092,
            ServiceCallProblemSubTypesService = 234000015,
            PaymentCalculationService = 1470000079,
            TaxInvoiceReportService = 245,
            WorkflowTaskService = 1620000000,
            CampaignResponseTypeService = 242000000,
            WitholdingTaxDefinitionService = 234000019,
            ElectronicCommunicationActionService = 1470000073,
            ResourcesService = 290,
            ResourcePropertiesService = 291,
            ResourceGroupsService = 292,
            ResourceCapacitiesService = 1350000008,
            ProjectManagementConfigurationService = 234000026,
            ProjectManagementTimeSheetService = 234000024,
            ProjectManagementService = 234000021,
            ElectronicCommunicationActionsService = 1730000002,
            RecurringTransactionService = 540000043,
            ValueMappingCommunicationService = 254000010,
            ValueMappingService = 254000008,
            ExpenseTypeService = 242000007,
            MobileAddOnSettingService = 480000003,
        }

        export enum ApprovalRequestsServiceDataInterfaces {
            arsApprovalRequest = 0,
            arsApprovalRequestsParams = 1,
            arsApprovalRequestParams = 2,
        }

        export enum DomesticBankAccountValidationEnum {
            dbavNone = 0,
            dbavBelgium = 1,
            dbavSpain = 2,
            dbavFrance = 3,
            dbavItaly = 4,
            dbavNetherlands = 5,
            dbavPortugal = 6,
        }

        export enum VMCommunicationTypeEnum {
            vmct_MasterData = 0,
            vmct_Transaction = 1,
        }

        export enum TypeOfOperationEnum {
            tooProfessionalServices = 1,
            tooRentingAssets = 2,
            tooOthers = 3,
        }

        export enum GSTTransactionTypeEnum {
            gsttrantyp_BillOfSupply = 0,
            gsttrantyp_GSTTaxInvoice = 1,
            gsttrantyp_GSTDebitMemo = 2,
        }

        export enum AlertManagementFrequencyType {
            atfi_Minutes = 0,
            atfi_Hours = 1,
            atfi_Days = 2,
            atfi_Weeks = 3,
            atfi_Monthly = 4,
        }

        export enum ResourceDailyCapacityWeekdayEnum {
            rdcwFirst = 0,
            rdcwSecond = 1,
            rdcwThird = 2,
            rdcwFourth = 3,
            rdcwFifth = 4,
            rdcwSixth = 5,
            rdcwSeventh = 6,
        }

        export enum LinkedDocTypeEnum {
            ldtEmptyLink = 0,
            ldtSalesOpportunitiesLink = 1,
            ldtSalesQuotationsLink = 2,
            ldtSalesOrdersLink = 3,
            ldtDeliveriesLink = 4,
            ldtARInvoicesLink = 5,
        }

        export enum BoMaterialTypes {
            mt_GoodsForReseller = 0,
            mt_FinishedGoods = 1,
            mt_GoodsInProcess = 2,
            mt_RawMaterial = 3,
            mt_Package = 4,
            mt_SubProduct = 5,
            mt_IntermediateMaterial = 6,
            mt_ConsumerMaterial = 7,
            mt_FixedAsset = 8,
            mt_Service = 9,
            mt_OtherInput = 10,
            mt_Other = 99,
        }

        export enum BoDepositTypeEnum {
            dtChecks = 0,
            dtCredit = 1,
            dtCash = 2,
            dtBOE = 3,
        }

        export enum BlanketAgreementsServiceDataInterfaces {
            basBlanketAgreement = 0,
            basBlanketAgreementsDocuments = 1,
            basBlanketAgreementsDocument = 2,
            basBlanketAgreementsParams = 3,
            basBlanketAgreementParams = 4,
        }

        export enum MaterialGroupsServiceDataInterfaces {
            mgsMaterialGroup = 0,
            mgsMaterialGroupsParams = 1,
            mgsMaterialGroupParams = 2,
        }

        export enum CheckLinesServiceDataInterfaces {
            clsCheckLinesParams = 0,
            clsCheckLineParams = 1,
        }

        export enum PostingOfDepreciationEnum {
            podDirectPosting = 0,
            podIndirectPosting = 1,
        }

        export enum AssetOriginalTypeEnum {
            aotARInvoice = 0,
            aotAPCreditMemo = 1,
            aotAPInvoice = 2,
            aotOutgoingPayment = 3,
            aotAPCorrectionInvoice = 4,
            aotCapitalization = 5,
            aotFixedAssetsCreditMemo = 6,
            aotAllTransactions = 7,
            aotManualDepreciation = 8,
            aotFixedAssetsTransfer = 9,
            aotRetirement = 10,
        }

        export enum ElectronicFileFormatsServiceDataInterfaces {
            effsImportFileParam = 0,
            effsElectronicFileFormat = 1,
            effsElectronicFileFormatsParams = 2,
            effsElectronicFileFormatParams = 3,
        }

        export enum CountingLineStatusEnum {
            clsOpen = 0,
            clsClosed = 1,
        }

        export enum AssesseeTypeEnum {
            atCompany = 0,
            atOthers = 1,
        }

        export enum RetirementPeriodControlEnum {
            rpcProRataTemporis = 0,
            rpcHalfYearConvention = 1,
            rpcOnlyAfterEndOfUsefulLife = 2,
        }

        export enum CockpitsServiceDataInterfaces {
            csCockpit = 0,
            csCockpitsParams = 1,
            csCockpitParams = 2,
        }

        export enum BoCpCardAcct {
            cfp_Card = 0,
            cfp_Account = 1,
        }

        export enum UserActionTypeEnum {
            actionLogin = 0,
            actionLoginFail = 1,
            actionLogoff = 2,
            actionCreateUser = 3,
            actionRemoveUser = 4,
            actionSelectSU = 5,
            actionDeselectSU = 6,
            actionLock = 7,
            actionUnlock = 8,
            actionChPasswd = 9,
            actionUnlockFail = 10,
        }

        export enum ECDPostingTypeEnum {
            ecdNormal = 0,
            ecdStatement = 1,
        }

        export enum DepartmentsServiceDataInterfaces {
            dsDepartment = 0,
            dsDepartmentsParams = 1,
            dsDepartmentParams = 2,
        }

        export enum BoTransactionTypeEnum {
            botrntComplete = 0,
            botrntReject = 1,
        }

        export enum AttributeGroupsServiceDataInterfaces {
            agsAttributeGroup = 0,
            agsAttributeGroupParamsCollection = 1,
            agsAttributeGroupParams = 2,
        }

        export enum BoORCTPaymentTypeEnum {
            bopt_None = 0,
            bopt_Electronic = 1,
            bopt_Post = 2,
            bopt_Telegraph = 3,
            bopt_Express = 4,
        }

        export enum DiscountGroupDiscountTypeEnum {
            dgdt_Fixed = 0,
            dgdt_Variable = 1,
        }

        export enum BoQueryConditions {
            bqc_Equal = 0,
            bqc_NotEqual = 1,
            bqc_Like = 2,
        }

        export enum RoundingTypeEnum {
            rt_TruncatedAU = 0,
            rt_CommercialValues = 1,
            rt_NoRounding = 2,
        }

        export enum BoFieldTypes {
            db_Alpha = 0,
            db_Memo = 1,
            db_Numeric = 2,
            db_Date = 3,
            db_Float = 4,
        }

        export enum ItemUoMTypeEnum {
            iutPurchasing = 0,
            iutSales = 1,
            iutInventory = 2,
        }

        export enum OpportunityTypeEnum {
            boOpSales = 1,
            boOpPurchasing = 2,
        }

        export enum TaxReportFilterReportLayoutType {
            trfrlt_RegisterBookLayout = 0,
            trfrlt_DeclarationLayout = 1,
        }

        export enum EDocStatusEnum {
            edoc_New = 0,
            edoc_Pending = 1,
            edoc_Sent = 2,
            edoc_Error = 3,
            edoc_Ok = 4,
        }

        export enum ServiceTypeEnum {
            srvcSales = 1,
            srvcPurchasing = 2,
        }

        export enum RclRecurringExecutionHandlingEnum {
            rehStopOnError = 1,
            rehSkipTransaction = 2,
        }

        export enum BoSuppLangs {
            ln_Hebrew = 1,
            ln_Spanish_Ar = 2,
            ln_English = 3,
            ln_Polish = 5,
            ln_English_Sg = 6,
            ln_Spanish_Pa = 7,
            ln_English_Gb = 8,
            ln_German = 9,
            ln_Serbian = 10,
            ln_Danish = 11,
            ln_Norwegian = 12,
            ln_Italian = 13,
            ln_Hungarian = 14,
            ln_Chinese = 15,
            ln_Dutch = 16,
            ln_Finnish = 17,
            ln_Greek = 18,
            ln_Portuguese = 19,
            ln_Swedish = 20,
            ln_English_Cy = 21,
            ln_French = 22,
            ln_Spanish = 23,
            ln_Russian = 24,
            ln_Spanish_La = 25,
            ln_Czech_Cz = 26,
            ln_Slovak_Sk = 27,
            ln_Korean_Kr = 28,
            ln_Portuguese_Br = 29,
            ln_Japanese_Jp = 30,
            ln_Turkish_Tr = 31,
            ln_Arabic = 32,
            ln_TrdtnlChinese_Hk = 35,
        }

        export enum AcquisitionPeriodControlEnum {
            apcProRataTemporis = 0,
            apcFirstYearConvention = 1,
            apcHalfYear = 2,
            apcFullYear = 3,
        }

        export enum ServiceTaxPostingServiceDataInterfaces {
            stpsServiceTaxPostingParamsCollection = 0,
            stpsServiceTaxPostingParams = 1,
        }

        export enum BoExpenseOperationTypeEnum {
            bo_ExpOpType_ProfessionalServices = 0,
            bo_ExpOpType_RentingAssets = 1,
            bo_ExpOpType_Others = 2,
            bo_ExpOpType_None = 3,
        }

        export enum ItemClassEnum {
            itcService = 1,
            itcMaterial = 2,
        }

        export enum InventoryOpeningBalancePriceSourceEnum {
            iobpsByPriceList = 0,
            iobpsLastEvaluatedPrice = 1,
            iobpsItemCost = 2,
        }

        export enum StraightLinePeriodControlDepreciationPeriodsEnum {
            slpcdpStandard = 0,
            slpcdpIndividual = 1,
        }

        export enum UserMenuItemTypeEnum {
            umitForm = 0,
            umitQuery = 1,
            umitFolder = 2,
            umitReport = 3,
            umitLink = 4,
        }

        export enum TaxReportFilterPeriod {
            trfP_Quarter = 0,
            trfP_Year = 1,
            trfP_Month = 2,
            trfP_NULL = 3,
        }

        export enum TaxReportFilterQuarterOrDates {
            trfqd_Interval = 0,
            trfqd_Date = 1,
        }

        export enum MobileAddonSettingTypeEnum {
            mastModule = 0,
            mastHome = 1,
        }

        export enum NatureOfAssesseesServiceDataInterfaces {
            noasNatureOfAssessee = 0,
            noasNatureOfAssesseesParams = 1,
            noasNatureOfAssesseeParams = 2,
        }

        export enum RoundingSysEnum {
            rsNoRounding = 0,
            rsRoundToTenHundredth = 1,
            rsRoundToOne = 2,
            rsRoundToTen = 3,
            rsRoundToFiveHundredth = 4,
        }

        export enum BrazilMultiIndexerTypes {
            bmitInvalid = 0,
            bmitIncomeNature = 1,
        }

        export enum WitholdingTaxDefinitionServiceDataInterfaces {
            wtdsWTDCode = 0,
            wtdsWTDEffectiveDateCollection = 1,
            wtdsWTDEffectiveDate = 2,
            wtdsWTDValueRangeCollection = 3,
            wtdsWTDValueRange = 4,
            wtdsWTDBPCollection = 5,
            wtdsWTDBP = 6,
            wtdsWTDItemCollection = 7,
            wtdsWTDItem = 8,
            wtdsWTDFreightCollection = 9,
            wtdsWTDFreight = 10,
            wtdsWTDCodeParamsCollection = 11,
            wtdsWTDCodeParams = 12,
        }

        export enum ApprovalTemplatesDocumentTypeEnum {
            atdtQuotation = 23,
            atdtOrder = 17,
            atdtDelivery = 15,
            atdtReturns = 16,
            atdtArDownPayment = 203,
            atdtArInvoice = 13,
            atdtArCreditMemo = 14,
            atdtCorrectionInvoice = 132,
            atdtPurchaseOrder = 22,
            atdtGoodsReceiptPO = 20,
            atdtGoodsReturns = 21,
            atdtApDownPayment = 204,
            atdtApInvoice = 18,
            atdtApCreditMemo = 19,
            atdtGoodsReceipt = 59,
            atdtGoodsIssue = 60,
            atdtInventoryTransfer = 67,
            atdtPurchaseQuotation = 540000006,
            atdtInventoryTransferRequest = 1250000001,
            atdtOutgoingPayment = 46,
            atdtInventoryCounting = 1470000065,
            atdtInventoryPosting = 10000071,
            atdtInventoryOpeningBalance = 310000001,
        }

        export enum InstallmentPaymentsPossiblityEnum {
            ippYes = 0,
            ippNo = 1,
            ippCr = 2,
            ippRd = 3,
        }

        export enum ReceivingBinLocationsMethodEnum {
            rblmBinLocationCodeOrder = 0,
            rblmAlternativeSortCodeOrder = 1,
        }

        export enum ReportLayoutsServiceDataInterfaces {
            rlsdiDefaultReportParams = 0,
            rlsdiReportParams = 1,
            rlsdiReportLayoutParams = 2,
            rlsdiReportLayout = 3,
            rlsdiReportLayoutPrintParams = 4,
        }

        export enum BoApprovalRequestDecisionEnum {
            ardPending = 0,
            ardApproved = 1,
            ardNotApproved = 2,
        }

        export enum BlanketAgreementTypeEnum {
            atGeneral = 0,
            atSpecific = 1,
        }

        export enum BoRecCommParamTypes {
            rcpt_In = 0,
            rcpt_Out = 1,
        }

        export enum BoSeriesTypeEnum {
            stDocument = 0,
            stBusinessPartner = 1,
            stItem = 2,
            stResource = 3,
        }

        export enum FinancialYearsServiceDataInterfaces {
            fysFinancialYear = 0,
            fysFinancialYearsParams = 1,
            fysFinancialYearParams = 2,
        }

        export enum InventoryPostingCopyOptionEnum {
            ipcoNoCountersDiff = 0,
            ipcoIndividual1CountedQuantity = 1,
            ipcoIndividual2CountedQuantity = 2,
            ipcoIndividual3CountedQuantity = 3,
            ipcoIndividual4CountedQuantity = 4,
            ipcoIndividual5CountedQuantity = 5,
            ipcoTeamCountedQuantity = 6,
        }

        export enum NFTaxCategoriesServiceDataInterfaces {
            nftcsNFTaxCategory = 0,
            nftcsNFTaxCategoryParamsCollection = 1,
            nftcsNFTaxCategoryParams = 2,
        }

        export enum CreateMethodEnum {
            cmManual = 0,
            cmAutomatic = 1,
        }

        export enum BaseDateSelectEnum {
            bdsFromDueDate = 0,
            bdsFromLastDunningRun = 1,
        }

        export enum EmployeeTransfersServiceDataInterfaces {
            etsEmployeeTransfer = 0,
            etsEmployeeTransferDetails = 1,
            etsEmployeeTransferDetail = 2,
            etsEmployeeTransfersParams = 3,
            etsEmployeeTransferParams = 4,
        }

        export enum CampaignItemTypeEnum {
            citItems = 0,
            citLabel = 1,
            citTravel = 2,
        }

        export enum InventoryOpeningBalancesServiceDataInterfaces {
            iobsInventoryOpeningBalance = 0,
            iobsInventoryOpeningBalanceParamsCollection = 1,
            iobsInventoryOpeningBalanceParams = 2,
        }

        export enum TaxCodeDeterminationTCDDefaultWTTypeEnum {
            tcddwttDefaultSales = 0,
            tcddwttDefaultPurchase = 1,
            tcddwttLine = 2,
        }

        export enum CertificateSeriesServiceDataInterfaces {
            cssCertificateSeries = 0,
            cssCertificateSeriesParamsCollection = 1,
            cssCertificateSeriesParams = 2,
        }

        export enum WarehouseSublevelCodesServiceDataInterfaces {
            wscsWarehouseSublevelCode = 0,
            wscsWarehouseSublevelCodeCollectionParams = 1,
            wscsWarehouseSublevelCodeParams = 2,
        }

        export enum AccountSegmentationTypeEnum {
            ast_Alphanumeric = 0,
            ast_Numeric = 1,
        }

        export enum DepreciationTypesServiceDataInterfaces {
            dtsDepreciationType = 0,
            dtsDepreciationTypeParamsCollection = 1,
            dtsDepreciationTypeParams = 2,
        }

        export enum JournalEntryDocumentTypeServiceDataInterfaces {
            jedtsJournalEntryDocumentType = 0,
            jedtsJournalEntryDocumentTypeParamsCollection = 1,
            jedtsJournalEntryDocumentTypeParams = 2,
        }

        export enum ServiceCallProblemSubTypesServiceDataInterfaces {
            scpstsServiceCallProblemSubType = 0,
            scpstsServiceCallProblemSubTypeParamsCollection = 1,
            scpstsServiceCallProblemSubTypeParams = 2,
        }

        export enum SortOrderEnum {
            soAscending = 0,
            soDescending = 1,
        }

        export enum BrazilNumericIndexerTypes {
            bnitInvalid = 0,
            bnitBeverageCommercialBrand = 1,
            bnitFuelGroup = 2,
            bnitNatureOfCompany = 3,
            bnitEconomicActivityType = 4,
            bnitCooperativeAssociationType = 5,
            bnitProfitTaxation = 6,
            bnitCompanyQualification = 7,
            bnitDeclarerType = 8,
            bnitEnvironmentType = 9,
            bnitTributaryType = 10,
            bnitTributaryRegimeCode = 11,
            bnitIncomeNatureTable = 12,
            bnitIncomeNatureCode = 13,
            bnitExportationDocumentType = 14,
            bnitExportationNature = 15,
            bnitLadingBillType = 16,
        }

        export enum ProjectsServiceDataInterfaces {
            psProject = 0,
            psProjectsParams = 1,
            psProjectParams = 2,
        }

        export enum GTSResponseToExceedingEnum {
            Block = 0,
            Split = 1,
        }

        export enum DiscountGroupRelationsEnum {
            dgrLowestDiscount = 0,
            dgrHighestDiscount = 1,
            dgrAverageDiscount = 2,
            dgrDiscountTotals = 3,
            dgrMultipliedDiscount = 4,
        }

        export enum VatGroupsTaxRegionEnum {
            vgtrPT = 0,
            vgtrPT_AC = 1,
            vgtrPT_MA = 2,
        }

        export enum BoAlertTypeforWHStockEnum {
            atfwhs_WarningOnly = 0,
            atfwhs_Block = 1,
            atfwhs_NoMessage = 2,
        }

        export enum BoPermission {
            boper_Full = 1,
            boper_ReadOnly = 2,
            boper_None = 3,
            boper_Various = 4,
            boper_Undefined = 6,
        }

        export enum SourceCurrencyEnum {
            sc_PrimaryCurrency = 0,
            sc_AdditionalCurrency1 = 1,
            sc_AdditionalCurrency2 = 2,
        }

        export enum ApprovalTemplatesServiceDataInterfaces {
            atsdiApprovalTemplate = 0,
            atsdiApprovalTemplateParams = 1,
        }

        export enum BoInterimDocTypes {
            boidt_None = 0,
            boidt_ExchangeRate = 1,
            boidt_CashDiscount = 2,
        }

        export enum BoQueryTypeEnum {
            qtRegular = 0,
            qtWizard = 1,
        }

        export enum BrazilStringIndexerTypes {
            bsitInvalid = 0,
            bsitBeverageTable = 1,
            bsitNatureOfCalculationBase = 2,
            bsitCreditOrigin = 3,
            bsitBeverageGroup = 4,
            bsitCreditContributionOrigin = 5,
            bsitIPIPeriod = 6,
            bsitSPEDProfile = 7,
            bsitImportationDocumentType = 8,
            bsitReferentialAccountCode = 9,
        }

        export enum TransferTargetProRataTypeEnum {
            ttprtExactlyDailyBase = 0,
            ttprtFirstDayOfCurrentPeriod = 1,
            ttprtFirstDayOfNextPeriod = 2,
        }

        export enum LandedCostDocStatusEnum {
            lcOpen = 0,
            lcClosed = 1,
        }

        export enum BoDataOwnershipManageMethodEnum {
            doManageByDocOnly = 0,
            doManageByBPOnly = 1,
            doManageByBPnDoc = 2,
        }

        export enum BoPriceListGroupNum {
            boplgn_Group1 = 0,
            boplgn_Group2 = 1,
            boplgn_Group3 = 2,
            boplgn_Group4 = 3,
        }

        export enum ReportTypesServiceDataInterfaces {
            rtsReportType = 0,
            rtsReportTypesParams = 1,
            rtsReportTypeParams = 2,
        }

        export enum BoDeductionTaxGroupCodeEnum {
            dtgcInterestReceivers = 1,
            dtgcEmployeeReceivingCommission = 2,
            dtgcWritersPrice = 3,
            dtgcPaidServices = 6,
            dtgcPaymentsToForeignCitizens = 7,
            dtgcPaymentsForCitizensInForeignCountries = 8,
            dtgcInvalidPaymentFromCompensationFund = 11,
            dtgcRepaymentToEmployerFromCompensationFund = 12,
            dtgcRentalPayments = 13,
            dtgcPaymentsFromStudyFund = 14,
            dtgcDividendPayments = 18,
        }

        export enum BoMeritalStatuses {
            mts_Single = 0,
            mts_Married = 1,
            mts_Divorced = 2,
            mts_Widowed = 3,
        }

        export enum ReportLayoutCategoryEnum {
            rlcPLD = 0,
            rlcCrystal = 1,
            rlcLegalList = 2,
            rlcUserDefinedType = 3,
        }

        export enum WTDDetailType {
            Allowed = 0,
            SpecialRate = 1,
            Exemption = 2,
        }

        export enum GeneralServiceDataInterfaces {
            gsGeneralDataCollection = 0,
            gsGeneralData = 1,
            gsGeneralCollectionParams = 2,
            gsGeneralDataParams = 3,
            gsInvokeParams = 4,
        }

        export enum LCCostTypeEnum {
            asFixedCosts = 0,
            asVariableCosts = 1,
        }

        export enum BoPrintReceiptEnum {
            boprcAlways = 0,
            boprcOnlyWhenAdding = 1,
            boprcNo = 2,
        }

        export enum StockTransferAuthorizationStatusEnum {
            sasWithout = 0,
            sasPending = 1,
            sasApproved = 2,
            sasRejected = 3,
            sasGenerated = 4,
            sasGeneratedbyAuthorizer = 5,
            sasCancelled = 6,
        }

        export enum SubsequentAcquisitionProRataTypeEnum {
            saprtExactlyDailyBase = 0,
            saprtFirstDayOfCurrentPeriod = 1,
            saprtFirstDayOfNextPeriod = 2,
        }

        export enum BoProcurementMethod {
            bom_Buy = 0,
            bom_Make = 1,
        }

        export enum DunningTermsServiceDataInterfaces {
            dtsDunningTerm = 0,
            dtsDunningTermLines = 1,
            dtsDunningTermLine = 2,
            dtsDunningTermsParams = 3,
            dtsDunningTermParams = 4,
        }

        export enum BlanketAgreementDocTypeEnum {
            ARInvoice = 0,
            ARCreditMemo = 1,
            Delivery = 2,
            Return = 3,
            SalesOrder = 4,
            APInvoice = 5,
            APCreditMemo = 6,
            GoodsReceiptPO = 7,
            GoodsReturn = 8,
            PurchaseOrder = 9,
            SalesQuotation = 10,
            APCorrectionInvoice = 11,
            APCorrectionInvoiceReversal = 12,
            ARCorrectionInvoice = 13,
            ARCorrectionInvoiceReversal = 14,
            ARDownPayment = 15,
            APDownPayment = 16,
            PurchaseQuotation = 17,
        }

        export enum BatchNumberDetailsServiceDataInterfaces {
            bndsBatchNumberDetail = 0,
            bndsBatchNumberDetailParams = 1,
        }

        export enum BoContractTypes {
            ct_Customer = 0,
            ct_ItemGroup = 1,
            ct_SerialNumber = 2,
        }

        export enum BoOrientationEnum {
            ortVertical = 0,
            ortHorizontal = 1,
        }

        export enum TransferTargetPeriodControlEnum {
            ttpcProRataTemporis = 0,
        }

        export enum ProductionItemType {
            pit_Item = 0,
            pit_Resource = 1,
            pit_Text = 2,
        }

        export enum BoApprovalRequestStatusEnum {
            arsPending = 0,
            arsApproved = 1,
            arsNotApproved = 2,
            arsGenerated = 3,
            arsGeneratedByAuthorizer = 4,
            arsCancelled = 5,
        }

        export enum SpecialProductTypeEnum {
            sptMT = 0,
            sptIO = 1,
        }

        export enum BoMsgPriorities {
            pr_Low = 0,
            pr_Normal = 1,
            pr_High = 2,
        }

        export enum WithholdingTaxCodeBaseTypeEnum {
            wtcbt_Gross = 0,
            wtcbt_Net = 1,
            wtcbt_VAT = 2,
            wtcbt_Gross_VAT = 3,
        }

        export enum PaymentMeansTypeEnum {
            pmtNotAssigned = 0,
            pmtChecks = 1,
            pmtBankTransfer = 2,
            pmtCash = 3,
            pmtCreditCard = 4,
        }

        export enum BinRestrictTransactionEnum {
            brtNoRestrictions = 0,
            brtAllTrans = 1,
            brtInboundTrans = 2,
            brtOutboundTrans = 3,
            brtAllExceptInventoryTrans = 4,
        }

        export enum AccountCategoryServiceDataInterfaces {
            acsAccountCategory = 0,
            acsAccountCategoriesParams = 1,
            acsAccountCategoryParams = 2,
        }

        export enum TaxReportFilterType {
            trft_TaxReport = 0,
            trft_WTReport = 1,
            trft_Report347 = 2,
            trft_Report349 = 3,
            trft_ReconciliationReport = 4,
            trft_StampTax = 5,
            trft_SalesReport = 6,
            trft_None = 7,
            trft_BoxReport = 8,
            trft_AppendixOP = 9,
            trft_AnnualSalesReport = 10,
            trft_VATRefundReport = 11,
        }

        export enum BoRoleInTeam {
            borit_Member = 0,
            borit_Leader = 1,
        }

        export enum ItemTypeEnum {
            itItems = 0,
            itLabor = 1,
            itTravel = 2,
            itFixedAssets = 3,
        }

        export enum POSDailySummaryServiceDataInterfaces {
            posdssPOSDailySummary = 0,
            posdssPOSDailySummaryParams = 1,
        }

        export enum CompanyServiceDataInterfaces {
            csdiCompanyInfo = 0,
            csdiAdminInfo = 1,
            csdiPeriodCategory = 2,
            csdiPeriodCategoryParams = 3,
            csdiFinancePeriod = 4,
            csdiFinancePeriods = 5,
            csdiFinancePeriodParams = 6,
            csdiBlob = 7,
            csdiBlobParams = 8,
            csdiPathAdmin = 9,
            csdiUserLicenseParams = 10,
            csdiDecimalData = 11,
            csdiItemPriceParams = 12,
            csdiItemPriceReturnParams = 13,
            csdiAdvancedGLAccountParams = 14,
            csdiAdvancedGLAccountReturnParams = 15,
        }

        export enum EDocGenerationTypeEnum {
            edocGenerate = 0,
            edocGenerateLater = 1,
            edocNotRelevant = 2,
        }

        export enum BoSvcCallPriorities {
            scp_Low = 0,
            scp_Medium = 1,
            scp_High = 2,
        }

        export enum BoCardCompanyTypes {
            cCompany = 0,
            cPrivate = 1,
            cGovernment = 2,
        }

        export enum EmployeeTransferStatusEnum {
            ets_New = 0,
            ets_Processing = 1,
            ets_Sent = 2,
            ets_Received = 3,
            ets_Accepted = 4,
            ets_Error = 5,
        }

        export enum AssetDocumentStatusEnum {
            adsPosted = 0,
            adsDraft = 1,
            adsCancelled = 2,
        }

        export enum ResourceCapacitiesServiceDataInterfaces {
            rcsdiResourceCapacity = 0,
            rcsdiResourceCapacityParamsCollection = 1,
            rcsdiResourceCapacityParams = 2,
            rcsdiResourceCapacityWithFilterParams = 3,
        }

        export enum FolioLetterEnum {
            fLetterA = 0,
            fLetterB = 1,
            fLetterC = 2,
            fLetterE = 3,
            fLetterM = 4,
            fLetterR = 5,
        }

        export enum BoBusinessPartnerTypes {
            garAll = 0,
            garCompany = 1,
            garPrivate = 2,
            garGovernment = 3,
        }

        export enum BoTaxRoundingRuleTypes {
            trr_RoundDown = 0,
            trr_RoundUp = 1,
            trr_RoundOff = 2,
            trr_CompanyDefault = 3,
        }

        export enum BoDocWhsAutoIssueMethod {
            aimSingleChoiceOnly = 0,
            aimBinCodeOrder = 1,
            aimAlternativeSortCodeOrder = 2,
            aimQtyDescendingOrder = 3,
            aimQtyAscendingOrder = 4,
            aimBinFIFO = 5,
            aimBinLIFO = 6,
            aimSingleBinPreferred = 7,
        }

        export enum BoBudgetAlert {
            ba_AnnualAlert = 0,
            ba_MonthlyAlert = 1,
        }

        export enum RetirementMethodEnum {
            rmGross = 0,
            rmNet = 1,
        }

        export enum BoServiceSupplyMethods {
            ssmImmediate = 0,
            ssmToMoreResumptions = 1,
        }

        export enum ExternalCallsServiceDataInterfaces {
            ecsExternalCall = 0,
            ecsExternalCallParams = 1,
        }

        export enum DirectDebitTypeEnum {
            ddtCORE = 0,
            ddtB2B = 1,
            ddtCOR1 = 2,
        }

        export enum GSTTaxCategoryEnum {
            gtc_Regular = 0,
            gtc_NilRated = 1,
            gtc_Exempt = 2,
        }

        export enum PostingMethodEnum {
            pmGLAccountBankAccount = 0,
            pmBussinessPartnerBankAccount = 1,
            pmInterimAccountBankAccount = 2,
            pmExternalReconciliation = 3,
            pmIgnore = 4,
        }

        export enum BoAllocationByEnum {
            ab_CashValueBeforeCustoms = 0,
            ab_CashValueAfterCustoms = 1,
            ab_Quantity = 2,
            ab_Weight = 3,
            ab_Volume = 4,
            ab_Equal = 5,
        }

        export enum AlertManagementPriorityEnum {
            atp_Low = 0,
            atp_Normal = 1,
            atp_High = 2,
        }

        export enum BinLocationsServiceDataInterfaces {
            blcsBinLocation = 0,
            blcsBinLocationCollectionParams = 1,
            blcsBinLocationParams = 2,
        }

        export enum GroupingMethodEnum {
            gmPerInvoice = 0,
            gmPerDunningLevel = 1,
            gmPerBP = 2,
        }

        export enum RetornoCodesServiceDataInterfaces {
            rcsRetornoCode = 0,
            rcsRetornoCodeParamsCollection = 1,
            rcsRetornoCodeParams = 2,
        }

        export enum BoUDOObjType {
            boud_MasterData = 1,
            boud_Document = 3,
        }

        export enum BoFormattedSearchActionEnum {
            bofsaNone = 0,
            bofsaValidValues = 1,
            bofsaQuery = 2,
        }

        export enum DeterminationCriteriasServiceDataInterfaces {
            dcsDeterminationCriteria = 0,
            dcsDeterminationCriteriaParamsCollection = 1,
            dcsDeterminationCriteriaParams = 2,
        }

        export enum BoFrequency {
            bof_Daily = 0,
            bof_Weekly = 1,
            bof_Every4Weeks = 2,
            bof_Monthly = 3,
            bof_Quarterly = 4,
            bof_HalfYearly = 5,
            bof_Annually = 6,
            bof_OneTime = 7,
            bof_EveryXDays = 8,
        }

        export enum AssetStatusEnum {
            asNew = 0,
            asActive = 1,
            asInActive = 2,
        }

        export enum BoBlockBudget {
            bb_OnlyAnnualAlert = 0,
            bb_MonthlyAlertOnly = 1,
            bb_Block = 2,
        }

        export enum BoDepositAccountTypeEnum {
            datBankAccount = 0,
            datBusinessPartner = 1,
        }

        export enum EcmActionLogTypeEnum {
            altSend = 1,
            altReceive = 2,
            altImport = 3,
            altNote = 4,
            altWarning = 5,
            altError = 6,
        }

        export enum BinActionTypeEnum {
            batToWarehouse = 1,
            batFromWarehouse = 2,
        }

        export enum BankChargesAllocationCodesServiceDataInterfaces {
            bcacsBankChargesAllocationCode = 0,
            bcacsBankChargesAllocationCodesParams = 1,
            bcacsBankChargesAllocationCodeParams = 2,
        }

        export enum BoPaymentPriorities {
            bopp_Priority_1 = 0,
            bopp_Priority_2 = 1,
            bopp_Priority_3 = 2,
            bopp_Priority_4 = 3,
            bopp_Priority_5 = 4,
            bopp_Priority_6 = 5,
        }

        export enum EmailGroupsServiceDataInterfaces {
            egsEmailGroup = 0,
            egsEmailGroupParamsCollection = 1,
            egsEmailGroupParams = 2,
        }

        export enum SectionsServiceDataInterfaces {
            ssSection = 0,
            ssSectionsParams = 1,
            ssSectionParams = 2,
        }

        export enum BoGLMethods {
            glm_WH = 0,
            glm_ItemClass = 1,
            glm_ItemLevel = 2,
        }

        export enum ElecCommStatusEnum {
            ecsApproved = 0,
            ecsPendingApproval = 1,
            ecsRejected = 2,
        }

        export enum BoTCDDocumentTypeEnum {
            tcddtItem = 0,
            tcddtService = 1,
            tcddtItemAndService = 2,
        }

        export enum CashDiscountsServiceDataInterfaces {
            cdsCashDiscount = 0,
            cdsCashDiscountsParams = 1,
            cdsCashDiscountParams = 2,
        }

        export enum AssetDocumentTypeEnum {
            adtOrdinaryDepreciation = 0,
            adtUnplannedDepreciation = 1,
            adtSpecialDepreciation = 2,
            adtAppreciation = 3,
            adtAssetTransfer = 4,
            adtSales = 5,
            adtScrapping = 6,
            adtAssetClassTransfer = 7,
        }

        export enum ProjectManagementServiceDataInterfaces {
            pmsPM_ProjectDocumentData = 0,
            pmsPM_StagesCollection = 1,
            pmsPM_StageData = 2,
            pmsPM_OpenIssuesCollection = 3,
            pmsPM_OpenIssueData = 4,
            pmsPM_DocumentsCollection = 5,
            pmsPM_DocumentData = 6,
            pmsPM_ActivitiesCollection = 7,
            pmsPM_ActivityData = 8,
            pmsPM_WorkOrdersCollection = 9,
            pmsPM_WorkOrderData = 10,
            pmsPM_SummaryData = 11,
            pmsPM_DocAttachements = 12,
            pmsPM_DocAttachement = 13,
            pmsPM_StageAttachements = 14,
            pmsPM_StageAttachement = 15,
            pmsPM_SubprojectDocumentData = 16,
            pmsPMS_StagesCollection = 17,
            pmsPMS_StageData = 18,
            pmsPMS_OpenIssuesCollection = 19,
            pmsPMS_OpenIssueData = 20,
            pmsPMS_DocumentsCollection = 21,
            pmsPMS_DocumentData = 22,
            pmsPMS_ActivitiesCollection = 23,
            pmsPMS_ActivityData = 24,
            pmsPMS_WorkOrdersCollection = 25,
            pmsPMS_WorkOrderData = 26,
            pmsPMS_SummaryData = 27,
            pmsPMS_DocAttachements = 28,
            pmsPMS_DocAttachement = 29,
            pmsPMS_StageAttachements = 30,
            pmsPMS_StageAttachement = 31,
            pmsPM_ProjectDocumentParams = 32,
            pmsPM_SubprojectDocumentsCollection = 33,
            pmsPM_SubprojectDocumentParams = 34,
            pmsPM_SubprojectParams = 35,
        }

        export enum BoManageMethod {
            bomm_OnEveryTransaction = 0,
            bomm_OnReleaseOnly = 1,
        }

        export enum BoPaymentMeansEnum {
            bopmCheck = 0,
            bopmBankTransfer = 1,
            bopmBillOfExchange = 2,
        }

        export enum BoBarCodeStandardEnum {
            rlbsEan13 = 0,
            rlbsCode39 = 1,
            rlbsCode128 = 2,
        }

        export enum AssetDocumentServiceDataInterfaces {
            adsAssetDocument = 0,
            adsAssetDocumentParamsCollection = 1,
            adsAssetDocumentParams = 2,
        }

        export enum TdsTypeEnum {
            wtETds = 0,
            wtGstTds = 1,
            wtGstTcs = 2,
        }

        export enum ResourceGroupsServiceDataInterfaces {
            rgsdiResourceGroup = 0,
            rgsdiResourceGroupParamsCollection = 1,
            rgsdiResourceGroupParams = 2,
        }

        export enum BoAeDistMthd {
            aed_None = 0,
            aed_Quantity = 1,
            aed_Volume = 2,
            aed_Weight = 3,
            aed_Equally = 4,
            aed_LineTotal = 5,
        }

        export enum UnitOfMeasurementGroupsServiceDataInterfaces {
            uomgsUnitOfMeasurementGroup = 0,
            uomgsUnitOfMeasurementGroupParamsCollection = 1,
            uomgsUnitOfMeasurementGroupParams = 2,
        }

        export enum EmployeeIDTypeServiceDataInterfaces {
            eidtsEmployeeIDType = 0,
            eidtsEmployeeIDTypeParamsCollection = 1,
            eidtsEmployeeIDTypeParams = 2,
        }

        export enum TransferSourceProRataTypeEnum {
            tsprtExactlyDailyBase = 0,
            tsprtLastDayOfPriorPeriod = 1,
            tsprtLastDayofCurrentPeriod = 2,
        }

        export enum EcmActionTypeEnum {
            latSetup = 1,
            latReport = 2,
            latDocumentAR = 3,
            latDocumentAP = 4,
            latDraft = 5,
            latOther = 6,
            latSkip = 7,
            latContingency = 8,
            latBpCheck = 9,
        }

        export enum BoWorkOrderStat {
            wk_WorkOrder = 0,
            wk_WorkInstruction = 1,
            wk_ProductComplete = 2,
        }

        export enum UserQueryTypeEnum {
            uqtRegular = 0,
            uqtWizard = 1,
            uqtGenerator = 2,
            uqtStoredProcedure = 3,
        }

        export enum ReturnTypeEnum {
            rt26Q = 0,
            rt27Q = 1,
        }

        export enum EmployeeExemptionUnitEnum {
            eeu_None = 0,
            eeu_Yearly = 1,
            eeu_Monthly = 2,
            eeu_Weekly = 3,
            eeu_Daily = 4,
        }

        export enum ProjectTypeEnum {
            pt_External = 0,
            pt_Internal = 1,
        }

        export enum ApprovalStagesServiceDataInterfaces {
            assdiApprovalStageParams = 0,
            assdiApprovalStage = 1,
        }

        export enum GeneratedAssetStatusEnum {
            gasOpen = 0,
            gasClosed = 1,
        }

        export enum PaymentsAuthorizationStatusEnum {
            pasWithout = 0,
            pasPending = 1,
            pasApproved = 2,
            pasRejected = 3,
            pasGenerated = 4,
            pasGeneratedbyAuthorizer = 5,
            pasCancelled = 6,
        }

        export enum CampaignsServiceDataInterfaces {
            csCampaign = 0,
            csCampaignsParams = 1,
            csCampaignParams = 2,
        }

        export enum BoPickStatus {
            ps_Released = 0,
            ps_Picked = 1,
            ps_PartiallyPicked = 2,
            ps_PartiallyDelivered = 3,
            ps_Closed = 4,
        }

        export enum SalesOpportunitySourcesSetupServiceDataInterfaces {
            sosssSalesOpportunitySourceSetup = 0,
            sosssSalesOpportunitySourceSetupParamsCollection = 1,
            sosssSalesOpportunitySourceSetupParams = 2,
        }

        export enum BoBaseDateRateEnum {
            bdr_PostingDate = 0,
            bdr_TaxDate = 1,
        }

        export enum MultipleCounterRoleEnum {
            mcrTeamCounter = 0,
            mcrIndividualCounter = 1,
        }

        export enum ServiceCallOriginsServiceDataInterfaces {
            scosServiceCallOrigin = 0,
            scosServiceCallOriginParamsCollection = 1,
            scosServiceCallOriginParams = 2,
        }

        export enum KPIsServiceDataInterfaces {
            kpisKPI = 0,
            kpisKPIsParams = 1,
            kpisKPIParams = 2,
        }

        export enum ProjectManagementConfigurationServiceDataInterfaces {
            pmcsPMC_SubprojectTypesCollection = 0,
            pmcsPMC_SubprojectTypeData = 1,
            pmcsPMC_StageTypeCollection = 2,
            pmcsPMC_StageTypeData = 3,
            pmcsPMC_AreaCollection = 4,
            pmcsPMC_AreaData = 5,
            pmcsPMC_PriorityCollection = 6,
            pmcsPMC_PriorityData = 7,
            pmcsPMC_ActivityCollection = 8,
            pmcsPMC_ActivityData = 9,
            pmcsPMC_TaskCollection = 10,
            pmcsPMC_TaskData = 11,
        }

        export enum GovPayCodesServiceDataInterfaces {
            gpcsGovPayCode = 0,
            gpcsGovPayCodeParamsCollection = 1,
            gpcsGovPayCodeParams = 2,
        }

        export enum CalculateInterestMethodEnum {
            cimOnRemainingAmount = 0,
            cimOnOriginalSum = 1,
        }

        export enum EnhancedDiscountGroupsServiceDataInterfaces {
            edgsEnhancedDiscountGroup = 0,
            edgsEnhancedDiscountGroupCollectionParams = 1,
            edgsEnhancedDiscountGroupParams = 2,
        }

        export enum InventoryPostingPriceSourceEnum {
            ippsByPriceList = 0,
            ippsLastEvaluatedPrice = 1,
            ippsItemCost = 2,
        }

        export enum BrazilStringIndexersServiceDataInterfaces {
            bsisBrazilStringIndexer = 0,
            bsisBrazilStringIndexersParams = 1,
            bsisBrazilStringIndexerParams = 2,
        }

        export enum ProjectStatusTypeEnum {
            pst_Started = 0,
            pst_Paused = 1,
            pst_Stopped = 2,
            pst_Finished = 3,
            pst_Canceled = 4,
        }

        export enum DashboardPackagesServiceDataInterfaces {
            dpsDashboardPackagesParams = 0,
            dpsDashboardPackageParams = 1,
            dpsDashboardPackageImportParams = 2,
        }

        export enum BoPaymentTypeEnum {
            boptIncoming = 0,
            boptOutgoing = 1,
        }

        export enum ExchangeRateSelectEnum {
            ierFromInovice = 0,
            ierCurrentRate = 1,
        }

        export enum ReconciliationAccountTypeEnum {
            rat_GLAccount = 0,
            rat_BusinessPartner = 1,
        }

        export enum BoPictureSizeEnum {
            rlpsOriginalSize = 0,
            rlpsFitFieldSizeNonProportionally = 1,
            rlpsFitFieldSizeProportionally = 2,
            rlpsFitFieldHeight = 3,
            rlpsFitFieldWidth = 4,
        }

        export enum BoCockpitTypeEnum {
            cptt_UserCockpit = 0,
            cptt_TemplateCockpit = 1,
        }

        export enum PartnersSetupsServiceDataInterfaces {
            pssPartnersSetup = 0,
            pssPartnersSetupsParams = 1,
            pssPartnersSetupParams = 2,
        }

        export enum TaxReportFilterDeclarationType {
            trfdt_Original = 0,
            trfdt_Substitute = 1,
            trfdt_Complementary = 2,
        }

        export enum CallMessageTypeEnum {
            cmtInformation = 0,
            cmtWarning = 1,
            cmtError = 2,
        }

        export enum BoProductionOrderOriginEnum {
            bopooManual = 0,
            bopooMRP = 1,
            bopooSalesOrder = 2,
        }

        export enum BOEPortfoliosServiceDataInterfaces {
            boepsBOEPortfolios = 0,
            boepsBOEPortfolio = 1,
            boepsBOEPortfoliosParams = 2,
            boepsBOEPortfolioParams = 3,
        }

        export enum UserMenuServiceDataInterfaces {
            umsdiUserMenuParams = 0,
            umsdiUserMenuItem = 1,
            umsdiUserMenuItems = 2,
        }

        export enum BinRestrictionBatchEnum {
            brbNoRestrictions = 0,
            brbSingleBatch = 1,
        }

        export enum DNFCodeSetupServiceDataInterfaces {
            dnfcssDNFCodeSetup = 0,
            dnfcssDNFCodeSetupParamsCollection = 1,
            dnfcssDNFCodeSetupParams = 2,
        }

        export enum CreditLinesServiceDataInterfaces {
            clsCreditLinesParams = 0,
            clsCreditLineParams = 1,
        }

        export enum ResourceCapacityTypeEnum {
            rctInternal = 0,
            rctOrdered = 1,
            rctCommitted = 2,
            rctConsumed = 3,
        }

        export enum InventoryCountingsServiceDataInterfaces {
            icsInventoryCounting = 0,
            icsInventoryCountingParamsCollection = 1,
            icsInventoryCountingParams = 2,
        }

        export enum GetGLAccountByEnum {
            gglab_General = 0,
            gglab_Warehouse = 1,
            gglab_ItemGroup = 2,
        }

        export enum BoCurrencyCheck {
            cc_Block = 0,
            cc_NoMessage = 1,
        }

        export enum BoItemTreeTypes {
            iNotATree = 0,
            iAssemblyTree = 1,
            iSalesTree = 2,
            iProductionTree = 3,
            iTemplateTree = 4,
            iIngredient = 5,
        }

        export enum CostCenterTypesServiceDataInterfaces {
            cctsCostCenterType = 0,
            cctsCostCenterTypesParams = 1,
            cctsCostCenterTypeParams = 2,
        }

        export enum AccountCategorySourceEnum {
            acsBalanceSheet = 0,
            acsProfitAndLoss = 1,
        }

        export enum BarCodesServiceDataInterfaces {
            bsBarCode = 0,
            bsBarCodeParamsCollection = 1,
            bsBarCodeParams = 2,
        }

        export enum BinLocationFieldsServiceDataInterfaces {
            blfsBinLocationField = 0,
            blfsBinLocationFieldCollectionParams = 1,
            blfsBinLocationFieldParams = 2,
        }

        export enum ResourceAllocationEnum {
            raOnStartDate = 0,
            raOnEndDate = 1,
            raStartDateForwards = 2,
            raEndDateBackwards = 3,
        }

        export enum BoMoneyPrecisionTypes {
            mpt_Sum = 0,
            mpt_Price = 1,
            mpt_Rate = 2,
            mpt_Quantity = 3,
            mpt_Percent = 4,
            mpt_Measure = 5,
            mpt_Tax = 6,
        }

        export enum BoTaxInvoiceTypes {
            botit_Invoice = 0,
            botit_Payment = 1,
            botit_JournalEntry = 2,
            botit_CorrectionInvoice = 3,
            botit_DownPayment = 4,
            botit_AlterationInvoice = 5,
            botit_AlterationCorrectionInvoice = 6,
        }

        export enum ElectronicCommunicationActionServiceDataInterfaces {
            ecasECMCodeParamsCollection = 0,
            ecasECMCodeParams = 1,
            ecasECMActionStatusData = 2,
        }

        export enum BoVatCategoryEnum {
            bovcOutputTax = 0,
            bovcInputTax = 1,
        }

        export enum ExpenseTypeServiceDataInterfaces {
            etsExpenseTypeData = 0,
            etsExpenseTypeParams = 1,
        }

        export enum TaxInvoiceReportLineTypeEnum {
            LineOfBusinessPlace = 1,
            LineOfBusinessPartner = 2,
            LineOfDocument = 3,
            LineOfItem = 4,
        }

        export enum BinRestrictItemEnum {
            briNone = 0,
            briSpecificItem = 1,
            briSingleItemOnly = 2,
            briSpecificItemGroup = 3,
            briSpecificItemGroupOnly = 4,
        }

        export enum TerminationReasonServiceDataInterfaces {
            trsTerminationReason = 0,
            trsTerminationReasonParamsCollection = 1,
            trsTerminationReasonParams = 2,
        }

        export enum BoSoClosedInTypes {
            sos_Months = 0,
            sos_Weeks = 1,
            sos_Days = 2,
        }

        export enum RecurrenceSequenceSpecifierEnum {
            rssFirst = 0,
            rssSecond = 1,
            rssThird = 2,
            rssFourth = 3,
            rssLast = 4,
        }

        export enum ProfitCentersServiceDataInterfaces {
            pcsProfitCenter = 0,
            pcsProfitCentersParams = 1,
            pcsProfitCenterParams = 2,
        }

        export enum KPITypeEnum {
            asSingle = 0,
            asQuarterly = 1,
            asMonthly = 2,
            asMultiple = 3,
        }

        export enum DepreciationAreasServiceDataInterfaces {
            dasDepreciationArea = 0,
            dasDepreciationAreaParamsCollection = 1,
            dasDepreciationAreaParams = 2,
        }

        export enum UnitOfMeasurementsServiceDataInterfaces {
            uomsUnitOfMeasurement = 0,
            uomsUnitOfMeasurementParamsCollection = 1,
            uomsUnitOfMeasurementParams = 2,
        }

        export enum TaxInvoiceReportServiceDataInterfaces {
            tirsTaxInvoiceReport = 0,
            tirsTaxInvoiceReportLineCollection = 1,
            tirsTaxInvoiceReportLine = 2,
            tirsTaxInvoiceReportParams = 3,
        }

        export enum IntrastatConfigurationEnum {
            enAdditionalMeasureUnit = 0,
            enCommodityCodes = 1,
            enCustomProcedures = 2,
            enIncoterms = 3,
            enNatureOfTransactions = 4,
            enPortsOfEntryAndExit = 5,
            enServiceCodes = 6,
            enStatisticalProcedures = 7,
            enTransportModes = 8,
            enRegions = 9,
        }

        export enum RclRecurringTransactionStatusEnum {
            rtsNotExecuted = 1,
            rtsExecuted = 2,
            rtsRemoved = 3,
        }

        export enum ResourceCapacityOwningTypeEnum {
            rcotNone = 0,
            rcotProductionOrder = 202,
            rcotIssueForProduction = 60,
            rcotReceiptFromProduction = 59,
        }

        export enum SEPASequenceTypeEnum {
            sstOOFF = 0,
            sstFRST = 1,
            sstRCUR = 2,
            sstFNAL = 3,
        }

        export enum BankStatementDocTypeEnum {
            bsdtReceipts = 0,
            bsdtPaymentToVendor = 1,
            bsdtInvoices = 2,
            bsdtPurchases = 3,
            bsdtDownPaymentIncoming = 4,
            bsdtDownPaymentOutgoing = 5,
            bsdtRevertInvoices = 6,
            bsdtRevertPurchases = 7,
            bsdtJournalEntry = 8,
        }

        export enum BoTimeTemplate {
            tt_24H = 0,
            tt_12H = 1,
        }

        export enum ExternalCallStatusEnum {
            ecsNew = 0,
            ecsInProcess = 1,
            ecsCompleted = 2,
            ecsConfirmed = 3,
            ecsFailed = 4,
        }

        export enum PrintStatusEnum {
            psNo = 0,
            psYes = 1,
            psAmended = 2,
        }

        export enum BoDepositPostingTypes {
            dpt_Collection = 0,
            dpt_Discounted = 1,
        }

        export enum FormPreferencesServiceDataInterfaces {
            fpsdiColumnsPreferences = 0,
            fpsdiColumnsPreferencesParams = 1,
        }

        export enum BoSeriesGroupEnum {
            sg_Group1 = 1,
            sg_Group2 = 2,
            sg_Group3 = 3,
            sg_Group4 = 4,
            sg_Group5 = 5,
            sg_Group6 = 6,
            sg_Group7 = 7,
            sg_Group8 = 8,
            sg_Group9 = 9,
            sg_Group10 = 10,
        }

        export enum CashFlowLineItemsServiceDataInterfaces {
            cflisCashFlowLineItem = 0,
            cflisCashFlowLineItemsParams = 1,
            cflisCashFlowLineItemParams = 2,
        }

        export enum BoHorizontalAlignmentEnum {
            rlhjRight = 0,
            rlhjLeft = 1,
            rlhjCentralized = 2,
            rlhjLanguageDependent = 3,
        }

        export enum BoCorInvItemStatus {
            ciis_Was = 0,
            ciis_ShouldBe = 1,
        }

        export enum BoSerialNumberStatus {
            sns_Active = 0,
            sns_Returned = 1,
            sns_Terminated = 2,
            sns_Loaned = 3,
            sns_InLab = 4,
        }

        export enum PaymentBlocksServiceDataInterfaces {
            pbsPaymentBlock = 0,
            pbsPaymentBlocksParams = 1,
            pbsPaymentBlockParams = 2,
        }

        export enum FiscalPrinterServiceDataInterfaces {
            fpsFiscalPrinter = 0,
            fpsFiscalPrintersParams = 1,
            fpsFiscalPrinterParams = 2,
        }

        export enum BlanketAgreementMethodEnum {
            amItem = 0,
            amMonetary = 1,
        }

        export enum LandedCostAllocationByEnum {
            asCashValueBeforeCustoms = 0,
            asCashValueAfterCustoms = 1,
            asQuantity = 2,
            asWeight = 3,
            asVolume = 4,
            asEqual = 5,
        }

        export enum OccurrenceCodesServiceDataInterfaces {
            ocsOccurenceCode = 0,
            ocsOccurenceCodeParamsCollection = 1,
            ocsOccurenceCodeParams = 2,
        }

        export enum ShaamGroupEnum {
            sgServicesAndAsset = 0,
            sgAgriculturalProducts = 1,
            sgInsuranceCommissions = 2,
            sgWHTaxInstructions = 3,
            sgInterestExchangeRateDiffs = 4,
        }

        export enum BoDocumentSubType {
            bod_None = 0,
            bod_InvoiceExempt = 1,
            bod_DebitMemo = 2,
            bod_Bill = 3,
            bod_ExemptBill = 4,
            bod_PurchaseDebitMemo = 5,
            bod_ExportInvoice = 6,
            bod_GSTTaxInvoice = 7,
            bod_GSTDebitMemo = 8,
        }

        export enum TranslationCategoryEnum {
            asCRReport = 0,
            asMenuItem = 1,
            asEFMItem = 2,
        }

        export enum DueDateTypesEnum {
            ddtByDates = 0,
            ddtAfterTimePeriod = 1,
        }

        export enum TimeSheetTypeEnum {
            tsh_Employee = 0,
            tsh_User = 1,
            tsh_Other = 2,
        }

        export enum AssetClassesServiceDataInterfaces {
            acsAssetClass = 0,
            acsAssetClassParamsCollection = 1,
            acsAssetClassParams = 2,
        }

        export enum ReportFilterServiceDataInterfaces {
            rfsdiTaxReportFilter = 0,
            rfsdiTaxReportFilterParams = 1,
            rfsdiTaxReportFiltersParams = 2,
        }

        export enum DeductionTaxSubGroupsServiceDataInterfaces {
            dtsgsDeductionTaxSubGroup = 0,
            dtsgsDeductionTaxSubGroupsParams = 1,
            dtsgsDeductionTaxSubGroupParams = 2,
        }

        export enum LicenseTypeEnum {
            ltIdirect = 25,
            ltSOAIndirect = 20,
            ltSOA = 21,
            ltB1iIndirect = 22,
            ltB1i = 23,
        }

        export enum BoRoundingMethod {
            borm_NoRounding = 0,
            borm_RoundToFullDecAmount = 1,
            borm_RoundToFullAmount = 2,
            borm_RoundToFullTensAmount = 3,
            borm_FixedEnding = 4,
            borm_FixedInterval = 5,
        }

        export enum OperationCode347Enum {
            ocGoodsOrServiciesAcquisitions = 0,
            ocPublicEntitiesAcquisitions = 1,
            ocTravelAgenciesPurchases = 2,
            ocSalesOrServicesRevenues = 3,
            ocPublicSubsidies = 4,
            ocTravelAgenciesSales = 5,
        }

        export enum SubprojectStatusTypeEnum {
            sst_Open = 0,
            sst_Closed = 1,
        }

        export enum VMCommunicationStatusEnum {
            vmcs_Pending = 0,
            vmcs_Error = 1,
            vmcs_Successful = 2,
            vmcs_New = 3,
            vmcs_Rejected = 4,
        }

        export enum PeriodStatusEnum {
            ltUnlocked = 0,
            ltUnlockedExceptSales = 1,
            ltPeriodClosing = 2,
            ltLocked = 3,
        }

        export enum MaterialRevaluationFIFOServiceDataInterfaces {
            mrfifosMaterialRevaluationFIFO = 0,
            mrfifosLayers = 1,
            mrfifosLayer = 2,
            mrfifosMaterialRevaluationFIFOParams = 3,
        }

        export enum BoDefaultBatchStatus {
            dbs_Released = 0,
            dbs_NotAccessible = 1,
            dbs_Locked = 2,
        }

        export enum BoRemindUnits {
            reu_Days = 0,
            reu_Weeks = 1,
            reu_Month = 2,
        }

        export enum EndTypeEnum {
            etNoEndDate = 0,
            etByCounter = 1,
            etByDate = 2,
        }

        export enum BOEInstructionsServiceDataInterfaces {
            boeisBOEInstructions = 0,
            boeisBOEInstruction = 1,
            boeisBOEInstructionsParams = 2,
            boeisBOEInstructionParams = 3,
        }

        export enum BoCardTypes {
            cCustomer = 0,
            cSupplier = 1,
            cLid = 2,
        }

        export enum DocumentAuthorizationStatusEnum {
            dasWithout = 0,
            dasPending = 1,
            dasApproved = 2,
            dasRejected = 3,
            dasGenerated = 4,
            dasGeneratedbyAuthorizer = 5,
            dasCancelled = 6,
        }

        export enum BoDocumentLinePickStatus {
            dlps_Picked = 0,
            dlps_NotPicked = 1,
            dlps_ReleasedForPicking = 2,
            dlps_PartiallyPicked = 3,
        }

        export enum BinLocationAttributesServiceDataInterfaces {
            blasBinLocationAttribute = 0,
            blasBinLocationAttributeCollectionParams = 1,
            blasBinLocationAttributeParams = 2,
        }

        export enum BoSoStatus {
            so_Open = 0,
            so_Closed = 1,
        }

        export enum ChangeLogsServiceDataInterfaces {
            clsGetChangeLogParams = 0,
            clsShowDifferenceParams = 1,
        }

        export enum ExternalReconciliationsServiceDataInterfaces {
            ersExternalReconciliation = 0,
            ersExternalReconciliationsParamsCollection = 1,
            ersExternalReconciliationParams = 2,
            ersExternalReconciliationFilterParams = 3,
        }

        export enum BoDateTemplate {
            dt_DDMMYY = 0,
            dt_DDMMCCYY = 1,
            dt_MMDDYY = 2,
            dt_MMDDCCYY = 3,
            dt_CCYYMMDD = 4,
            dt_DDMonthYYYY = 5,
            dt_YYMMDD = 6,
        }

        export enum IntegrationPackagesConfigureServiceDataInterfaces {
            ipcsIntegrationPackageConfigure = 0,
            ipcsIntegrationPackagesParams = 1,
            ipcsIntegrationPackageParams = 2,
        }

        export enum BoDocLineType {
            dlt_Regular = 0,
            dlt_Alternative = 1,
        }

        export enum ResourceCapacityMemoSourceEnum {
            rcmsUnknown = 0,
            rcmsResourceCapacityForm = 1,
            rcmsSetDailyInternalCapacitiesForm = 2,
        }

        export enum IntrastatConfigurationServiceDataInterfaces {
            icsIntrastatConfiguration = 0,
            icsIntrastatConfigurationCollectionParams = 1,
            icsIntrastatConfigurationParams = 2,
        }

        export enum BankStatementRowSourceEnum {
            bsImported = 0,
            bsImportedAndAmended = 1,
            bsManuallyEntered = 2,
        }

        export enum CurrenciesDecimalsEnum {
            cdDefault = 0,
            cdWithoutDecimals = 1,
            cd1Digit = 2,
            cd2Digits = 3,
            cd3Digits = 4,
            cd4Digits = 5,
            cd5Digits = 6,
            cd6Digits = 7,
        }

        export enum BoChangeLogEnum {
            clChartOfAccounts = 0,
            clBusinessPartners = 1,
            clItems = 2,
            clVatGroups = 3,
            clUsers = 4,
            clInvoices = 5,
            clCreditNotes = 6,
            clDeliveryNotes = 7,
            clReturns = 8,
            clOrders = 9,
            clPurchaseInvoices = 10,
            clPurchaseCreditNotes = 11,
            clPurchaseDeliveryNotes = 12,
            clPurchaseReturns = 13,
            clPurchaseOrders = 14,
            clQuotations = 15,
            clIncomingPayments = 16,
            clJournalEntries = 17,
            clCreditCards = 18,
            clAdminInfo = 19,
            clVendorPayments = 20,
            clItemGroups = 21,
            clInventoryGeneralEntry = 22,
            clInventoryGeneralExit = 23,
            clWarehouses = 24,
            clProductTrees = 25,
            clStockTransfers = 26,
            clFinancePeriods = 27,
            clAdditionalExpenses = 28,
            clPickLists = 29,
            clMaterialRevaluation = 30,
            clCorrectionPurchaseInvoice = 31,
            clCorrectionPurchaseInvoiceReversal = 32,
            clCorrectionInvoice = 33,
            clCorrectionInvoiceReversal = 34,
            clEmployeesInfo = 35,
            clCustomerEquipmentCards = 36,
            clWithholdingTaxCodes = 37,
            clBillOfExchange = 38,
            clServiceCalls = 39,
            clProductionOrders = 40,
            clDownPayments = 41,
            clPurchaseDownPayments = 42,
            clPeriodCategory = 43,
            clHouseBankAccounts = 44,
            clSalesTaxInvoice = 45,
            clPurchaseTaxInvoice = 46,
            clExternalBankOperationCodes = 47,
            clInternalBankOperationCodes = 48,
            clOutgoingExciseInvoice = 49,
            clIncomingExciseInvoice = 50,
            clInventoryTransferRequests = 51,
            clPurchaseQuotation = 52,
            clUDO = 100,
        }

        export enum BankStatementsServiceDataInterfaces {
            bssBankStatements = 0,
            bssBankStatement = 1,
            bssBankStatementsParams = 2,
            bssBankStatementParams = 3,
            bssBankStatementsFilter = 4,
        }

        export enum AcquisitionProRataTypeEnum {
            aprtExactlyDailyBase = 0,
            aprtFirstDayOfCurrentPeriod = 1,
            aprtFirstDayOfNextPeriod = 2,
        }

        export enum BranchesServiceDataInterfaces {
            bsBranch = 0,
            bsBranchesParams = 1,
            bsBranchParams = 2,
        }

        export enum CountingDocumentStatusEnum {
            cdsOpen = 0,
            cdsClosed = 1,
        }

        export enum MaterialRevaluationSNBServiceDataInterfaces {
            mrsnbsMaterialRevaluationSNBParam = 0,
            mrsnbsMaterialRevaluationSNBParamsCollection = 1,
            mrsnbsMaterialRevaluationSNBParams = 2,
        }

        export enum TaxCodeDeterminationTCDTypeEnum {
            tcdtMaterialItem = 0,
            tcdtServiceItem = 1,
            tcdtServiceDocument = 2,
            tcdtWithholdingTax = 3,
        }

        export enum InventoryPostingsServiceDataInterfaces {
            ipsInventoryPosting = 0,
            ipsInventoryPostingParamsCollection = 1,
            ipsInventoryPostingParams = 2,
            ipsInventoryPostingCopyOption = 3,
        }

        export enum TrackingNotesServiceDataInterfaces {
            tnsTrackingNote = 0,
            tnsTrackingNoteParamsCollection = 1,
            tnsTrackingNoteParams = 2,
        }

        export enum AlertManagementServiceDataInterfaces {
            atsdiAlertManagement = 0,
            atsdiAlertManagementParams = 1,
        }

        export enum LegalDataLineTypeEnum {
            ldlt_DocumentTotal = 0,
            ldlt_TaxPerLine = 1,
            ldlt_TotalTax = 2,
        }

        export enum BoCurrencySources {
            bocs_LocalCurrency = 0,
            bocs_SystemCurrency = 1,
            bocs_BPCurrency = 2,
        }

        export enum GTIsServiceDataInterfaces {
            gtisGTIParamsCollection = 0,
            gtisGTIParams = 1,
        }

        export enum BlanketAgreementStatusEnum {
            asApproved = 0,
            asOnHold = 1,
            asDraft = 2,
            asTerminated = 3,
        }

        export enum BinRestrictUoMEnum {
            bruNone = 0,
            bruSpecificUoM = 1,
            bruSingleUoMOnly = 2,
            bruSpecificUoMGroup = 3,
            bruSingleUoMGroupOnly = 4,
        }

        export enum PMDocumentTypeEnum {
            pmdt_ManualJournalEntry = 30,
            pmdt_SalesQuotation = 23,
            pmdt_SalesOrder = 17,
            pmdt_Delivery = 15,
            pmdt_Return = 16,
            pmdt_ARDownPaymentRequest = 203002,
            pmdt_ARDownPaymentInvoice = 203,
            pmdt_ARInvoice = 13,
            pmdt_ARCreditMemo = 14,
            pmdt_ARReserveInvoice = 13002,
            pmdt_PurchaseQuotation = 540000006,
            pmdt_PurchaseOrder = 22,
            pmdt_GoodsReceiptPO = 20,
            pmdt_GoodsReturn = 21,
            pmdt_APDownPaymentRequest = 204002,
            pmdt_APDownPaymentInvoice = 204,
            pmdt_APInvoice = 18,
            pmdt_APCreditMemo = 19,
            pmdt_APReserveInvoice = 18002,
            pmdt_ServiceCall = 191,
            pmdt_GoodsReceipt = 59,
            pmdt_GoodsIssue = 60,
            pmdt_ARCorrectionInvoice = 165,
            pmdt_ARCorrectionInvoiceReversal = 166,
            pmdt_APCorrectionInvoice = 163,
            pmdt_APCorrectionInvoiceReversal = 164,
        }

        export enum NFModelsServiceDataInterfaces {
            nfmsNFModel = 0,
            nfmsNFModelsParams = 1,
            nfmsNFModelParams = 2,
        }

        export enum ApprovalTemplateOperationTypeEnum {
            opcodeUndefined = 0,
            opcodeGreaterThan = 1,
            opcodeGreaterOrEqual = 2,
            opcodeLessThan = 3,
            opcodeLessOrEqual = 4,
            opcodeEqual = 5,
            opcodeDoesNotEqual = 6,
            opcodeInRange = 7,
            opcodeNotInRange = 8,
        }

        export enum AttributeGroupFieldTypeEnum {
            agftText = 0,
            agftNumeric = 1,
            agftDate = 2,
            agftAmount = 3,
            agftPrice = 4,
            agftQuantity = 5,
        }

        export enum Report349CodeListEnum {
            r349cEmpty = 0,
            r349cE = 1,
            r349cA = 2,
            r349cT = 3,
            r349cS = 4,
            r349cI = 5,
            r349cM = 6,
            r349cH = 7,
        }

        export enum DepreciationCalculationBaseEnum {
            dcbAcquisitionValue = 0,
            dcbNetBookValue = 1,
        }

        export enum EmployeeRolesSetupServiceDataInterfaces {
            erssEmployeeRoleSetup = 0,
            erssEmployeeRoleSetupParamsCollection = 1,
            erssEmployeeRoleSetupParams = 2,
        }

        export enum BoServicePaymentMethods {
            spmAcreditedToBankAccount = 0,
            spmBankTransfer = 1,
            spmOther = 2,
        }

        export enum SerialNumberDetailsServiceDataInterfaces {
            sndsSerialNumberDetail = 0,
            sndsSerialNumberDetailParams = 1,
        }

        export enum DiscountGroupTypeEnum {
            dgt_AllBPs = 0,
            dgt_CustomerGroup = 1,
            dgt_VendorGroup = 2,
            dgt_SpecificBP = 3,
        }

        export enum BoTCDConditionEnum {
            tcdcNone = 0,
            tcdcFederalTaxID = 1,
            tcdcShipToAddress = 2,
            tcdcShipToStreePOBox = 3,
            tcdcShipToCity = 4,
            tcdcShipToZipCode = 5,
            tcdcShipToCounty = 6,
            tcdcShipToState = 7,
            tcdcShipToCountry = 8,
            tcdcItem = 9,
            tcdcItemGroup = 10,
            tcdcBusinessPartner = 11,
            tcdcCustomerGroup = 12,
            tcdcVendorGroup = 13,
            tcdcWarehouse = 14,
            tcdcGLAccount = 15,
            tcdcCustomerEquTax = 16,
            tcdcTaxStatus = 17,
            tcdcFreight = 18,
            tcdcUDF = 19,
            tcdcBranchNumber = 20,
        }

        export enum ForecastViewTypeEnum {
            fvtDaily = 0,
            fvtWeekly = 1,
            fvtMonthly = 2,
        }

        export enum BoStatus {
            bost_Open = 0,
            bost_Close = 1,
            bost_Paid = 2,
            bost_Delivered = 3,
        }

        export enum BoSvcExpPartTypes {
            sep_Inventory = 0,
            sep_NonInventory = 1,
        }

        export enum BoUserGroup {
            ug_Regular = 0,
            ug_Deleted = 1,
        }

        export enum RepeatOptionEnum {
            roByDate = 0,
            roByWeekDay = 1,
        }

        export enum BoFldSubTypes {
            st_None = 0,
            st_Address = 63,
            st_Phone = 35,
            st_Time = 84,
            st_Rate = 82,
            st_Sum = 83,
            st_Price = 80,
            st_Quantity = 81,
            st_Percentage = 37,
            st_Measurement = 77,
            st_Link = 66,
            st_Image = 73,
        }

        export enum WithholdingTaxCodeCategoryEnum {
            wtcc_Invoice = 0,
            wtcc_Payment = 1,
        }

        export enum RetirementProRataTypeEnum {
            rprtExactlyDailyBase = 0,
            rprtLastDayOfPriorPeriod = 1,
            rprtLastDayOfCurrentPeriod = 2,
        }

        export enum OperationCodeTypeEnum {
            octSummaryInvoicesEntry = 0,
            octSummaryReceiptsEntry = 1,
            octInvoicewithSeveralVATRates = 2,
            octCorrectionInvoice = 3,
            octDueVATPendingInvoiceIssuance = 4,
            octExpensesIncurredbyTravelAgentforCustomers = 5,
            octSpecialRegulationforVATGroup = 6,
            octSpecialRegulationforGoldInvestment = 7,
            octReverseChargeProcedure = 8,
            octUnsummarizedReceipts = 9,
            octIdentificationofErrorTransactions = 10,
            octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation = 11,
            octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties = 12,
            octBusinessOfficeRental = 13,
            octSubsidies = 14,
            octIncomingPaymentsforIndustrialandIntellectualPropertyRights = 15,
            octInsuranceTransactions = 16,
            octPurchasesfromTravelAgencies = 17,
            octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla = 18,
        }

        export enum PaymentRunExportRowTypeEnum {
            prtGeneral = 0,
            prtPayOnAccount = 1,
            prtPayToAccount = 2,
        }

        export enum FAAccountDeterminationsServiceDataInterfaces {
            faadsFAAccountDetermination = 0,
            faadsFAAccountDeterminationParamsCollection = 1,
            faadsFAAccountDeterminationParams = 2,
        }

        export enum LandedCostBaseDocumentTypeEnum {
            asDefault = 0,
            asEmpty = 1,
            asGoodsReceiptPO = 2,
            asLandedCosts = 3,
            asPurchaseInvoice = 4,
        }

        export enum BoIssueMethod {
            im_Backflush = 0,
            im_Manual = 1,
        }

        export enum EmployeePaymentMethodEnum {
            epm_None = 0,
            epm_BankTransfer = 1,
        }

        export enum BoBusinessAreaEnum {
            baSales = 0,
            baPurchase = 1,
            baSalesAndPurchase = 2,
        }

        export enum BoExtensionErrorActionEnum {
            eeaStop = 0,
            eeaIgnore = 1,
            eeaPrompt = 2,
        }

        export enum BrazilIndexerTypes {
            bitUnknown = 0,
            bitNumeric = 1,
            bitString = 2,
            bitMulti = 3,
        }

        export enum BoRcptCredTypes {
            cr_Regular = 0,
            cr_Telephone = 1,
            cr_InternetTransaction = 2,
        }

        export enum BoAdEpnsTaxTypes {
            aext_NormalTax = 0,
            aext_NoTax = 1,
            aext_UseTax = 2,
        }

        export enum PriceProceedMethodEnum {
            ppmRemove = 0,
            ppmUpdate = 1,
            ppmKeepCorresponding = 2,
            ppmKeepAll = 3,
        }

        export enum SPEDContabilQualificationCodeEnum {
            spedNA = 0,
            spedDiretor = 1,
            spedConselheiroDeAdministracao = 2,
            spedAdministrador = 3,
            spedAdministradorDoGrupo = 4,
            spedAdministradorDeSociedadeFiliada = 5,
            spedAdministradorJudicialPessoaFisica = 6,
            spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel = 7,
            spedAdministradorJudicialGestor = 8,
            spedGestorJudicial = 9,
            spedProcurador = 10,
            spedInventariante = 11,
            spedLiquidante = 12,
            spedInterventor = 13,
            spedEmpresario = 14,
            spedContador = 15,
            spedOutros = 16,
        }

        export enum LegalDataServiceDataInterfaces {
            ldsLegalData = 0,
            ldsLegalDataParamsCollection = 1,
            ldsLegalDataParams = 2,
        }

        export enum RecurrenceDayOfWeekEnum {
            rdowDay = 0,
            rdowWeekDay = 1,
            rdowWeekendDay = 2,
            rdowSun = 3,
            rdowMon = 4,
            rdowTue = 5,
            rdowWed = 6,
            rdowThu = 7,
            rdowFri = 8,
            rdowSat = 9,
        }

        export enum BoSortTypeEnum {
            rlstAlpha = 0,
            rlstNumeric = 1,
            rlstMoney = 2,
            rlstDate = 3,
        }

        export enum LogonMethodEnum {
            lmBOneIntegrationFramework = 0,
            lmStandardLogon = 1,
            lmNoControl = 1,
        }

        export enum InvBaseDocTypeEnum {
            Default = 0,
            Empty = 1,
            PurchaseDeliveryNotes = 2,
            InventoryGeneralEntry = 3,
            WarehouseTransfers = 4,
            InventoryTransferRequest = 5,
        }

        export enum BusinessPartnersServiceDataInterfaces {
            bpsdiOpenningBalanceAccount = 0,
            bpsdiBPCodes = 1,
        }

        export enum TaxReportFilterApArDocumentType {
            trfadt_APDocuments = 0,
            trfadt_ARDocuments = 1,
        }

        export enum BoFatherCardTypes {
            cPayments_sum = 0,
            cDelivery_sum = 1,
        }

        export enum ResourceIssueMethodEnum {
            rimBackflush = 0,
            rimManual = 1,
        }

        export enum BoSalaryCostUnits {
            scu_Hour = 0,
            scu_Day = 1,
            scu_Week = 2,
            scu_Month = 3,
            scu_Year = 4,
            scu_Semimonthly = 5,
            scu_Biweekly = 6,
        }

        export enum TaxInvoiceReportNTSApprovedEnum {
            NotApproved = 0,
            Approved = 1,
        }

        export enum RecordsetXMLModeEnum {
            rxmData = 0,
            rxmDataWithPrimaryKeys = 1,
            rxmOnlyPrimaryKeys = 2,
        }

        export enum ServiceGroupsServiceDataInterfaces {
            sgsServiceGroup = 0,
            sgsServiceGroupsParams = 1,
            sgsServiceGroupParams = 2,
        }

        export enum BoDurations {
            du_Minuts = 0,
            du_Hours = 1,
            du_Days = 2,
        }

        export enum BoXmlExportTypes {
            xet_AllNodes = 0,
            xet_ValidNodesOnly = 1,
            xet_NodesAsProperties = 2,
            xet_ExportImportMode = 3,
        }

        export enum BoDueDateEnum {
            boddDateOfPaymentRun = 0,
            boddDueDateOfInvoice = 1,
            boddPaymentTerms = 2,
        }

        export enum TargetGroupTypeEnum {
            tgtCustomer = 0,
            tgtVendor = 1,
        }

        export enum ReceivingUpToMethodEnum {
            rutmMaximumQty = 0,
            rutmMaximumWeight = 1,
            rutmBothMaxQtyAndWeight = 2,
        }

        export enum DownPaymentTypeEnum {
            dptRequest = 0,
            dptInvoice = 1,
        }

        export enum AssetDepreciationGroupsServiceDataInterfaces {
            adgsAssetDepreciationGroup = 0,
            adgsAssetDepreciationGroupParamsCollection = 1,
            adgsAssetDepreciationGroupParams = 2,
        }

        export enum ResourceTypeEnum {
            rtMachine = 0,
            rtLabor = 1,
            rtOther = 2,
        }

        export enum BoDocWhsUpdateTypes {
            dwh_No = 0,
            dwh_OrdersFromVendors = 1,
            dwh_CustomerOrders = 2,
            dwh_Consignment = 3,
            dwh_Stock = 4,
        }

        export enum DistributionRulesServiceDataInterfaces {
            drsDistributionRule = 0,
            drsDistributionRulesParams = 1,
            drsDistributionRuleParams = 2,
        }

        export enum LandedCostsServiceDataInterfaces {
            lcsLandedCost = 0,
            lcsLandedCostsParams = 1,
            lcsLandedCostParams = 2,
        }

        export enum BoYesNoEnum {
            tNO = 0,
            tYES = 1,
        }

        export enum SubsequentAcquisitionPeriodControlEnum {
            sapcProRataTemporis = 0,
            sapcHalfYearConvention = 1,
            sapcFullYear = 2,
        }

        export enum TargetGroupsDetailStatusEnum {
            tdsActive = 0,
            tdsInactive = 1,
        }

        export enum LineTypeEnum {
            ltDocument = 0,
            ltRounding = 1,
            ltVat = 2,
        }

        export enum RiskLevelTypeEnum {
            rlt_Low = 0,
            rlt_Medium = 1,
            rlt_High = 2,
        }

        export enum BoStckTrnDir {
            bos_TransferToTechnician = 0,
            bos_TransferFromTechnician = 1,
        }

        export enum ValueMappingServiceDataInterfaces {
            vmsVM_B1ValuesCollection = 0,
            vmsVM_B1ValuesData = 1,
            vmsVM_ThirdPartyValuesCollection = 2,
            vmsVM_ThirdPartyValuesData = 3,
            vmsValueMappingParams = 4,
        }

        export enum CallMessageStatusEnum {
            cmsUnread = 0,
            cmsRead = 1,
        }

        export enum EmployeeStatusServiceDataInterfaces {
            essEmployeeStatus = 0,
            essEmployeeStatusParamsCollection = 1,
            essEmployeeStatusParams = 2,
        }

        export enum IssuePrimarilyByEnum {
            ipbSerialAndBatchNumbers = 0,
            ipbBinLocations = 1,
        }

        export enum BrazilNumericIndexersServiceDataInterfaces {
            bnisBrazilNumericIndexer = 0,
            bnisBrazilNumericIndexersParams = 1,
            bnisBrazilNumericIndexerParams = 2,
        }

        export enum SpecialDepreciationMaximumFlagEnum {
            spmfPercentage = 0,
            spmfAmount = 1,
        }

        export enum AccountsServiceDataInterfaces {
            asdiOpenningBalanceAccount = 0,
            asdiGLAccounts = 1,
        }

        export enum DimensionsServiceDataInterfaces {
            dsDimension = 0,
            dsDimensionsParams = 1,
            dsDimensionParams = 2,
        }

        export enum RoundingContextEnum {
            rcSum = 7,
            rcPrice = 8,
            rcRate = 9,
            rcQuantity = 10,
            rcMeasure = 11,
            rcPercent = 12,
            rcTax = 13,
            rcTaxPerGroup = 14,
            rcBudgetSum = 16,
            rcPriceListSum = 17,
            rcRealAmountInPayment = 18,
            rcStockSumRoundUp = 19,
            rcDocHeaderTotal = 20,
            rcVatReportAmount = 21,
            rcLineGrossTotal = 22,
            rcExpenseTotal = 23,
            rcWTax = 24,
            rcBASCode = 25,
            rcTaxForPrice = 26,
        }

        export enum TaxCalcSysEnum {
            PreconfiguredFormulaWithJurisdictionSupport = 0,
            UserDefinedFormula = 1,
            PreconfiguredFormula = 2,
        }

        export enum ResidenceNumberTypeEnum {
            rntSpanishFiscalID = 0,
            rntVATRegistrationNumber = 1,
            rntPassport = 2,
            rntFiscalIDIssuedbytheResidenceCountry = 3,
            rntCertificateofFiscalResidence = 4,
            rntOtherDocument = 5,
        }

        export enum EmployeePositionServiceDataInterfaces {
            epsEmployeePosition = 0,
            epsEmployeePositionParamsCollection = 1,
            epsEmployeePositionParams = 2,
        }

        export enum BoDataSourceEnum {
            rldsFreeText = 0,
            rldsSystemVariable = 1,
            rldsDatabase = 2,
            rldsFormula = 3,
        }

        export enum ExemptionMaxAmountValidationTypeEnum {
            emaIndividual = 0,
            emaAccumulated = 1,
        }

        export enum FreightTypeEnum {
            ftShipping = 0,
            ftInsurance = 1,
            ftOther = 2,
        }

        export enum BoSoOsStatus {
            sos_Open = 0,
            sos_Missed = 1,
            sos_Sold = 2,
        }

        export enum CounterTypeEnum {
            ctUser = 0,
            ctEmployee = 1,
        }

        export enum AlertManagementDocumentEnum {
            atd_NOB = 0,
            atd_Invoices = 1,
            atd_RevertInvoice = 2,
            atd_DeliveryNotes = 3,
            atd_Returns = 4,
            atd_Orders = 5,
            atd_PurchaseInvoices = 6,
            atd_PurchaseDeliveryNotes = 7,
            atd_PurchaseOrders = 8,
            atd_Quotations = 9,
            atd_IncomingPayments = 10,
            atd_JournalEntries = 11,
            atd_OutgoingPayments = 12,
            atd_ChecksForPayment = 13,
            atd_CorrectionInvoice = 14,
            atd_DownPaymentIncoming = 15,
            atd_DownPaymentOutgoing = 16,
        }

        export enum AlternativeItemsServiceDataInterfaces {
            aisOriginalItem = 0,
            aisOriginalItemParams = 1,
        }

        export enum TargetGroupsServiceDataInterfaces {
            tgsTargetGroup = 0,
            tgsTargetGroupsParams = 1,
            tgsTargetGroupParams = 2,
        }

        export enum SalesOpportunityCompetitorsSetupServiceDataInterfaces {
            socssSalesOpportunityCompetitorSetup = 0,
            socssSalesOpportunityCompetitorSetupParamsCollection = 1,
            socssSalesOpportunityCompetitorSetupParams = 2,
        }

        export enum GLAccountAdvancedRulesServiceDataInterfaces {
            glaarsGLAccountAdvancedRule = 0,
            glaarsGLAccountAdvancedRuleParamsCollection = 1,
            glaarsGLAccountAdvancedRuleParams = 2,
        }

        export enum WorkflowTaskServiceDataInterfaces {
            wtsWorkflowTaskCompleteParams = 0,
            wtsWorkflowApprovalTaskListParams = 1,
        }

        export enum BlanketAgreementDatePeriodsEnum {
            Daily = 0,
            Weekly = 1,
            Monthly = 2,
            Quarterly = 3,
            Semiannually = 4,
            Annually = 5,
            OneTime = 6,
        }

        export enum ViewStyleTypeEnum {
            vstPage = 0,
            vstFullScreen = 1,
            vstLandscape = 1,
        }

        export enum BoInventorySystem {
            bis_MovingAverage = 0,
            bis_Standard = 1,
            bis_FIFO = 2,
            bis_SNB = 3,
        }

        export enum BoBOTToStatus {
            btts_Canceled = 0,
            btts_Generated = 1,
            btts_Deposit = 2,
            btts_Paid = 3,
            btts_Failed = 4,
            btts_Closed = 5,
        }

        export enum BoRoundingRule {
            borrRoundDown = 0,
            borrRoundUp = 1,
            borrRoundOff = 2,
        }

        export enum BinLocationFieldTypeEnum {
            blftWarehouseSublevel = 0,
            blftBinLocationAttribute = 1,
        }

        export enum BoSvcContractStatus {
            scs_Approved = 0,
            scs_Frozen = 1,
            scs_Draft = 2,
            scs_Terminated = 3,
        }

        export enum TransferSourcePeriodControlEnum {
            tspcProRataTemporis = 0,
        }

        export enum DocumentDeliveryTypeEnum {
            ddtNoneSelected = 0,
            ddtCreateOnlineDocument = 1,
            ddtPostToAribaNetwork = 2,
        }

        export enum BusinessPartnerPropertiesServiceDataInterfaces {
            bppsBusinessPartnerProperty = 0,
            bppsBusinessPartnerPropertiesParams = 1,
            bppsBusinessPartnerPropertyParams = 2,
        }

        export enum ActivitiesServiceDataInterfaces {
            asActivity = 0,
            asActivitiesParams = 1,
            asActivityParams = 2,
            asActivityInstancesParams = 3,
            asActivityInstanceParams = 4,
            asActivityInstancesListParams = 5,
        }

        export enum EcmActionPeriodTypeEnum {
            aptYear = 1,
            aptQuarter = 2,
            aptMonth = 3,
            aptDateRange = 4,
        }

        export enum BoOpenIncPayment {
            oip_No = 0,
            oip_Cash = 1,
            oip_Checks = 2,
            oip_Credit = 3,
            oip_BankTransfer = 4,
        }

        export enum SalesOpportunityInterestsSetupServiceDataInterfaces {
            soissSalesOpportunityInterestSetup = 0,
            soissSalesOpportunityInterestSetupParamsCollection = 1,
            soissSalesOpportunityInterestSetupParams = 2,
        }

        export enum BoBOETypes {
            Incoming = 0,
            Outgoing = 1,
        }

        export enum BoAccountTypes {
            at_Revenues = 0,
            at_Expenses = 1,
            at_Other = 2,
        }

        export enum StatesServiceDataInterfaces {
            ssState = 0,
            ssStatesParams = 1,
            ssStateParams = 2,
        }

        export enum TransTypesEnum {
            ttAllTransactions = 0,
            ttOpeningBalance = 1,
            ttClosingBalance = 2,
            ttARInvoice = 3,
            ttARCredItnote = 4,
            ttDelivery = 5,
            ttReturn = 6,
            ttAPInvoice = 7,
            ttAPCreditNote = 8,
            ttPurchaseDeliveryNote = 9,
            ttPurchaseReturn = 10,
            ttReceipt = 11,
            ttDeposit = 12,
            ttJournalEntry = 13,
            ttVendorPayment = 14,
            ttChequesForPayment = 15,
            ttStockList = 16,
            ttGeneralReceiptToStock = 17,
            ttGeneralReleaseFromStock = 18,
            ttTransferBetweenWarehouses = 19,
            ttWorkInstructions = 20,
            ttLandedCosts = 21,
            ttDeferredDeposit = 22,
            ttCorrectionInvoice = 23,
            ttInventoryValuation = 24,
            ttAPCorrectionInvoice = 25,
            ttAPCorrectionInvoiceReversal = 26,
            ttARCorrectionInvoice = 27,
            ttARCorrectionInvoiceReversal = 28,
            ttBoETransaction = 29,
            ttProductionOrder = 30,
            ttDownPayment = 31,
            ttPurchaseDownPayment = 32,
            ttInternalReconciliation = 33,
        }

        export enum CountriesServiceDataInterfaces {
            csCountry = 0,
            csCountriesParams = 1,
            csCountryParams = 2,
        }

        export enum BoMsgRcpTypes {
            rt_RandomUser = -1,
            rt_InternalUser = 12,
            rt_ContactPerson = 11,
        }

        export enum BoBpsDocTypes {
            bpdt_PaymentReference = 0,
            bpdt_ISR = 1,
            bpdt_DocNum = 2,
        }

        export enum AreaTypeEnum {
            atPostingtoGL = 0,
            atAdditionalArea = 1,
            atDerivedArea = 2,
        }

        export enum BoServiceTypes {
            bst_Regular = 0,
            bst_Warranty = 1,
        }

        export enum BoProductionOrderTypeEnum {
            bopotStandard = 0,
            bopotSpecial = 1,
            bopotDisassembly = 2,
        }

        export enum StageDepTypeEnum {
            sdt_Project = 0,
            sdt_Subproject = 1,
        }

        export enum PredefinedTextsServiceDataInterfaces {
            ptsPredefinedText = 0,
            ptsPredefinedTextsParams = 1,
            ptsPredefinedTextParams = 2,
        }

        export enum BoClosingDateProcedureBaseDateEnum {
            bocpdbld_PostingDate = 0,
            bocpdbld_BaseSystemDate = 1,
        }

        export enum ResourceCapacitySourceTypeEnum {
            rcstNone = 0,
            rcstProductionOrder = 202,
            rcstIssueForProduction = 60,
            rcstReceiptFromProduction = 59,
        }

        export enum BoDocItemType {
            dit_Item = 0,
            dit_Resource = 1,
        }

        export enum BoResolutionUnits {
            rsu_Days = 0,
            rsu_Hours = 1,
        }

        export enum BoAddressType {
            bo_ShipTo = 0,
            bo_BillTo = 1,
        }

        export enum AccrualTypesServiceDataInterfaces {
            atsAccrualType = 0,
            atsAccrualTypesParams = 1,
            atsAccrualTypeParams = 2,
        }

        export enum CampaignResponseTypeServiceDataInterfaces {
            crtsCampaignResponseType = 0,
            crtsCampaignResponseTypeParamsCollection = 1,
            crtsCampaignResponseTypeParams = 2,
        }

        export enum AlertManagementTypeEnum {
            att_User = 0,
            att_System = 1,
        }

        export enum PaymentInvoiceTypeEnum {
            itARInvoice = 0,
            itARDownPaymentInvoice = 1,
        }

        export enum TaxReportFilterDocumentType {
            trfdt_ARInvoices = 0,
            trfdt_ARCreditMemos = 1,
            trfdt_APInvoices = 2,
            trfdt_APCreditMemos = 3,
            trfdt_IncomingPayments = 4,
            trfdt_JournalEntries = 5,
            trfdt_OutgoingPayments = 6,
            trfdt_ChecksforPayment = 7,
            trfdt_InventoryTransfers = 8,
            trfdt_ARDownPayment = 9,
            trfdt_APDownPayment = 10,
        }

        export enum AssetGroupsServiceDataInterfaces {
            agsAssetGroup = 0,
            agsAssetGroupParamsCollection = 1,
            agsAssetGroupParams = 2,
        }

        export enum ServiceCallStatusServiceDataInterfaces {
            scssServiceCallStatus = 0,
            scssServiceCallStatusParamsCollection = 1,
            scssServiceCallStatusParams = 2,
        }

        export enum BrazilBeverageIndexersServiceDataInterfaces {
            bbisBrazilBeverageIndexer = 0,
            bbisBrazilBeverageIndexersParams = 1,
            bbisBrazilBeverageIndexerParams = 2,
        }

        export enum BoUniqueSerialNumber {
            usn_None = 0,
            usn_MfrSerialNumber = 1,
            usn_SerialNumber = 2,
            usn_LotNumber = 3,
        }

        export enum BoLineBreakEnum {
            rlsAllowOverflow = 0,
            rlsAdjustToCell = 1,
            rlsDivideIntoRows = 2,
        }

        export enum TaxCodeDeterminationTCDByUsageTypeEnum {
            tcdbutDefaultSales = 0,
            tcdbutDefaultPurchase = 1,
            tcdbutLine = 2,
        }

        export enum ThreatLevelEnum {
            tlLow = 0,
            tlMedium = 1,
            tlHigh = 2,
        }

        export enum DiscountGroupBaseObjectEnum {
            dgboNone = 0,
            dgboItemGroups = 1,
            dgboItemProperties = 2,
            dgboManufacturer = 3,
            dgboItems = 4,
        }

        export enum ServiceCallSolutionStatusServiceDataInterfaces {
            scsssServiceCallSolutionStatus = 0,
            scsssServiceCallSolutionStatusParamsCollection = 1,
            scsssServiceCallSolutionStatusParams = 2,
        }

        export enum ExtendedTranslationsServiceDataInterfaces {
            etsExtendedTranslation = 0,
            etsExtendedTranslationsParams = 1,
            etsExtendedTranslationParams = 2,
        }

        export enum TransactionCodesServiceDataInterfaces {
            tcsTransactionCode = 0,
            tcsTransactionCodeParamsCollection = 1,
            tcsTransactionCodeParams = 2,
        }

        export enum DunningLetterTypeEnum {
            dltDunningLetter1 = 0,
            dltDunningLetter2 = 1,
            dltDunningLetter3 = 2,
            dltDunningLetter4 = 3,
            dltDunningLetter5 = 4,
            dltDunningLetter6 = 5,
            dltDunningLetter7 = 6,
            dltDunningLetter8 = 7,
            dltDunningLetter9 = 8,
            dltDunningLetter10 = 9,
            dltDunningALL = 10,
        }

        export enum ValueMappingCommunicationServiceDataInterfaces {
            vmcsValueMappingCommunicationData = 0,
            vmcsValueMappingCommunicationParams = 1,
        }

        export enum BoObjectTypes {
            oChartOfAccounts = 1,
            oBusinessPartners = 2,
            oBanks = 3,
            oItems = 4,
            oVatGroups = 5,
            oPriceLists = 6,
            oSpecialPrices = 7,
            oItemProperties = 8,
            oUsers = 12,
            Document_oInvoices = 13,
            Document_oCreditNotes = 14,
            Document_oDeliveryNotes = 15,
            Document_oReturns = 16,
            Document_oOrders = 17,
            Document_oPurchaseInvoices = 18,
            Document_oPurchaseCreditNotes = 19,
            Document_oPurchaseDeliveryNotes = 20,
            Document_oPurchaseReturns = 21,
            Document_oPurchaseOrders = 22,
            Document_oQuotations = 23,
            oIncomingPayments = 24,
            oJournalVouchers = 28,
            oJournalEntries = 30,
            oStockTakings = 31,
            oContacts = 33,
            oCreditCards = 36,
            oCurrencyCodes = 37,
            oPaymentTermsTypes = 40,
            oBankPages = 42,
            oManufacturers = 43,
            oVendorPayments = 46,
            oLandedCostsCodes = 48,
            oShippingTypes = 49,
            oLengthMeasures = 50,
            oWeightMeasures = 51,
            oItemGroups = 52,
            oSalesPersons = 53,
            oCustomsGroups = 56,
            oChecksforPayment = 57,
            Document_oInventoryGenEntry = 59,
            Document_oInventoryGenExit = 60,
            oWarehouses = 64,
            oCommissionGroups = 65,
            oProductTrees = 66,
            oStockTransfer = 67,
            oWorkOrders = 68,
            oCreditPaymentMethods = 70,
            oCreditCardPayments = 71,
            oAlternateCatNum = 73,
            oBudget = 77,
            oBudgetDistribution = 78,
            oMessages = 81,
            oBudgetScenarios = 91,
            oSalesOpportunities = 97,
            oUserDefaultGroups = 93,
            oSalesStages = 101,
            oActivityTypes = 103,
            oActivityLocations = 104,
            Document_oDrafts = 112,
            oDeductionTaxHierarchies = 116,
            oDeductionTaxGroups = 117,
            oAdditionalExpenses = 125,
            oSalesTaxAuthorities = 126,
            oSalesTaxAuthoritiesTypes = 127,
            oSalesTaxCodes = 128,
            oQueryCategories = 134,
            oFactoringIndicators = 138,
            Document_oPaymentsDrafts = 140,
            oAccountSegmentations = 142,
            oAccountSegmentationCategories = 143,
            oWarehouseLocations = 144,
            oForms1099 = 145,
            oInventoryCycles = 146,
            oWizardPaymentMethods = 147,
            oBPPriorities = 150,
            oDunningLetters = 151,
            oUserFields = 152,
            oUserTables = 153,
            oPickLists = 156,
            oPaymentRunExport = 158,
            oUserQueries = 160,
            oMaterialRevaluation = 162,
            Document_oCorrectionPurchaseInvoice = 163,
            Document_oCorrectionPurchaseInvoiceReversal = 164,
            Document_oCorrectionInvoice = 165,
            Document_oCorrectionInvoiceReversal = 166,
            oContractTemplates = 170,
            oEmployeesInfo = 171,
            oCustomerEquipmentCards = 176,
            oWithholdingTaxCodes = 178,
            oBillOfExchangeTransactions = 182,
            oKnowledgeBaseSolutions = 189,
            oServiceContracts = 190,
            oServiceCalls = 191,
            oUserKeys = 193,
            oQueue = 194,
            oSalesForecast = 198,
            oTerritories = 200,
            oIndustries = 201,
            oProductionOrders = 202,
            oPackagesTypes = 205,
            oUserObjectsMD = 206,
            oTeams = 211,
            oRelationships = 212,
            oUserPermissionTree = 214,
            oActivityStatus = 217,
            oChooseFromList = 218,
            oFormattedSearches = 219,
            oAttachments2 = 221,
            oUserLanguages = 223,
            oMultiLanguageTranslations = 224,
            oDynamicSystemStrings = 229,
            oHouseBankAccounts = 231,
            oBusinessPlaces = 247,
            oLocalEra = 250,
            Document_oSalesTaxInvoice = 280,
            Document_oPurchaseTaxInvoice = 281,
            BoRecordset = 300,
            BoRecordsetEx = 301,
            BoBridge = 305,
            oNotaFiscalUsage = 260,
            oNotaFiscalCFOP = 258,
            oNotaFiscalCST = 259,
            oClosingDateProcedure = 261,
            oBusinessPartnerGroups = 10,
            oBPFiscalRegistryID = 278,
            Document_oDownPayments = 203,
            Document_oPurchaseDownPayments = 204,
            Document_oStockTransferDraft = 1179,
            Document_oPurchaseQuotations = 540000006,
            StockTransfer_oInventoryTransferRequest = 1250000001,
            Document_oPurchaseRequest = 1470000113,
        }

        export enum CustomsDeclarationServiceDataInterfaces {
            cdsCustomsDeclaration = 0,
            cdsCustomsDeclarationParams = 1,
        }

        export enum ServiceCallProblemTypesServiceDataInterfaces {
            scptsServiceCallProblemType = 0,
            scptsServiceCallProblemTypeParamsCollection = 1,
            scptsServiceCallProblemTypeParams = 2,
        }

        export enum BoGSTRegnTypeEnum {
            gstRegularTDSISD = 1,
            gstCasualTaxablePerson = 2,
            gstCompositionLevy = 3,
            gstGoverDepartPSU = 4,
            gstNonResidentTaxablePerson = 5,
            gstUNAgencyEmbassy = 6,
        }

        export enum AutomaticPostingEnum {
            apNo = 0,
            apInterestAndFee = 1,
            apInterestOnly = 2,
            apFeeOnly = 3,
        }

        export enum BoProductionOrderStatusEnum {
            boposPlanned = 0,
            boposReleased = 1,
            boposClosed = 2,
            boposCancelled = 3,
        }

        export enum BoGridTypeEnum {
            gtCombination = 0,
            gtContinuousLine = 1,
            gtBrokenLine = 2,
            gtDots = 3,
        }

        export enum AutoAllocOnReceiptMethodEnum {
            aaormDefaultBin = 0,
            aaormLastBinReceivedItem = 1,
            aaormItemCurrentBins = 2,
            aaormItemCurrentAndHistoricalBins = 3,
        }

        export enum ContractSequenceEnum {
            cs_Monthly = 0,
            cs_Quarterly = 1,
            cs_SemiAnnually = 2,
            cs_Yearly = 3,
        }

        export enum BoAPARDocumentTypes {
            bodt_Invoice = 13,
            bodt_CreditNote = 14,
            bodt_DeliveryNote = 15,
            bodt_Return = 16,
            bodt_Order = 17,
            bodt_PurchaseInvoice = 18,
            bodt_PurchaseCreditNote = 19,
            bodt_PurchaseDeliveryNote = 20,
            bodt_PurchaseReturn = 21,
            bodt_PurchaseOrder = 22,
            bodt_Quotation = 23,
            bodt_CorrectionAPInvoice = 163,
            bodt_CorrectionARInvoice = 165,
            bodt_PurchaseQutation = 540000006,
        }

        export enum DepositsServiceDataInterfaces {
            dsDeposit = 0,
            dsDepositsParams = 1,
            dsDepositParams = 2,
            dsCancelCheckRowParams = 3,
        }

        export enum BOELinesServiceDataInterfaces {
            boelsBOELinesParams = 0,
            boelsBOELineParams = 1,
        }

        export enum BoSvcEpxDocTypes {
            edt_Invoice = 13,
            edt_Delivery = 15,
            edt_Return = 16,
            edt_StockTransfer = 67,
            edt_CreditMemo = 14,
            edt_Order = 17,
            edt_Quotation = 23,
            edt_AP_Invoice = 18,
            edt_AP_CreditMemo = 19,
            edt_GoodsReceipt = 20,
            edt_GoodsReturn = 21,
            edt_PurchaseOrder = 22,
            edt_PurchaseQuotation = 540000006,
            edt_AR_CorrectionInvoice = 165,
            edt_AP_CorrectionInvoice = 163,
        }

        export enum BoBoeStatus {
            boes_Created = 0,
            boes_Sent = 1,
            boes_Deposited = 2,
            boes_Paid = 3,
            boes_Cancelled = 4,
            boes_Closed = 5,
            boes_Failed = 6,
        }

        export enum WithholdingTypeEnum {
            wt_VatWithholding = 0,
            wt_IncomeTaxWithholding = 1,
        }

        export enum BoDepositCheckEnum {
            dtNo = 0,
            dcAsCash = 1,
            dtAsPostdated = 2,
        }

        export enum BoRcptTypes {
            rCustomer = 0,
            rAccount = 1,
            rSupplier = 2,
        }

        export enum RecurrencePatternEnum {
            rpNone = 0,
            rpDaily = 1,
            rpWeekly = 2,
            rpMonthly = 3,
            rpAnnually = 4,
        }

        export enum BrazilMultiIndexersServiceDataInterfaces {
            bmisBrazilMultiIndexer = 0,
            bmisBrazilMultiIndexersParams = 1,
            bmisBrazilMultiIndexerParams = 2,
        }

        export enum AssetTransactionTypeEnum {
            attBeginningOfYear = 0,
            attAcquistion = 1,
            attRetirement = 2,
            attTransfer = 3,
            attWriteUp = 4,
            attOrdinaryDepreciation = 5,
            attUplannedDepreciation = 6,
            attSpecialDepreciation = 7,
            attEndOfYear = 8,
        }

        export enum SalesOpportunityReasonsSetupServiceDataInterfaces {
            sorssSalesOpportunityReasonSetup = 0,
            sorssSalesOpportunityReasonSetupParamsCollection = 1,
            sorssSalesOpportunityReasonSetupParams = 2,
        }

        export enum ResourceCapacityRevertedTypeEnum {
            rcrtNone = 0,
            rcrtIssueForProduction = 60,
        }

        export enum NCMCodesSetupServiceDataInterfaces {
            ncmcssNCMCodeSetup = 0,
            ncmcssNCMCodeSetupParamsCollection = 1,
            ncmcssNCMCodeSetupParams = 2,
        }

        export enum SpecialDepreciationCalculationMethodEnum {
            spcmAdditional = 0,
            spcmAlternative = 1,
        }

        export enum InventoryAccountTypeEnum {
            iatExpenses = 0,
            iatRevenues = 1,
            iatExemptIncome = 2,
            iatInventory = 3,
            iatCost = 4,
            iatTransfer = 5,
            iatVarience = 6,
            iatPriceDifference = 7,
            iatNegativeInventoryAdjustment = 8,
            iatDecreasing = 9,
            iatIncreasing = 10,
            iatReturning = 11,
            iatEURevenues = 12,
            iatEUExpenses = 13,
            iatForeignRevenue = 14,
            iatForeignExpens = 15,
            iatPurchase = 16,
            iatPAReturn = 17,
            iatPurchaseOffset = 18,
            iatExchangeRateDifferences = 19,
            iatGoodsClearing = 20,
            iatGLDecrease = 21,
            iatGLIncrease = 22,
            iatWip = 23,
            iatWipVariance = 24,
            iatWipOffsetProfitAndLoss = 25,
            iatInventoryOffsetProfitAndLoss = 26,
            iatStockInflationAdjust = 27,
            iatStockInflationOffset = 28,
            iatCostInflation = 29,
            iatCostInflationOffset = 30,
            iatExpenseClearing = 31,
            iatExpenseOffsetting = 32,
            iatStockInTransit = 33,
            iatShippedGoods = 34,
            iatVATInRevenue = 35,
            iatSalesCredit = 36,
            iatPurchaseCredit = 37,
            iatExemptedCredits = 38,
            iatSalesCreditForeign = 39,
            iatForeignPurchaseCredit = 40,
            iatSalesCreditEU = 41,
            iatEUPurchaseCredit = 42,
            iatPurchaseBalance = 43,
            iatWHIncomingCenvat = 44,
            iatWHOutgoingCenvat = 45,
            iatFreeOfChargeSales = 46,
            iatFreeOfChargePurchase = 47,
        }

        export enum ResourceCapacityActionEnum {
            rcaUnknown = 0,
            rcaProductionOrderCreate = 1,
            rcaProductionOrderClose = 2,
            rcaProductionOrderReschedule = 3,
            rcaProductionOrderAddLine = 4,
            rcaProductionOrderDeleteLine = 5,
            rcaProductionOrderUpdateLine = 6,
            rcaIssueForProductionCreate = 7,
            rcaReceiptFromProductionCreate = 8,
        }

        export enum EcmActionStatusEnum {
            lasNew = 1,
            lasPending = 2,
            lasError = 3,
            lasOK = 4,
            lasSent = 5,
            lasDocError = 6,
            lasWaiting = 7,
            lasAuthorized = 8,
            lasInProcess = 9,
            lasRejected = 10,
            lasDenied = 11,
            lasCanceled = 12,
            lasAborted = 13,
            lasQueued = 14,
        }

        export enum BoBusinessPartnerGroupTypes {
            bbpgt_CustomerGroup = 0,
            bbpgt_VendorGroup = 1,
        }

        export enum BoPlanningSystem {
            bop_MRP = 0,
            bop_None = 1,
        }

        export enum DepreciationTypePoolsServiceDataInterfaces {
            dtpsDepreciationTypePool = 0,
            dtpsDepreciationTypePoolParamsCollection = 1,
            dtpsDepreciationTypePoolParams = 2,
        }

        export enum BoActivities {
            cn_Conversation = 0,
            cn_Meeting = 1,
            cn_Task = 2,
            cn_Other = 3,
            cn_Note = 4,
            cn_Campaign = 5,
        }

        export enum LicenseUpdateTypeEnum {
            ultAssign = 0,
            ultRemove = 1,
        }

        export enum TaxTypeBlackListEnum {
            ttblExcluded = 0,
            ttblTaxable = 1,
            ttblExempt = 2,
            ttblNotTaxable = 3,
            ttblNonSubject = 4,
        }

        export enum CampaignStatusEnum {
            csOpen = 0,
            csFinished = 1,
            csCanceled = 2,
        }

        export enum ResourcesServiceDataInterfaces {
            rsdiResource = 0,
            rsdiResourceParamsCollection = 1,
            rsdiResourceParams = 2,
        }

        export enum TaxCodeDeterminationsServiceDataInterfaces {
            tcdsTaxCodeDetermination = 0,
            tcdsTaxCodeDeterminationsParams = 1,
            tcdsTaxCodeDeterminationParams = 2,
        }

        export enum BoResponseUnit {
            boru_Hour = 0,
            boru_Day = 1,
        }

        export enum BoBaselineDate {
            bld_PostingDate = 0,
            bld_SystemDate = 1,
            bld_TaxDate = 2,
            bld_ClosingDate = 3,
        }

        export enum BoMRPComponentWarehouse {
            bomcw_BOM = 0,
            bomcw_Parent = 1,
        }

        export enum LineStatusTypeEnum {
            lst_Open = 0,
            lst_Closed = 1,
        }

        export enum BoCheckDepositTypeEnum {
            cdtCashChecks = 0,
            cdtPostdatedChecks = 1,
        }

        export enum MobileAddOnSettingServiceDataInterfaces {
            maossMobileAddOnSetting = 0,
            maossMobileAddOnSettingParamsCollection = 1,
            maossMobileAddOnSettingParams = 2,
        }

        export enum BoVerticalAlignmentEnum {
            rlvaTop = 0,
            rlvaBottom = 1,
            rlvaCentralized = 2,
        }

        export enum ElectronicCommunicationActionsServiceDataInterfaces {
            ecasEcmAction = 0,
            ecasEcmActionParams = 1,
            ecasEcmActionDocParams = 2,
            ecasEcmActionLog = 3,
            ecasEcmActionLogCollection = 4,
            ecasEcmActionLogParams = 5,
        }

        export enum CountingTypeEnum {
            ctSingleCounter = 0,
            ctMultipleCounters = 1,
        }

        export enum DepreciationMethodEnum {
            dmNoDepreciation = 0,
            dmStraightLine = 1,
            dmStraightLinePeriodControl = 2,
            dmDecliningBalance = 3,
            dmMultilevel = 4,
            dmImmediateWriteOff = 5,
            dmSpecialDepreciation = 6,
            dmManualDepreciation = 7,
            dmAccelerated = 8,
        }

        export enum BoDocumentTypes {
            dDocument_Items = 0,
            dDocument_Service = 1,
        }

        export enum CycleCountDeterminationsServiceDataInterfaces {
            ccdsCycleCountDetermination = 0,
            ccdsCycleCountDeterminationParamsCollection = 1,
            ccdsCycleCountDeterminationParams = 2,
        }

        export enum ServiceCallTypesServiceDataInterfaces {
            sctsServiceCallType = 0,
            sctsServiceCallTypeParamsCollection = 1,
            sctsServiceCallTypeParams = 2,
        }

        export enum StraightLineCalculationMethodEnum {
            slcmAuquisitionValueDividedByTotalUsefulLife = 0,
            slcmPercentageOfAcquisitionValue = 1,
            slcmNetBookValueDividedByRemainingLife = 2,
        }

        export enum BoBpAccountTypes {
            bpat_General = 0,
            bpat_DownPayment = 1,
            bpat_AssetsAccount = 2,
            bpat_Receivable = 3,
            bpat_Payable = 4,
            bpat_OnCollection = 5,
            bpat_Presentation = 6,
            bpat_AssetsPayable = 7,
            bpat_Discounted = 8,
            bpat_Unpaid = 9,
            bpat_OpenDebts = 10,
            bpat_Domestic = 11,
            bpat_Foreign = 12,
            bpat_CashDiscountInterim = 13,
            bpat_ExchangeRateInterim = 14,
        }

        export enum BoTaxPostAccEnum {
            tpa_Default = 0,
            tpa_SalesTaxAccount = 1,
            tpa_PurchaseTaxAccount = 2,
        }

        export enum BoRcptInvTypes {
            it_AllTransactions = -1,
            it_OpeningBalance = -2,
            it_ClosingBalance = -3,
            it_Invoice = 13,
            it_CredItnote = 14,
            it_TaxInvoice = 15,
            it_Return = 16,
            it_PurchaseInvoice = 18,
            it_PurchaseCreditNote = 19,
            it_PurchaseDeliveryNote = 20,
            it_PurchaseReturn = 21,
            it_Receipt = 24,
            it_Deposit = 25,
            it_JournalEntry = 30,
            it_PaymentAdvice = 46,
            it_ChequesForPayment = 57,
            it_StockReconciliations = 58,
            it_GeneralReceiptToStock = 59,
            it_GeneralReleaseFromStock = 60,
            it_TransferBetweenWarehouses = 67,
            it_WorkInstructions = 68,
            it_DeferredDeposit = 76,
            it_CorrectionInvoice = 132,
            it_APCorrectionInvoice = 163,
            it_ARCorrectionInvoice = 165,
            it_DownPayment = 203,
            it_PurchaseDownPayment = 204,
        }

    }
}
