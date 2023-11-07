import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  UpdateConfigurationSetTrackingOptionsRequest,
  UpdateConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface UpdateConfigurationSetTrackingOptionsCommandInput
  extends UpdateConfigurationSetTrackingOptionsRequest {}
export interface UpdateConfigurationSetTrackingOptionsCommandOutput
  extends UpdateConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}
export declare class UpdateConfigurationSetTrackingOptionsCommand extends $Command<
  UpdateConfigurationSetTrackingOptionsCommandInput,
  UpdateConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: UpdateConfigurationSetTrackingOptionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateConfigurationSetTrackingOptionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateConfigurationSetTrackingOptionsCommandInput,
    UpdateConfigurationSetTrackingOptionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
