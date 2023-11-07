import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { GetAccountSendingEnabledResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface GetAccountSendingEnabledCommandInput {}
export interface GetAccountSendingEnabledCommandOutput
  extends GetAccountSendingEnabledResponse,
    __MetadataBearer {}
export declare class GetAccountSendingEnabledCommand extends $Command<
  GetAccountSendingEnabledCommandInput,
  GetAccountSendingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: GetAccountSendingEnabledCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccountSendingEnabledCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetAccountSendingEnabledCommandInput,
    GetAccountSendingEnabledCommandOutput
  >;
  private serialize;
  private deserialize;
}
