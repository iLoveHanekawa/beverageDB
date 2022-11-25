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
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
require("dotenv/config");
require("express-async-errors");
const connectDB_1 = require("./db/connectDB");
const cors_1 = __importDefault(require("cors"));
const dataRouter_1 = require("./routers/dataRouter");
const starterRouter_1 = require("./routers/starterRouter");
const countryRouter_1 = require("./routers/countryRouter");
const stateRouter_1 = require("./routers/stateRouter");
const geoJSONRouter_1 = require("./routers/geoJSONRouter");
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.static(path.join(__dirname, '/client/dist')));
app.get('/', (req, res) => {
    res.send('hi mom');
});
app.use('/api/v1/data', dataRouter_1.dataRouter);
app.use('/api/v1/starter', starterRouter_1.starterRouter);
app.use('/api/v1/country', countryRouter_1.countryRouter);
app.use('/api/v1/state', stateRouter_1.stateRouter);
app.use('/api/v1/geojson', geoJSONRouter_1.geoJSONRouter);
const start = (uri, port) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)(uri);
        console.log('connected to db');
        app.listen(port, () => {
            console.log(`server listening to: ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start(process.env.MONGO_URI, port);
