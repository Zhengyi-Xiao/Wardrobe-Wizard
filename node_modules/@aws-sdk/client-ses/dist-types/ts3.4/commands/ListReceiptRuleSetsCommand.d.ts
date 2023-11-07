import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListReceiptRuleSetsRequest,
  ListReceiptRuleSetsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface ListReceiptRuleSetsCommandInput
  extends ListReceiptRuleSetsRequest {}
export interface ListReceiptRuleSetsCommandOutput
  extends ListReceiptRuleSetsResponse,
    __MetadataBearer {}
export declare class ListReceiptRuleSetsCommand extends $Command<
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: ListReceiptRuleSetsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListReceiptRuleSetsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput>;
  private serialize;
  private deserialize;
}
