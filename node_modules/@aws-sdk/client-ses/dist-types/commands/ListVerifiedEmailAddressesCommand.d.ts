import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { ListVerifiedEmailAddressesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandInput {
}
/**
 * @public
 *
 * The output of {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandOutput extends ListVerifiedEmailAddressesResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
 *             and domains associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListVerifiedEmailAddressesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListVerifiedEmailAddressesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListVerifiedEmailAddressesResponse
 * //   VerifiedEmailAddresses: [ // AddressList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVerifiedEmailAddressesCommandInput - {@link ListVerifiedEmailAddressesCommandInput}
 * @returns {@link ListVerifiedEmailAddressesCommandOutput}
 * @see {@link ListVerifiedEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link ListVerifiedEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListVerifiedEmailAddresses
 * ```javascript
 * // The following example lists all email addresses that have been submitted for verification with Amazon SES:
 * const input = undefined;
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerifiedEmailAddresses": [
 *     "user1@example.com",
 *     "user2@example.com"
 *   ]
 * }
 * *\/
 * // example id: listverifiedemailaddresses-1469051402570
 * ```
 *
 */
export declare class ListVerifiedEmailAddressesCommand extends $Command<ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListVerifiedEmailAddressesCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListVerifiedEmailAddressesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
