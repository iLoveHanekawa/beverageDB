"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoJSONRouter = void 0;
const express_1 = __importDefault(require("express"));
const geoJSONController_1 = require("../controllers/geoJSONController");
exports.geoJSONRouter = express_1.default.Router();
exports.geoJSONRouter.get('/', geoJSONController_1.getGeoJSON).post('/', geoJSONController_1.createGeoJSON);
