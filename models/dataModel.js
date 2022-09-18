"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dataSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    starter: {
        type: String
    },
    ingredients: {
        type: String
    },
    place: {
        type: String
    },
    culturalImportance: {
        type: String
    },
    microorganisms: {
        type: String
    },
    nutritionalValue: {
        type: String
    },
    alcoholContent: {
        type: String
    },
    tasteAndOdour: {
        type: String
    },
    texture: {
        type: String
    },
    fermentationTime: {
        type: String
    },
    reference: {
        type: String
    }
});
exports.default = mongoose_1.default.model('data', dataSchema);