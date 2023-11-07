import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CreateTemplateRequest, CreateTemplateResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandInput extends CreateTemplateRequest {
}
/**
 * @public
 *
 * The output of {@link CreateTemplateCommand}.
 */
export interface CreateTemplateCommandOutput extends CreateTemplateResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Creates an email template. Email templates enable you to send personalized email to
 *             one or more destinations in a single operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CreateTemplateRequest
 *   Template: { // Template
 *     TemplateName: "STRING_VALUE", // required
 *     SubjectPart: "STRING_VALUE",
 *     TextPart: "STRING_VALUE",
 *     HtmlPart: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTemplateCommandInput - {@link CreateTemplateCommandInput}
 * @returns {@link CreateTemplateCommandOutput}
 * @see {@link CreateTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
 *
 * @throws {@link InvalidTemplateException} (client fault)
 *  <p>Indicates that the template that you specified could not be rendered. This issue may
 *             occur when a template refers to a partial that does not exist.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class CreateTemplateCommand extends $Command<CreateTemplateCommandInput, CreateTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateTemplateCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CreateTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTemplateCommandInput, CreateTemplateCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
