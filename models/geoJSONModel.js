"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const geoJSONSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        default: "FeatureCollection"
    },
    features: {
        type: Array,
        default: []
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('geoJSON', geoJSONSchema);
