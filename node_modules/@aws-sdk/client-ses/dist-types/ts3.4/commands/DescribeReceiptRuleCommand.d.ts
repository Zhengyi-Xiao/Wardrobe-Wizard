import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeReceiptRuleRequest,
  DescribeReceiptRuleResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DescribeReceiptRuleCommandInput
  extends DescribeReceiptRuleRequest {}
export interface DescribeReceiptRuleCommandOutput
  extends DescribeReceiptRuleResponse,
    __MetadataBearer {}
export declare class DescribeReceiptRuleCommand extends $Command<
  DescribeReceiptRuleCommandInput,
  DescribeReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DescribeReceiptRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeReceiptRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReceiptRuleCommandInput, DescribeReceiptRuleCommandOutput>;
  private serialize;
  private deserialize;
}
