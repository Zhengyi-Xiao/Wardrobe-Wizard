"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.se_SendRawEmailCommand = exports.se_SendEmailCommand = exports.se_SendCustomVerificationEmailCommand = exports.se_SendBulkTemplatedEmailCommand = exports.se_SendBounceCommand = exports.se_ReorderReceiptRuleSetCommand = exports.se_PutIdentityPolicyCommand = exports.se_PutConfigurationSetDeliveryOptionsCommand = exports.se_ListVerifiedEmailAddressesCommand = exports.se_ListTemplatesCommand = exports.se_ListReceiptRuleSetsCommand = exports.se_ListReceiptFiltersCommand = exports.se_ListIdentityPoliciesCommand = exports.se_ListIdentitiesCommand = exports.se_ListCustomVerificationEmailTemplatesCommand = exports.se_ListConfigurationSetsCommand = exports.se_GetTemplateCommand = exports.se_GetSendStatisticsCommand = exports.se_GetSendQuotaCommand = exports.se_GetIdentityVerificationAttributesCommand = exports.se_GetIdentityPoliciesCommand = exports.se_GetIdentityNotificationAttributesCommand = exports.se_GetIdentityMailFromDomainAttributesCommand = exports.se_GetIdentityDkimAttributesCommand = exports.se_GetCustomVerificationEmailTemplateCommand = exports.se_GetAccountSendingEnabledCommand = exports.se_DescribeReceiptRuleSetCommand = exports.se_DescribeReceiptRuleCommand = exports.se_DescribeConfigurationSetCommand = exports.se_DescribeActiveReceiptRuleSetCommand = exports.se_DeleteVerifiedEmailAddressCommand = exports.se_DeleteTemplateCommand = exports.se_DeleteReceiptRuleSetCommand = exports.se_DeleteReceiptRuleCommand = exports.se_DeleteReceiptFilterCommand = exports.se_DeleteIdentityPolicyCommand = exports.se_DeleteIdentityCommand = exports.se_DeleteCustomVerificationEmailTemplateCommand = exports.se_DeleteConfigurationSetTrackingOptionsCommand = exports.se_DeleteConfigurationSetEventDestinationCommand = exports.se_DeleteConfigurationSetCommand = exports.se_CreateTemplateCommand = exports.se_CreateReceiptRuleSetCommand = exports.se_CreateReceiptRuleCommand = exports.se_CreateReceiptFilterCommand = exports.se_CreateCustomVerificationEmailTemplateCommand = exports.se_CreateConfigurationSetTrackingOptionsCommand = exports.se_CreateConfigurationSetEventDestinationCommand = exports.se_CreateConfigurationSetCommand = exports.se_CloneReceiptRuleSetCommand = void 0;
exports.de_GetIdentityNotificationAttributesCommand = exports.de_GetIdentityMailFromDomainAttributesCommand = exports.de_GetIdentityDkimAttributesCommand = exports.de_GetCustomVerificationEmailTemplateCommand = exports.de_GetAccountSendingEnabledCommand = exports.de_DescribeReceiptRuleSetCommand = exports.de_DescribeReceiptRuleCommand = exports.de_DescribeConfigurationSetCommand = exports.de_DescribeActiveReceiptRuleSetCommand = exports.de_DeleteVerifiedEmailAddressCommand = exports.de_DeleteTemplateCommand = exports.de_DeleteReceiptRuleSetCommand = exports.de_DeleteReceiptRuleCommand = exports.de_DeleteReceiptFilterCommand = exports.de_DeleteIdentityPolicyCommand = exports.de_DeleteIdentityCommand = exports.de_DeleteCustomVerificationEmailTemplateCommand = exports.de_DeleteConfigurationSetTrackingOptionsCommand = exports.de_DeleteConfigurationSetEventDestinationCommand = exports.de_DeleteConfigurationSetCommand = exports.de_CreateTemplateCommand = exports.de_CreateReceiptRuleSetCommand = exports.de_CreateReceiptRuleCommand = exports.de_CreateReceiptFilterCommand = exports.de_CreateCustomVerificationEmailTemplateCommand = exports.de_CreateConfigurationSetTrackingOptionsCommand = exports.de_CreateConfigurationSetEventDestinationCommand = exports.de_CreateConfigurationSetCommand = exports.de_CloneReceiptRuleSetCommand = exports.se_VerifyEmailIdentityCommand = exports.se_VerifyEmailAddressCommand = exports.se_VerifyDomainIdentityCommand = exports.se_VerifyDomainDkimCommand = exports.se_UpdateTemplateCommand = exports.se_UpdateReceiptRuleCommand = exports.se_UpdateCustomVerificationEmailTemplateCommand = exports.se_UpdateConfigurationSetTrackingOptionsCommand = exports.se_UpdateConfigurationSetSendingEnabledCommand = exports.se_UpdateConfigurationSetReputationMetricsEnabledCommand = exports.se_UpdateConfigurationSetEventDestinationCommand = exports.se_UpdateAccountSendingEnabledCommand = exports.se_TestRenderTemplateCommand = exports.se_SetReceiptRulePositionCommand = exports.se_SetIdentityNotificationTopicCommand = exports.se_SetIdentityMailFromDomainCommand = exports.se_SetIdentityHeadersInNotificationsEnabledCommand = exports.se_SetIdentityFeedbackForwardingEnabledCommand = exports.se_SetIdentityDkimEnabledCommand = exports.se_SetActiveReceiptRuleSetCommand = exports.se_SendTemplatedEmailCommand = void 0;
exports.de_VerifyEmailIdentityCommand = exports.de_VerifyEmailAddressCommand = exports.de_VerifyDomainIdentityCommand = exports.de_VerifyDomainDkimCommand = exports.de_UpdateTemplateCommand = exports.de_UpdateReceiptRuleCommand = exports.de_UpdateCustomVerificationEmailTemplateCommand = exports.de_UpdateConfigurationSetTrackingOptionsCommand = exports.de_UpdateConfigurationSetSendingEnabledCommand = exports.de_UpdateConfigurationSetReputationMetricsEnabledCommand = exports.de_UpdateConfigurationSetEventDestinationCommand = exports.de_UpdateAccountSendingEnabledCommand = exports.de_TestRenderTemplateCommand = exports.de_SetReceiptRulePositionCommand = exports.de_SetIdentityNotificationTopicCommand = exports.de_SetIdentityMailFromDomainCommand = exports.de_SetIdentityHeadersInNotificationsEnabledCommand = exports.de_SetIdentityFeedbackForwardingEnabledCommand = exports.de_SetIdentityDkimEnabledCommand = exports.de_SetActiveReceiptRuleSetCommand = exports.de_SendTemplatedEmailCommand = exports.de_SendRawEmailCommand = exports.de_SendEmailCommand = exports.de_SendCustomVerificationEmailCommand = exports.de_SendBulkTemplatedEmailCommand = exports.de_SendBounceCommand = exports.de_ReorderReceiptRuleSetCommand = exports.de_PutIdentityPolicyCommand = exports.de_PutConfigurationSetDeliveryOptionsCommand = exports.de_ListVerifiedEmailAddressesCommand = exports.de_ListTemplatesCommand = exports.de_ListReceiptRuleSetsCommand = exports.de_ListReceiptFiltersCommand = exports.de_ListIdentityPoliciesCommand = exports.de_ListIdentitiesCommand = exports.de_ListCustomVerificationEmailTemplatesCommand = exports.de_ListConfigurationSetsCommand = exports.de_GetTemplateCommand = exports.de_GetSendStatisticsCommand = exports.de_GetSendQuotaCommand = exports.de_GetIdentityVerificationAttributesCommand = exports.de_GetIdentityPoliciesCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const fast_xml_parser_1 = require("fast-xml-parser");
const models_0_1 = require("../models/models_0");
const SESServiceException_1 = require("../models/SESServiceException");
const se_CloneReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CloneReceiptRuleSetRequest(input, context),
        Action: "CloneReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CloneReceiptRuleSetCommand = se_CloneReceiptRuleSetCommand;
const se_CreateConfigurationSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateConfigurationSetRequest(input, context),
        Action: "CreateConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateConfigurationSetCommand = se_CreateConfigurationSetCommand;
const se_CreateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateConfigurationSetEventDestinationRequest(input, context),
        Action: "CreateConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateConfigurationSetEventDestinationCommand = se_CreateConfigurationSetEventDestinationCommand;
const se_CreateConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateConfigurationSetTrackingOptionsRequest(input, context),
        Action: "CreateConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateConfigurationSetTrackingOptionsCommand = se_CreateConfigurationSetTrackingOptionsCommand;
const se_CreateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateCustomVerificationEmailTemplateRequest(input, context),
        Action: "CreateCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateCustomVerificationEmailTemplateCommand = se_CreateCustomVerificationEmailTemplateCommand;
const se_CreateReceiptFilterCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateReceiptFilterRequest(input, context),
        Action: "CreateReceiptFilter",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateReceiptFilterCommand = se_CreateReceiptFilterCommand;
const se_CreateReceiptRuleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateReceiptRuleRequest(input, context),
        Action: "CreateReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateReceiptRuleCommand = se_CreateReceiptRuleCommand;
const se_CreateReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateReceiptRuleSetRequest(input, context),
        Action: "CreateReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateReceiptRuleSetCommand = se_CreateReceiptRuleSetCommand;
const se_CreateTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_CreateTemplateRequest(input, context),
        Action: "CreateTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateTemplateCommand = se_CreateTemplateCommand;
const se_DeleteConfigurationSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteConfigurationSetRequest(input, context),
        Action: "DeleteConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteConfigurationSetCommand = se_DeleteConfigurationSetCommand;
const se_DeleteConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteConfigurationSetEventDestinationRequest(input, context),
        Action: "DeleteConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteConfigurationSetEventDestinationCommand = se_DeleteConfigurationSetEventDestinationCommand;
const se_DeleteConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteConfigurationSetTrackingOptionsRequest(input, context),
        Action: "DeleteConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteConfigurationSetTrackingOptionsCommand = se_DeleteConfigurationSetTrackingOptionsCommand;
const se_DeleteCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteCustomVerificationEmailTemplateRequest(input, context),
        Action: "DeleteCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteCustomVerificationEmailTemplateCommand = se_DeleteCustomVerificationEmailTemplateCommand;
const se_DeleteIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteIdentityRequest(input, context),
        Action: "DeleteIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteIdentityCommand = se_DeleteIdentityCommand;
const se_DeleteIdentityPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteIdentityPolicyRequest(input, context),
        Action: "DeleteIdentityPolicy",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteIdentityPolicyCommand = se_DeleteIdentityPolicyCommand;
const se_DeleteReceiptFilterCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteReceiptFilterRequest(input, context),
        Action: "DeleteReceiptFilter",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteReceiptFilterCommand = se_DeleteReceiptFilterCommand;
const se_DeleteReceiptRuleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteReceiptRuleRequest(input, context),
        Action: "DeleteReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteReceiptRuleCommand = se_DeleteReceiptRuleCommand;
const se_DeleteReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteReceiptRuleSetRequest(input, context),
        Action: "DeleteReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteReceiptRuleSetCommand = se_DeleteReceiptRuleSetCommand;
const se_DeleteTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteTemplateRequest(input, context),
        Action: "DeleteTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteTemplateCommand = se_DeleteTemplateCommand;
const se_DeleteVerifiedEmailAddressCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DeleteVerifiedEmailAddressRequest(input, context),
        Action: "DeleteVerifiedEmailAddress",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteVerifiedEmailAddressCommand = se_DeleteVerifiedEmailAddressCommand;
const se_DescribeActiveReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DescribeActiveReceiptRuleSetRequest(input, context),
        Action: "DescribeActiveReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeActiveReceiptRuleSetCommand = se_DescribeActiveReceiptRuleSetCommand;
const se_DescribeConfigurationSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DescribeConfigurationSetRequest(input, context),
        Action: "DescribeConfigurationSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeConfigurationSetCommand = se_DescribeConfigurationSetCommand;
const se_DescribeReceiptRuleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DescribeReceiptRuleRequest(input, context),
        Action: "DescribeReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeReceiptRuleCommand = se_DescribeReceiptRuleCommand;
const se_DescribeReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DescribeReceiptRuleSetRequest(input, context),
        Action: "DescribeReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeReceiptRuleSetCommand = se_DescribeReceiptRuleSetCommand;
const se_GetAccountSendingEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        Action: "GetAccountSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetAccountSendingEnabledCommand = se_GetAccountSendingEnabledCommand;
const se_GetCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetCustomVerificationEmailTemplateRequest(input, context),
        Action: "GetCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetCustomVerificationEmailTemplateCommand = se_GetCustomVerificationEmailTemplateCommand;
const se_GetIdentityDkimAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetIdentityDkimAttributesRequest(input, context),
        Action: "GetIdentityDkimAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityDkimAttributesCommand = se_GetIdentityDkimAttributesCommand;
const se_GetIdentityMailFromDomainAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetIdentityMailFromDomainAttributesRequest(input, context),
        Action: "GetIdentityMailFromDomainAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityMailFromDomainAttributesCommand = se_GetIdentityMailFromDomainAttributesCommand;
const se_GetIdentityNotificationAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetIdentityNotificationAttributesRequest(input, context),
        Action: "GetIdentityNotificationAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityNotificationAttributesCommand = se_GetIdentityNotificationAttributesCommand;
const se_GetIdentityPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetIdentityPoliciesRequest(input, context),
        Action: "GetIdentityPolicies",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityPoliciesCommand = se_GetIdentityPoliciesCommand;
const se_GetIdentityVerificationAttributesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetIdentityVerificationAttributesRequest(input, context),
        Action: "GetIdentityVerificationAttributes",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetIdentityVerificationAttributesCommand = se_GetIdentityVerificationAttributesCommand;
const se_GetSendQuotaCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        Action: "GetSendQuota",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetSendQuotaCommand = se_GetSendQuotaCommand;
const se_GetSendStatisticsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        Action: "GetSendStatistics",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetSendStatisticsCommand = se_GetSendStatisticsCommand;
const se_GetTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetTemplateRequest(input, context),
        Action: "GetTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetTemplateCommand = se_GetTemplateCommand;
const se_ListConfigurationSetsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListConfigurationSetsRequest(input, context),
        Action: "ListConfigurationSets",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListConfigurationSetsCommand = se_ListConfigurationSetsCommand;
const se_ListCustomVerificationEmailTemplatesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListCustomVerificationEmailTemplatesRequest(input, context),
        Action: "ListCustomVerificationEmailTemplates",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListCustomVerificationEmailTemplatesCommand = se_ListCustomVerificationEmailTemplatesCommand;
const se_ListIdentitiesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListIdentitiesRequest(input, context),
        Action: "ListIdentities",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListIdentitiesCommand = se_ListIdentitiesCommand;
const se_ListIdentityPoliciesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListIdentityPoliciesRequest(input, context),
        Action: "ListIdentityPolicies",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListIdentityPoliciesCommand = se_ListIdentityPoliciesCommand;
const se_ListReceiptFiltersCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListReceiptFiltersRequest(input, context),
        Action: "ListReceiptFilters",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListReceiptFiltersCommand = se_ListReceiptFiltersCommand;
const se_ListReceiptRuleSetsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListReceiptRuleSetsRequest(input, context),
        Action: "ListReceiptRuleSets",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListReceiptRuleSetsCommand = se_ListReceiptRuleSetsCommand;
const se_ListTemplatesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ListTemplatesRequest(input, context),
        Action: "ListTemplates",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTemplatesCommand = se_ListTemplatesCommand;
const se_ListVerifiedEmailAddressesCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    const body = buildFormUrlencodedString({
        Action: "ListVerifiedEmailAddresses",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListVerifiedEmailAddressesCommand = se_ListVerifiedEmailAddressesCommand;
const se_PutConfigurationSetDeliveryOptionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutConfigurationSetDeliveryOptionsRequest(input, context),
        Action: "PutConfigurationSetDeliveryOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutConfigurationSetDeliveryOptionsCommand = se_PutConfigurationSetDeliveryOptionsCommand;
const se_PutIdentityPolicyCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_PutIdentityPolicyRequest(input, context),
        Action: "PutIdentityPolicy",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutIdentityPolicyCommand = se_PutIdentityPolicyCommand;
const se_ReorderReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_ReorderReceiptRuleSetRequest(input, context),
        Action: "ReorderReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ReorderReceiptRuleSetCommand = se_ReorderReceiptRuleSetCommand;
const se_SendBounceCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendBounceRequest(input, context),
        Action: "SendBounce",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendBounceCommand = se_SendBounceCommand;
const se_SendBulkTemplatedEmailCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendBulkTemplatedEmailRequest(input, context),
        Action: "SendBulkTemplatedEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendBulkTemplatedEmailCommand = se_SendBulkTemplatedEmailCommand;
const se_SendCustomVerificationEmailCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendCustomVerificationEmailRequest(input, context),
        Action: "SendCustomVerificationEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendCustomVerificationEmailCommand = se_SendCustomVerificationEmailCommand;
const se_SendEmailCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendEmailRequest(input, context),
        Action: "SendEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendEmailCommand = se_SendEmailCommand;
const se_SendRawEmailCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendRawEmailRequest(input, context),
        Action: "SendRawEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendRawEmailCommand = se_SendRawEmailCommand;
const se_SendTemplatedEmailCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SendTemplatedEmailRequest(input, context),
        Action: "SendTemplatedEmail",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SendTemplatedEmailCommand = se_SendTemplatedEmailCommand;
const se_SetActiveReceiptRuleSetCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetActiveReceiptRuleSetRequest(input, context),
        Action: "SetActiveReceiptRuleSet",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetActiveReceiptRuleSetCommand = se_SetActiveReceiptRuleSetCommand;
const se_SetIdentityDkimEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetIdentityDkimEnabledRequest(input, context),
        Action: "SetIdentityDkimEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityDkimEnabledCommand = se_SetIdentityDkimEnabledCommand;
const se_SetIdentityFeedbackForwardingEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetIdentityFeedbackForwardingEnabledRequest(input, context),
        Action: "SetIdentityFeedbackForwardingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityFeedbackForwardingEnabledCommand = se_SetIdentityFeedbackForwardingEnabledCommand;
const se_SetIdentityHeadersInNotificationsEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetIdentityHeadersInNotificationsEnabledRequest(input, context),
        Action: "SetIdentityHeadersInNotificationsEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityHeadersInNotificationsEnabledCommand = se_SetIdentityHeadersInNotificationsEnabledCommand;
const se_SetIdentityMailFromDomainCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetIdentityMailFromDomainRequest(input, context),
        Action: "SetIdentityMailFromDomain",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityMailFromDomainCommand = se_SetIdentityMailFromDomainCommand;
const se_SetIdentityNotificationTopicCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetIdentityNotificationTopicRequest(input, context),
        Action: "SetIdentityNotificationTopic",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetIdentityNotificationTopicCommand = se_SetIdentityNotificationTopicCommand;
const se_SetReceiptRulePositionCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_SetReceiptRulePositionRequest(input, context),
        Action: "SetReceiptRulePosition",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SetReceiptRulePositionCommand = se_SetReceiptRulePositionCommand;
const se_TestRenderTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_TestRenderTemplateRequest(input, context),
        Action: "TestRenderTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TestRenderTemplateCommand = se_TestRenderTemplateCommand;
const se_UpdateAccountSendingEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateAccountSendingEnabledRequest(input, context),
        Action: "UpdateAccountSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateAccountSendingEnabledCommand = se_UpdateAccountSendingEnabledCommand;
const se_UpdateConfigurationSetEventDestinationCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateConfigurationSetEventDestinationRequest(input, context),
        Action: "UpdateConfigurationSetEventDestination",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateConfigurationSetEventDestinationCommand = se_UpdateConfigurationSetEventDestinationCommand;
const se_UpdateConfigurationSetReputationMetricsEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateConfigurationSetReputationMetricsEnabledRequest(input, context),
        Action: "UpdateConfigurationSetReputationMetricsEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateConfigurationSetReputationMetricsEnabledCommand = se_UpdateConfigurationSetReputationMetricsEnabledCommand;
const se_UpdateConfigurationSetSendingEnabledCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateConfigurationSetSendingEnabledRequest(input, context),
        Action: "UpdateConfigurationSetSendingEnabled",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateConfigurationSetSendingEnabledCommand = se_UpdateConfigurationSetSendingEnabledCommand;
const se_UpdateConfigurationSetTrackingOptionsCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateConfigurationSetTrackingOptionsRequest(input, context),
        Action: "UpdateConfigurationSetTrackingOptions",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateConfigurationSetTrackingOptionsCommand = se_UpdateConfigurationSetTrackingOptionsCommand;
const se_UpdateCustomVerificationEmailTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateCustomVerificationEmailTemplateRequest(input, context),
        Action: "UpdateCustomVerificationEmailTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateCustomVerificationEmailTemplateCommand = se_UpdateCustomVerificationEmailTemplateCommand;
const se_UpdateReceiptRuleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateReceiptRuleRequest(input, context),
        Action: "UpdateReceiptRule",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateReceiptRuleCommand = se_UpdateReceiptRuleCommand;
const se_UpdateTemplateCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_UpdateTemplateRequest(input, context),
        Action: "UpdateTemplate",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateTemplateCommand = se_UpdateTemplateCommand;
const se_VerifyDomainDkimCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_VerifyDomainDkimRequest(input, context),
        Action: "VerifyDomainDkim",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_VerifyDomainDkimCommand = se_VerifyDomainDkimCommand;
const se_VerifyDomainIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_VerifyDomainIdentityRequest(input, context),
        Action: "VerifyDomainIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_VerifyDomainIdentityCommand = se_VerifyDomainIdentityCommand;
const se_VerifyEmailAddressCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_VerifyEmailAddressRequest(input, context),
        Action: "VerifyEmailAddress",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_VerifyEmailAddressCommand = se_VerifyEmailAddressCommand;
const se_VerifyEmailIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_VerifyEmailIdentityRequest(input, context),
        Action: "VerifyEmailIdentity",
        Version: "2010-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_VerifyEmailIdentityCommand = se_VerifyEmailIdentityCommand;
const de_CloneReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CloneReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CloneReceiptRuleSetResponse(data.CloneReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CloneReceiptRuleSetCommand = de_CloneReceiptRuleSetCommand;
const de_CloneReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExists":
        case "com.amazonaws.ses#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateConfigurationSetResponse(data.CreateConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateConfigurationSetCommand = de_CreateConfigurationSetCommand;
const de_CreateConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetAlreadyExists":
        case "com.amazonaws.ses#ConfigurationSetAlreadyExistsException":
            throw await de_ConfigurationSetAlreadyExistsExceptionRes(parsedOutput, context);
        case "InvalidConfigurationSet":
        case "com.amazonaws.ses#InvalidConfigurationSetException":
            throw await de_InvalidConfigurationSetExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateConfigurationSetEventDestinationResponse(data.CreateConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateConfigurationSetEventDestinationCommand = de_CreateConfigurationSetEventDestinationCommand;
const de_CreateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "EventDestinationAlreadyExists":
        case "com.amazonaws.ses#EventDestinationAlreadyExistsException":
            throw await de_EventDestinationAlreadyExistsExceptionRes(parsedOutput, context);
        case "InvalidCloudWatchDestination":
        case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
            throw await de_InvalidCloudWatchDestinationExceptionRes(parsedOutput, context);
        case "InvalidFirehoseDestination":
        case "com.amazonaws.ses#InvalidFirehoseDestinationException":
            throw await de_InvalidFirehoseDestinationExceptionRes(parsedOutput, context);
        case "InvalidSNSDestination":
        case "com.amazonaws.ses#InvalidSNSDestinationException":
            throw await de_InvalidSNSDestinationExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateConfigurationSetTrackingOptionsResponse(data.CreateConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateConfigurationSetTrackingOptionsCommand = de_CreateConfigurationSetTrackingOptionsCommand;
const de_CreateConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "InvalidTrackingOptions":
        case "com.amazonaws.ses#InvalidTrackingOptionsException":
            throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
        case "TrackingOptionsAlreadyExistsException":
        case "com.amazonaws.ses#TrackingOptionsAlreadyExistsException":
            throw await de_TrackingOptionsAlreadyExistsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_CreateCustomVerificationEmailTemplateCommand = de_CreateCustomVerificationEmailTemplateCommand;
const de_CreateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContent":
        case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
            throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
        case "CustomVerificationEmailTemplateAlreadyExists":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateAlreadyExistsException":
            throw await de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes(parsedOutput, context);
        case "FromEmailAddressNotVerified":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateReceiptFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateReceiptFilterResponse(data.CreateReceiptFilterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateReceiptFilterCommand = de_CreateReceiptFilterCommand;
const de_CreateReceiptFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExists":
        case "com.amazonaws.ses#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateReceiptRuleResponse(data.CreateReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateReceiptRuleCommand = de_CreateReceiptRuleCommand;
const de_CreateReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExists":
        case "com.amazonaws.ses#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "InvalidLambdaFunction":
        case "com.amazonaws.ses#InvalidLambdaFunctionException":
            throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
        case "InvalidS3Configuration":
        case "com.amazonaws.ses#InvalidS3ConfigurationException":
            throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
        case "InvalidSnsTopic":
        case "com.amazonaws.ses#InvalidSnsTopicException":
            throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "RuleDoesNotExist":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateReceiptRuleSetResponse(data.CreateReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateReceiptRuleSetCommand = de_CreateReceiptRuleSetCommand;
const de_CreateReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExists":
        case "com.amazonaws.ses#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_CreateTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_CreateTemplateResponse(data.CreateTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateTemplateCommand = de_CreateTemplateCommand;
const de_CreateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyExists":
        case "com.amazonaws.ses#AlreadyExistsException":
            throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
        case "InvalidTemplate":
        case "com.amazonaws.ses#InvalidTemplateException":
            throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteConfigurationSetResponse(data.DeleteConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteConfigurationSetCommand = de_DeleteConfigurationSetCommand;
const de_DeleteConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteConfigurationSetEventDestinationResponse(data.DeleteConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteConfigurationSetEventDestinationCommand = de_DeleteConfigurationSetEventDestinationCommand;
const de_DeleteConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "EventDestinationDoesNotExist":
        case "com.amazonaws.ses#EventDestinationDoesNotExistException":
            throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteConfigurationSetTrackingOptionsResponse(data.DeleteConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteConfigurationSetTrackingOptionsCommand = de_DeleteConfigurationSetTrackingOptionsCommand;
const de_DeleteConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "TrackingOptionsDoesNotExistException":
        case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
            throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteCustomVerificationEmailTemplateCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteCustomVerificationEmailTemplateCommand = de_DeleteCustomVerificationEmailTemplateCommand;
const de_DeleteCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DeleteIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteIdentityResponse(data.DeleteIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteIdentityCommand = de_DeleteIdentityCommand;
const de_DeleteIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DeleteIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteIdentityPolicyResponse(data.DeleteIdentityPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteIdentityPolicyCommand = de_DeleteIdentityPolicyCommand;
const de_DeleteIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DeleteReceiptFilterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteReceiptFilterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteReceiptFilterResponse(data.DeleteReceiptFilterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteReceiptFilterCommand = de_DeleteReceiptFilterCommand;
const de_DeleteReceiptFilterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DeleteReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteReceiptRuleResponse(data.DeleteReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteReceiptRuleCommand = de_DeleteReceiptRuleCommand;
const de_DeleteReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteReceiptRuleSetResponse(data.DeleteReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteReceiptRuleSetCommand = de_DeleteReceiptRuleSetCommand;
const de_DeleteReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CannotDelete":
        case "com.amazonaws.ses#CannotDeleteException":
            throw await de_CannotDeleteExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DeleteTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DeleteTemplateResponse(data.DeleteTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteTemplateCommand = de_DeleteTemplateCommand;
const de_DeleteTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DeleteVerifiedEmailAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteVerifiedEmailAddressCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteVerifiedEmailAddressCommand = de_DeleteVerifiedEmailAddressCommand;
const de_DeleteVerifiedEmailAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DescribeActiveReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeActiveReceiptRuleSetResponse(data.DescribeActiveReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeActiveReceiptRuleSetCommand = de_DescribeActiveReceiptRuleSetCommand;
const de_DescribeActiveReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_DescribeConfigurationSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeConfigurationSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeConfigurationSetResponse(data.DescribeConfigurationSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeConfigurationSetCommand = de_DescribeConfigurationSetCommand;
const de_DescribeConfigurationSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DescribeReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeReceiptRuleResponse(data.DescribeReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeReceiptRuleCommand = de_DescribeReceiptRuleCommand;
const de_DescribeReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExist":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_DescribeReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeReceiptRuleSetResponse(data.DescribeReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeReceiptRuleSetCommand = de_DescribeReceiptRuleSetCommand;
const de_DescribeReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetAccountSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetAccountSendingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccountSendingEnabledResponse(data.GetAccountSendingEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetAccountSendingEnabledCommand = de_GetAccountSendingEnabledCommand;
const de_GetAccountSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetCustomVerificationEmailTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCustomVerificationEmailTemplateResponse(data.GetCustomVerificationEmailTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetCustomVerificationEmailTemplateCommand = de_GetCustomVerificationEmailTemplateCommand;
const de_GetCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailTemplateDoesNotExist":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_GetIdentityDkimAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityDkimAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetIdentityDkimAttributesResponse(data.GetIdentityDkimAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityDkimAttributesCommand = de_GetIdentityDkimAttributesCommand;
const de_GetIdentityDkimAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetIdentityMailFromDomainAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityMailFromDomainAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetIdentityMailFromDomainAttributesResponse(data.GetIdentityMailFromDomainAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityMailFromDomainAttributesCommand = de_GetIdentityMailFromDomainAttributesCommand;
const de_GetIdentityMailFromDomainAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetIdentityNotificationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityNotificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetIdentityNotificationAttributesResponse(data.GetIdentityNotificationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityNotificationAttributesCommand = de_GetIdentityNotificationAttributesCommand;
const de_GetIdentityNotificationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetIdentityPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetIdentityPoliciesResponse(data.GetIdentityPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityPoliciesCommand = de_GetIdentityPoliciesCommand;
const de_GetIdentityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetIdentityVerificationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetIdentityVerificationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetIdentityVerificationAttributesResponse(data.GetIdentityVerificationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetIdentityVerificationAttributesCommand = de_GetIdentityVerificationAttributesCommand;
const de_GetIdentityVerificationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetSendQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSendQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSendQuotaResponse(data.GetSendQuotaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetSendQuotaCommand = de_GetSendQuotaCommand;
const de_GetSendQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetSendStatisticsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetSendStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSendStatisticsResponse(data.GetSendStatisticsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetSendStatisticsCommand = de_GetSendStatisticsCommand;
const de_GetSendStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_GetTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetTemplateResponse(data.GetTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetTemplateCommand = de_GetTemplateCommand;
const de_GetTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "TemplateDoesNotExist":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ListConfigurationSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListConfigurationSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListConfigurationSetsResponse(data.ListConfigurationSetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListConfigurationSetsCommand = de_ListConfigurationSetsCommand;
const de_ListConfigurationSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListCustomVerificationEmailTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListCustomVerificationEmailTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListCustomVerificationEmailTemplatesResponse(data.ListCustomVerificationEmailTemplatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListCustomVerificationEmailTemplatesCommand = de_ListCustomVerificationEmailTemplatesCommand;
const de_ListCustomVerificationEmailTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListIdentitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListIdentitiesResponse(data.ListIdentitiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListIdentitiesCommand = de_ListIdentitiesCommand;
const de_ListIdentitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListIdentityPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListIdentityPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListIdentityPoliciesResponse(data.ListIdentityPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListIdentityPoliciesCommand = de_ListIdentityPoliciesCommand;
const de_ListIdentityPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListReceiptFiltersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListReceiptFiltersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListReceiptFiltersResponse(data.ListReceiptFiltersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListReceiptFiltersCommand = de_ListReceiptFiltersCommand;
const de_ListReceiptFiltersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListReceiptRuleSetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListReceiptRuleSetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListReceiptRuleSetsResponse(data.ListReceiptRuleSetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListReceiptRuleSetsCommand = de_ListReceiptRuleSetsCommand;
const de_ListReceiptRuleSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListTemplatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTemplatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListTemplatesResponse(data.ListTemplatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTemplatesCommand = de_ListTemplatesCommand;
const de_ListTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_ListVerifiedEmailAddressesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListVerifiedEmailAddressesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListVerifiedEmailAddressesResponse(data.ListVerifiedEmailAddressesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListVerifiedEmailAddressesCommand = de_ListVerifiedEmailAddressesCommand;
const de_ListVerifiedEmailAddressesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_PutConfigurationSetDeliveryOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutConfigurationSetDeliveryOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PutConfigurationSetDeliveryOptionsResponse(data.PutConfigurationSetDeliveryOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutConfigurationSetDeliveryOptionsCommand = de_PutConfigurationSetDeliveryOptionsCommand;
const de_PutConfigurationSetDeliveryOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "InvalidDeliveryOptions":
        case "com.amazonaws.ses#InvalidDeliveryOptionsException":
            throw await de_InvalidDeliveryOptionsExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_PutIdentityPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutIdentityPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_PutIdentityPolicyResponse(data.PutIdentityPolicyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutIdentityPolicyCommand = de_PutIdentityPolicyCommand;
const de_PutIdentityPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPolicy":
        case "com.amazonaws.ses#InvalidPolicyException":
            throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ReorderReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ReorderReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ReorderReceiptRuleSetResponse(data.ReorderReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ReorderReceiptRuleSetCommand = de_ReorderReceiptRuleSetCommand;
const de_ReorderReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExist":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendBounceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendBounceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendBounceResponse(data.SendBounceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendBounceCommand = de_SendBounceCommand;
const de_SendBounceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendBulkTemplatedEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendBulkTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendBulkTemplatedEmailResponse(data.SendBulkTemplatedEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendBulkTemplatedEmailCommand = de_SendBulkTemplatedEmailCommand;
const de_SendBulkTemplatedEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        case "TemplateDoesNotExist":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendCustomVerificationEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendCustomVerificationEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendCustomVerificationEmailResponse(data.SendCustomVerificationEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendCustomVerificationEmailCommand = de_SendCustomVerificationEmailCommand;
const de_SendCustomVerificationEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "CustomVerificationEmailTemplateDoesNotExist":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
        case "FromEmailAddressNotVerified":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        case "ProductionAccessNotGranted":
        case "com.amazonaws.ses#ProductionAccessNotGrantedException":
            throw await de_ProductionAccessNotGrantedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendEmailResponse(data.SendEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendEmailCommand = de_SendEmailCommand;
const de_SendEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendRawEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendRawEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendRawEmailResponse(data.SendRawEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendRawEmailCommand = de_SendRawEmailCommand;
const de_SendRawEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SendTemplatedEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SendTemplatedEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SendTemplatedEmailResponse(data.SendTemplatedEmailResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SendTemplatedEmailCommand = de_SendTemplatedEmailCommand;
const de_SendTemplatedEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccountSendingPausedException":
        case "com.amazonaws.ses#AccountSendingPausedException":
            throw await de_AccountSendingPausedExceptionRes(parsedOutput, context);
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "ConfigurationSetSendingPausedException":
        case "com.amazonaws.ses#ConfigurationSetSendingPausedException":
            throw await de_ConfigurationSetSendingPausedExceptionRes(parsedOutput, context);
        case "MailFromDomainNotVerifiedException":
        case "com.amazonaws.ses#MailFromDomainNotVerifiedException":
            throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
        case "MessageRejected":
        case "com.amazonaws.ses#MessageRejected":
            throw await de_MessageRejectedRes(parsedOutput, context);
        case "TemplateDoesNotExist":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SetActiveReceiptRuleSetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetActiveReceiptRuleSetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetActiveReceiptRuleSetResponse(data.SetActiveReceiptRuleSetResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetActiveReceiptRuleSetCommand = de_SetActiveReceiptRuleSetCommand;
const de_SetActiveReceiptRuleSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_SetIdentityDkimEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityDkimEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetIdentityDkimEnabledResponse(data.SetIdentityDkimEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetIdentityDkimEnabledCommand = de_SetIdentityDkimEnabledCommand;
const de_SetIdentityDkimEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_SetIdentityFeedbackForwardingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityFeedbackForwardingEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetIdentityFeedbackForwardingEnabledResponse(data.SetIdentityFeedbackForwardingEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetIdentityFeedbackForwardingEnabledCommand = de_SetIdentityFeedbackForwardingEnabledCommand;
const de_SetIdentityFeedbackForwardingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_SetIdentityHeadersInNotificationsEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityHeadersInNotificationsEnabledCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetIdentityHeadersInNotificationsEnabledResponse(data.SetIdentityHeadersInNotificationsEnabledResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetIdentityHeadersInNotificationsEnabledCommand = de_SetIdentityHeadersInNotificationsEnabledCommand;
const de_SetIdentityHeadersInNotificationsEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_SetIdentityMailFromDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityMailFromDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetIdentityMailFromDomainResponse(data.SetIdentityMailFromDomainResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetIdentityMailFromDomainCommand = de_SetIdentityMailFromDomainCommand;
const de_SetIdentityMailFromDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_SetIdentityNotificationTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetIdentityNotificationTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetIdentityNotificationTopicResponse(data.SetIdentityNotificationTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetIdentityNotificationTopicCommand = de_SetIdentityNotificationTopicCommand;
const de_SetIdentityNotificationTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_SetReceiptRulePositionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SetReceiptRulePositionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_SetReceiptRulePositionResponse(data.SetReceiptRulePositionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SetReceiptRulePositionCommand = de_SetReceiptRulePositionCommand;
const de_SetReceiptRulePositionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "RuleDoesNotExist":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_TestRenderTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TestRenderTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_TestRenderTemplateResponse(data.TestRenderTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TestRenderTemplateCommand = de_TestRenderTemplateCommand;
const de_TestRenderTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRenderingParameter":
        case "com.amazonaws.ses#InvalidRenderingParameterException":
            throw await de_InvalidRenderingParameterExceptionRes(parsedOutput, context);
        case "MissingRenderingAttribute":
        case "com.amazonaws.ses#MissingRenderingAttributeException":
            throw await de_MissingRenderingAttributeExceptionRes(parsedOutput, context);
        case "TemplateDoesNotExist":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateAccountSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateAccountSendingEnabledCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UpdateAccountSendingEnabledCommand = de_UpdateAccountSendingEnabledCommand;
const de_UpdateAccountSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_UpdateConfigurationSetEventDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateConfigurationSetEventDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateConfigurationSetEventDestinationResponse(data.UpdateConfigurationSetEventDestinationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateConfigurationSetEventDestinationCommand = de_UpdateConfigurationSetEventDestinationCommand;
const de_UpdateConfigurationSetEventDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "EventDestinationDoesNotExist":
        case "com.amazonaws.ses#EventDestinationDoesNotExistException":
            throw await de_EventDestinationDoesNotExistExceptionRes(parsedOutput, context);
        case "InvalidCloudWatchDestination":
        case "com.amazonaws.ses#InvalidCloudWatchDestinationException":
            throw await de_InvalidCloudWatchDestinationExceptionRes(parsedOutput, context);
        case "InvalidFirehoseDestination":
        case "com.amazonaws.ses#InvalidFirehoseDestinationException":
            throw await de_InvalidFirehoseDestinationExceptionRes(parsedOutput, context);
        case "InvalidSNSDestination":
        case "com.amazonaws.ses#InvalidSNSDestinationException":
            throw await de_InvalidSNSDestinationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateConfigurationSetReputationMetricsEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateConfigurationSetReputationMetricsEnabledCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UpdateConfigurationSetReputationMetricsEnabledCommand = de_UpdateConfigurationSetReputationMetricsEnabledCommand;
const de_UpdateConfigurationSetReputationMetricsEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateConfigurationSetSendingEnabledCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateConfigurationSetSendingEnabledCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UpdateConfigurationSetSendingEnabledCommand = de_UpdateConfigurationSetSendingEnabledCommand;
const de_UpdateConfigurationSetSendingEnabledCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateConfigurationSetTrackingOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateConfigurationSetTrackingOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateConfigurationSetTrackingOptionsResponse(data.UpdateConfigurationSetTrackingOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateConfigurationSetTrackingOptionsCommand = de_UpdateConfigurationSetTrackingOptionsCommand;
const de_UpdateConfigurationSetTrackingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConfigurationSetDoesNotExist":
        case "com.amazonaws.ses#ConfigurationSetDoesNotExistException":
            throw await de_ConfigurationSetDoesNotExistExceptionRes(parsedOutput, context);
        case "InvalidTrackingOptions":
        case "com.amazonaws.ses#InvalidTrackingOptionsException":
            throw await de_InvalidTrackingOptionsExceptionRes(parsedOutput, context);
        case "TrackingOptionsDoesNotExistException":
        case "com.amazonaws.ses#TrackingOptionsDoesNotExistException":
            throw await de_TrackingOptionsDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateCustomVerificationEmailTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateCustomVerificationEmailTemplateCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UpdateCustomVerificationEmailTemplateCommand = de_UpdateCustomVerificationEmailTemplateCommand;
const de_UpdateCustomVerificationEmailTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomVerificationEmailInvalidContent":
        case "com.amazonaws.ses#CustomVerificationEmailInvalidContentException":
            throw await de_CustomVerificationEmailInvalidContentExceptionRes(parsedOutput, context);
        case "CustomVerificationEmailTemplateDoesNotExist":
        case "com.amazonaws.ses#CustomVerificationEmailTemplateDoesNotExistException":
            throw await de_CustomVerificationEmailTemplateDoesNotExistExceptionRes(parsedOutput, context);
        case "FromEmailAddressNotVerified":
        case "com.amazonaws.ses#FromEmailAddressNotVerifiedException":
            throw await de_FromEmailAddressNotVerifiedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateReceiptRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateReceiptRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateReceiptRuleResponse(data.UpdateReceiptRuleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateReceiptRuleCommand = de_UpdateReceiptRuleCommand;
const de_UpdateReceiptRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidLambdaFunction":
        case "com.amazonaws.ses#InvalidLambdaFunctionException":
            throw await de_InvalidLambdaFunctionExceptionRes(parsedOutput, context);
        case "InvalidS3Configuration":
        case "com.amazonaws.ses#InvalidS3ConfigurationException":
            throw await de_InvalidS3ConfigurationExceptionRes(parsedOutput, context);
        case "InvalidSnsTopic":
        case "com.amazonaws.ses#InvalidSnsTopicException":
            throw await de_InvalidSnsTopicExceptionRes(parsedOutput, context);
        case "LimitExceeded":
        case "com.amazonaws.ses#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "RuleDoesNotExist":
        case "com.amazonaws.ses#RuleDoesNotExistException":
            throw await de_RuleDoesNotExistExceptionRes(parsedOutput, context);
        case "RuleSetDoesNotExist":
        case "com.amazonaws.ses#RuleSetDoesNotExistException":
            throw await de_RuleSetDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_UpdateTemplateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateTemplateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_UpdateTemplateResponse(data.UpdateTemplateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateTemplateCommand = de_UpdateTemplateCommand;
const de_UpdateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTemplate":
        case "com.amazonaws.ses#InvalidTemplateException":
            throw await de_InvalidTemplateExceptionRes(parsedOutput, context);
        case "TemplateDoesNotExist":
        case "com.amazonaws.ses#TemplateDoesNotExistException":
            throw await de_TemplateDoesNotExistExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_VerifyDomainDkimCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_VerifyDomainDkimCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_VerifyDomainDkimResponse(data.VerifyDomainDkimResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_VerifyDomainDkimCommand = de_VerifyDomainDkimCommand;
const de_VerifyDomainDkimCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_VerifyDomainIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_VerifyDomainIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_VerifyDomainIdentityResponse(data.VerifyDomainIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_VerifyDomainIdentityCommand = de_VerifyDomainIdentityCommand;
const de_VerifyDomainIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_VerifyEmailAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_VerifyEmailAddressCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_VerifyEmailAddressCommand = de_VerifyEmailAddressCommand;
const de_VerifyEmailAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_VerifyEmailIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_VerifyEmailIdentityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_VerifyEmailIdentityResponse(data.VerifyEmailIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_VerifyEmailIdentityCommand = de_VerifyEmailIdentityCommand;
const de_VerifyEmailIdentityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
    });
};
const de_AccountSendingPausedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_AccountSendingPausedException(body.Error, context);
    const exception = new models_0_1.AccountSendingPausedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_AlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_AlreadyExistsException(body.Error, context);
    const exception = new models_0_1.AlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_CannotDeleteExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CannotDeleteException(body.Error, context);
    const exception = new models_0_1.CannotDeleteException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ConfigurationSetAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConfigurationSetAlreadyExistsException(body.Error, context);
    const exception = new models_0_1.ConfigurationSetAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ConfigurationSetDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConfigurationSetDoesNotExistException(body.Error, context);
    const exception = new models_0_1.ConfigurationSetDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ConfigurationSetSendingPausedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConfigurationSetSendingPausedException(body.Error, context);
    const exception = new models_0_1.ConfigurationSetSendingPausedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_CustomVerificationEmailInvalidContentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CustomVerificationEmailInvalidContentException(body.Error, context);
    const exception = new models_0_1.CustomVerificationEmailInvalidContentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_CustomVerificationEmailTemplateAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CustomVerificationEmailTemplateAlreadyExistsException(body.Error, context);
    const exception = new models_0_1.CustomVerificationEmailTemplateAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_CustomVerificationEmailTemplateDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_CustomVerificationEmailTemplateDoesNotExistException(body.Error, context);
    const exception = new models_0_1.CustomVerificationEmailTemplateDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_EventDestinationAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EventDestinationAlreadyExistsException(body.Error, context);
    const exception = new models_0_1.EventDestinationAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_EventDestinationDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_EventDestinationDoesNotExistException(body.Error, context);
    const exception = new models_0_1.EventDestinationDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_FromEmailAddressNotVerifiedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_FromEmailAddressNotVerifiedException(body.Error, context);
    const exception = new models_0_1.FromEmailAddressNotVerifiedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidCloudWatchDestinationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidCloudWatchDestinationException(body.Error, context);
    const exception = new models_0_1.InvalidCloudWatchDestinationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidConfigurationSetExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidConfigurationSetException(body.Error, context);
    const exception = new models_0_1.InvalidConfigurationSetException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidDeliveryOptionsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidDeliveryOptionsException(body.Error, context);
    const exception = new models_0_1.InvalidDeliveryOptionsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidFirehoseDestinationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidFirehoseDestinationException(body.Error, context);
    const exception = new models_0_1.InvalidFirehoseDestinationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidLambdaFunctionExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidLambdaFunctionException(body.Error, context);
    const exception = new models_0_1.InvalidLambdaFunctionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidPolicyExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidPolicyException(body.Error, context);
    const exception = new models_0_1.InvalidPolicyException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidRenderingParameterExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidRenderingParameterException(body.Error, context);
    const exception = new models_0_1.InvalidRenderingParameterException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidS3ConfigurationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidS3ConfigurationException(body.Error, context);
    const exception = new models_0_1.InvalidS3ConfigurationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidSNSDestinationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidSNSDestinationException(body.Error, context);
    const exception = new models_0_1.InvalidSNSDestinationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidSnsTopicExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidSnsTopicException(body.Error, context);
    const exception = new models_0_1.InvalidSnsTopicException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTemplateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidTemplateException(body.Error, context);
    const exception = new models_0_1.InvalidTemplateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidTrackingOptionsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidTrackingOptionsException(body.Error, context);
    const exception = new models_0_1.InvalidTrackingOptionsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_LimitExceededException(body.Error, context);
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_MailFromDomainNotVerifiedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MailFromDomainNotVerifiedException(body.Error, context);
    const exception = new models_0_1.MailFromDomainNotVerifiedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_MessageRejectedRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MessageRejected(body.Error, context);
    const exception = new models_0_1.MessageRejected({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_MissingRenderingAttributeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MissingRenderingAttributeException(body.Error, context);
    const exception = new models_0_1.MissingRenderingAttributeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ProductionAccessNotGrantedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ProductionAccessNotGrantedException(body.Error, context);
    const exception = new models_0_1.ProductionAccessNotGrantedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_RuleDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RuleDoesNotExistException(body.Error, context);
    const exception = new models_0_1.RuleDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_RuleSetDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RuleSetDoesNotExistException(body.Error, context);
    const exception = new models_0_1.RuleSetDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TemplateDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TemplateDoesNotExistException(body.Error, context);
    const exception = new models_0_1.TemplateDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TrackingOptionsAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TrackingOptionsAlreadyExistsException(body.Error, context);
    const exception = new models_0_1.TrackingOptionsAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_TrackingOptionsDoesNotExistExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TrackingOptionsDoesNotExistException(body.Error, context);
    const exception = new models_0_1.TrackingOptionsDoesNotExistException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_AddHeaderAction = (input, context) => {
    const entries = {};
    if (input.HeaderName != null) {
        entries["HeaderName"] = input.HeaderName;
    }
    if (input.HeaderValue != null) {
        entries["HeaderValue"] = input.HeaderValue;
    }
    return entries;
};
const se_AddressList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_Body = (input, context) => {
    const entries = {};
    if (input.Text != null) {
        const memberEntries = se_Content(input.Text, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Text.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Html != null) {
        const memberEntries = se_Content(input.Html, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Html.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_BounceAction = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.SmtpReplyCode != null) {
        entries["SmtpReplyCode"] = input.SmtpReplyCode;
    }
    if (input.StatusCode != null) {
        entries["StatusCode"] = input.StatusCode;
    }
    if (input.Message != null) {
        entries["Message"] = input.Message;
    }
    if (input.Sender != null) {
        entries["Sender"] = input.Sender;
    }
    return entries;
};
const se_BouncedRecipientInfo = (input, context) => {
    const entries = {};
    if (input.Recipient != null) {
        entries["Recipient"] = input.Recipient;
    }
    if (input.RecipientArn != null) {
        entries["RecipientArn"] = input.RecipientArn;
    }
    if (input.BounceType != null) {
        entries["BounceType"] = input.BounceType;
    }
    if (input.RecipientDsnFields != null) {
        const memberEntries = se_RecipientDsnFields(input.RecipientDsnFields, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RecipientDsnFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_BouncedRecipientInfoList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_BouncedRecipientInfo(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_BulkEmailDestination = (input, context) => {
    const entries = {};
    if (input.Destination != null) {
        const memberEntries = se_Destination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTags != null) {
        const memberEntries = se_MessageTagList(input.ReplacementTags, context);
        if (input.ReplacementTags?.length === 0) {
            entries.ReplacementTags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplacementTags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplacementTemplateData != null) {
        entries["ReplacementTemplateData"] = input.ReplacementTemplateData;
    }
    return entries;
};
const se_BulkEmailDestinationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_BulkEmailDestination(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_CloneReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.OriginalRuleSetName != null) {
        entries["OriginalRuleSetName"] = input.OriginalRuleSetName;
    }
    return entries;
};
const se_CloudWatchDestination = (input, context) => {
    const entries = {};
    if (input.DimensionConfigurations != null) {
        const memberEntries = se_CloudWatchDimensionConfigurations(input.DimensionConfigurations, context);
        if (input.DimensionConfigurations?.length === 0) {
            entries.DimensionConfigurations = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DimensionConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CloudWatchDimensionConfiguration = (input, context) => {
    const entries = {};
    if (input.DimensionName != null) {
        entries["DimensionName"] = input.DimensionName;
    }
    if (input.DimensionValueSource != null) {
        entries["DimensionValueSource"] = input.DimensionValueSource;
    }
    if (input.DefaultDimensionValue != null) {
        entries["DefaultDimensionValue"] = input.DefaultDimensionValue;
    }
    return entries;
};
const se_CloudWatchDimensionConfigurations = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_CloudWatchDimensionConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_ConfigurationSet = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    return entries;
};
const se_ConfigurationSetAttributeList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_Content = (input, context) => {
    const entries = {};
    if (input.Data != null) {
        entries["Data"] = input.Data;
    }
    if (input.Charset != null) {
        entries["Charset"] = input.Charset;
    }
    return entries;
};
const se_CreateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination != null) {
        const memberEntries = se_EventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSet != null) {
        const memberEntries = se_ConfigurationSet(input.ConfigurationSet, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConfigurationSet.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions != null) {
        const memberEntries = se_TrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.FromEmailAddress != null) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.TemplateSubject != null) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    if (input.TemplateContent != null) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.SuccessRedirectionURL != null) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.FailureRedirectionURL != null) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    return entries;
};
const se_CreateReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.Filter != null) {
        const memberEntries = se_ReceiptFilter(input.Filter, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filter.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.After != null) {
        entries["After"] = input.After;
    }
    if (input.Rule != null) {
        const memberEntries = se_ReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Rule.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_CreateReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const se_CreateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template != null) {
        const memberEntries = se_Template(input.Template, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Template.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_DeleteConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestinationName != null) {
        entries["EventDestinationName"] = input.EventDestinationName;
    }
    return entries;
};
const se_DeleteConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const se_DeleteConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const se_DeleteCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const se_DeleteIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName != null) {
        entries["PolicyName"] = input.PolicyName;
    }
    return entries;
};
const se_DeleteIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const se_DeleteReceiptFilterRequest = (input, context) => {
    const entries = {};
    if (input.FilterName != null) {
        entries["FilterName"] = input.FilterName;
    }
    return entries;
};
const se_DeleteReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName != null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
const se_DeleteReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const se_DeleteTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const se_DeleteVerifiedEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress != null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const se_DeliveryOptions = (input, context) => {
    const entries = {};
    if (input.TlsPolicy != null) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    return entries;
};
const se_DescribeActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_DescribeConfigurationSetRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.ConfigurationSetAttributeNames != null) {
        const memberEntries = se_ConfigurationSetAttributeList(input.ConfigurationSetAttributeNames, context);
        if (input.ConfigurationSetAttributeNames?.length === 0) {
            entries.ConfigurationSetAttributeNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConfigurationSetAttributeNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_DescribeReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName != null) {
        entries["RuleName"] = input.RuleName;
    }
    return entries;
};
const se_DescribeReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const se_Destination = (input, context) => {
    const entries = {};
    if (input.ToAddresses != null) {
        const memberEntries = se_AddressList(input.ToAddresses, context);
        if (input.ToAddresses?.length === 0) {
            entries.ToAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CcAddresses != null) {
        const memberEntries = se_AddressList(input.CcAddresses, context);
        if (input.CcAddresses?.length === 0) {
            entries.CcAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CcAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BccAddresses != null) {
        const memberEntries = se_AddressList(input.BccAddresses, context);
        if (input.BccAddresses?.length === 0) {
            entries.BccAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BccAddresses.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_EventDestination = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.MatchingEventTypes != null) {
        const memberEntries = se_EventTypes(input.MatchingEventTypes, context);
        if (input.MatchingEventTypes?.length === 0) {
            entries.MatchingEventTypes = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MatchingEventTypes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.KinesisFirehoseDestination != null) {
        const memberEntries = se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `KinesisFirehoseDestination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CloudWatchDestination != null) {
        const memberEntries = se_CloudWatchDestination(input.CloudWatchDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudWatchDestination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SNSDestination != null) {
        const memberEntries = se_SNSDestination(input.SNSDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SNSDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_EventTypes = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_ExtensionField = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const se_ExtensionFieldList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ExtensionField(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_GetCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const se_GetIdentityDkimAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities != null) {
        const memberEntries = se_IdentityList(input.Identities, context);
        if (input.Identities?.length === 0) {
            entries.Identities = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetIdentityMailFromDomainAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities != null) {
        const memberEntries = se_IdentityList(input.Identities, context);
        if (input.Identities?.length === 0) {
            entries.Identities = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetIdentityNotificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities != null) {
        const memberEntries = se_IdentityList(input.Identities, context);
        if (input.Identities?.length === 0) {
            entries.Identities = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyNames != null) {
        const memberEntries = se_PolicyNameList(input.PolicyNames, context);
        if (input.PolicyNames?.length === 0) {
            entries.PolicyNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetIdentityVerificationAttributesRequest = (input, context) => {
    const entries = {};
    if (input.Identities != null) {
        const memberEntries = se_IdentityList(input.Identities, context);
        if (input.Identities?.length === 0) {
            entries.Identities = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    return entries;
};
const se_IdentityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_KinesisFirehoseDestination = (input, context) => {
    const entries = {};
    if (input.IAMRoleARN != null) {
        entries["IAMRoleARN"] = input.IAMRoleARN;
    }
    if (input.DeliveryStreamARN != null) {
        entries["DeliveryStreamARN"] = input.DeliveryStreamARN;
    }
    return entries;
};
const se_LambdaAction = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.FunctionArn != null) {
        entries["FunctionArn"] = input.FunctionArn;
    }
    if (input.InvocationType != null) {
        entries["InvocationType"] = input.InvocationType;
    }
    return entries;
};
const se_ListConfigurationSetsRequest = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems != null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const se_ListCustomVerificationEmailTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults != null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const se_ListIdentitiesRequest = (input, context) => {
    const entries = {};
    if (input.IdentityType != null) {
        entries["IdentityType"] = input.IdentityType;
    }
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems != null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const se_ListIdentityPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    return entries;
};
const se_ListReceiptFiltersRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_ListReceiptRuleSetsRequest = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const se_ListTemplatesRequest = (input, context) => {
    const entries = {};
    if (input.NextToken != null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxItems != null) {
        entries["MaxItems"] = input.MaxItems;
    }
    return entries;
};
const se_Message = (input, context) => {
    const entries = {};
    if (input.Subject != null) {
        const memberEntries = se_Content(input.Subject, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Subject.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Body != null) {
        const memberEntries = se_Body(input.Body, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Body.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_MessageDsn = (input, context) => {
    const entries = {};
    if (input.ReportingMta != null) {
        entries["ReportingMta"] = input.ReportingMta;
    }
    if (input.ArrivalDate != null) {
        entries["ArrivalDate"] = input.ArrivalDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields != null) {
        const memberEntries = se_ExtensionFieldList(input.ExtensionFields, context);
        if (input.ExtensionFields?.length === 0) {
            entries.ExtensionFields = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_MessageTag = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Value != null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const se_MessageTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_MessageTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PolicyNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_PutConfigurationSetDeliveryOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DeliveryOptions != null) {
        const memberEntries = se_DeliveryOptions(input.DeliveryOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DeliveryOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_PutIdentityPolicyRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.PolicyName != null) {
        entries["PolicyName"] = input.PolicyName;
    }
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    return entries;
};
const se_RawMessage = (input, context) => {
    const entries = {};
    if (input.Data != null) {
        entries["Data"] = context.base64Encoder(input.Data);
    }
    return entries;
};
const se_ReceiptAction = (input, context) => {
    const entries = {};
    if (input.S3Action != null) {
        const memberEntries = se_S3Action(input.S3Action, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `S3Action.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BounceAction != null) {
        const memberEntries = se_BounceAction(input.BounceAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BounceAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.WorkmailAction != null) {
        const memberEntries = se_WorkmailAction(input.WorkmailAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `WorkmailAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LambdaAction != null) {
        const memberEntries = se_LambdaAction(input.LambdaAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LambdaAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.StopAction != null) {
        const memberEntries = se_StopAction(input.StopAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StopAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AddHeaderAction != null) {
        const memberEntries = se_AddHeaderAction(input.AddHeaderAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AddHeaderAction.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SNSAction != null) {
        const memberEntries = se_SNSAction(input.SNSAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SNSAction.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_ReceiptActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ReceiptAction(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_ReceiptFilter = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.IpFilter != null) {
        const memberEntries = se_ReceiptIpFilter(input.IpFilter, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IpFilter.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_ReceiptIpFilter = (input, context) => {
    const entries = {};
    if (input.Policy != null) {
        entries["Policy"] = input.Policy;
    }
    if (input.Cidr != null) {
        entries["Cidr"] = input.Cidr;
    }
    return entries;
};
const se_ReceiptRule = (input, context) => {
    const entries = {};
    if (input.Name != null) {
        entries["Name"] = input.Name;
    }
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    if (input.TlsPolicy != null) {
        entries["TlsPolicy"] = input.TlsPolicy;
    }
    if (input.Recipients != null) {
        const memberEntries = se_RecipientsList(input.Recipients, context);
        if (input.Recipients?.length === 0) {
            entries.Recipients = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Recipients.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Actions != null) {
        const memberEntries = se_ReceiptActionsList(input.Actions, context);
        if (input.Actions?.length === 0) {
            entries.Actions = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Actions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ScanEnabled != null) {
        entries["ScanEnabled"] = input.ScanEnabled;
    }
    return entries;
};
const se_ReceiptRuleNamesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_RecipientDsnFields = (input, context) => {
    const entries = {};
    if (input.FinalRecipient != null) {
        entries["FinalRecipient"] = input.FinalRecipient;
    }
    if (input.Action != null) {
        entries["Action"] = input.Action;
    }
    if (input.RemoteMta != null) {
        entries["RemoteMta"] = input.RemoteMta;
    }
    if (input.Status != null) {
        entries["Status"] = input.Status;
    }
    if (input.DiagnosticCode != null) {
        entries["DiagnosticCode"] = input.DiagnosticCode;
    }
    if (input.LastAttemptDate != null) {
        entries["LastAttemptDate"] = input.LastAttemptDate.toISOString().split(".")[0] + "Z";
    }
    if (input.ExtensionFields != null) {
        const memberEntries = se_ExtensionFieldList(input.ExtensionFields, context);
        if (input.ExtensionFields?.length === 0) {
            entries.ExtensionFields = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExtensionFields.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_RecipientsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_ReorderReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleNames != null) {
        const memberEntries = se_ReceiptRuleNamesList(input.RuleNames, context);
        if (input.RuleNames?.length === 0) {
            entries.RuleNames = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RuleNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_S3Action = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.BucketName != null) {
        entries["BucketName"] = input.BucketName;
    }
    if (input.ObjectKeyPrefix != null) {
        entries["ObjectKeyPrefix"] = input.ObjectKeyPrefix;
    }
    if (input.KmsKeyArn != null) {
        entries["KmsKeyArn"] = input.KmsKeyArn;
    }
    return entries;
};
const se_SendBounceRequest = (input, context) => {
    const entries = {};
    if (input.OriginalMessageId != null) {
        entries["OriginalMessageId"] = input.OriginalMessageId;
    }
    if (input.BounceSender != null) {
        entries["BounceSender"] = input.BounceSender;
    }
    if (input.Explanation != null) {
        entries["Explanation"] = input.Explanation;
    }
    if (input.MessageDsn != null) {
        const memberEntries = se_MessageDsn(input.MessageDsn, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageDsn.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BouncedRecipientInfoList != null) {
        const memberEntries = se_BouncedRecipientInfoList(input.BouncedRecipientInfoList, context);
        if (input.BouncedRecipientInfoList?.length === 0) {
            entries.BouncedRecipientInfoList = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `BouncedRecipientInfoList.${key}`;
            entries[loc] = value;
        });
    }
    if (input.BounceSenderArn != null) {
        entries["BounceSenderArn"] = input.BounceSenderArn;
    }
    return entries;
};
const se_SendBulkTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source != null) {
        entries["Source"] = input.Source;
    }
    if (input.SourceArn != null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReplyToAddresses != null) {
        const memberEntries = se_AddressList(input.ReplyToAddresses, context);
        if (input.ReplyToAddresses?.length === 0) {
            entries.ReplyToAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath != null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.ReturnPathArn != null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.DefaultTags != null) {
        const memberEntries = se_MessageTagList(input.DefaultTags, context);
        if (input.DefaultTags?.length === 0) {
            entries.DefaultTags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DefaultTags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Template != null) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn != null) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    if (input.DefaultTemplateData != null) {
        entries["DefaultTemplateData"] = input.DefaultTemplateData;
    }
    if (input.Destinations != null) {
        const memberEntries = se_BulkEmailDestinationList(input.Destinations, context);
        if (input.Destinations?.length === 0) {
            entries.Destinations = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destinations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_SendCustomVerificationEmailRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress != null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const se_SendEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source != null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination != null) {
        const memberEntries = se_Destination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Message != null) {
        const memberEntries = se_Message(input.Message, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Message.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses != null) {
        const memberEntries = se_AddressList(input.ReplyToAddresses, context);
        if (input.ReplyToAddresses?.length === 0) {
            entries.ReplyToAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath != null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.SourceArn != null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn != null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags != null) {
        const memberEntries = se_MessageTagList(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const se_SendRawEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source != null) {
        entries["Source"] = input.Source;
    }
    if (input.Destinations != null) {
        const memberEntries = se_AddressList(input.Destinations, context);
        if (input.Destinations?.length === 0) {
            entries.Destinations = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destinations.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RawMessage != null) {
        const memberEntries = se_RawMessage(input.RawMessage, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RawMessage.${key}`;
            entries[loc] = value;
        });
    }
    if (input.FromArn != null) {
        entries["FromArn"] = input.FromArn;
    }
    if (input.SourceArn != null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn != null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags != null) {
        const memberEntries = se_MessageTagList(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    return entries;
};
const se_SendTemplatedEmailRequest = (input, context) => {
    const entries = {};
    if (input.Source != null) {
        entries["Source"] = input.Source;
    }
    if (input.Destination != null) {
        const memberEntries = se_Destination(input.Destination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Destination.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplyToAddresses != null) {
        const memberEntries = se_AddressList(input.ReplyToAddresses, context);
        if (input.ReplyToAddresses?.length === 0) {
            entries.ReplyToAddresses = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplyToAddresses.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnPath != null) {
        entries["ReturnPath"] = input.ReturnPath;
    }
    if (input.SourceArn != null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.ReturnPathArn != null) {
        entries["ReturnPathArn"] = input.ReturnPathArn;
    }
    if (input.Tags != null) {
        const memberEntries = se_MessageTagList(input.Tags, context);
        if (input.Tags?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Template != null) {
        entries["Template"] = input.Template;
    }
    if (input.TemplateArn != null) {
        entries["TemplateArn"] = input.TemplateArn;
    }
    if (input.TemplateData != null) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
const se_SetActiveReceiptRuleSetRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    return entries;
};
const se_SetIdentityDkimEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.DkimEnabled != null) {
        entries["DkimEnabled"] = input.DkimEnabled;
    }
    return entries;
};
const se_SetIdentityFeedbackForwardingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.ForwardingEnabled != null) {
        entries["ForwardingEnabled"] = input.ForwardingEnabled;
    }
    return entries;
};
const se_SetIdentityHeadersInNotificationsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType != null) {
        entries["NotificationType"] = input.NotificationType;
    }
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const se_SetIdentityMailFromDomainRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.MailFromDomain != null) {
        entries["MailFromDomain"] = input.MailFromDomain;
    }
    if (input.BehaviorOnMXFailure != null) {
        entries["BehaviorOnMXFailure"] = input.BehaviorOnMXFailure;
    }
    return entries;
};
const se_SetIdentityNotificationTopicRequest = (input, context) => {
    const entries = {};
    if (input.Identity != null) {
        entries["Identity"] = input.Identity;
    }
    if (input.NotificationType != null) {
        entries["NotificationType"] = input.NotificationType;
    }
    if (input.SnsTopic != null) {
        entries["SnsTopic"] = input.SnsTopic;
    }
    return entries;
};
const se_SetReceiptRulePositionRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.RuleName != null) {
        entries["RuleName"] = input.RuleName;
    }
    if (input.After != null) {
        entries["After"] = input.After;
    }
    return entries;
};
const se_SNSAction = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Encoding != null) {
        entries["Encoding"] = input.Encoding;
    }
    return entries;
};
const se_SNSDestination = (input, context) => {
    const entries = {};
    if (input.TopicARN != null) {
        entries["TopicARN"] = input.TopicARN;
    }
    return entries;
};
const se_StopAction = (input, context) => {
    const entries = {};
    if (input.Scope != null) {
        entries["Scope"] = input.Scope;
    }
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const se_Template = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.SubjectPart != null) {
        entries["SubjectPart"] = input.SubjectPart;
    }
    if (input.TextPart != null) {
        entries["TextPart"] = input.TextPart;
    }
    if (input.HtmlPart != null) {
        entries["HtmlPart"] = input.HtmlPart;
    }
    return entries;
};
const se_TestRenderTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.TemplateData != null) {
        entries["TemplateData"] = input.TemplateData;
    }
    return entries;
};
const se_TrackingOptions = (input, context) => {
    const entries = {};
    if (input.CustomRedirectDomain != null) {
        entries["CustomRedirectDomain"] = input.CustomRedirectDomain;
    }
    return entries;
};
const se_UpdateAccountSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const se_UpdateConfigurationSetEventDestinationRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.EventDestination != null) {
        const memberEntries = se_EventDestination(input.EventDestination, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventDestination.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UpdateConfigurationSetReputationMetricsEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const se_UpdateConfigurationSetSendingEnabledRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.Enabled != null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const se_UpdateConfigurationSetTrackingOptionsRequest = (input, context) => {
    const entries = {};
    if (input.ConfigurationSetName != null) {
        entries["ConfigurationSetName"] = input.ConfigurationSetName;
    }
    if (input.TrackingOptions != null) {
        const memberEntries = se_TrackingOptions(input.TrackingOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TrackingOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UpdateCustomVerificationEmailTemplateRequest = (input, context) => {
    const entries = {};
    if (input.TemplateName != null) {
        entries["TemplateName"] = input.TemplateName;
    }
    if (input.FromEmailAddress != null) {
        entries["FromEmailAddress"] = input.FromEmailAddress;
    }
    if (input.TemplateSubject != null) {
        entries["TemplateSubject"] = input.TemplateSubject;
    }
    if (input.TemplateContent != null) {
        entries["TemplateContent"] = input.TemplateContent;
    }
    if (input.SuccessRedirectionURL != null) {
        entries["SuccessRedirectionURL"] = input.SuccessRedirectionURL;
    }
    if (input.FailureRedirectionURL != null) {
        entries["FailureRedirectionURL"] = input.FailureRedirectionURL;
    }
    return entries;
};
const se_UpdateReceiptRuleRequest = (input, context) => {
    const entries = {};
    if (input.RuleSetName != null) {
        entries["RuleSetName"] = input.RuleSetName;
    }
    if (input.Rule != null) {
        const memberEntries = se_ReceiptRule(input.Rule, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Rule.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_UpdateTemplateRequest = (input, context) => {
    const entries = {};
    if (input.Template != null) {
        const memberEntries = se_Template(input.Template, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Template.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_VerifyDomainDkimRequest = (input, context) => {
    const entries = {};
    if (input.Domain != null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const se_VerifyDomainIdentityRequest = (input, context) => {
    const entries = {};
    if (input.Domain != null) {
        entries["Domain"] = input.Domain;
    }
    return entries;
};
const se_VerifyEmailAddressRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress != null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const se_VerifyEmailIdentityRequest = (input, context) => {
    const entries = {};
    if (input.EmailAddress != null) {
        entries["EmailAddress"] = input.EmailAddress;
    }
    return entries;
};
const se_WorkmailAction = (input, context) => {
    const entries = {};
    if (input.TopicArn != null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.OrganizationArn != null) {
        entries["OrganizationArn"] = input.OrganizationArn;
    }
    return entries;
};
const de_AccountSendingPausedException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_AddHeaderAction = (output, context) => {
    const contents = {};
    if (output["HeaderName"] !== undefined) {
        contents.HeaderName = (0, smithy_client_1.expectString)(output["HeaderName"]);
    }
    if (output["HeaderValue"] !== undefined) {
        contents.HeaderValue = (0, smithy_client_1.expectString)(output["HeaderValue"]);
    }
    return contents;
};
const de_AddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_AlreadyExistsException = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_BounceAction = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    if (output["SmtpReplyCode"] !== undefined) {
        contents.SmtpReplyCode = (0, smithy_client_1.expectString)(output["SmtpReplyCode"]);
    }
    if (output["StatusCode"] !== undefined) {
        contents.StatusCode = (0, smithy_client_1.expectString)(output["StatusCode"]);
    }
    if (output["Message"] !== undefined) {
        contents.Message = (0, smithy_client_1.expectString)(output["Message"]);
    }
    if (output["Sender"] !== undefined) {
        contents.Sender = (0, smithy_client_1.expectString)(output["Sender"]);
    }
    return contents;
};
const de_BulkEmailDestinationStatus = (output, context) => {
    const contents = {};
    if (output["Status"] !== undefined) {
        contents.Status = (0, smithy_client_1.expectString)(output["Status"]);
    }
    if (output["Error"] !== undefined) {
        contents.Error = (0, smithy_client_1.expectString)(output["Error"]);
    }
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_BulkEmailDestinationStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BulkEmailDestinationStatus(entry, context);
    });
};
const de_CannotDeleteException = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_CloneReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CloudWatchDestination = (output, context) => {
    const contents = {};
    if (output.DimensionConfigurations === "") {
        contents.DimensionConfigurations = [];
    }
    else if (output["DimensionConfigurations"] !== undefined &&
        output["DimensionConfigurations"]["member"] !== undefined) {
        contents.DimensionConfigurations = de_CloudWatchDimensionConfigurations((0, smithy_client_1.getArrayIfSingleItem)(output["DimensionConfigurations"]["member"]), context);
    }
    return contents;
};
const de_CloudWatchDimensionConfiguration = (output, context) => {
    const contents = {};
    if (output["DimensionName"] !== undefined) {
        contents.DimensionName = (0, smithy_client_1.expectString)(output["DimensionName"]);
    }
    if (output["DimensionValueSource"] !== undefined) {
        contents.DimensionValueSource = (0, smithy_client_1.expectString)(output["DimensionValueSource"]);
    }
    if (output["DefaultDimensionValue"] !== undefined) {
        contents.DefaultDimensionValue = (0, smithy_client_1.expectString)(output["DefaultDimensionValue"]);
    }
    return contents;
};
const de_CloudWatchDimensionConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CloudWatchDimensionConfiguration(entry, context);
    });
};
const de_ConfigurationSet = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    return contents;
};
const de_ConfigurationSetAlreadyExistsException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_ConfigurationSetDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_ConfigurationSets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ConfigurationSet(entry, context);
    });
};
const de_ConfigurationSetSendingPausedException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_CreateConfigurationSetEventDestinationResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateConfigurationSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateConfigurationSetTrackingOptionsResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateReceiptFilterResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateReceiptRuleResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CreateTemplateResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_CustomVerificationEmailInvalidContentException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_CustomVerificationEmailTemplate = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = (0, smithy_client_1.expectString)(output["FromEmailAddress"]);
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = (0, smithy_client_1.expectString)(output["TemplateSubject"]);
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = (0, smithy_client_1.expectString)(output["SuccessRedirectionURL"]);
    }
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = (0, smithy_client_1.expectString)(output["FailureRedirectionURL"]);
    }
    return contents;
};
const de_CustomVerificationEmailTemplateAlreadyExistsException = (output, context) => {
    const contents = {};
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName = (0, smithy_client_1.expectString)(output["CustomVerificationEmailTemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_CustomVerificationEmailTemplateDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["CustomVerificationEmailTemplateName"] !== undefined) {
        contents.CustomVerificationEmailTemplateName = (0, smithy_client_1.expectString)(output["CustomVerificationEmailTemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_CustomVerificationEmailTemplates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CustomVerificationEmailTemplate(entry, context);
    });
};
const de_DeleteConfigurationSetEventDestinationResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteConfigurationSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteConfigurationSetTrackingOptionsResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteIdentityPolicyResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteIdentityResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteReceiptFilterResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteReceiptRuleResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeleteTemplateResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_DeliveryOptions = (output, context) => {
    const contents = {};
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = (0, smithy_client_1.expectString)(output["TlsPolicy"]);
    }
    return contents;
};
const de_DescribeActiveReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    if (output["Metadata"] !== undefined) {
        contents.Metadata = de_ReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = de_ReceiptRulesList((0, smithy_client_1.getArrayIfSingleItem)(output["Rules"]["member"]), context);
    }
    return contents;
};
const de_DescribeConfigurationSetResponse = (output, context) => {
    const contents = {};
    if (output["ConfigurationSet"] !== undefined) {
        contents.ConfigurationSet = de_ConfigurationSet(output["ConfigurationSet"], context);
    }
    if (output.EventDestinations === "") {
        contents.EventDestinations = [];
    }
    else if (output["EventDestinations"] !== undefined && output["EventDestinations"]["member"] !== undefined) {
        contents.EventDestinations = de_EventDestinations((0, smithy_client_1.getArrayIfSingleItem)(output["EventDestinations"]["member"]), context);
    }
    if (output["TrackingOptions"] !== undefined) {
        contents.TrackingOptions = de_TrackingOptions(output["TrackingOptions"], context);
    }
    if (output["DeliveryOptions"] !== undefined) {
        contents.DeliveryOptions = de_DeliveryOptions(output["DeliveryOptions"], context);
    }
    if (output["ReputationOptions"] !== undefined) {
        contents.ReputationOptions = de_ReputationOptions(output["ReputationOptions"], context);
    }
    return contents;
};
const de_DescribeReceiptRuleResponse = (output, context) => {
    const contents = {};
    if (output["Rule"] !== undefined) {
        contents.Rule = de_ReceiptRule(output["Rule"], context);
    }
    return contents;
};
const de_DescribeReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    if (output["Metadata"] !== undefined) {
        contents.Metadata = de_ReceiptRuleSetMetadata(output["Metadata"], context);
    }
    if (output.Rules === "") {
        contents.Rules = [];
    }
    else if (output["Rules"] !== undefined && output["Rules"]["member"] !== undefined) {
        contents.Rules = de_ReceiptRulesList((0, smithy_client_1.getArrayIfSingleItem)(output["Rules"]["member"]), context);
    }
    return contents;
};
const de_DkimAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = de_IdentityDkimAttributes(pair["value"], context);
        return acc;
    }, {});
};
const de_EventDestination = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output.MatchingEventTypes === "") {
        contents.MatchingEventTypes = [];
    }
    else if (output["MatchingEventTypes"] !== undefined && output["MatchingEventTypes"]["member"] !== undefined) {
        contents.MatchingEventTypes = de_EventTypes((0, smithy_client_1.getArrayIfSingleItem)(output["MatchingEventTypes"]["member"]), context);
    }
    if (output["KinesisFirehoseDestination"] !== undefined) {
        contents.KinesisFirehoseDestination = de_KinesisFirehoseDestination(output["KinesisFirehoseDestination"], context);
    }
    if (output["CloudWatchDestination"] !== undefined) {
        contents.CloudWatchDestination = de_CloudWatchDestination(output["CloudWatchDestination"], context);
    }
    if (output["SNSDestination"] !== undefined) {
        contents.SNSDestination = de_SNSDestination(output["SNSDestination"], context);
    }
    return contents;
};
const de_EventDestinationAlreadyExistsException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = (0, smithy_client_1.expectString)(output["EventDestinationName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_EventDestinationDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = (0, smithy_client_1.expectString)(output["EventDestinationName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_EventDestinations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_EventDestination(entry, context);
    });
};
const de_EventTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_FromEmailAddressNotVerifiedException = (output, context) => {
    const contents = {};
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = (0, smithy_client_1.expectString)(output["FromEmailAddress"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_GetAccountSendingEnabledResponse = (output, context) => {
    const contents = {};
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    return contents;
};
const de_GetCustomVerificationEmailTemplateResponse = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["FromEmailAddress"] !== undefined) {
        contents.FromEmailAddress = (0, smithy_client_1.expectString)(output["FromEmailAddress"]);
    }
    if (output["TemplateSubject"] !== undefined) {
        contents.TemplateSubject = (0, smithy_client_1.expectString)(output["TemplateSubject"]);
    }
    if (output["TemplateContent"] !== undefined) {
        contents.TemplateContent = (0, smithy_client_1.expectString)(output["TemplateContent"]);
    }
    if (output["SuccessRedirectionURL"] !== undefined) {
        contents.SuccessRedirectionURL = (0, smithy_client_1.expectString)(output["SuccessRedirectionURL"]);
    }
    if (output["FailureRedirectionURL"] !== undefined) {
        contents.FailureRedirectionURL = (0, smithy_client_1.expectString)(output["FailureRedirectionURL"]);
    }
    return contents;
};
const de_GetIdentityDkimAttributesResponse = (output, context) => {
    const contents = {};
    if (output.DkimAttributes === "") {
        contents.DkimAttributes = {};
    }
    else if (output["DkimAttributes"] !== undefined && output["DkimAttributes"]["entry"] !== undefined) {
        contents.DkimAttributes = de_DkimAttributes((0, smithy_client_1.getArrayIfSingleItem)(output["DkimAttributes"]["entry"]), context);
    }
    return contents;
};
const de_GetIdentityMailFromDomainAttributesResponse = (output, context) => {
    const contents = {};
    if (output.MailFromDomainAttributes === "") {
        contents.MailFromDomainAttributes = {};
    }
    else if (output["MailFromDomainAttributes"] !== undefined &&
        output["MailFromDomainAttributes"]["entry"] !== undefined) {
        contents.MailFromDomainAttributes = de_MailFromDomainAttributes((0, smithy_client_1.getArrayIfSingleItem)(output["MailFromDomainAttributes"]["entry"]), context);
    }
    return contents;
};
const de_GetIdentityNotificationAttributesResponse = (output, context) => {
    const contents = {};
    if (output.NotificationAttributes === "") {
        contents.NotificationAttributes = {};
    }
    else if (output["NotificationAttributes"] !== undefined &&
        output["NotificationAttributes"]["entry"] !== undefined) {
        contents.NotificationAttributes = de_NotificationAttributes((0, smithy_client_1.getArrayIfSingleItem)(output["NotificationAttributes"]["entry"]), context);
    }
    return contents;
};
const de_GetIdentityPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.Policies === "") {
        contents.Policies = {};
    }
    else if (output["Policies"] !== undefined && output["Policies"]["entry"] !== undefined) {
        contents.Policies = de_PolicyMap((0, smithy_client_1.getArrayIfSingleItem)(output["Policies"]["entry"]), context);
    }
    return contents;
};
const de_GetIdentityVerificationAttributesResponse = (output, context) => {
    const contents = {};
    if (output.VerificationAttributes === "") {
        contents.VerificationAttributes = {};
    }
    else if (output["VerificationAttributes"] !== undefined &&
        output["VerificationAttributes"]["entry"] !== undefined) {
        contents.VerificationAttributes = de_VerificationAttributes((0, smithy_client_1.getArrayIfSingleItem)(output["VerificationAttributes"]["entry"]), context);
    }
    return contents;
};
const de_GetSendQuotaResponse = (output, context) => {
    const contents = {};
    if (output["Max24HourSend"] !== undefined) {
        contents.Max24HourSend = (0, smithy_client_1.strictParseFloat)(output["Max24HourSend"]);
    }
    if (output["MaxSendRate"] !== undefined) {
        contents.MaxSendRate = (0, smithy_client_1.strictParseFloat)(output["MaxSendRate"]);
    }
    if (output["SentLast24Hours"] !== undefined) {
        contents.SentLast24Hours = (0, smithy_client_1.strictParseFloat)(output["SentLast24Hours"]);
    }
    return contents;
};
const de_GetSendStatisticsResponse = (output, context) => {
    const contents = {};
    if (output.SendDataPoints === "") {
        contents.SendDataPoints = [];
    }
    else if (output["SendDataPoints"] !== undefined && output["SendDataPoints"]["member"] !== undefined) {
        contents.SendDataPoints = de_SendDataPointList((0, smithy_client_1.getArrayIfSingleItem)(output["SendDataPoints"]["member"]), context);
    }
    return contents;
};
const de_GetTemplateResponse = (output, context) => {
    const contents = {};
    if (output["Template"] !== undefined) {
        contents.Template = de_Template(output["Template"], context);
    }
    return contents;
};
const de_IdentityDkimAttributes = (output, context) => {
    const contents = {};
    if (output["DkimEnabled"] !== undefined) {
        contents.DkimEnabled = (0, smithy_client_1.parseBoolean)(output["DkimEnabled"]);
    }
    if (output["DkimVerificationStatus"] !== undefined) {
        contents.DkimVerificationStatus = (0, smithy_client_1.expectString)(output["DkimVerificationStatus"]);
    }
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    else if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
        contents.DkimTokens = de_VerificationTokenList((0, smithy_client_1.getArrayIfSingleItem)(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
const de_IdentityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_IdentityMailFromDomainAttributes = (output, context) => {
    const contents = {};
    if (output["MailFromDomain"] !== undefined) {
        contents.MailFromDomain = (0, smithy_client_1.expectString)(output["MailFromDomain"]);
    }
    if (output["MailFromDomainStatus"] !== undefined) {
        contents.MailFromDomainStatus = (0, smithy_client_1.expectString)(output["MailFromDomainStatus"]);
    }
    if (output["BehaviorOnMXFailure"] !== undefined) {
        contents.BehaviorOnMXFailure = (0, smithy_client_1.expectString)(output["BehaviorOnMXFailure"]);
    }
    return contents;
};
const de_IdentityNotificationAttributes = (output, context) => {
    const contents = {};
    if (output["BounceTopic"] !== undefined) {
        contents.BounceTopic = (0, smithy_client_1.expectString)(output["BounceTopic"]);
    }
    if (output["ComplaintTopic"] !== undefined) {
        contents.ComplaintTopic = (0, smithy_client_1.expectString)(output["ComplaintTopic"]);
    }
    if (output["DeliveryTopic"] !== undefined) {
        contents.DeliveryTopic = (0, smithy_client_1.expectString)(output["DeliveryTopic"]);
    }
    if (output["ForwardingEnabled"] !== undefined) {
        contents.ForwardingEnabled = (0, smithy_client_1.parseBoolean)(output["ForwardingEnabled"]);
    }
    if (output["HeadersInBounceNotificationsEnabled"] !== undefined) {
        contents.HeadersInBounceNotificationsEnabled = (0, smithy_client_1.parseBoolean)(output["HeadersInBounceNotificationsEnabled"]);
    }
    if (output["HeadersInComplaintNotificationsEnabled"] !== undefined) {
        contents.HeadersInComplaintNotificationsEnabled = (0, smithy_client_1.parseBoolean)(output["HeadersInComplaintNotificationsEnabled"]);
    }
    if (output["HeadersInDeliveryNotificationsEnabled"] !== undefined) {
        contents.HeadersInDeliveryNotificationsEnabled = (0, smithy_client_1.parseBoolean)(output["HeadersInDeliveryNotificationsEnabled"]);
    }
    return contents;
};
const de_IdentityVerificationAttributes = (output, context) => {
    const contents = {};
    if (output["VerificationStatus"] !== undefined) {
        contents.VerificationStatus = (0, smithy_client_1.expectString)(output["VerificationStatus"]);
    }
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = (0, smithy_client_1.expectString)(output["VerificationToken"]);
    }
    return contents;
};
const de_InvalidCloudWatchDestinationException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = (0, smithy_client_1.expectString)(output["EventDestinationName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidConfigurationSetException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidDeliveryOptionsException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidFirehoseDestinationException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = (0, smithy_client_1.expectString)(output["EventDestinationName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidLambdaFunctionException = (output, context) => {
    const contents = {};
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = (0, smithy_client_1.expectString)(output["FunctionArn"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidPolicyException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidRenderingParameterException = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidS3ConfigurationException = (output, context) => {
    const contents = {};
    if (output["Bucket"] !== undefined) {
        contents.Bucket = (0, smithy_client_1.expectString)(output["Bucket"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidSNSDestinationException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["EventDestinationName"] !== undefined) {
        contents.EventDestinationName = (0, smithy_client_1.expectString)(output["EventDestinationName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidSnsTopicException = (output, context) => {
    const contents = {};
    if (output["Topic"] !== undefined) {
        contents.Topic = (0, smithy_client_1.expectString)(output["Topic"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidTemplateException = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_InvalidTrackingOptionsException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_KinesisFirehoseDestination = (output, context) => {
    const contents = {};
    if (output["IAMRoleARN"] !== undefined) {
        contents.IAMRoleARN = (0, smithy_client_1.expectString)(output["IAMRoleARN"]);
    }
    if (output["DeliveryStreamARN"] !== undefined) {
        contents.DeliveryStreamARN = (0, smithy_client_1.expectString)(output["DeliveryStreamARN"]);
    }
    return contents;
};
const de_LambdaAction = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    if (output["FunctionArn"] !== undefined) {
        contents.FunctionArn = (0, smithy_client_1.expectString)(output["FunctionArn"]);
    }
    if (output["InvocationType"] !== undefined) {
        contents.InvocationType = (0, smithy_client_1.expectString)(output["InvocationType"]);
    }
    return contents;
};
const de_LimitExceededException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_ListConfigurationSetsResponse = (output, context) => {
    const contents = {};
    if (output.ConfigurationSets === "") {
        contents.ConfigurationSets = [];
    }
    else if (output["ConfigurationSets"] !== undefined && output["ConfigurationSets"]["member"] !== undefined) {
        contents.ConfigurationSets = de_ConfigurationSets((0, smithy_client_1.getArrayIfSingleItem)(output["ConfigurationSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = (0, smithy_client_1.expectString)(output["NextToken"]);
    }
    return contents;
};
const de_ListCustomVerificationEmailTemplatesResponse = (output, context) => {
    const contents = {};
    if (output.CustomVerificationEmailTemplates === "") {
        contents.CustomVerificationEmailTemplates = [];
    }
    else if (output["CustomVerificationEmailTemplates"] !== undefined &&
        output["CustomVerificationEmailTemplates"]["member"] !== undefined) {
        contents.CustomVerificationEmailTemplates = de_CustomVerificationEmailTemplates((0, smithy_client_1.getArrayIfSingleItem)(output["CustomVerificationEmailTemplates"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = (0, smithy_client_1.expectString)(output["NextToken"]);
    }
    return contents;
};
const de_ListIdentitiesResponse = (output, context) => {
    const contents = {};
    if (output.Identities === "") {
        contents.Identities = [];
    }
    else if (output["Identities"] !== undefined && output["Identities"]["member"] !== undefined) {
        contents.Identities = de_IdentityList((0, smithy_client_1.getArrayIfSingleItem)(output["Identities"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = (0, smithy_client_1.expectString)(output["NextToken"]);
    }
    return contents;
};
const de_ListIdentityPoliciesResponse = (output, context) => {
    const contents = {};
    if (output.PolicyNames === "") {
        contents.PolicyNames = [];
    }
    else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
        contents.PolicyNames = de_PolicyNameList((0, smithy_client_1.getArrayIfSingleItem)(output["PolicyNames"]["member"]), context);
    }
    return contents;
};
const de_ListReceiptFiltersResponse = (output, context) => {
    const contents = {};
    if (output.Filters === "") {
        contents.Filters = [];
    }
    else if (output["Filters"] !== undefined && output["Filters"]["member"] !== undefined) {
        contents.Filters = de_ReceiptFilterList((0, smithy_client_1.getArrayIfSingleItem)(output["Filters"]["member"]), context);
    }
    return contents;
};
const de_ListReceiptRuleSetsResponse = (output, context) => {
    const contents = {};
    if (output.RuleSets === "") {
        contents.RuleSets = [];
    }
    else if (output["RuleSets"] !== undefined && output["RuleSets"]["member"] !== undefined) {
        contents.RuleSets = de_ReceiptRuleSetsLists((0, smithy_client_1.getArrayIfSingleItem)(output["RuleSets"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = (0, smithy_client_1.expectString)(output["NextToken"]);
    }
    return contents;
};
const de_ListTemplatesResponse = (output, context) => {
    const contents = {};
    if (output.TemplatesMetadata === "") {
        contents.TemplatesMetadata = [];
    }
    else if (output["TemplatesMetadata"] !== undefined && output["TemplatesMetadata"]["member"] !== undefined) {
        contents.TemplatesMetadata = de_TemplateMetadataList((0, smithy_client_1.getArrayIfSingleItem)(output["TemplatesMetadata"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = (0, smithy_client_1.expectString)(output["NextToken"]);
    }
    return contents;
};
const de_ListVerifiedEmailAddressesResponse = (output, context) => {
    const contents = {};
    if (output.VerifiedEmailAddresses === "") {
        contents.VerifiedEmailAddresses = [];
    }
    else if (output["VerifiedEmailAddresses"] !== undefined &&
        output["VerifiedEmailAddresses"]["member"] !== undefined) {
        contents.VerifiedEmailAddresses = de_AddressList((0, smithy_client_1.getArrayIfSingleItem)(output["VerifiedEmailAddresses"]["member"]), context);
    }
    return contents;
};
const de_MailFromDomainAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = de_IdentityMailFromDomainAttributes(pair["value"], context);
        return acc;
    }, {});
};
const de_MailFromDomainNotVerifiedException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_MessageRejected = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_MissingRenderingAttributeException = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_NotificationAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = de_IdentityNotificationAttributes(pair["value"], context);
        return acc;
    }, {});
};
const de_PolicyMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = (0, smithy_client_1.expectString)(pair["value"]);
        return acc;
    }, {});
};
const de_PolicyNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_ProductionAccessNotGrantedException = (output, context) => {
    const contents = {};
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_PutConfigurationSetDeliveryOptionsResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_PutIdentityPolicyResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_ReceiptAction = (output, context) => {
    const contents = {};
    if (output["S3Action"] !== undefined) {
        contents.S3Action = de_S3Action(output["S3Action"], context);
    }
    if (output["BounceAction"] !== undefined) {
        contents.BounceAction = de_BounceAction(output["BounceAction"], context);
    }
    if (output["WorkmailAction"] !== undefined) {
        contents.WorkmailAction = de_WorkmailAction(output["WorkmailAction"], context);
    }
    if (output["LambdaAction"] !== undefined) {
        contents.LambdaAction = de_LambdaAction(output["LambdaAction"], context);
    }
    if (output["StopAction"] !== undefined) {
        contents.StopAction = de_StopAction(output["StopAction"], context);
    }
    if (output["AddHeaderAction"] !== undefined) {
        contents.AddHeaderAction = de_AddHeaderAction(output["AddHeaderAction"], context);
    }
    if (output["SNSAction"] !== undefined) {
        contents.SNSAction = de_SNSAction(output["SNSAction"], context);
    }
    return contents;
};
const de_ReceiptActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReceiptAction(entry, context);
    });
};
const de_ReceiptFilter = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["IpFilter"] !== undefined) {
        contents.IpFilter = de_ReceiptIpFilter(output["IpFilter"], context);
    }
    return contents;
};
const de_ReceiptFilterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReceiptFilter(entry, context);
    });
};
const de_ReceiptIpFilter = (output, context) => {
    const contents = {};
    if (output["Policy"] !== undefined) {
        contents.Policy = (0, smithy_client_1.expectString)(output["Policy"]);
    }
    if (output["Cidr"] !== undefined) {
        contents.Cidr = (0, smithy_client_1.expectString)(output["Cidr"]);
    }
    return contents;
};
const de_ReceiptRule = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = (0, smithy_client_1.parseBoolean)(output["Enabled"]);
    }
    if (output["TlsPolicy"] !== undefined) {
        contents.TlsPolicy = (0, smithy_client_1.expectString)(output["TlsPolicy"]);
    }
    if (output.Recipients === "") {
        contents.Recipients = [];
    }
    else if (output["Recipients"] !== undefined && output["Recipients"]["member"] !== undefined) {
        contents.Recipients = de_RecipientsList((0, smithy_client_1.getArrayIfSingleItem)(output["Recipients"]["member"]), context);
    }
    if (output.Actions === "") {
        contents.Actions = [];
    }
    else if (output["Actions"] !== undefined && output["Actions"]["member"] !== undefined) {
        contents.Actions = de_ReceiptActionsList((0, smithy_client_1.getArrayIfSingleItem)(output["Actions"]["member"]), context);
    }
    if (output["ScanEnabled"] !== undefined) {
        contents.ScanEnabled = (0, smithy_client_1.parseBoolean)(output["ScanEnabled"]);
    }
    return contents;
};
const de_ReceiptRuleSetMetadata = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreatedTimestamp"]));
    }
    return contents;
};
const de_ReceiptRuleSetsLists = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReceiptRuleSetMetadata(entry, context);
    });
};
const de_ReceiptRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReceiptRule(entry, context);
    });
};
const de_RecipientsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_ReorderReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_ReputationOptions = (output, context) => {
    const contents = {};
    if (output["SendingEnabled"] !== undefined) {
        contents.SendingEnabled = (0, smithy_client_1.parseBoolean)(output["SendingEnabled"]);
    }
    if (output["ReputationMetricsEnabled"] !== undefined) {
        contents.ReputationMetricsEnabled = (0, smithy_client_1.parseBoolean)(output["ReputationMetricsEnabled"]);
    }
    if (output["LastFreshStart"] !== undefined) {
        contents.LastFreshStart = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["LastFreshStart"]));
    }
    return contents;
};
const de_RuleDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_RuleSetDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_S3Action = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    if (output["BucketName"] !== undefined) {
        contents.BucketName = (0, smithy_client_1.expectString)(output["BucketName"]);
    }
    if (output["ObjectKeyPrefix"] !== undefined) {
        contents.ObjectKeyPrefix = (0, smithy_client_1.expectString)(output["ObjectKeyPrefix"]);
    }
    if (output["KmsKeyArn"] !== undefined) {
        contents.KmsKeyArn = (0, smithy_client_1.expectString)(output["KmsKeyArn"]);
    }
    return contents;
};
const de_SendBounceResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_SendBulkTemplatedEmailResponse = (output, context) => {
    const contents = {};
    if (output.Status === "") {
        contents.Status = [];
    }
    else if (output["Status"] !== undefined && output["Status"]["member"] !== undefined) {
        contents.Status = de_BulkEmailDestinationStatusList((0, smithy_client_1.getArrayIfSingleItem)(output["Status"]["member"]), context);
    }
    return contents;
};
const de_SendCustomVerificationEmailResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_SendDataPoint = (output, context) => {
    const contents = {};
    if (output["Timestamp"] !== undefined) {
        contents.Timestamp = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["Timestamp"]));
    }
    if (output["DeliveryAttempts"] !== undefined) {
        contents.DeliveryAttempts = (0, smithy_client_1.strictParseLong)(output["DeliveryAttempts"]);
    }
    if (output["Bounces"] !== undefined) {
        contents.Bounces = (0, smithy_client_1.strictParseLong)(output["Bounces"]);
    }
    if (output["Complaints"] !== undefined) {
        contents.Complaints = (0, smithy_client_1.strictParseLong)(output["Complaints"]);
    }
    if (output["Rejects"] !== undefined) {
        contents.Rejects = (0, smithy_client_1.strictParseLong)(output["Rejects"]);
    }
    return contents;
};
const de_SendDataPointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_SendDataPoint(entry, context);
    });
};
const de_SendEmailResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_SendRawEmailResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_SendTemplatedEmailResponse = (output, context) => {
    const contents = {};
    if (output["MessageId"] !== undefined) {
        contents.MessageId = (0, smithy_client_1.expectString)(output["MessageId"]);
    }
    return contents;
};
const de_SetActiveReceiptRuleSetResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetIdentityDkimEnabledResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetIdentityFeedbackForwardingEnabledResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetIdentityHeadersInNotificationsEnabledResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetIdentityMailFromDomainResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetIdentityNotificationTopicResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SetReceiptRulePositionResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_SNSAction = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    if (output["Encoding"] !== undefined) {
        contents.Encoding = (0, smithy_client_1.expectString)(output["Encoding"]);
    }
    return contents;
};
const de_SNSDestination = (output, context) => {
    const contents = {};
    if (output["TopicARN"] !== undefined) {
        contents.TopicARN = (0, smithy_client_1.expectString)(output["TopicARN"]);
    }
    return contents;
};
const de_StopAction = (output, context) => {
    const contents = {};
    if (output["Scope"] !== undefined) {
        contents.Scope = (0, smithy_client_1.expectString)(output["Scope"]);
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    return contents;
};
const de_Template = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["SubjectPart"] !== undefined) {
        contents.SubjectPart = (0, smithy_client_1.expectString)(output["SubjectPart"]);
    }
    if (output["TextPart"] !== undefined) {
        contents.TextPart = (0, smithy_client_1.expectString)(output["TextPart"]);
    }
    if (output["HtmlPart"] !== undefined) {
        contents.HtmlPart = (0, smithy_client_1.expectString)(output["HtmlPart"]);
    }
    return contents;
};
const de_TemplateDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["TemplateName"] !== undefined) {
        contents.TemplateName = (0, smithy_client_1.expectString)(output["TemplateName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_TemplateMetadata = (output, context) => {
    const contents = {};
    if (output["Name"] !== undefined) {
        contents.Name = (0, smithy_client_1.expectString)(output["Name"]);
    }
    if (output["CreatedTimestamp"] !== undefined) {
        contents.CreatedTimestamp = (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseRfc3339DateTimeWithOffset)(output["CreatedTimestamp"]));
    }
    return contents;
};
const de_TemplateMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_TemplateMetadata(entry, context);
    });
};
const de_TestRenderTemplateResponse = (output, context) => {
    const contents = {};
    if (output["RenderedTemplate"] !== undefined) {
        contents.RenderedTemplate = (0, smithy_client_1.expectString)(output["RenderedTemplate"]);
    }
    return contents;
};
const de_TrackingOptions = (output, context) => {
    const contents = {};
    if (output["CustomRedirectDomain"] !== undefined) {
        contents.CustomRedirectDomain = (0, smithy_client_1.expectString)(output["CustomRedirectDomain"]);
    }
    return contents;
};
const de_TrackingOptionsAlreadyExistsException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_TrackingOptionsDoesNotExistException = (output, context) => {
    const contents = {};
    if (output["ConfigurationSetName"] !== undefined) {
        contents.ConfigurationSetName = (0, smithy_client_1.expectString)(output["ConfigurationSetName"]);
    }
    if (output["message"] !== undefined) {
        contents.message = (0, smithy_client_1.expectString)(output["message"]);
    }
    return contents;
};
const de_UpdateConfigurationSetEventDestinationResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_UpdateConfigurationSetTrackingOptionsResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_UpdateReceiptRuleResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_UpdateTemplateResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_VerificationAttributes = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        acc[pair["key"]] = de_IdentityVerificationAttributes(pair["value"], context);
        return acc;
    }, {});
};
const de_VerificationTokenList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0, smithy_client_1.expectString)(entry);
    });
};
const de_VerifyDomainDkimResponse = (output, context) => {
    const contents = {};
    if (output.DkimTokens === "") {
        contents.DkimTokens = [];
    }
    else if (output["DkimTokens"] !== undefined && output["DkimTokens"]["member"] !== undefined) {
        contents.DkimTokens = de_VerificationTokenList((0, smithy_client_1.getArrayIfSingleItem)(output["DkimTokens"]["member"]), context);
    }
    return contents;
};
const de_VerifyDomainIdentityResponse = (output, context) => {
    const contents = {};
    if (output["VerificationToken"] !== undefined) {
        contents.VerificationToken = (0, smithy_client_1.expectString)(output["VerificationToken"]);
    }
    return contents;
};
const de_VerifyEmailIdentityResponse = (output, context) => {
    const contents = {};
    return contents;
};
const de_WorkmailAction = (output, context) => {
    const contents = {};
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = (0, smithy_client_1.expectString)(output["TopicArn"]);
    }
    if (output["OrganizationArn"] !== undefined) {
        contents.OrganizationArn = (0, smithy_client_1.expectString)(output["OrganizationArn"]);
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(SESServiceException_1.SESServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fast_xml_parser_1.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        const parsedObj = parser.parse(encoded);
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0, smithy_client_1.getValueFromTextNode)(parsedObjToReturn);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => (0, smithy_client_1.extendedEncodeURIComponent)(key) + "=" + (0, smithy_client_1.extendedEncodeURIComponent)(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};
