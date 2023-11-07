import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteVerifiedEmailAddressRequest } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedEmailAddressCommand}.
 */
export interface DeleteVerifiedEmailAddressCommandInput extends DeleteVerifiedEmailAddressRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedEmailAddressCommand}.
 */
export interface DeleteVerifiedEmailAddressCommandOutput extends __MetadataBearer {
}
/**
 * @public
 * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
 *             and domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteVerifiedEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteVerifiedEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteVerifiedEmailAddressRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new DeleteVerifiedEmailAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVerifiedEmailAddressCommandInput - {@link DeleteVerifiedEmailAddressCommandInput}
 * @returns {@link DeleteVerifiedEmailAddressCommandOutput}
 * @see {@link DeleteVerifiedEmailAddressCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DeleteVerifiedEmailAddress
 * ```javascript
 * // The following example deletes an email address from the list of identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new DeleteVerifiedEmailAddressCommand(input);
 * await client.send(command);
 * // example id: deleteverifiedemailaddress-1469051086444
 * ```
 *
 */
export declare class DeleteVerifiedEmailAddressCommand extends $Command<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteVerifiedEmailAddressCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteVerifiedEmailAddressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
