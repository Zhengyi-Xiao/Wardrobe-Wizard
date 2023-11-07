import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { VerifyEmailAddressRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface VerifyEmailAddressCommandInput
  extends VerifyEmailAddressRequest {}
export interface VerifyEmailAddressCommandOutput extends __MetadataBearer {}
export declare class VerifyEmailAddressCommand extends $Command<
  VerifyEmailAddressCommandInput,
  VerifyEmailAddressCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: VerifyEmailAddressCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: VerifyEmailAddressCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput>;
  private serialize;
  private deserialize;
}
