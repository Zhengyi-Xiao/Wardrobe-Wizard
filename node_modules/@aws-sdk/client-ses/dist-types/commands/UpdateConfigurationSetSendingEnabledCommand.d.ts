import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { UpdateConfigurationSetSendingEnabledRequest } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandInput extends UpdateConfigurationSetSendingEnabledRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandOutput extends __MetadataBearer {
}
/**
 * @public
 * <p>Enables or disables email sending for messages sent using a specific configuration set
 *             in a given Amazon Web Services Region. You can use this operation in conjunction with Amazon CloudWatch alarms
 *             to temporarily pause email sending for a configuration set when the reputation metrics
 *             for that configuration set (such as your bounce on complaint rate) exceed certain
 *             thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetSendingEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   Enabled: true || false, // required
 * };
 * const command = new UpdateConfigurationSetSendingEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetSendingEnabledCommandInput - {@link UpdateConfigurationSetSendingEnabledCommandInput}
 * @returns {@link UpdateConfigurationSetSendingEnabledCommandOutput}
 * @see {@link UpdateConfigurationSetSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example UpdateConfigurationSetReputationMetricsEnabled
 * ```javascript
 * // Set the sending enabled flag for a specific configuration set.
 * const input = {
 *   "ConfigurationSetName": "foo",
 *   "Enabled": true
 * };
 * const command = new UpdateConfigurationSetSendingEnabledCommand(input);
 * await client.send(command);
 * // example id: updateconfigurationsetsendingenabled-2362747741333
 * ```
 *
 */
export declare class UpdateConfigurationSetSendingEnabledCommand extends $Command<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetSendingEnabledCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateConfigurationSetSendingEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
