"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductionAccessNotGrantedException = exports.NotificationType = exports.MissingRenderingAttributeException = exports.MessageRejected = exports.MailFromDomainNotVerifiedException = exports.InvalidRenderingParameterException = exports.InvalidPolicyException = exports.InvalidDeliveryOptionsException = exports.IdentityType = exports.TemplateDoesNotExistException = exports.VerificationStatus = exports.TrackingOptionsDoesNotExistException = exports.EventDestinationDoesNotExistException = exports.CustomVerificationEmailTemplateDoesNotExistException = exports.CustomMailFromStatus = exports.InvalidTemplateException = exports.RuleDoesNotExistException = exports.InvalidSnsTopicException = exports.InvalidS3ConfigurationException = exports.InvalidLambdaFunctionException = exports.TlsPolicy = exports.StopScope = exports.SNSActionEncoding = exports.InvocationType = exports.ReceiptFilterPolicy = exports.FromEmailAddressNotVerifiedException = exports.CustomVerificationEmailTemplateAlreadyExistsException = exports.CustomVerificationEmailInvalidContentException = exports.TrackingOptionsAlreadyExistsException = exports.InvalidTrackingOptionsException = exports.InvalidSNSDestinationException = exports.InvalidFirehoseDestinationException = exports.InvalidCloudWatchDestinationException = exports.EventDestinationAlreadyExistsException = exports.EventType = exports.InvalidConfigurationSetException = exports.ConfigurationSetSendingPausedException = exports.ConfigurationSetDoesNotExistException = exports.ConfigurationSetAttribute = exports.ConfigurationSetAlreadyExistsException = exports.DimensionValueSource = exports.RuleSetDoesNotExistException = exports.LimitExceededException = exports.CannotDeleteException = exports.BulkEmailStatus = exports.DsnAction = exports.BounceType = exports.BehaviorOnMXFailure = exports.AlreadyExistsException = exports.AccountSendingPausedException = void 0;
const SESServiceException_1 = require("./SESServiceException");
class AccountSendingPausedException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "AccountSendingPausedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccountSendingPausedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccountSendingPausedException.prototype);
    }
}
exports.AccountSendingPausedException = AccountSendingPausedException;
class AlreadyExistsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "AlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "AlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AlreadyExistsException.prototype);
        this.Name = opts.Name;
    }
}
exports.AlreadyExistsException = AlreadyExistsException;
exports.BehaviorOnMXFailure = {
    RejectMessage: "RejectMessage",
    UseDefaultValue: "UseDefaultValue",
};
exports.BounceType = {
    ContentRejected: "ContentRejected",
    DoesNotExist: "DoesNotExist",
    ExceededQuota: "ExceededQuota",
    MessageTooLarge: "MessageTooLarge",
    TemporaryFailure: "TemporaryFailure",
    Undefined: "Undefined",
};
exports.DsnAction = {
    DELAYED: "delayed",
    DELIVERED: "delivered",
    EXPANDED: "expanded",
    FAILED: "failed",
    RELAYED: "relayed",
};
exports.BulkEmailStatus = {
    AccountDailyQuotaExceeded: "AccountDailyQuotaExceeded",
    AccountSendingPaused: "AccountSendingPaused",
    AccountSuspended: "AccountSuspended",
    AccountThrottled: "AccountThrottled",
    ConfigurationSetDoesNotExist: "ConfigurationSetDoesNotExist",
    ConfigurationSetSendingPaused: "ConfigurationSetSendingPaused",
    Failed: "Failed",
    InvalidParameterValue: "InvalidParameterValue",
    InvalidSendingPoolName: "InvalidSendingPoolName",
    MailFromDomainNotVerified: "MailFromDomainNotVerified",
    MessageRejected: "MessageRejected",
    Success: "Success",
    TemplateDoesNotExist: "TemplateDoesNotExist",
    TransientFailure: "TransientFailure",
};
class CannotDeleteException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "CannotDeleteException",
            $fault: "client",
            ...opts,
        });
        this.name = "CannotDeleteException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CannotDeleteException.prototype);
        this.Name = opts.Name;
    }
}
exports.CannotDeleteException = CannotDeleteException;
class LimitExceededException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class RuleSetDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "RuleSetDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "RuleSetDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RuleSetDoesNotExistException.prototype);
        this.Name = opts.Name;
    }
}
exports.RuleSetDoesNotExistException = RuleSetDoesNotExistException;
exports.DimensionValueSource = {
    EMAIL_HEADER: "emailHeader",
    LINK_TAG: "linkTag",
    MESSAGE_TAG: "messageTag",
};
class ConfigurationSetAlreadyExistsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "ConfigurationSetAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConfigurationSetAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConfigurationSetAlreadyExistsException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
    }
}
exports.ConfigurationSetAlreadyExistsException = ConfigurationSetAlreadyExistsException;
exports.ConfigurationSetAttribute = {
    DELIVERY_OPTIONS: "deliveryOptions",
    EVENT_DESTINATIONS: "eventDestinations",
    REPUTATION_OPTIONS: "reputationOptions",
    TRACKING_OPTIONS: "trackingOptions",
};
class ConfigurationSetDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "ConfigurationSetDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConfigurationSetDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConfigurationSetDoesNotExistException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
    }
}
exports.ConfigurationSetDoesNotExistException = ConfigurationSetDoesNotExistException;
class ConfigurationSetSendingPausedException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "ConfigurationSetSendingPausedException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConfigurationSetSendingPausedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConfigurationSetSendingPausedException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
    }
}
exports.ConfigurationSetSendingPausedException = ConfigurationSetSendingPausedException;
class InvalidConfigurationSetException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidConfigurationSetException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidConfigurationSetException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidConfigurationSetException.prototype);
    }
}
exports.InvalidConfigurationSetException = InvalidConfigurationSetException;
exports.EventType = {
    BOUNCE: "bounce",
    CLICK: "click",
    COMPLAINT: "complaint",
    DELIVERY: "delivery",
    OPEN: "open",
    REJECT: "reject",
    RENDERING_FAILURE: "renderingFailure",
    SEND: "send",
};
class EventDestinationAlreadyExistsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "EventDestinationAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "EventDestinationAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EventDestinationAlreadyExistsException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
        this.EventDestinationName = opts.EventDestinationName;
    }
}
exports.EventDestinationAlreadyExistsException = EventDestinationAlreadyExistsException;
class InvalidCloudWatchDestinationException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidCloudWatchDestinationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidCloudWatchDestinationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidCloudWatchDestinationException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
        this.EventDestinationName = opts.EventDestinationName;
    }
}
exports.InvalidCloudWatchDestinationException = InvalidCloudWatchDestinationException;
class InvalidFirehoseDestinationException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidFirehoseDestinationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidFirehoseDestinationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidFirehoseDestinationException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
        this.EventDestinationName = opts.EventDestinationName;
    }
}
exports.InvalidFirehoseDestinationException = InvalidFirehoseDestinationException;
class InvalidSNSDestinationException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidSNSDestinationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSNSDestinationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSNSDestinationException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
        this.EventDestinationName = opts.EventDestinationName;
    }
}
exports.InvalidSNSDestinationException = InvalidSNSDestinationException;
class InvalidTrackingOptionsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidTrackingOptionsException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidTrackingOptionsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidTrackingOptionsException.prototype);
    }
}
exports.InvalidTrackingOptionsException = InvalidTrackingOptionsException;
class TrackingOptionsAlreadyExistsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "TrackingOptionsAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TrackingOptionsAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TrackingOptionsAlreadyExistsException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
    }
}
exports.TrackingOptionsAlreadyExistsException = TrackingOptionsAlreadyExistsException;
class CustomVerificationEmailInvalidContentException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "CustomVerificationEmailInvalidContentException",
            $fault: "client",
            ...opts,
        });
        this.name = "CustomVerificationEmailInvalidContentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CustomVerificationEmailInvalidContentException.prototype);
    }
}
exports.CustomVerificationEmailInvalidContentException = CustomVerificationEmailInvalidContentException;
class CustomVerificationEmailTemplateAlreadyExistsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "CustomVerificationEmailTemplateAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "CustomVerificationEmailTemplateAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CustomVerificationEmailTemplateAlreadyExistsException.prototype);
        this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
    }
}
exports.CustomVerificationEmailTemplateAlreadyExistsException = CustomVerificationEmailTemplateAlreadyExistsException;
class FromEmailAddressNotVerifiedException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "FromEmailAddressNotVerifiedException",
            $fault: "client",
            ...opts,
        });
        this.name = "FromEmailAddressNotVerifiedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, FromEmailAddressNotVerifiedException.prototype);
        this.FromEmailAddress = opts.FromEmailAddress;
    }
}
exports.FromEmailAddressNotVerifiedException = FromEmailAddressNotVerifiedException;
exports.ReceiptFilterPolicy = {
    Allow: "Allow",
    Block: "Block",
};
exports.InvocationType = {
    Event: "Event",
    RequestResponse: "RequestResponse",
};
exports.SNSActionEncoding = {
    Base64: "Base64",
    UTF8: "UTF-8",
};
exports.StopScope = {
    RULE_SET: "RuleSet",
};
exports.TlsPolicy = {
    Optional: "Optional",
    Require: "Require",
};
class InvalidLambdaFunctionException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidLambdaFunctionException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidLambdaFunctionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidLambdaFunctionException.prototype);
        this.FunctionArn = opts.FunctionArn;
    }
}
exports.InvalidLambdaFunctionException = InvalidLambdaFunctionException;
class InvalidS3ConfigurationException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidS3ConfigurationException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidS3ConfigurationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidS3ConfigurationException.prototype);
        this.Bucket = opts.Bucket;
    }
}
exports.InvalidS3ConfigurationException = InvalidS3ConfigurationException;
class InvalidSnsTopicException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidSnsTopicException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidSnsTopicException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidSnsTopicException.prototype);
        this.Topic = opts.Topic;
    }
}
exports.InvalidSnsTopicException = InvalidSnsTopicException;
class RuleDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "RuleDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "RuleDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RuleDoesNotExistException.prototype);
        this.Name = opts.Name;
    }
}
exports.RuleDoesNotExistException = RuleDoesNotExistException;
class InvalidTemplateException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidTemplateException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidTemplateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidTemplateException.prototype);
        this.TemplateName = opts.TemplateName;
    }
}
exports.InvalidTemplateException = InvalidTemplateException;
exports.CustomMailFromStatus = {
    Failed: "Failed",
    Pending: "Pending",
    Success: "Success",
    TemporaryFailure: "TemporaryFailure",
};
class CustomVerificationEmailTemplateDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "CustomVerificationEmailTemplateDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "CustomVerificationEmailTemplateDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, CustomVerificationEmailTemplateDoesNotExistException.prototype);
        this.CustomVerificationEmailTemplateName = opts.CustomVerificationEmailTemplateName;
    }
}
exports.CustomVerificationEmailTemplateDoesNotExistException = CustomVerificationEmailTemplateDoesNotExistException;
class EventDestinationDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "EventDestinationDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "EventDestinationDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, EventDestinationDoesNotExistException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
        this.EventDestinationName = opts.EventDestinationName;
    }
}
exports.EventDestinationDoesNotExistException = EventDestinationDoesNotExistException;
class TrackingOptionsDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "TrackingOptionsDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "TrackingOptionsDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TrackingOptionsDoesNotExistException.prototype);
        this.ConfigurationSetName = opts.ConfigurationSetName;
    }
}
exports.TrackingOptionsDoesNotExistException = TrackingOptionsDoesNotExistException;
exports.VerificationStatus = {
    Failed: "Failed",
    NotStarted: "NotStarted",
    Pending: "Pending",
    Success: "Success",
    TemporaryFailure: "TemporaryFailure",
};
class TemplateDoesNotExistException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "TemplateDoesNotExistException",
            $fault: "client",
            ...opts,
        });
        this.name = "TemplateDoesNotExistException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TemplateDoesNotExistException.prototype);
        this.TemplateName = opts.TemplateName;
    }
}
exports.TemplateDoesNotExistException = TemplateDoesNotExistException;
exports.IdentityType = {
    Domain: "Domain",
    EmailAddress: "EmailAddress",
};
class InvalidDeliveryOptionsException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidDeliveryOptionsException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidDeliveryOptionsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidDeliveryOptionsException.prototype);
    }
}
exports.InvalidDeliveryOptionsException = InvalidDeliveryOptionsException;
class InvalidPolicyException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidPolicyException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidPolicyException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidPolicyException.prototype);
    }
}
exports.InvalidPolicyException = InvalidPolicyException;
class InvalidRenderingParameterException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "InvalidRenderingParameterException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRenderingParameterException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRenderingParameterException.prototype);
        this.TemplateName = opts.TemplateName;
    }
}
exports.InvalidRenderingParameterException = InvalidRenderingParameterException;
class MailFromDomainNotVerifiedException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "MailFromDomainNotVerifiedException",
            $fault: "client",
            ...opts,
        });
        this.name = "MailFromDomainNotVerifiedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MailFromDomainNotVerifiedException.prototype);
    }
}
exports.MailFromDomainNotVerifiedException = MailFromDomainNotVerifiedException;
class MessageRejected extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "MessageRejected",
            $fault: "client",
            ...opts,
        });
        this.name = "MessageRejected";
        this.$fault = "client";
        Object.setPrototypeOf(this, MessageRejected.prototype);
    }
}
exports.MessageRejected = MessageRejected;
class MissingRenderingAttributeException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "MissingRenderingAttributeException",
            $fault: "client",
            ...opts,
        });
        this.name = "MissingRenderingAttributeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MissingRenderingAttributeException.prototype);
        this.TemplateName = opts.TemplateName;
    }
}
exports.MissingRenderingAttributeException = MissingRenderingAttributeException;
exports.NotificationType = {
    Bounce: "Bounce",
    Complaint: "Complaint",
    Delivery: "Delivery",
};
class ProductionAccessNotGrantedException extends SESServiceException_1.SESServiceException {
    constructor(opts) {
        super({
            name: "ProductionAccessNotGrantedException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProductionAccessNotGrantedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProductionAccessNotGrantedException.prototype);
    }
}
exports.ProductionAccessNotGrantedException = ProductionAccessNotGrantedException;
