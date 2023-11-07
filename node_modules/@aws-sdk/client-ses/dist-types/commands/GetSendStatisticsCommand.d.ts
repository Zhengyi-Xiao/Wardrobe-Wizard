import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetSendStatisticsResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandInput {
}
/**
 * @public
 *
 * The output of {@link GetSendStatisticsCommand}.
 */
export interface GetSendStatisticsCommandOutput extends GetSendStatisticsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Provides sending statistics for the current Amazon Web Services Region. The result is a list of data
 *             points, representing the last two weeks of sending activity. Each data point in the list
 *             contains statistics for a 15-minute period of time.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendStatisticsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendStatisticsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetSendStatisticsResponse
 * //   SendDataPoints: [ // SendDataPointList
 * //     { // SendDataPoint
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       DeliveryAttempts: Number("long"),
 * //       Bounces: Number("long"),
 * //       Complaints: Number("long"),
 * //       Rejects: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSendStatisticsCommandInput - {@link GetSendStatisticsCommandInput}
 * @returns {@link GetSendStatisticsCommandOutput}
 * @see {@link GetSendStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetSendStatisticsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetSendStatistics
 * ```javascript
 * // The following example returns Amazon SES sending statistics:
 * const input = undefined;
 * const command = new GetSendStatisticsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SendDataPoints": [
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 5,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T22:43:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 3,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T23:13:00Z"
 *     },
 *     {
 *       "Bounces": 0,
 *       "Complaints": 0,
 *       "DeliveryAttempts": 1,
 *       "Rejects": 0,
 *       "Timestamp": "2016-07-13T21:13:00Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: getsendstatistics-1469047741329
 * ```
 *
 */
export declare class GetSendStatisticsCommand extends $Command<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput, SESClientResolvedConfig> {
    readonly input: GetSendStatisticsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetSendStatisticsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
