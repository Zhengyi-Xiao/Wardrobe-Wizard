import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetReputationMetricsEnabledCommand}.
 */
export interface UpdateConfigurationSetReputationMetricsEnabledCommandInput extends UpdateConfigurationSetReputationMetricsEnabledRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetReputationMetricsEnabledCommand}.
 */
export interface UpdateConfigurationSetReputationMetricsEnabledCommandOutput extends __MetadataBearer {
}
/**
 * @public
 * <p>Enables or disables the publishing of reputation metrics for emails sent using a
 *             specific configuration set in a given Amazon Web Services Region. Reputation metrics include bounce
 *             and complaint rates. These metrics are published to Amazon CloudWatch. By using CloudWatch, you can
 *             create alarms when bounce or complaint rates exceed certain thresholds.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetReputationMetricsEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // UpdateConfigurationSetReputationMetricsEnabledRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   Enabled: true || false, // required
 * };
 * const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetReputationMetricsEnabledCommandInput - {@link UpdateConfigurationSetReputationMetricsEnabledCommandInput}
 * @returns {@link UpdateConfigurationSetReputationMetricsEnabledCommandOutput}
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetReputationMetricsEnabledCommandOutput} for command's `response` shape.
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
 * // Set the reputationMetricsEnabled flag for a specific configuration set.
 * const input = {
 *   "ConfigurationSetName": "foo",
 *   "Enabled": true
 * };
 * const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
 * await client.send(command);
 * // example id: updateconfigurationsetreputationmetricsenabled-2362747741333
 * ```
 *
 */
export declare class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateConfigurationSetReputationMetricsEnabledCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
