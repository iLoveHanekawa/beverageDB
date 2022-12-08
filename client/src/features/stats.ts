import { createSlice, createAsyncThunk, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('stats/fetch', async (url: string) => {
    const response = await axios.get(url)
    const data = await response.data
    return data.allCharts
})

type StatsType = {
    chartType: string,
    chartData: {
        label: string[],
        datasets: [{
            id: number,
            label: string,
            data: number[],
            backgroundColor: string[]
        }]
    }
}

type StatsDataType = {
    loading: boolean,
    error: string,
    default: {
        count: number,
        data: StatsType[]
    }
}

const initialState: StatsDataType = {
    loading: true,
    error: '',
    default: {
        count: 0,
        data: []
    }
}

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<StatsDataType>) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.default.count = action.payload.length
            state.default.data = action.payload            
            state.loading = false
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = action.error.message as string
            state.loading = false
        })
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
    }
})

export const { reducer: statsReducers, actions: statsActions } = statsSlice
