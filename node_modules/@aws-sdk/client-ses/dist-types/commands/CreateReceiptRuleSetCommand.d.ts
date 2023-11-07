import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CreateReceiptRuleSetRequest, CreateReceiptRuleSetResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReceiptRuleSetCommand}.
 */
export interface CreateReceiptRuleSetCommandInput extends CreateReceiptRuleSetRequest {
}
/**
 * @public
 *
 * The output of {@link CreateReceiptRuleSetCommand}.
 */
export interface CreateReceiptRuleSetCommandOutput extends CreateReceiptRuleSetResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Creates an empty receipt rule set.</p>
 *          <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules">Amazon SES Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CreateReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 * };
 * const command = new CreateReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateReceiptRuleSetCommandInput - {@link CreateReceiptRuleSetCommandInput}
 * @returns {@link CreateReceiptRuleSetCommandOutput}
 * @see {@link CreateReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example CreateReceiptRuleSet
 * ```javascript
 * // The following example creates an empty receipt rule set:
 * const input = {
 *   "RuleSetName": "MyRuleSet"
 * };
 * const command = new CreateReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: createreceiptruleset-1469058761646
 * ```
 *
 */
export declare class CreateReceiptRuleSetCommand extends $Command<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateReceiptRuleSetCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CreateReceiptRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
