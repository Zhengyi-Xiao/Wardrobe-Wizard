import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DescribeConfigurationSetRequest,
  DescribeConfigurationSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DescribeConfigurationSetCommandInput
  extends DescribeConfigurationSetRequest {}
export interface DescribeConfigurationSetCommandOutput
  extends DescribeConfigurationSetResponse,
    __MetadataBearer {}
export declare class DescribeConfigurationSetCommand extends $Command<
  DescribeConfigurationSetCommandInput,
  DescribeConfigurationSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DescribeConfigurationSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeConfigurationSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeConfigurationSetCommandInput,
    DescribeConfigurationSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
