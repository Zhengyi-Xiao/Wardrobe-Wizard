import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetIdentityNotificationAttributesCommandInput
  extends GetIdentityNotificationAttributesRequest {}
export interface GetIdentityNotificationAttributesCommandOutput
  extends GetIdentityNotificationAttributesResponse,
    __MetadataBearer {}
export declare class GetIdentityNotificationAttributesCommand extends $Command<
  GetIdentityNotificationAttributesCommandInput,
  GetIdentityNotificationAttributesCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetIdentityNotificationAttributesCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetIdentityNotificationAttributesCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityNotificationAttributesCommandInput,
    GetIdentityNotificationAttributesCommandOutput
  >;
  private serialize;
  private deserialize;
}
