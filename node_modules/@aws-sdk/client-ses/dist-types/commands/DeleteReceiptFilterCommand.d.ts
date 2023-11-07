import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { DeleteReceiptFilterRequest, DeleteReceiptFilterResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteReceiptFilterCommand}.
 */
export interface DeleteReceiptFilterCommandInput extends DeleteReceiptFilterRequest {
}
/**
 * @public
 *
 * The output of {@link DeleteReceiptFilterCommand}.
 */
export interface DeleteReceiptFilterCommandOutput extends DeleteReceiptFilterResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Deletes the specified IP address filter.</p>
 *          <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteReceiptFilterCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteReceiptFilterCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteReceiptFilterRequest
 *   FilterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteReceiptFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReceiptFilterCommandInput - {@link DeleteReceiptFilterCommandInput}
 * @returns {@link DeleteReceiptFilterCommandOutput}
 * @see {@link DeleteReceiptFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteReceiptFilterCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example DeleteReceiptFilter
 * ```javascript
 * // The following example deletes an IP address filter:
 * const input = {
 *   "FilterName": "MyFilter"
 * };
 * const command = new DeleteReceiptFilterCommand(input);
 * await client.send(command);
 * // example id: deletereceiptfilter-1469055456835
 * ```
 *
 */
export declare class DeleteReceiptFilterCommand extends $Command<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteReceiptFilterCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: DeleteReceiptFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
