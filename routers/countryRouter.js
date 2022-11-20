"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryRouter = void 0;
const express_1 = __importDefault(require("express"));
const countryController_1 = require("../controllers/countryController");
exports.countryRouter = express_1.default.Router();
exports.countryRouter.get('/', countryController_1.getAllFeatures).post('/', countryController_1.createFeature);
