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
exports.getStarter = exports.createStarter = exports.getAllStarters = void 0;
const starterModel_1 = __importDefault(require("../models/starterModel"));
const getAllStarters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const starters = yield starterModel_1.default.find({}).sort('name');
    res.json({ count: starters.length, starters });
});
exports.getAllStarters = getAllStarters;
const createStarter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield starterModel_1.default.create(req.body);
});
exports.createStarter = createStarter;
const getStarter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const starter = yield starterModel_1.default.findOne({ _id });
    res.json({ starter });
});
exports.getStarter = getStarter;
