"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SES = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const CloneReceiptRuleSetCommand_1 = require("./commands/CloneReceiptRuleSetCommand");
const CreateConfigurationSetCommand_1 = require("./commands/CreateConfigurationSetCommand");
const CreateConfigurationSetEventDestinationCommand_1 = require("./commands/CreateConfigurationSetEventDestinationCommand");
const CreateConfigurationSetTrackingOptionsCommand_1 = require("./commands/CreateConfigurationSetTrackingOptionsCommand");
const CreateCustomVerificationEmailTemplateCommand_1 = require("./commands/CreateCustomVerificationEmailTemplateCommand");
const CreateReceiptFilterCommand_1 = require("./commands/CreateReceiptFilterCommand");
const CreateReceiptRuleCommand_1 = require("./commands/CreateReceiptRuleCommand");
const CreateReceiptRuleSetCommand_1 = require("./commands/CreateReceiptRuleSetCommand");
const CreateTemplateCommand_1 = require("./commands/CreateTemplateCommand");
const DeleteConfigurationSetCommand_1 = require("./commands/DeleteConfigurationSetCommand");
const DeleteConfigurationSetEventDestinationCommand_1 = require("./commands/DeleteConfigurationSetEventDestinationCommand");
const DeleteConfigurationSetTrackingOptionsCommand_1 = require("./commands/DeleteConfigurationSetTrackingOptionsCommand");
const DeleteCustomVerificationEmailTemplateCommand_1 = require("./commands/DeleteCustomVerificationEmailTemplateCommand");
const DeleteIdentityCommand_1 = require("./commands/DeleteIdentityCommand");
const DeleteIdentityPolicyCommand_1 = require("./commands/DeleteIdentityPolicyCommand");
const DeleteReceiptFilterCommand_1 = require("./commands/DeleteReceiptFilterCommand");
const DeleteReceiptRuleCommand_1 = require("./commands/DeleteReceiptRuleCommand");
const DeleteReceiptRuleSetCommand_1 = require("./commands/DeleteReceiptRuleSetCommand");
const DeleteTemplateCommand_1 = require("./commands/DeleteTemplateCommand");
const DeleteVerifiedEmailAddressCommand_1 = require("./commands/DeleteVerifiedEmailAddressCommand");
const DescribeActiveReceiptRuleSetCommand_1 = require("./commands/DescribeActiveReceiptRuleSetCommand");
const DescribeConfigurationSetCommand_1 = require("./commands/DescribeConfigurationSetCommand");
const DescribeReceiptRuleCommand_1 = require("./commands/DescribeReceiptRuleCommand");
const DescribeReceiptRuleSetCommand_1 = require("./commands/DescribeReceiptRuleSetCommand");
const GetAccountSendingEnabledCommand_1 = require("./commands/GetAccountSendingEnabledCommand");
const GetCustomVerificationEmailTemplateCommand_1 = require("./commands/GetCustomVerificationEmailTemplateCommand");
const GetIdentityDkimAttributesCommand_1 = require("./commands/GetIdentityDkimAttributesCommand");
const GetIdentityMailFromDomainAttributesCommand_1 = require("./commands/GetIdentityMailFromDomainAttributesCommand");
const GetIdentityNotificationAttributesCommand_1 = require("./commands/GetIdentityNotificationAttributesCommand");
const GetIdentityPoliciesCommand_1 = require("./commands/GetIdentityPoliciesCommand");
const GetIdentityVerificationAttributesCommand_1 = require("./commands/GetIdentityVerificationAttributesCommand");
const GetSendQuotaCommand_1 = require("./commands/GetSendQuotaCommand");
const GetSendStatisticsCommand_1 = require("./commands/GetSendStatisticsCommand");
const GetTemplateCommand_1 = require("./commands/GetTemplateCommand");
const ListConfigurationSetsCommand_1 = require("./commands/ListConfigurationSetsCommand");
const ListCustomVerificationEmailTemplatesCommand_1 = require("./commands/ListCustomVerificationEmailTemplatesCommand");
const ListIdentitiesCommand_1 = require("./commands/ListIdentitiesCommand");
const ListIdentityPoliciesCommand_1 = require("./commands/ListIdentityPoliciesCommand");
const ListReceiptFiltersCommand_1 = require("./commands/ListReceiptFiltersCommand");
const ListReceiptRuleSetsCommand_1 = require("./commands/ListReceiptRuleSetsCommand");
const ListTemplatesCommand_1 = require("./commands/ListTemplatesCommand");
const ListVerifiedEmailAddressesCommand_1 = require("./commands/ListVerifiedEmailAddressesCommand");
const PutConfigurationSetDeliveryOptionsCommand_1 = require("./commands/PutConfigurationSetDeliveryOptionsCommand");
const PutIdentityPolicyCommand_1 = require("./commands/PutIdentityPolicyCommand");
const ReorderReceiptRuleSetCommand_1 = require("./commands/ReorderReceiptRuleSetCommand");
const SendBounceCommand_1 = require("./commands/SendBounceCommand");
const SendBulkTemplatedEmailCommand_1 = require("./commands/SendBulkTemplatedEmailCommand");
const SendCustomVerificationEmailCommand_1 = require("./commands/SendCustomVerificationEmailCommand");
const SendEmailCommand_1 = require("./commands/SendEmailCommand");
const SendRawEmailCommand_1 = require("./commands/SendRawEmailCommand");
const SendTemplatedEmailCommand_1 = require("./commands/SendTemplatedEmailCommand");
const SetActiveReceiptRuleSetCommand_1 = require("./commands/SetActiveReceiptRuleSetCommand");
const SetIdentityDkimEnabledCommand_1 = require("./commands/SetIdentityDkimEnabledCommand");
const SetIdentityFeedbackForwardingEnabledCommand_1 = require("./commands/SetIdentityFeedbackForwardingEnabledCommand");
const SetIdentityHeadersInNotificationsEnabledCommand_1 = require("./commands/SetIdentityHeadersInNotificationsEnabledCommand");
const SetIdentityMailFromDomainCommand_1 = require("./commands/SetIdentityMailFromDomainCommand");
const SetIdentityNotificationTopicCommand_1 = require("./commands/SetIdentityNotificationTopicCommand");
const SetReceiptRulePositionCommand_1 = require("./commands/SetReceiptRulePositionCommand");
const TestRenderTemplateCommand_1 = require("./commands/TestRenderTemplateCommand");
const UpdateAccountSendingEnabledCommand_1 = require("./commands/UpdateAccountSendingEnabledCommand");
const UpdateConfigurationSetEventDestinationCommand_1 = require("./commands/UpdateConfigurationSetEventDestinationCommand");
const UpdateConfigurationSetReputationMetricsEnabledCommand_1 = require("./commands/UpdateConfigurationSetReputationMetricsEnabledCommand");
const UpdateConfigurationSetSendingEnabledCommand_1 = require("./commands/UpdateConfigurationSetSendingEnabledCommand");
const UpdateConfigurationSetTrackingOptionsCommand_1 = require("./commands/UpdateConfigurationSetTrackingOptionsCommand");
const UpdateCustomVerificationEmailTemplateCommand_1 = require("./commands/UpdateCustomVerificationEmailTemplateCommand");
const UpdateReceiptRuleCommand_1 = require("./commands/UpdateReceiptRuleCommand");
const UpdateTemplateCommand_1 = require("./commands/UpdateTemplateCommand");
const VerifyDomainDkimCommand_1 = require("./commands/VerifyDomainDkimCommand");
const VerifyDomainIdentityCommand_1 = require("./commands/VerifyDomainIdentityCommand");
const VerifyEmailAddressCommand_1 = require("./commands/VerifyEmailAddressCommand");
const VerifyEmailIdentityCommand_1 = require("./commands/VerifyEmailIdentityCommand");
const SESClient_1 = require("./SESClient");
const commands = {
    CloneReceiptRuleSetCommand: CloneReceiptRuleSetCommand_1.CloneReceiptRuleSetCommand,
    CreateConfigurationSetCommand: CreateConfigurationSetCommand_1.CreateConfigurationSetCommand,
    CreateConfigurationSetEventDestinationCommand: CreateConfigurationSetEventDestinationCommand_1.CreateConfigurationSetEventDestinationCommand,
    CreateConfigurationSetTrackingOptionsCommand: CreateConfigurationSetTrackingOptionsCommand_1.CreateConfigurationSetTrackingOptionsCommand,
    CreateCustomVerificationEmailTemplateCommand: CreateCustomVerificationEmailTemplateCommand_1.CreateCustomVerificationEmailTemplateCommand,
    CreateReceiptFilterCommand: CreateReceiptFilterCommand_1.CreateReceiptFilterCommand,
    CreateReceiptRuleCommand: CreateReceiptRuleCommand_1.CreateReceiptRuleCommand,
    CreateReceiptRuleSetCommand: CreateReceiptRuleSetCommand_1.CreateReceiptRuleSetCommand,
    CreateTemplateCommand: CreateTemplateCommand_1.CreateTemplateCommand,
    DeleteConfigurationSetCommand: DeleteConfigurationSetCommand_1.DeleteConfigurationSetCommand,
    DeleteConfigurationSetEventDestinationCommand: DeleteConfigurationSetEventDestinationCommand_1.DeleteConfigurationSetEventDestinationCommand,
    DeleteConfigurationSetTrackingOptionsCommand: DeleteConfigurationSetTrackingOptionsCommand_1.DeleteConfigurationSetTrackingOptionsCommand,
    DeleteCustomVerificationEmailTemplateCommand: DeleteCustomVerificationEmailTemplateCommand_1.DeleteCustomVerificationEmailTemplateCommand,
    DeleteIdentityCommand: DeleteIdentityCommand_1.DeleteIdentityCommand,
    DeleteIdentityPolicyCommand: DeleteIdentityPolicyCommand_1.DeleteIdentityPolicyCommand,
    DeleteReceiptFilterCommand: DeleteReceiptFilterCommand_1.DeleteReceiptFilterCommand,
    DeleteReceiptRuleCommand: DeleteReceiptRuleCommand_1.DeleteReceiptRuleCommand,
    DeleteReceiptRuleSetCommand: DeleteReceiptRuleSetCommand_1.DeleteReceiptRuleSetCommand,
    DeleteTemplateCommand: DeleteTemplateCommand_1.DeleteTemplateCommand,
    DeleteVerifiedEmailAddressCommand: DeleteVerifiedEmailAddressCommand_1.DeleteVerifiedEmailAddressCommand,
    DescribeActiveReceiptRuleSetCommand: DescribeActiveReceiptRuleSetCommand_1.DescribeActiveReceiptRuleSetCommand,
    DescribeConfigurationSetCommand: DescribeConfigurationSetCommand_1.DescribeConfigurationSetCommand,
    DescribeReceiptRuleCommand: DescribeReceiptRuleCommand_1.DescribeReceiptRuleCommand,
    DescribeReceiptRuleSetCommand: DescribeReceiptRuleSetCommand_1.DescribeReceiptRuleSetCommand,
    GetAccountSendingEnabledCommand: GetAccountSendingEnabledCommand_1.GetAccountSendingEnabledCommand,
    GetCustomVerificationEmailTemplateCommand: GetCustomVerificationEmailTemplateCommand_1.GetCustomVerificationEmailTemplateCommand,
    GetIdentityDkimAttributesCommand: GetIdentityDkimAttributesCommand_1.GetIdentityDkimAttributesCommand,
    GetIdentityMailFromDomainAttributesCommand: GetIdentityMailFromDomainAttributesCommand_1.GetIdentityMailFromDomainAttributesCommand,
    GetIdentityNotificationAttributesCommand: GetIdentityNotificationAttributesCommand_1.GetIdentityNotificationAttributesCommand,
    GetIdentityPoliciesCommand: GetIdentityPoliciesCommand_1.GetIdentityPoliciesCommand,
    GetIdentityVerificationAttributesCommand: GetIdentityVerificationAttributesCommand_1.GetIdentityVerificationAttributesCommand,
    GetSendQuotaCommand: GetSendQuotaCommand_1.GetSendQuotaCommand,
    GetSendStatisticsCommand: GetSendStatisticsCommand_1.GetSendStatisticsCommand,
    GetTemplateCommand: GetTemplateCommand_1.GetTemplateCommand,
    ListConfigurationSetsCommand: ListConfigurationSetsCommand_1.ListConfigurationSetsCommand,
    ListCustomVerificationEmailTemplatesCommand: ListCustomVerificationEmailTemplatesCommand_1.ListCustomVerificationEmailTemplatesCommand,
    ListIdentitiesCommand: ListIdentitiesCommand_1.ListIdentitiesCommand,
    ListIdentityPoliciesCommand: ListIdentityPoliciesCommand_1.ListIdentityPoliciesCommand,
    ListReceiptFiltersCommand: ListReceiptFiltersCommand_1.ListReceiptFiltersCommand,
    ListReceiptRuleSetsCommand: ListReceiptRuleSetsCommand_1.ListReceiptRuleSetsCommand,
    ListTemplatesCommand: ListTemplatesCommand_1.ListTemplatesCommand,
    ListVerifiedEmailAddressesCommand: ListVerifiedEmailAddressesCommand_1.ListVerifiedEmailAddressesCommand,
    PutConfigurationSetDeliveryOptionsCommand: PutConfigurationSetDeliveryOptionsCommand_1.PutConfigurationSetDeliveryOptionsCommand,
    PutIdentityPolicyCommand: PutIdentityPolicyCommand_1.PutIdentityPolicyCommand,
    ReorderReceiptRuleSetCommand: ReorderReceiptRuleSetCommand_1.ReorderReceiptRuleSetCommand,
    SendBounceCommand: SendBounceCommand_1.SendBounceCommand,
    SendBulkTemplatedEmailCommand: SendBulkTemplatedEmailCommand_1.SendBulkTemplatedEmailCommand,
    SendCustomVerificationEmailCommand: SendCustomVerificationEmailCommand_1.SendCustomVerificationEmailCommand,
    SendEmailCommand: SendEmailCommand_1.SendEmailCommand,
    SendRawEmailCommand: SendRawEmailCommand_1.SendRawEmailCommand,
    SendTemplatedEmailCommand: SendTemplatedEmailCommand_1.SendTemplatedEmailCommand,
    SetActiveReceiptRuleSetCommand: SetActiveReceiptRuleSetCommand_1.SetActiveReceiptRuleSetCommand,
    SetIdentityDkimEnabledCommand: SetIdentityDkimEnabledCommand_1.SetIdentityDkimEnabledCommand,
    SetIdentityFeedbackForwardingEnabledCommand: SetIdentityFeedbackForwardingEnabledCommand_1.SetIdentityFeedbackForwardingEnabledCommand,
    SetIdentityHeadersInNotificationsEnabledCommand: SetIdentityHeadersInNotificationsEnabledCommand_1.SetIdentityHeadersInNotificationsEnabledCommand,
    SetIdentityMailFromDomainCommand: SetIdentityMailFromDomainCommand_1.SetIdentityMailFromDomainCommand,
    SetIdentityNotificationTopicCommand: SetIdentityNotificationTopicCommand_1.SetIdentityNotificationTopicCommand,
    SetReceiptRulePositionCommand: SetReceiptRulePositionCommand_1.SetReceiptRulePositionCommand,
    TestRenderTemplateCommand: TestRenderTemplateCommand_1.TestRenderTemplateCommand,
    UpdateAccountSendingEnabledCommand: UpdateAccountSendingEnabledCommand_1.UpdateAccountSendingEnabledCommand,
    UpdateConfigurationSetEventDestinationCommand: UpdateConfigurationSetEventDestinationCommand_1.UpdateConfigurationSetEventDestinationCommand,
    UpdateConfigurationSetReputationMetricsEnabledCommand: UpdateConfigurationSetReputationMetricsEnabledCommand_1.UpdateConfigurationSetReputationMetricsEnabledCommand,
    UpdateConfigurationSetSendingEnabledCommand: UpdateConfigurationSetSendingEnabledCommand_1.UpdateConfigurationSetSendingEnabledCommand,
    UpdateConfigurationSetTrackingOptionsCommand: UpdateConfigurationSetTrackingOptionsCommand_1.UpdateConfigurationSetTrackingOptionsCommand,
    UpdateCustomVerificationEmailTemplateCommand: UpdateCustomVerificationEmailTemplateCommand_1.UpdateCustomVerificationEmailTemplateCommand,
    UpdateReceiptRuleCommand: UpdateReceiptRuleCommand_1.UpdateReceiptRuleCommand,
    UpdateTemplateCommand: UpdateTemplateCommand_1.UpdateTemplateCommand,
    VerifyDomainDkimCommand: VerifyDomainDkimCommand_1.VerifyDomainDkimCommand,
    VerifyDomainIdentityCommand: VerifyDomainIdentityCommand_1.VerifyDomainIdentityCommand,
    VerifyEmailAddressCommand: VerifyEmailAddressCommand_1.VerifyEmailAddressCommand,
    VerifyEmailIdentityCommand: VerifyEmailIdentityCommand_1.VerifyEmailIdentityCommand,
};
class SES extends SESClient_1.SESClient {
}
exports.SES = SES;
(0, smithy_client_1.createAggregatedClient)(commands, SES);
