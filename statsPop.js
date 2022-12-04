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
const statsModel_1 = __importDefault(require("./models/statsModel"));
const connectDB_1 = require("./db/connectDB");
require("dotenv/config");
const charts = [
    {
        chartType: 'bar',
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    id: 0,
                    label: 'list 1',
                    data: [5, 6, 7],
                    backgroundColor: ['#f06292', 'purple', 'yellow']
                },
                {
                    id: 1,
                    label: 'list 2',
                    data: [3, 2, 1],
                    backgroundColor: ['red', 'green', 'blue'],
                },
            ],
        }
    },
    {
        chartType: 'bar',
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    id: 0,
                    label: 'list 1',
                    data: [5, 6, 7],
                    backgroundColor: ['#f06292', 'purple', 'yellow']
                },
                {
                    id: 1,
                    label: 'list 2',
                    data: [3, 2, 1],
                    backgroundColor: ['red', 'green', 'blue'],
                },
            ],
        }
    },
    {
        chartType: 'bar',
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
                {
                    id: 0,
                    label: 'list 1',
                    data: [5, 6, 7],
                    backgroundColor: ['#f06292', 'purple', 'yellow']
                },
                {
                    id: 1,
                    label: 'list 2',
                    data: [3, 2, 1],
                    backgroundColor: ['red', 'green', 'blue'],
                },
            ],
        }
    }
];
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)(process.env.MONGO_URI);
        yield statsModel_1.default.deleteMany();
        yield statsModel_1.default.create(charts);
        process.exit(1);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
start();
