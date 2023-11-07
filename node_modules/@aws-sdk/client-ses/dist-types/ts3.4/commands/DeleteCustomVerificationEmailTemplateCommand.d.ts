import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { DeleteCustomVerificationEmailTemplateRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteCustomVerificationEmailTemplateCommandInput
  extends DeleteCustomVerificationEmailTemplateRequest {}
export interface DeleteCustomVerificationEmailTemplateCommandOutput
  extends __MetadataBearer {}
export declare class DeleteCustomVerificationEmailTemplateCommand extends $Command<
  DeleteCustomVerificationEmailTemplateCommandInput,
  DeleteCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteCustomVerificationEmailTemplateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteCustomVerificationEmailTemplateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteCustomVerificationEmailTemplateCommandInput,
    DeleteCustomVerificationEmailTemplateCommandOutput
  >;
  private serialize;
  private deserialize;
}
