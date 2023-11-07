import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListIdentityPoliciesRequest, ListIdentityPoliciesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandInput extends ListIdentityPoliciesRequest {
}
/**
 * @public
 *
 * The output of {@link ListIdentityPoliciesCommand}.
 */
export interface ListIdentityPoliciesCommandOutput extends ListIdentityPoliciesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns a list of sending authorization policies that are attached to the given
 *             identity (an email address or a domain). This operation returns only a list. To get the
 *             actual policy content, use <code>GetIdentityPolicies</code>.</p>
 *          <note>
 *             <p>This operation is for the identity owner only. If you have not verified the
 *                 identity, it returns an error.</p>
 *          </note>
 *          <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListIdentityPoliciesRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoliciesResponse
 * //   PolicyNames: [ // PolicyNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentityPoliciesCommandInput - {@link ListIdentityPoliciesCommandInput}
 * @returns {@link ListIdentityPoliciesCommandOutput}
 * @see {@link ListIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListIdentityPolicies
 * ```javascript
 * // The following example returns a list of sending authorization policies that are attached to an identity:
 * const input = {
 *   "Identity": "example.com"
 * };
 * const command = new ListIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyNames": [
 *     "MyPolicy"
 *   ]
 * }
 * *\/
 * // example id: listidentitypolicies-1469124417674
 * ```
 *
 */
export declare class ListIdentityPoliciesCommand extends $Command<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListIdentityPoliciesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListIdentityPoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
