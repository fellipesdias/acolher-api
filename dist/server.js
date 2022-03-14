"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var AuthController_1 = require("./controllers/AuthController");
var Participants_1 = require("./controllers/participants/Participants");
var Address_1 = require("./controllers/participants/Address");
var Contacts_1 = require("./controllers/participants/Contacts");
var FamilyData_1 = require("./controllers/participants/FamilyData");
var FamilyMembers_1 = require("./controllers/participants/FamilyMembers");
var Health_1 = require("./controllers/participants/Health");
var SchoolData_1 = require("./controllers/participants/SchoolData");
var client_1 = require("@prisma/client");
var cors_1 = __importDefault(require("cors"));
var server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.get("/", function (req, res) {
    res.send("The server is up");
});
server.post("/login", function (req, res) {
    return AuthController_1.AuthController.login(req, res).then(function (response) { return response; });
});
server.post("/signup", function (req, res) {
    return AuthController_1.AuthController.signup(req, res).then(function (response) { return response; });
});
/**partner crud */
server.post("/participant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Participants_1.Participants.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/participant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Participants_1.Participants.findAll(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/participant/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Participants_1.Participants.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/participant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Participants_1.Participants.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/participant/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Participants_1.Participants.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** crud contatos */
server.get("/contact/:participantId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Contacts_1.Contacts.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.post("/contact", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Contacts_1.Contacts.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/contact", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Contacts_1.Contacts.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/contact/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Contacts_1.Contacts.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** dados familiares */
server.post("/familyData", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyData_1.FamilyData.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/familyData", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyData_1.FamilyData.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/familyData/:idParticipant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyData_1.FamilyData.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/familyData/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyData_1.FamilyData.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** membros da familia */
server.post("/familyMembers", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyMembers_1.FamilyMembers.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/familyMembers", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyMembers_1.FamilyMembers.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/familyMembers/:idParticipant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyMembers_1.FamilyMembers.findAll(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/familyMembers/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, FamilyMembers_1.FamilyMembers.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** saúde */
server.post("/health", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Health_1.Health.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/health", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Health_1.Health.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/health/:idParticipant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Health_1.Health.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/health/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Health_1.Health.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** dados escolares */
server.post("/schoolData", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SchoolData_1.SchoolData.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/schoolData", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SchoolData_1.SchoolData.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/schoolData/:idParticipant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SchoolData_1.SchoolData.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/schoolData/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, SchoolData_1.SchoolData.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
/** Endereço **/
server.post("/address", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req);
                return [4 /*yield*/, Address_1.Address.create(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.put("/address", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Address_1.Address.update(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.get("/address/:idParticipant", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Address_1.Address.find(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
server.delete("/address/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Address_1.Address.delete(req, res)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); });
exports.prismaClient = new client_1.PrismaClient();
exports.default = server;
//# sourceMappingURL=server.js.map