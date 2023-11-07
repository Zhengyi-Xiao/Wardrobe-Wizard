import { Paginator } from "@smithy/types";
import {
  ListCustomVerificationEmailTemplatesCommandInput,
  ListCustomVerificationEmailTemplatesCommandOutput,
} from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESPaginationConfiguration } from "./Interfaces";
export declare function paginateListCustomVerificationEmailTemplates(
  config: SESPaginationConfiguration,
  input: ListCustomVerificationEmailTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomVerificationEmailTemplatesCommandOutput>;
