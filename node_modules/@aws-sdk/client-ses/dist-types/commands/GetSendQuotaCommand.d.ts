import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetSendQuotaResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandInput {
}
/**
 * @public
 *
 * The output of {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandOutput extends GetSendQuotaResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Provides the sending limits for the Amazon SES account. </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendQuotaCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendQuotaCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetSendQuotaResponse
 * //   Max24HourSend: Number("double"),
 * //   MaxSendRate: Number("double"),
 * //   SentLast24Hours: Number("double"),
 * // };
 *
 * ```
 *
 * @param GetSendQuotaCommandInput - {@link GetSendQuotaCommandInput}
 * @returns {@link GetSendQuotaCommandOutput}
 * @see {@link GetSendQuotaCommandInput} for command's `input` shape.
 * @see {@link GetSendQuotaCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetSendQuota
 * ```javascript
 * // The following example returns the Amazon SES sending limits for an AWS account:
 * const input = undefined;
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Max24HourSend": 200,
 *   "MaxSendRate": 1,
 *   "SentLast24Hours": 1
 * }
 * *\/
 * // example id: getsendquota-1469047324508
 * ```
 *
 */
export declare class GetSendQuotaCommand extends $Command<GetSendQuotaCommandInput, GetSendQuotaCommandOutput, SESClientResolvedConfig> {
    readonly input: GetSendQuotaCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetSendQuotaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSendQuotaCommandInput, GetSendQuotaCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
