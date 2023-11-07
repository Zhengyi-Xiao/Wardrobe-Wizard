import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  SetIdentityDkimEnabledRequest,
  SetIdentityDkimEnabledResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface SetIdentityDkimEnabledCommandInput
  extends SetIdentityDkimEnabledRequest {}
export interface SetIdentityDkimEnabledCommandOutput
  extends SetIdentityDkimEnabledResponse,
    __MetadataBearer {}
export declare class SetIdentityDkimEnabledCommand extends $Command<
  SetIdentityDkimEnabledCommandInput,
  SetIdentityDkimEnabledCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: SetIdentityDkimEnabledCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SetIdentityDkimEnabledCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    SetIdentityDkimEnabledCommandInput,
    SetIdentityDkimEnabledCommandOutput
  >;
  private serialize;
  private deserialize;
}
