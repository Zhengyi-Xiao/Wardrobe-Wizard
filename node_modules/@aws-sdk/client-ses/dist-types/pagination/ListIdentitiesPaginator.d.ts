import { Paginator } from "@smithy/types";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "../commands/ListIdentitiesCommand";
import { SESPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListIdentities(config: SESPaginationConfiguration, input: ListIdentitiesCommandInput, ...additionalArguments: any): Paginator<ListIdentitiesCommandOutput>;
