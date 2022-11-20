"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeoJSON = exports.createGeoJSON = void 0;
const countryModel_1 = __importDefault(require("../models/countryModel"));
const stateModel_1 = __importDefault(require("../models/stateModel"));
const geoJSONModel_1 = __importDefault(require("../models/geoJSONModel"));
const createGeoJSON = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const arr1 = yield countryModel_1.default.find({}, { _id: 0 });
    const arr2 = yield stateModel_1.default.find({}, { _id: 0 });
    req.body.features = arr1.concat(arr2);
    console.log(req.body.features);
    yield geoJSONModel_1.default.create(req.body);
});
exports.createGeoJSON = createGeoJSON;
const getGeoJSON = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield geoJSONModel_1.default.find({}, { _id: 0 });
    res.json({ result: data[0] });
});
exports.getGeoJSON = getGeoJSON;
