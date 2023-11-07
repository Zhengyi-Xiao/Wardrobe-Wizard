import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  CreateConfigurationSetTrackingOptionsRequest,
  CreateConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface CreateConfigurationSetTrackingOptionsCommandInput
  extends CreateConfigurationSetTrackingOptionsRequest {}
export interface CreateConfigurationSetTrackingOptionsCommandOutput
  extends CreateConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}
export declare class CreateConfigurationSetTrackingOptionsCommand extends $Command<
  CreateConfigurationSetTrackingOptionsCommandInput,
  CreateConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: CreateConfigurationSetTrackingOptionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateConfigurationSetTrackingOptionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateConfigurationSetTrackingOptionsCommandInput,
    CreateConfigurationSetTrackingOptionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
