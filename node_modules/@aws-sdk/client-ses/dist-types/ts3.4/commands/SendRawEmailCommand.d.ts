import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { SendRawEmailRequest, SendRawEmailResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SendRawEmailCommandInput extends SendRawEmailRequest {}
export interface SendRawEmailCommandOutput
  extends SendRawEmailResponse,
    __MetadataBearer {}
export declare class SendRawEmailCommand extends $Command<
  SendRawEmailCommandInput,
  SendRawEmailCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SendRawEmailCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendRawEmailCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendRawEmailCommandInput, SendRawEmailCommandOutput>;
  private serialize;
  private deserialize;
}
