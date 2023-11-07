import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateReceiptRuleSetRequest,
  CreateReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CreateReceiptRuleSetCommandInput
  extends CreateReceiptRuleSetRequest {}
export interface CreateReceiptRuleSetCommandOutput
  extends CreateReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class CreateReceiptRuleSetCommand extends $Command<
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CreateReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateReceiptRuleSetCommandInput,
    CreateReceiptRuleSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
