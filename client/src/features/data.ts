import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type SchemaType = {
    name: string | undefined,
    _id: number | undefined,
    starter: string | undefined,
    ingredients: string | undefined,
    place: string | undefined,
    culturalImportance: string | undefined,
    microorganisms: string | undefined,
    nutritionalValue: string | undefined,
    alcoholContent: string | undefined,
    tasteAndOdour: string | undefined,
    texture: string | undefined,
    fermentationTime: string | undefined,
    reference: string | undefined,
    tribes: string | undefined,
    districts: string | undefined,
    latitude: string | undefined,
    longitude: string | undefined,
    rainfall: string | undefined,
    weather: string | undefined,
    humidity: string | undefined
}

type DataStateType<T extends {}> = {
    loading: boolean,
    default: { total: number, count: number, data: T[]},
    error: string | undefined
}

const initialState: DataStateType<SchemaType> = {
    loading: false,
    default: { total: 0, count: 0, data: []},
    error: ''
}

export const fetchData = createAsyncThunk<unknown, string>('data/fetch', async (queryString: string) => {
    const response = await axios.get(`https://beveragedb-production.up.railway.app/api/v1/data${queryString}`)
    const data = response.data
    return {...data, qString: queryString}
})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchData.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false,
            state.default = action.payload as { total: number, count: number, data: SchemaType[]}
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const { reducer: dataReducer, actions: dataActions } = dataSlice
