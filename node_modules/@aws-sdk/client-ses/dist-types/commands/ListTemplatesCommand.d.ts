import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListTemplatesRequest, ListTemplatesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandInput extends ListTemplatesRequest {
}
/**
 * @public
 *
 * The output of {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandOutput extends ListTemplatesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Lists the email templates present in your Amazon SES account in the current
 *             Amazon Web Services Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListTemplatesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListTemplatesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListTemplatesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplatesResponse
 * //   TemplatesMetadata: [ // TemplateMetadataList
 * //     { // TemplateMetadata
 * //       Name: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplatesCommandInput - {@link ListTemplatesCommandInput}
 * @returns {@link ListTemplatesCommandOutput}
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class ListTemplatesCommand extends $Command<ListTemplatesCommandInput, ListTemplatesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListTemplatesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTemplatesCommandInput, ListTemplatesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
