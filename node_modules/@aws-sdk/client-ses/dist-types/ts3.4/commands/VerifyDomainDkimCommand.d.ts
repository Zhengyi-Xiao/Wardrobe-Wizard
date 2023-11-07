import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  VerifyDomainDkimRequest,
  VerifyDomainDkimResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface VerifyDomainDkimCommandInput extends VerifyDomainDkimRequest {}
export interface VerifyDomainDkimCommandOutput
  extends VerifyDomainDkimResponse,
    __MetadataBearer {}
export declare class VerifyDomainDkimCommand extends $Command<
  VerifyDomainDkimCommandInput,
  VerifyDomainDkimCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: VerifyDomainDkimCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: VerifyDomainDkimCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput>;
  private serialize;
  private deserialize;
}
