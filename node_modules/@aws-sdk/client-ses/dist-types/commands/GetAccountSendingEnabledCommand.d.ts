import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { GetAccountSendingEnabledResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSendingEnabledCommand}.
 */
export interface GetAccountSendingEnabledCommandInput {
}
/**
 * @public
 *
 * The output of {@link GetAccountSendingEnabledCommand}.
 */
export interface GetAccountSendingEnabledCommandOutput extends GetAccountSendingEnabledResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns the email sending status of the Amazon SES account for the current Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetAccountSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetAccountSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSendingEnabledResponse
 * //   Enabled: true || false,
 * // };
 *
 * ```
 *
 * @param GetAccountSendingEnabledCommandInput - {@link GetAccountSendingEnabledCommandInput}
 * @returns {@link GetAccountSendingEnabledCommandOutput}
 * @see {@link GetAccountSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link GetAccountSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetAccountSendingEnabled
 * ```javascript
 * // The following example returns if sending status for an account is enabled. (true / false):
 * const input = undefined;
 * const command = new GetAccountSendingEnabledCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Enabled": true
 * }
 * *\/
 * // example id: getaccountsendingenabled-1469047741333
 * ```
 *
 */
export declare class GetAccountSendingEnabledCommand extends $Command<GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: GetAccountSendingEnabledCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetAccountSendingEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
