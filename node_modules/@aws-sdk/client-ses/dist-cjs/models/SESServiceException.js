"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESServiceException = exports.__ServiceException = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "__ServiceException", { enumerable: true, get: function () { return smithy_client_1.ServiceException; } });
class SESServiceException extends smithy_client_1.ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SESServiceException.prototype);
    }
}
exports.SESServiceException = SESServiceException;
