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
exports.getData = exports.getAllData = void 0;
const dataModel_1 = __importDefault(require("../models/dataModel"));
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, starter, ingredients, place, culturalImportance, microorganisms, nutritionalValue, alcoholContent, tasteAndOdour, texture, reference, limit, page = 1 } = req.query;
    let queryObj = {};
    if (name) {
        queryObj = Object.assign(Object.assign({}, queryObj), { name: { $regex: name, $options: 'i' } });
    }
    if (starter) {
        queryObj = Object.assign(Object.assign({}, queryObj), { starter: { $regex: starter, $options: 'i' } });
    }
    if (ingredients) {
        queryObj = Object.assign(Object.assign({}, queryObj), { ingredients: { $regex: ingredients, $options: 'i' } });
    }
    if (place) {
        queryObj = Object.assign(Object.assign({}, queryObj), { place: { $regex: place, $options: 'i' } });
    }
    if (culturalImportance) {
        queryObj = Object.assign(Object.assign({}, queryObj), { culturalImportance: culturalImportance });
    }
    if (microorganisms) {
        queryObj = Object.assign(Object.assign({}, queryObj), { microorganisms: microorganisms });
    }
    if (nutritionalValue) {
        queryObj = Object.assign(Object.assign({}, queryObj), { nutritionalValue: nutritionalValue });
    }
    if (alcoholContent) {
        queryObj = Object.assign(Object.assign({}, queryObj), { alcoholContent: alcoholContent });
    }
    if (tasteAndOdour) {
        queryObj = Object.assign(Object.assign({}, queryObj), { tasteAndOdour: tasteAndOdour });
    }
    if (texture) {
        queryObj = Object.assign(Object.assign({}, queryObj), { texture: texture });
    }
    if (reference) {
        queryObj = Object.assign(Object.assign({}, queryObj), { reference: reference });
    }
    const lim = Number(limit) || 10;
    const skip = lim * (Number(page) - 1);
    let data = yield dataModel_1.default.find(queryObj).sort('name');
    let result = { total: data.length };
    data = yield dataModel_1.default.find(queryObj).sort('name').skip(skip).limit(lim);
    res.json(Object.assign(Object.assign({}, result), { count: data.length, data }));
});
exports.getAllData = getAllData;
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield dataModel_1.default.findById(req.params.userId);
    res.json({ data });
});
exports.getData = getData;
