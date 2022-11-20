"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stateSchema = new mongoose_1.default.Schema({
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
        GID_1: {
            type: String,
        },
        GID_0: {
            type: String,
        },
        COUNTRY: {
            type: String,
        },
        NAME_1: {
            type: String,
        },
        VARNAME_1: {
            type: String,
        },
        NL_NAME_1: {
            type: String,
        },
        TYPE_1: {
            type: String,
        },
        ENGTYPE_1: {
            type: String,
        },
        CC_1: {
            type: String,
        },
        HASC_1: {
            type: String,
        },
        ISO_1: {
            type: String,
        }
    }
}, { versionKey: false });
exports.default = mongoose_1.default.model('state', stateSchema);
