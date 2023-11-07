import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetIdentityMailFromDomainAttributesCommandInput
  extends GetIdentityMailFromDomainAttributesRequest {}
export interface GetIdentityMailFromDomainAttributesCommandOutput
  extends GetIdentityMailFromDomainAttributesResponse,
    __MetadataBearer {}
export declare class GetIdentityMailFromDomainAttributesCommand extends $Command<
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetIdentityMailFromDomainAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdentityMailFromDomainAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityMailFromDomainAttributesCommandInput,
    GetIdentityMailFromDomainAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
