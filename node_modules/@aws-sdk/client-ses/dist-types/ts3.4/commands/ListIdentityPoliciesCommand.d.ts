import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListIdentityPoliciesRequest,
  ListIdentityPoliciesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface ListIdentityPoliciesCommandInput
  extends ListIdentityPoliciesRequest {}
export interface ListIdentityPoliciesCommandOutput
  extends ListIdentityPoliciesResponse,
    __MetadataBearer {}
export declare class ListIdentityPoliciesCommand extends $Command<
  ListIdentityPoliciesCommandInput,
  ListIdentityPoliciesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: ListIdentityPoliciesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListIdentityPoliciesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListIdentityPoliciesCommandInput,
    ListIdentityPoliciesCommandOutput
  >;
  private serialize;
  private deserialize;
}
