import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetReceiptRulePositionRequest,
  SetReceiptRulePositionResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SetReceiptRulePositionCommandInput
  extends SetReceiptRulePositionRequest {}
export interface SetReceiptRulePositionCommandOutput
  extends SetReceiptRulePositionResponse,
    __MetadataBearer {}
export declare class SetReceiptRulePositionCommand extends $Command<
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SetReceiptRulePositionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetReceiptRulePositionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetReceiptRulePositionCommandInput,
    SetReceiptRulePositionCommandOutput
  >;
  private serialize;
  private deserialize;
}
