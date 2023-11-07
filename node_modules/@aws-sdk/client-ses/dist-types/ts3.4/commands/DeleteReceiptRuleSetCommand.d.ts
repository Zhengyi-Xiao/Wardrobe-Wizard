import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteReceiptRuleSetRequest,
  DeleteReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteReceiptRuleSetCommandInput
  extends DeleteReceiptRuleSetRequest {}
export interface DeleteReceiptRuleSetCommandOutput
  extends DeleteReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class DeleteReceiptRuleSetCommand extends $Command<
  DeleteReceiptRuleSetCommandInput,
  DeleteReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteReceiptRuleSetCommandInput,
    DeleteReceiptRuleSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
