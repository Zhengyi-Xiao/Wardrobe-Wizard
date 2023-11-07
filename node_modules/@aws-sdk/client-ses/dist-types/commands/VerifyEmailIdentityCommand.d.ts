import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandInput extends VerifyEmailIdentityRequest {
}
/**
 * @public
 *
 * The output of {@link VerifyEmailIdentityCommand}.
 */
export interface VerifyEmailIdentityCommandOutput extends VerifyEmailIdentityResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. As a result of executing this operation, a
 *             verification email is sent to the specified address.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyEmailIdentityRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyEmailIdentityCommandInput - {@link VerifyEmailIdentityCommandInput}
 * @returns {@link VerifyEmailIdentityCommandOutput}
 * @see {@link VerifyEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example VerifyEmailIdentity
 * ```javascript
 * // The following example starts the email address verification process with Amazon SES:
 * const input = {
 *   "EmailAddress": "user@example.com"
 * };
 * const command = new VerifyEmailIdentityCommand(input);
 * await client.send(command);
 * // example id: verifyemailidentity-1469049068623
 * ```
 *
 */
export declare class VerifyEmailIdentityCommand extends $Command<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyEmailIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: VerifyEmailIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
