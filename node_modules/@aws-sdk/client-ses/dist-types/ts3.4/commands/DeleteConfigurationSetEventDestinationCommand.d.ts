import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  DeleteConfigurationSetEventDestinationRequest,
  DeleteConfigurationSetEventDestinationResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface DeleteConfigurationSetEventDestinationCommandInput
  extends DeleteConfigurationSetEventDestinationRequest {}
export interface DeleteConfigurationSetEventDestinationCommandOutput
  extends DeleteConfigurationSetEventDestinationResponse,
    __MetadataBearer {}
export declare class DeleteConfigurationSetEventDestinationCommand extends $Command<
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: DeleteConfigurationSetEventDestinationCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteConfigurationSetEventDestinationCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteConfigurationSetEventDestinationCommandInput,
    DeleteConfigurationSetEventDestinationCommandOutput
  >;
  private serialize;
  private deserialize;
}
