import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  ListReceiptFiltersRequest,
  ListReceiptFiltersResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SESClientResolvedConfig,
} from "../SESClient";
export { __MetadataBearer, $Command };
export interface ListReceiptFiltersCommandInput
  extends ListReceiptFiltersRequest {}
export interface ListReceiptFiltersCommandOutput
  extends ListReceiptFiltersResponse,
    __MetadataBearer {}
export declare class ListReceiptFiltersCommand extends $Command<
  ListReceiptFiltersCommandInput,
  ListReceiptFiltersCommandOutput,
  SESClientResolvedConfig
> {
  readonly input: ListReceiptFiltersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListReceiptFiltersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput>;
  private serialize;
  private deserialize;
}
