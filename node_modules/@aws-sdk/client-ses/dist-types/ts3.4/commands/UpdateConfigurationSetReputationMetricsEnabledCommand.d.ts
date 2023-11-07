import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { UpdateConfigurationSetReputationMetricsEnabledRequest } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface UpdateConfigurationSetReputationMetricsEnabledCommandInput
  extends UpdateConfigurationSetReputationMetricsEnabledRequest {}
export interface UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  extends __MetadataBearer {}
export declare class UpdateConfigurationSetReputationMetricsEnabledCommand extends $Command<
  UpdateConfigurationSetReputationMetricsEnabledCommandInput,
  UpdateConfigurationSetReputationMetricsEnabledCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: UpdateConfigurationSetReputationMetricsEnabledCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(
    input: UpdateConfigurationSetReputationMetricsEnabledCommandInput
  );
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateConfigurationSetReputationMetricsEnabledCommandInput,
    UpdateConfigurationSetReputationMetricsEnabledCommandOutput
  >;
  private serialize;
  private deserialize;
}
