import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteConfigurationSetCommandInput
  extends DeleteConfigurationSetRequest {}
export interface DeleteConfigurationSetCommandOutput
  extends DeleteConfigurationSetResponse,
    __MetadataBearer {}
export declare class DeleteConfigurationSetCommand extends $Command<
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteConfigurationSetCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteConfigurationSetCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteConfigurationSetCommandInput,
    DeleteConfigurationSetCommandOutput
  >;
  private serialize;
  private deserialize;
}
