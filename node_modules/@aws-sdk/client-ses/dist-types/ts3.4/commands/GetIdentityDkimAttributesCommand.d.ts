import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetIdentityDkimAttributesRequest,
  GetIdentityDkimAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetIdentityDkimAttributesCommandInput
  extends GetIdentityDkimAttributesRequest {}
export interface GetIdentityDkimAttributesCommandOutput
  extends GetIdentityDkimAttributesResponse,
    __MetadataBearer {}
export declare class GetIdentityDkimAttributesCommand extends $Command<
  GetIdentityDkimAttributesCommandInput,
  GetIdentityDkimAttributesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetIdentityDkimAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdentityDkimAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityDkimAttributesCommandInput,
    GetIdentityDkimAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
