import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { UpdateCustomVerificationEmailTemplateRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface UpdateCustomVerificationEmailTemplateCommandInput
  extends UpdateCustomVerificationEmailTemplateRequest {}
export interface UpdateCustomVerificationEmailTemplateCommandOutput
  extends __MetadataBearer {}
export declare class UpdateCustomVerificationEmailTemplateCommand extends $Command<
  UpdateCustomVerificationEmailTemplateCommandInput,
  UpdateCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: UpdateCustomVerificationEmailTemplateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateCustomVerificationEmailTemplateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateCustomVerificationEmailTemplateCommandInput,
    UpdateCustomVerificationEmailTemplateCommandOutput
  >;
  private serialize;
  private deserialize;
}
