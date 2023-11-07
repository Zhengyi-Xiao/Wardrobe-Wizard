import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandInput extends VerifyDomainIdentityRequest {
}
/**
 * @public
 *
 * The output of {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandOutput extends VerifyDomainIdentityResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. For more information about verifying domains,
 *             see <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyDomainIdentityRequest
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDomainIdentityResponse
 * //   VerificationToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyDomainIdentityCommandInput - {@link VerifyDomainIdentityCommandInput}
 * @returns {@link VerifyDomainIdentityCommandOutput}
 * @see {@link VerifyDomainIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example VerifyDomainIdentity
 * ```javascript
 * // The following example starts the domain verification process with Amazon SES:
 * const input = {
 *   "Domain": "example.com"
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerificationToken": "eoEmxw+YaYhb3h3iVJHuXMJXqeu1q1/wwmvjuEXAMPLE"
 * }
 * *\/
 * // example id: verifydomainidentity-1469049165936
 * ```
 *
 */
export declare class VerifyDomainIdentityCommand extends $Command<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput, SESClientResolvedConfig> {
    readonly input: VerifyDomainIdentityCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: VerifyDomainIdentityCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
