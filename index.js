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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
require("express-async-errors");
const connectDB_1 = require("./db/connectDB");
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('hi mom');
});
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
