import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetIdentityVerificationAttributesCommandInput
  extends GetIdentityVerificationAttributesRequest {}
export interface GetIdentityVerificationAttributesCommandOutput
  extends GetIdentityVerificationAttributesResponse,
    __MetadataBearer {}
export declare class GetIdentityVerificationAttributesCommand extends $Command<
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetIdentityVerificationAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdentityVerificationAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityVerificationAttributesCommandInput,
    GetIdentityVerificationAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
