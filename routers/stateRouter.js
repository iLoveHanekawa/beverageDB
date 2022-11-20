"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const express_1 = __importDefault(require("express"));
const stateController_1 = require("../controllers/stateController");
exports.stateRouter = express_1.default.Router();
exports.stateRouter.get('/', stateController_1.getAllFeatures).post('/', stateController_1.createFeature);
