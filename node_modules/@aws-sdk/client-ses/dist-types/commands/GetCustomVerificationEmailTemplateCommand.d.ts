import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetCustomVerificationEmailTemplateRequest, GetCustomVerificationEmailTemplateResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCustomVerificationEmailTemplateCommand}.
 */
export interface GetCustomVerificationEmailTemplateCommandInput extends GetCustomVerificationEmailTemplateRequest {
}
/**
 * @public
 *
 * The output of {@link GetCustomVerificationEmailTemplateCommand}.
 */
export interface GetCustomVerificationEmailTemplateCommandOutput extends GetCustomVerificationEmailTemplateResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns the custom email verification template for the template name you
 *             specify.</p>
 *          <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetCustomVerificationEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new GetCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomVerificationEmailTemplateResponse
 * //   TemplateName: "STRING_VALUE",
 * //   FromEmailAddress: "STRING_VALUE",
 * //   TemplateSubject: "STRING_VALUE",
 * //   TemplateContent: "STRING_VALUE",
 * //   SuccessRedirectionURL: "STRING_VALUE",
 * //   FailureRedirectionURL: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCustomVerificationEmailTemplateCommandInput - {@link GetCustomVerificationEmailTemplateCommandInput}
 * @returns {@link GetCustomVerificationEmailTemplateCommandOutput}
 * @see {@link GetCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link CustomVerificationEmailTemplateDoesNotExistException} (client fault)
 *  <p>Indicates that a custom verification email template with the name you specified does
 *             not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class GetCustomVerificationEmailTemplateCommand extends $Command<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: GetCustomVerificationEmailTemplateCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetCustomVerificationEmailTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
