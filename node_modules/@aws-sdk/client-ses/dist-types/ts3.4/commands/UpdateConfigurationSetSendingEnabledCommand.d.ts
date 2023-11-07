import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { UpdateConfigurationSetSendingEnabledRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface UpdateConfigurationSetSendingEnabledCommandInput
  extends UpdateConfigurationSetSendingEnabledRequest {}
export interface UpdateConfigurationSetSendingEnabledCommandOutput
  extends __MetadataBearer {}
export declare class UpdateConfigurationSetSendingEnabledCommand extends $Command<
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: UpdateConfigurationSetSendingEnabledCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateConfigurationSetSendingEnabledCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateConfigurationSetSendingEnabledCommandInput,
    UpdateConfigurationSetSendingEnabledCommandOutput
  >;
  private serialize;
  private deserialize;
}
