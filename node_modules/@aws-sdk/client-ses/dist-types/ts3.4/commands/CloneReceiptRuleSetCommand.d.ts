import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CloneReceiptRuleSetRequest,
  CloneReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CloneReceiptRuleSetCommandInput
  extends CloneReceiptRuleSetRequest {}
export interface CloneReceiptRuleSetCommandOutput
  extends CloneReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class CloneReceiptRuleSetCommand extends $Command<
  CloneReceiptRuleSetCommandInput,
  CloneReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CloneReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CloneReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput>;
  private serialize;
  private deserialize;
}
