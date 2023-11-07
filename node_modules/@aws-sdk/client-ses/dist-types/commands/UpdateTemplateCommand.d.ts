import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { UpdateTemplateRequest, UpdateTemplateResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandInput extends UpdateTemplateRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandOutput extends UpdateTemplateResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Updates an email template. Email templates enable you to send personalized email to
 *             one or more destinations in a single operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateTemplateRequest
 *   Template: { // Template
 *     TemplateName: "STRING_VALUE", // required
 *     SubjectPart: "STRING_VALUE",
 *     TextPart: "STRING_VALUE",
 *     HtmlPart: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTemplateCommandInput - {@link UpdateTemplateCommandInput}
 * @returns {@link UpdateTemplateCommandOutput}
 * @see {@link UpdateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link InvalidTemplateException} (client fault)
 *  <p>Indicates that the template that you specified could not be rendered. This issue may
 *             occur when a template refers to a partial that does not exist.</p>
 *
 * @throws {@link TemplateDoesNotExistException} (client fault)
 *  <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class UpdateTemplateCommand extends $Command<UpdateTemplateCommandInput, UpdateTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateTemplateCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTemplateCommandInput, UpdateTemplateCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
