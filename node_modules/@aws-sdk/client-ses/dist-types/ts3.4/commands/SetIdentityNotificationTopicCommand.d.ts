import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetIdentityNotificationTopicRequest,
  SetIdentityNotificationTopicResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SetIdentityNotificationTopicCommandInput
  extends SetIdentityNotificationTopicRequest {}
export interface SetIdentityNotificationTopicCommandOutput
  extends SetIdentityNotificationTopicResponse,
    __MetadataBearer {}
export declare class SetIdentityNotificationTopicCommand extends $Command<
  SetIdentityNotificationTopicCommandInput,
  SetIdentityNotificationTopicCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SetIdentityNotificationTopicCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetIdentityNotificationTopicCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityNotificationTopicCommandInput,
    SetIdentityNotificationTopicCommandOutput
  >;
  private serialize;
  private deserialize;
}
