import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateReceiptRuleRequest,
  CreateReceiptRuleResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CreateReceiptRuleCommandInput
  extends CreateReceiptRuleRequest {}
export interface CreateReceiptRuleCommandOutput
  extends CreateReceiptRuleResponse,
    __MetadataBearer {}
export declare class CreateReceiptRuleCommand extends $Command<
  CreateReceiptRuleCommandInput,
  CreateReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CreateReceiptRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateReceiptRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput>;
  private serialize;
  private deserialize;
}
