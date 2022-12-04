"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("./data.json"));
const fs = __importStar(require("fs"));
const newData = data.default.map((i) => {
    let newObj = Object.assign({}, i);
    if (i.alcoholContent) {
        if (typeof i.alcoholContent === 'string') {
            const result = i.alcoholContent.match(/[\d\.]+/g);
            const numRes = result === null || result === void 0 ? void 0 : result.map(i => Number(i));
            if (numRes)
                newObj = Object.assign(Object.assign({}, i), { minAC: Math.min(...numRes), maxAC: Math.max(...numRes) });
        }
        else
            newObj = Object.assign(Object.assign({}, i), { minAC: i.alcoholContent, maxAC: i.alcoholContent });
    }
    if (i.fermentationTime) {
        const result = i.fermentationTime.match(/[\d\.]+/g);
        let numArr = result === null || result === void 0 ? void 0 : result.map(i => Number(i));
        if (numArr) {
            const str = i.fermentationTime.toLocaleLowerCase();
            if (str.includes("day"))
                numArr = numArr.map(i => i * 24);
            if (str.includes("week"))
                numArr = numArr.map(i => i * 24 * 7);
            if (str.includes("month"))
                numArr = numArr.map(i => i * 24 * 30);
            if (str.includes("year"))
                numArr = numArr.map(i => i * 24 * 365);
            newObj = Object.assign(Object.assign({}, newObj), { minFT: Math.min(...numArr), maxFT: Math.max(...numArr) });
        }
    }
    return newObj;
});
fs.writeFile(__dirname + '/newData.json', JSON.stringify(newData), (err) => { if (err)
    console.log(err); });
