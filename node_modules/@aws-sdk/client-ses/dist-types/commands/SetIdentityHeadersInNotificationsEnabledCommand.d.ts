import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { SetIdentityHeadersInNotificationsEnabledRequest, SetIdentityHeadersInNotificationsEnabledResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandInput extends SetIdentityHeadersInNotificationsEnabledRequest {
}
/**
 * @public
 *
 * The output of {@link SetIdentityHeadersInNotificationsEnabledCommand}.
 */
export interface SetIdentityHeadersInNotificationsEnabledCommandOutput extends SetIdentityHeadersInNotificationsEnabledResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Given an identity (an email address or a domain), sets whether Amazon SES includes the
 *             original email headers in the Amazon Simple Notification Service (Amazon SNS) notifications of a specified
 *             type.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetIdentityHeadersInNotificationsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SetIdentityHeadersInNotificationsEnabledRequest
 *   Identity: "STRING_VALUE", // required
 *   NotificationType: "Bounce" || "Complaint" || "Delivery", // required
 *   Enabled: true || false, // required
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityHeadersInNotificationsEnabledCommandInput - {@link SetIdentityHeadersInNotificationsEnabledCommandInput}
 * @returns {@link SetIdentityHeadersInNotificationsEnabledCommandOutput}
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandInput} for command's `input` shape.
 * @see {@link SetIdentityHeadersInNotificationsEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example SetIdentityHeadersInNotificationsEnabled
 * ```javascript
 * // The following example configures Amazon SES to include the original email headers in the Amazon SNS bounce notifications for an identity:
 * const input = {
 *   "Enabled": true,
 *   "Identity": "user@example.com",
 *   "NotificationType": "Bounce"
 * };
 * const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
 * await client.send(command);
 * // example id: setidentityheadersinnotificationsenabled-1469057295001
 * ```
 *
 */
export declare class SetIdentityHeadersInNotificationsEnabledCommand extends $Command<SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityHeadersInNotificationsEnabledCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: SetIdentityHeadersInNotificationsEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
