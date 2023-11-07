import { Paginator } from "@smithy/types";
import { ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput } from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListCustomVerificationEmailTemplates(config: SESPaginationConfiguration, input: ListCustomVerificationEmailTemplatesCommandInput, ...additionalArguments: any): Paginator<ListCustomVerificationEmailTemplatesCommandOutput>;
