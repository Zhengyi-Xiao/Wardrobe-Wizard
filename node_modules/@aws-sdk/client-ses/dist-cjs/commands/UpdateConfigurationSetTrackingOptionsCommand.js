"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConfigurationSetTrackingOptionsCommand = exports.$Command = void 0;
const middleware_endpoint_1 = require("@smithy/middleware-endpoint");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const types_1 = require("@smithy/types");
const Aws_query_1 = require("../protocols/Aws_query");
class UpdateConfigurationSetTrackingOptionsCommand extends smithy_client_1.Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, UpdateConfigurationSetTrackingOptionsCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SESClient";
        const commandName = "UpdateConfigurationSetTrackingOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (_) => _,
            outputFilterSensitiveLog: (_) => _,
            [types_1.SMITHY_CONTEXT_KEY]: {
                service: "SimpleEmailService",
                operation: "UpdateConfigurationSetTrackingOptions",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_query_1.se_UpdateConfigurationSetTrackingOptionsCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_query_1.de_UpdateConfigurationSetTrackingOptionsCommand)(output, context);
    }
}
exports.UpdateConfigurationSetTrackingOptionsCommand = UpdateConfigurationSetTrackingOptionsCommand;
