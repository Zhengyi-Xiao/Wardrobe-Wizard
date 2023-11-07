import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  VerifyEmailIdentityRequest,
  VerifyEmailIdentityResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface VerifyEmailIdentityCommandInput
  extends VerifyEmailIdentityRequest {}
export interface VerifyEmailIdentityCommandOutput
  extends VerifyEmailIdentityResponse,
    __MetadataBearer {}
export declare class VerifyEmailIdentityCommand extends $Command<
  VerifyEmailIdentityCommandInput,
  VerifyEmailIdentityCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: VerifyEmailIdentityCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: VerifyEmailIdentityCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput>;
  private serialize;
  private deserialize;
}
