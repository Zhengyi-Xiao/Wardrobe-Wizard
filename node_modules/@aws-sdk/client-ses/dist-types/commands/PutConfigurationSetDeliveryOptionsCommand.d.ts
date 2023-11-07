import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { PutConfigurationSetDeliveryOptionsRequest, PutConfigurationSetDeliveryOptionsResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetDeliveryOptionsCommand}.
 */
export interface PutConfigurationSetDeliveryOptionsCommandInput extends PutConfigurationSetDeliveryOptionsRequest {
}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetDeliveryOptionsCommand}.
 */
export interface PutConfigurationSetDeliveryOptionsCommandOutput extends PutConfigurationSetDeliveryOptionsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Adds or updates the delivery options for a configuration set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, PutConfigurationSetDeliveryOptionsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // PutConfigurationSetDeliveryOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   DeliveryOptions: { // DeliveryOptions
 *     TlsPolicy: "Require" || "Optional",
 *   },
 * };
 * const command = new PutConfigurationSetDeliveryOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetDeliveryOptionsCommandInput - {@link PutConfigurationSetDeliveryOptionsCommandInput}
 * @returns {@link PutConfigurationSetDeliveryOptionsCommandOutput}
 * @see {@link PutConfigurationSetDeliveryOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetDeliveryOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetDoesNotExistException} (client fault)
 *  <p>Indicates that the configuration set does not exist.</p>
 *
 * @throws {@link InvalidDeliveryOptionsException} (client fault)
 *  <p>Indicates that provided delivery option is invalid.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 */
export declare class PutConfigurationSetDeliveryOptionsCommand extends $Command<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput, SESClientResolvedConfig> {
    readonly input: PutConfigurationSetDeliveryOptionsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: PutConfigurationSetDeliveryOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
