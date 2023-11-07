import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SendBulkTemplatedEmailRequest,
  SendBulkTemplatedEmailResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SendBulkTemplatedEmailCommandInput
  extends SendBulkTemplatedEmailRequest {}
export interface SendBulkTemplatedEmailCommandOutput
  extends SendBulkTemplatedEmailResponse,
    __MetadataBearer {}
export declare class SendBulkTemplatedEmailCommand extends $Command<
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SendBulkTemplatedEmailCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SendBulkTemplatedEmailCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SendBulkTemplatedEmailCommandInput,
    SendBulkTemplatedEmailCommandOutput
  >;
  private serialize;
  private deserialize;
}
