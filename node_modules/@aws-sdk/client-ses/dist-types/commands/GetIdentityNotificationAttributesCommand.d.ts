import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetIdentityNotificationAttributesRequest, GetIdentityNotificationAttributesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityNotificationAttributesCommand}.
 */
export interface GetIdentityNotificationAttributesCommandInput extends GetIdentityNotificationAttributesRequest {
}
/**
 * @public
 *
 * The output of {@link GetIdentityNotificationAttributesCommand}.
 */
export interface GetIdentityNotificationAttributesCommandOutput extends GetIdentityNotificationAttributesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Given a list of verified identities (email addresses and/or domains), returns a
 *             structure describing identity notification attributes.</p>
 *          <p>This operation is throttled at one request per second and can only get notification
 *             attributes for up to 100 identities at a time.</p>
 *          <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityNotificationAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityNotificationAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityNotificationAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityNotificationAttributesResponse
 * //   NotificationAttributes: { // NotificationAttributes // required
 * //     "<keys>": { // IdentityNotificationAttributes
 * //       BounceTopic: "STRING_VALUE", // required
 * //       ComplaintTopic: "STRING_VALUE", // required
 * //       DeliveryTopic: "STRING_VALUE", // required
 * //       ForwardingEnabled: true || false, // required
 * //       HeadersInBounceNotificationsEnabled: true || false,
 * //       HeadersInComplaintNotificationsEnabled: true || false,
 * //       HeadersInDeliveryNotificationsEnabled: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityNotificationAttributesCommandInput - {@link GetIdentityNotificationAttributesCommandInput}
 * @returns {@link GetIdentityNotificationAttributesCommandOutput}
 * @see {@link GetIdentityNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetIdentityNotificationAttributes
 * ```javascript
 * // The following example returns the notification attributes for an identity:
 * const input = {
 *   "Identities": [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NotificationAttributes": {
 *     "example.com": {
 *       "BounceTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       "ComplaintTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       "DeliveryTopic": "arn:aws:sns:us-east-1:EXAMPLE65304:ExampleTopic",
 *       "ForwardingEnabled": true,
 *       "HeadersInBounceNotificationsEnabled": false,
 *       "HeadersInComplaintNotificationsEnabled": false,
 *       "HeadersInDeliveryNotificationsEnabled": false
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentitynotificationattributes-1469123466947
 * ```
 *
 */
export declare class GetIdentityNotificationAttributesCommand extends $Command<GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityNotificationAttributesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetIdentityNotificationAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
