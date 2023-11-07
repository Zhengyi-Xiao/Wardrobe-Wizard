import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface PutConfigurationSetDeliveryOptionsCommandInput
  extends PutConfigurationSetDeliveryOptionsRequest {}
export interface PutConfigurationSetDeliveryOptionsCommandOutput
  extends PutConfigurationSetDeliveryOptionsResponse,
    __MetadataBearer {}
export declare class PutConfigurationSetDeliveryOptionsCommand extends $Command<
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: PutConfigurationSetDeliveryOptionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutConfigurationSetDeliveryOptionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutConfigurationSetDeliveryOptionsCommandInput,
    PutConfigurationSetDeliveryOptionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
