import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  TestRenderTemplateRequest,
  TestRenderTemplateResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface TestRenderTemplateCommandInput
  extends TestRenderTemplateRequest {}
export interface TestRenderTemplateCommandOutput
  extends TestRenderTemplateResponse,
    __MetadataBearer {}
export declare class TestRenderTemplateCommand extends $Command<
  TestRenderTemplateCommandInput,
  TestRenderTemplateCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: TestRenderTemplateCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: TestRenderTemplateCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput>;
  private serialize;
  private deserialize;
}
