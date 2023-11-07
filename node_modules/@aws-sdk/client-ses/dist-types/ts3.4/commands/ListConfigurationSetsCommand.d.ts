import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListConfigurationSetsRequest,
  ListConfigurationSetsResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface ListConfigurationSetsCommandInput
  extends ListConfigurationSetsRequest {}
export interface ListConfigurationSetsCommandOutput
  extends ListConfigurationSetsResponse,
    __MetadataBearer {}
export declare class ListConfigurationSetsCommand extends $Command<
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: ListConfigurationSetsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListConfigurationSetsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListConfigurationSetsCommandInput,
    ListConfigurationSetsCommandOutput
  >;
  private serialize;
  private deserialize;
}
