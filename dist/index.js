"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server"));
//server.listen(process.env.PORT || 5000);
server_1.default.listen(process.env.PORT || 5000);
//server_1.default.listen(80);
//# sourceMappingURL=index.js.map
