import { SESServiceException as __BaseException } from "./SESServiceException";
export class AccountSendingPausedException extends __BaseException {
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
export class AlreadyExistsException extends __BaseException {
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
export const BehaviorOnMXFailure = {
    RejectMessage: "RejectMessage",
    UseDefaultValue: "UseDefaultValue",
};
export const BounceType = {
    ContentRejected: "ContentRejected",
    DoesNotExist: "DoesNotExist",
    ExceededQuota: "ExceededQuota",
    MessageTooLarge: "MessageTooLarge",
    TemporaryFailure: "TemporaryFailure",
    Undefined: "Undefined",
};
export const DsnAction = {
    DELAYED: "delayed",
    DELIVERED: "delivered",
    EXPANDED: "expanded",
    FAILED: "failed",
    RELAYED: "relayed",
};
export const BulkEmailStatus = {
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
export class CannotDeleteException extends __BaseException {
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
export class LimitExceededException extends __BaseException {
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
export class RuleSetDoesNotExistException extends __BaseException {
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
export const DimensionValueSource = {
    EMAIL_HEADER: "emailHeader",
    LINK_TAG: "linkTag",
    MESSAGE_TAG: "messageTag",
};
export class ConfigurationSetAlreadyExistsException extends __BaseException {
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
export const ConfigurationSetAttribute = {
    DELIVERY_OPTIONS: "deliveryOptions",
    EVENT_DESTINATIONS: "eventDestinations",
    REPUTATION_OPTIONS: "reputationOptions",
    TRACKING_OPTIONS: "trackingOptions",
};
export class ConfigurationSetDoesNotExistException extends __BaseException {
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
export class ConfigurationSetSendingPausedException extends __BaseException {
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
export class InvalidConfigurationSetException extends __BaseException {
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
export const EventType = {
    BOUNCE: "bounce",
    CLICK: "click",
    COMPLAINT: "complaint",
    DELIVERY: "delivery",
    OPEN: "open",
    REJECT: "reject",
    RENDERING_FAILURE: "renderingFailure",
    SEND: "send",
};
export class EventDestinationAlreadyExistsException extends __BaseException {
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
export class InvalidCloudWatchDestinationException extends __BaseException {
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
export class InvalidFirehoseDestinationException extends __BaseException {
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
export class InvalidSNSDestinationException extends __BaseException {
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
export class InvalidTrackingOptionsException extends __BaseException {
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
export class TrackingOptionsAlreadyExistsException extends __BaseException {
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
export class CustomVerificationEmailInvalidContentException extends __BaseException {
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
export class CustomVerificationEmailTemplateAlreadyExistsException extends __BaseException {
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
export class FromEmailAddressNotVerifiedException extends __BaseException {
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
export const ReceiptFilterPolicy = {
    Allow: "Allow",
    Block: "Block",
};
export const InvocationType = {
    Event: "Event",
    RequestResponse: "RequestResponse",
};
export const SNSActionEncoding = {
    Base64: "Base64",
    UTF8: "UTF-8",
};
export const StopScope = {
    RULE_SET: "RuleSet",
};
export const TlsPolicy = {
    Optional: "Optional",
    Require: "Require",
};
export class InvalidLambdaFunctionException extends __BaseException {
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
export class InvalidS3ConfigurationException extends __BaseException {
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
export class InvalidSnsTopicException extends __BaseException {
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
export class RuleDoesNotExistException extends __BaseException {
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
export class InvalidTemplateException extends __BaseException {
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
export const CustomMailFromStatus = {
    Failed: "Failed",
    Pending: "Pending",
    Success: "Success",
    TemporaryFailure: "TemporaryFailure",
};
export class CustomVerificationEmailTemplateDoesNotExistException extends __BaseException {
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
export class EventDestinationDoesNotExistException extends __BaseException {
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
export class TrackingOptionsDoesNotExistException extends __BaseException {
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
export const VerificationStatus = {
    Failed: "Failed",
    NotStarted: "NotStarted",
    Pending: "Pending",
    Success: "Success",
    TemporaryFailure: "TemporaryFailure",
};
export class TemplateDoesNotExistException extends __BaseException {
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
export const IdentityType = {
    Domain: "Domain",
    EmailAddress: "EmailAddress",
};
export class InvalidDeliveryOptionsException extends __BaseException {
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
export class InvalidPolicyException extends __BaseException {
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
export class InvalidRenderingParameterException extends __BaseException {
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
export class MailFromDomainNotVerifiedException extends __BaseException {
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
export class MessageRejected extends __BaseException {
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
export class MissingRenderingAttributeException extends __BaseException {
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
export const NotificationType = {
    Bounce: "Bounce",
    Complaint: "Complaint",
    Delivery: "Delivery",
};
export class ProductionAccessNotGrantedException extends __BaseException {
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
