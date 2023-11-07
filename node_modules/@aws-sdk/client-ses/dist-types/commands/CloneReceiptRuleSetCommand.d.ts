import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { CloneReceiptRuleSetRequest, CloneReceiptRuleSetResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CloneReceiptRuleSetCommand}.
 */
export interface CloneReceiptRuleSetCommandInput extends CloneReceiptRuleSetRequest {
}
/**
 * @public
 *
 * The output of {@link CloneReceiptRuleSetCommand}.
 */
export interface CloneReceiptRuleSetCommandOutput extends CloneReceiptRuleSetResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Creates a receipt rule set by cloning an existing one. All receipt rules and
 *             configurations are copied to the new receipt rule set and are completely independent of
 *             the source rule set.</p>
 *          <p>For information about setting up rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules">Amazon SES Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CloneReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CloneReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CloneReceiptRuleSetRequest
 *   RuleSetName: "STRING_VALUE", // required
 *   OriginalRuleSetName: "STRING_VALUE", // required
 * };
 * const command = new CloneReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CloneReceiptRuleSetCommandInput - {@link CloneReceiptRuleSetCommandInput}
 * @returns {@link CloneReceiptRuleSetCommandOutput}
 * @see {@link CloneReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link CloneReceiptRuleSetCommandOutput} for command's `response` shape.
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
 * @throws {@link RuleSetDoesNotExistException} (client fault)
 *  <p>Indicates that the provided receipt rule set does not exist.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example CloneReceiptRuleSet
 * ```javascript
 * // The following example creates a receipt rule set by cloning an existing one:
 * const input = {
 *   "OriginalRuleSetName": "RuleSetToClone",
 *   "RuleSetName": "RuleSetToCreate"
 * };
 * const command = new CloneReceiptRuleSetCommand(input);
 * await client.send(command);
 * // example id: clonereceiptruleset-1469055039770
 * ```
 *
 */
export declare class CloneReceiptRuleSetCommand extends $Command<CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CloneReceiptRuleSetCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: CloneReceiptRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
