"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//thank you https://davidpiesse.github.io/tailwind-md-colours/
const statsSchema = new mongoose_1.default.Schema({
    chartData: {
        labels: {
            type: [String]
        },
        datasets: {
            type: [{
                    id: Number,
                    label: String,
                    data: [Number],
                    backgroundColor: [String]
                }]
        }
    },
    chartType: String
}, {
    versionKey: false
});
exports.default = mongoose_1.default.model('stats', statsSchema);
