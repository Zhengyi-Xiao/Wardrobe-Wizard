import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteIdentityRequest, DeleteIdentityResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandInput extends DeleteIdentityRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteIdentityCommand}.
 */
export interface DeleteIdentityCommandOutput extends DeleteIdentityResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes the specified identity (an email address or a domain) from the list of
 *             verified identities.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteIdentityRequest
 *   Identity: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdentityCommandInput - {@link DeleteIdentityCommandInput}
 * @returns {@link DeleteIdentityCommandOutput}
 * @see {@link DeleteIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DeleteIdentity
 * ```javascript
 * // The following example deletes an identity from the list of identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   "Identity": "user@example.com"
 * };
 * const command = new DeleteIdentityCommand(input);
 * await client.send(command);
 * // example id: deleteidentity-1469047858906
 * ```
 *
 */
export declare class DeleteIdentityCommand extends $Command<DeleteIdentityCommandInput, DeleteIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIdentityCommandInput, DeleteIdentityCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
