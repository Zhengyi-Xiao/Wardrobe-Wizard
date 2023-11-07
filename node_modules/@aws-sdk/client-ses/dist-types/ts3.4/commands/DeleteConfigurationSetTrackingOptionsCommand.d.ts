import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteConfigurationSetTrackingOptionsRequest,
  DeleteConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteConfigurationSetTrackingOptionsCommandInput
  extends DeleteConfigurationSetTrackingOptionsRequest {}
export interface DeleteConfigurationSetTrackingOptionsCommandOutput
  extends DeleteConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}
export declare class DeleteConfigurationSetTrackingOptionsCommand extends $Command<
  DeleteConfigurationSetTrackingOptionsCommandInput,
  DeleteConfigurationSetTrackingOptionsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteConfigurationSetTrackingOptionsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteConfigurationSetTrackingOptionsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteConfigurationSetTrackingOptionsCommandInput,
    DeleteConfigurationSetTrackingOptionsCommandOutput
  >;
  private serialize;
  private deserialize;
}
