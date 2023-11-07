import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetActiveReceiptRuleSetRequest,
  SetActiveReceiptRuleSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SetActiveReceiptRuleSetCommandInput
  extends SetActiveReceiptRuleSetRequest {}
export interface SetActiveReceiptRuleSetCommandOutput
  extends SetActiveReceiptRuleSetResponse,
    __MetadataBearer {}
export declare class SetActiveReceiptRuleSetCommand extends $Command<
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SetActiveReceiptRuleSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetActiveReceiptRuleSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetActiveReceiptRuleSetCommandInput,
    SetActiveReceiptRuleSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
