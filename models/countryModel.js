"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const countrySchema = new mongoose_1.default.Schema({
    type: {
        type: String
    },
    geometry: {
        type: {
            type: String
        },
        coordinates: {
            type: Array
        }
    },
    properties: {
        iso3: {
            type: String,
        },
        status: {
            type: String,
        },
        color_code: {
            type: String,
        },
        name: {
            type: String,
        },
        continent: {
            type: String,
        },
        region: {
            type: String,
        },
        iso_3166_1_: {
            type: String,
        },
        french_shor: {
            type: String,
        },
    },
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('country', countrySchema);
