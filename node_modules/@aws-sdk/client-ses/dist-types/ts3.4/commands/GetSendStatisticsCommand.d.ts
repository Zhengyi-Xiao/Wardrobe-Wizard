import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetSendStatisticsResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetSendStatisticsCommandInput {}
export interface GetSendStatisticsCommandOutput
  extends GetSendStatisticsResponse,
    __MetadataBearer {}
export declare class GetSendStatisticsCommand extends $Command<
  GetSendStatisticsCommandInput,
  GetSendStatisticsCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetSendStatisticsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetSendStatisticsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput>;
  private serialize;
  private deserialize;
}
