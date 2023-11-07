import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetIdentityFeedbackForwardingEnabledRequest,
  SetIdentityFeedbackForwardingEnabledResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SetIdentityFeedbackForwardingEnabledCommandInput
  extends SetIdentityFeedbackForwardingEnabledRequest {}
export interface SetIdentityFeedbackForwardingEnabledCommandOutput
  extends SetIdentityFeedbackForwardingEnabledResponse,
    __MetadataBearer {}
export declare class SetIdentityFeedbackForwardingEnabledCommand extends $Command<
  SetIdentityFeedbackForwardingEnabledCommandInput,
  SetIdentityFeedbackForwardingEnabledCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SetIdentityFeedbackForwardingEnabledCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetIdentityFeedbackForwardingEnabledCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityFeedbackForwardingEnabledCommandInput,
    SetIdentityFeedbackForwardingEnabledCommandOutput
  >;
  private serialize;
  private deserialize;
}
