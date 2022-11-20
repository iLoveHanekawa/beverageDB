import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState: {
    loading: boolean,
    default: { data: {
        type: "FeatureCollection",
        features: []
    }},
    error: string
} = {
    loading: false,
    default: { data: { type: "FeatureCollection", features: [] }},
    error: ''
}

export const fetchgeoJSONData = createAsyncThunk<unknown, string>('geoJSON/fetch', async (url: string) => {
    const response = await axios.get(url)
    const data = await response.data
    return data.result
})

const geoJSONSlice = createSlice({
    name: 'geoJSON',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchgeoJSONData.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchgeoJSONData.fulfilled, (state, action) => {
            state.loading = false,
            state.default.data = action.payload as { type: "FeatureCollection", features: [] }
            state.error = ''
        })
        builder.addCase(fetchgeoJSONData.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message as string
        })
    }
})

export const { reducer: geoJSONReducers, actions: geoJSONActions } = geoJSONSlice
