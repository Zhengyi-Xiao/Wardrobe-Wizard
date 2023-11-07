import { ListCustomVerificationEmailTemplatesCommand, } from "../commands/ListCustomVerificationEmailTemplatesCommand";
import { SESClient } from "../SESClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListCustomVerificationEmailTemplatesCommand(input), ...args);
};
export async function* paginateListCustomVerificationEmailTemplates(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof SESClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected SES | SESClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
