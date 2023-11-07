import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListCustomVerificationEmailTemplatesRequest,
  ListCustomVerificationEmailTemplatesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface ListCustomVerificationEmailTemplatesCommandInput
  extends ListCustomVerificationEmailTemplatesRequest {}
export interface ListCustomVerificationEmailTemplatesCommandOutput
  extends ListCustomVerificationEmailTemplatesResponse,
    __MetadataBearer {}
export declare class ListCustomVerificationEmailTemplatesCommand extends $Command<
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: ListCustomVerificationEmailTemplatesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListCustomVerificationEmailTemplatesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListCustomVerificationEmailTemplatesCommandInput,
    ListCustomVerificationEmailTemplatesCommandOutput
  >;
  private serialize;
  private deserialize;
}
