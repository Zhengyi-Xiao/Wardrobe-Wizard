import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetIdentityMailFromDomainAttributesRequest, GetIdentityMailFromDomainAttributesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityMailFromDomainAttributesCommand}.
 */
export interface GetIdentityMailFromDomainAttributesCommandInput extends GetIdentityMailFromDomainAttributesRequest {
}
/**
 * @public
 *
 * The output of {@link GetIdentityMailFromDomainAttributesCommand}.
 */
export interface GetIdentityMailFromDomainAttributesCommandOutput extends GetIdentityMailFromDomainAttributesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
 *             domains).</p>
 *          <p>This operation is throttled at one request per second and can only get custom MAIL
 *             FROM attributes for up to 100 identities at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityMailFromDomainAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityMailFromDomainAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityMailFromDomainAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityMailFromDomainAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityMailFromDomainAttributesResponse
 * //   MailFromDomainAttributes: { // MailFromDomainAttributes // required
 * //     "<keys>": { // IdentityMailFromDomainAttributes
 * //       MailFromDomain: "STRING_VALUE", // required
 * //       MailFromDomainStatus: "Pending" || "Success" || "Failed" || "TemporaryFailure", // required
 * //       BehaviorOnMXFailure: "UseDefaultValue" || "RejectMessage", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityMailFromDomainAttributesCommandInput - {@link GetIdentityMailFromDomainAttributesCommandInput}
 * @returns {@link GetIdentityMailFromDomainAttributesCommandOutput}
 * @see {@link GetIdentityMailFromDomainAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityMailFromDomainAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetIdentityMailFromDomainAttributes
 * ```javascript
 * // The following example returns the custom MAIL FROM attributes for an identity:
 * const input = {
 *   "Identities": [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityMailFromDomainAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MailFromDomainAttributes": {
 *     "example.com": {
 *       "BehaviorOnMXFailure": "UseDefaultValue",
 *       "MailFromDomain": "bounces.example.com",
 *       "MailFromDomainStatus": "Success"
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentitymailfromdomainattributes-1469123114860
 * ```
 *
 */
export declare class GetIdentityMailFromDomainAttributesCommand extends $Command<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityMailFromDomainAttributesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetIdentityMailFromDomainAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
