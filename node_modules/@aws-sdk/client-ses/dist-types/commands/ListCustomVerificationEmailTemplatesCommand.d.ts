import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListCustomVerificationEmailTemplatesRequest, ListCustomVerificationEmailTemplatesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomVerificationEmailTemplatesCommand}.
 */
export interface ListCustomVerificationEmailTemplatesCommandInput extends ListCustomVerificationEmailTemplatesRequest {
}
/**
 * @public
 *
 * The output of {@link ListCustomVerificationEmailTemplatesCommand}.
 */
export interface ListCustomVerificationEmailTemplatesCommandOutput extends ListCustomVerificationEmailTemplatesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Lists the existing custom verification email templates for your account in the current
 *             Amazon Web Services Region.</p>
 *          <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListCustomVerificationEmailTemplatesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListCustomVerificationEmailTemplatesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListCustomVerificationEmailTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCustomVerificationEmailTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomVerificationEmailTemplatesResponse
 * //   CustomVerificationEmailTemplates: [ // CustomVerificationEmailTemplates
 * //     { // CustomVerificationEmailTemplate
 * //       TemplateName: "STRING_VALUE",
 * //       FromEmailAddress: "STRING_VALUE",
 * //       TemplateSubject: "STRING_VALUE",
 * //       SuccessRedirectionURL: "STRING_VALUE",
 * //       FailureRedirectionURL: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomVerificationEmailTemplatesCommandInput - {@link ListCustomVerificationEmailTemplatesCommandInput}
 * @returns {@link ListCustomVerificationEmailTemplatesCommandOutput}
 * @see {@link ListCustomVerificationEmailTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCustomVerificationEmailTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class ListCustomVerificationEmailTemplatesCommand extends $Command<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListCustomVerificationEmailTemplatesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListCustomVerificationEmailTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
