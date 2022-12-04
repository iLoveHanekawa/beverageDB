"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRouter = void 0;
const express_1 = __importDefault(require("express"));
const statsController_1 = require("../controllers/statsController");
exports.statsRouter = express_1.default.Router();
exports.statsRouter.get('/', statsController_1.getAllCharts);
