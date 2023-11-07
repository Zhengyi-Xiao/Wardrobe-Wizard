import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { CreateCustomVerificationEmailTemplateRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CreateCustomVerificationEmailTemplateCommandInput
  extends CreateCustomVerificationEmailTemplateRequest {}
export interface CreateCustomVerificationEmailTemplateCommandOutput
  extends __MetadataBearer {}
export declare class CreateCustomVerificationEmailTemplateCommand extends $Command<
  CreateCustomVerificationEmailTemplateCommandInput,
  CreateCustomVerificationEmailTemplateCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CreateCustomVerificationEmailTemplateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateCustomVerificationEmailTemplateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateCustomVerificationEmailTemplateCommandInput,
    CreateCustomVerificationEmailTemplateCommandOutput
  >;
  private serialize;
  private deserialize;
}
