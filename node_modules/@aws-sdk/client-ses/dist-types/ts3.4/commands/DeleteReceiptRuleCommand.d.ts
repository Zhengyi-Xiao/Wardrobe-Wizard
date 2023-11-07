import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteReceiptRuleRequest,
  DeleteReceiptRuleResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteReceiptRuleCommandInput
  extends DeleteReceiptRuleRequest {}
export interface DeleteReceiptRuleCommandOutput
  extends DeleteReceiptRuleResponse,
    __MetadataBearer {}
export declare class DeleteReceiptRuleCommand extends $Command<
  DeleteReceiptRuleCommandInput,
  DeleteReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteReceiptRuleCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteReceiptRuleCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput>;
  private serialize;
  private deserialize;
}
