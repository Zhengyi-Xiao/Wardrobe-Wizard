import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { SendBounceRequest, SendBounceResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SendBounceCommandInput extends SendBounceRequest {}
export interface SendBounceCommandOutput
  extends SendBounceResponse,
    __MetadataBearer {}
export declare class SendBounceCommand extends $Command<
  SendBounceCommandInput,
  SendBounceCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SendBounceCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendBounceCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBounceCommandInput, SendBounceCommandOutput>;
  private serialize;
  private deserialize;
}
