import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateReceiptFilterRequest,
  CreateReceiptFilterResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CreateReceiptFilterCommandInput
  extends CreateReceiptFilterRequest {}
export interface CreateReceiptFilterCommandOutput
  extends CreateReceiptFilterResponse,
    __MetadataBearer {}
export declare class CreateReceiptFilterCommand extends $Command<
  CreateReceiptFilterCommandInput,
  CreateReceiptFilterCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CreateReceiptFilterCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateReceiptFilterCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput>;
  private serialize;
  private deserialize;
}
