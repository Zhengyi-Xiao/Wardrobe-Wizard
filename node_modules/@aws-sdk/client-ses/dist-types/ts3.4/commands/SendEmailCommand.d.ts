import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { SendEmailRequest, SendEmailResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SendEmailCommandInput extends SendEmailRequest {}
export interface SendEmailCommandOutput
  extends SendEmailResponse,
    __MetadataBearer {}
export declare class SendEmailCommand extends $Command<
  SendEmailCommandInput,
  SendEmailCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SendEmailCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendEmailCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendEmailCommandInput, SendEmailCommandOutput>;
  private serialize;
  private deserialize;
}
