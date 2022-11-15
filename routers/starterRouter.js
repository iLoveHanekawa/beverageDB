"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.starterRouter = void 0;
const express_1 = __importDefault(require("express"));
const starterController_1 = require("../controllers/starterController");
exports.starterRouter = express_1.default.Router();
exports.starterRouter.get('/', starterController_1.getAllStarters).post('/', starterController_1.createStarter);
