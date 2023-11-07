import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateReceiptRuleRequest,
  UpdateReceiptRuleResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface UpdateReceiptRuleCommandInput
  extends UpdateReceiptRuleRequest {}
export interface UpdateReceiptRuleCommandOutput
  extends UpdateReceiptRuleResponse,
    __MetadataBearer {}
export declare class UpdateReceiptRuleCommand extends $Command<
  UpdateReceiptRuleCommandInput,
  UpdateReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: UpdateReceiptRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateReceiptRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput>;
  private serialize;
  private deserialize;
}
