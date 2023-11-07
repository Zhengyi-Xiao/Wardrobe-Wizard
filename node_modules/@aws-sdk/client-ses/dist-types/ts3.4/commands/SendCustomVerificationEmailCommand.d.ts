import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendCustomVerificationEmailRequest,
  SendCustomVerificationEmailResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SendCustomVerificationEmailCommandInput
  extends SendCustomVerificationEmailRequest {}
export interface SendCustomVerificationEmailCommandOutput
  extends SendCustomVerificationEmailResponse,
    __MetadataBearer {}
export declare class SendCustomVerificationEmailCommand extends $Command<
  SendCustomVerificationEmailCommandInput,
  SendCustomVerificationEmailCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SendCustomVerificationEmailCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendCustomVerificationEmailCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SendCustomVerificationEmailCommandInput,
    SendCustomVerificationEmailCommandOutput
  >;
  private serialize;
  private deserialize;
}
