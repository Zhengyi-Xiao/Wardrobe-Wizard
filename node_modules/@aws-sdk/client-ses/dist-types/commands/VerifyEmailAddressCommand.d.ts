import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { VerifyEmailAddressRequest } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyEmailAddressCommand}.
 */
export interface VerifyEmailAddressCommandInput extends VerifyEmailAddressRequest {
}
/**
 * @public
 *
 * The output of {@link VerifyEmailAddressCommand}.
 */
export interface VerifyEmailAddressCommandOutput extends __MetadataBearer {
}
/**
 * @public
 * <p>Deprecated. Use the <code>VerifyEmailIdentity</code> operation to verify a new email
 *             address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyEmailAddressRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyEmailAddressCommandInput - {@link VerifyEmailAddressCommandInput}
 * @returns {@link VerifyEmailAddressCommandOutput}
 * @see {@link VerifyEmailAddressCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example VerifyEmailAddress
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new VerifyEmailAddressCommand(input);
 * await client.send(command);
 * // example id: verifyemailaddress-1469048849187
 * ```
 *
 */
export declare class VerifyEmailAddressCommand extends $Command<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyEmailAddressCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: VerifyEmailAddressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
