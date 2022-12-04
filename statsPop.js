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
const dataModel_1 = __importDefault(require("./models/dataModel"));
const axios_1 = __importDefault(require("axios"));
const charts = () => __awaiter(void 0, void 0, void 0, function* () {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    const topoJSONres = yield axios_1.default.get('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const topoJSON = yield topoJSONres.data;
    let countryKeys = topoJSON.objects.countries.geometries.map((i) => i.properties.name);
    const tasteKeys = ['Fruity', 'Strong', 'Sweet', 'Sour', 'Bitter', 'Acidic', 'Spicy'];
    const ingredientKeys = ["Rice", "Maize", "Barley", "Wheat", "Millet", "Coconut", "Grapes", "Apples", "Cashew", "Honey", "Corn", "Sorghum", "Milk", "Ginger", "Sugarcane", "Cinnamon", "Orange", "Berries", "Almond"];
    const starterKeys = ['Ipoh', 'Hamei', 'Bakhar', 'Opop', 'Thiat', 'Humao', 'Pitha', 'Phab', 'Ranu', 'Yeast', 'Chamri', 'Khai', 'Dwadim', 'Kekhri', 'Marcha'];
    const getArr = (key, keyArr) => __awaiter(void 0, void 0, void 0, function* () {
        const promiseArr = keyArr.map(i => {
            const response = dataModel_1.default.find({ [key]: { $regex: i, $options: 'i' } });
            return response;
        });
        const arr = yield Promise.all(promiseArr);
        const nums = arr.map(i => i.length);
        return nums;
    });
    let countryNums = yield getArr('place', countryKeys);
    const newCountryKeys = [];
    countryNums = countryNums.filter((val, index) => {
        if (val !== 0) {
            newCountryKeys.push(countryKeys[index]);
        }
        return val !== 0;
    });
    console.log(newCountryKeys);
    const tasteNums = yield getArr('tasteAndOdour', tasteKeys);
    const ingredientNums = yield getArr('ingredients', ingredientKeys);
    const starterNums = yield getArr('starter', starterKeys);
    return [
        // {
        //     chartType: 'bar',      
        //     chartData: {
        //         labels: tasteKeys,
        //         datasets: [
        //             {
        //                 id: 0,
        //                 label: 'Texture',
        //                 data: tasteNums,
        //                 backgroundColor: ['#ffca28', '#e1bee7', '#d1c4e9', '#ffcdd2', '#bbdefb', '#dcedc8', '#fff9c4']
        //             },
        //         ],
        //     }
        // },
        // {
        //     chartType: 'bar',
        //     chartData: {
        //         labels: ingredientKeys,
        //         datasets: [
        //             {
        //                 id: 0,
        //                 label: 'list 1',
        //                 data: ingredientNums,
        //                 backgroundColor: ['#f06292', 'purple', 'yellow']
        //             }
        //         ],
        //     }
        // },
        // {
        //     chartType: 'bar',
        //     chartData: {
        //         labels: starterKeys,
        //         datasets: [
        //             {
        //                 id: 0,
        //                 label: 'Starter Culture',
        //                 data: starterNums,
        //                 backgroundColor: ['#f06292', 'purple', 'yellow']
        //             }
        //         ],
        //     }
        // },
        {
            chartType: 'bar',
            chartData: {
                labels: newCountryKeys,
                datasets: [
                    {
                        id: 0,
                        label: 'Country',
                        data: countryNums,
                        backgroundColor: colorArray
                    }
                ],
            }
        },
    ];
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)(process.env.MONGO_URI);
        yield statsModel_1.default.deleteMany();
        yield statsModel_1.default.create(yield charts());
        process.exit(1);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
start();
