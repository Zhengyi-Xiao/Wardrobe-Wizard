import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeActiveReceiptRuleSetRequest,
  DescribeActiveReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DescribeActiveReceiptRuleSetCommandInput
  extends DescribeActiveReceiptRuleSetRequest {}
export interface DescribeActiveReceiptRuleSetCommandOutput
  extends DescribeActiveReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class DescribeActiveReceiptRuleSetCommand extends $Command<
  DescribeActiveReceiptRuleSetCommandInput,
  DescribeActiveReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DescribeActiveReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeActiveReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeActiveReceiptRuleSetCommandInput,
    DescribeActiveReceiptRuleSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
