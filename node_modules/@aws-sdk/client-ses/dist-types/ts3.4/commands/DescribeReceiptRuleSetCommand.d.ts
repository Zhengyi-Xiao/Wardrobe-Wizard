import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeReceiptRuleSetRequest,
  DescribeReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DescribeReceiptRuleSetCommandInput
  extends DescribeReceiptRuleSetRequest {}
export interface DescribeReceiptRuleSetCommandOutput
  extends DescribeReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class DescribeReceiptRuleSetCommand extends $Command<
  DescribeReceiptRuleSetCommandInput,
  DescribeReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DescribeReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeReceiptRuleSetCommandInput,
    DescribeReceiptRuleSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
