import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteIdentityPolicyRequest, DeleteIdentityPolicyResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityPolicyCommand}.
 */
export interface DeleteIdentityPolicyCommandInput extends DeleteIdentityPolicyRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteIdentityPolicyCommand}.
 */
export interface DeleteIdentityPolicyCommandOutput extends DeleteIdentityPolicyResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes the specified sending authorization policy for the given identity (an email
 *             address or a domain). This operation returns successfully even if a policy with the
 *             specified name does not exist.</p>
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
 * import { SESClient, DeleteIdentityPolicyCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteIdentityPolicyCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteIdentityPolicyRequest
 *   Identity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityPolicyCommandInput - {@link DeleteIdentityPolicyCommandInput}
 * @returns {@link DeleteIdentityPolicyCommandOutput}
 * @see {@link DeleteIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DeleteIdentityPolicy
 * ```javascript
 * // The following example deletes a sending authorization policy for an identity:
 * const input = {
 *   "Identity": "user@example.com",
 *   "PolicyName": "MyPolicy"
 * };
 * const command = new DeleteIdentityPolicyCommand(input);
 * await client.send(command);
 * // example id: deleteidentitypolicy-1469055282499
 * ```
 *
 */
export declare class DeleteIdentityPolicyCommand extends $Command<DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteIdentityPolicyCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteIdentityPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
