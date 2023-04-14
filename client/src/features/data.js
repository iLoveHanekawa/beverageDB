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
exports.dataActions = exports.dataReducer = exports.fetchData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const initialState = {
    loading: false,
    default: { total: 0, count: 0, data: [] },
    error: ''
};
exports.fetchData = (0, toolkit_1.createAsyncThunk)('data/fetch', (queryString) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://beveragedb-production.up.railway.app/api/v1/data${queryString}`);
    const data = response.data;
    return Object.assign(Object.assign({}, data), { qString: queryString });
}));
const dataSlice = (0, toolkit_1.createSlice)({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(exports.fetchData.pending, state => {
            state.loading = true;
        });
        builder.addCase(exports.fetchData.fulfilled, (state, action) => {
            state.loading = false,
                state.default = action.payload;
            state.error = '';
        });
        builder.addCase(exports.fetchData.rejected, (state, action) => {
            state.loading = false,
                state.error = action.error.message;
        });
    }
});
exports.dataReducer = dataSlice.reducer, exports.dataActions = dataSlice.actions;
