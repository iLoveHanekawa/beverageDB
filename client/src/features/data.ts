import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type SchemaType = {
    name: string | undefined,
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
    reference: string | undefined
}

type DataStateType<T extends {}> = {
    loading: boolean,
    default: { count: number, data: T[]},
    error: string | undefined
}

const initialState: DataStateType<SchemaType> = {
    loading: false,
    default: {count: 0, data: []},
    error: ''
}

export const fetchData = createAsyncThunk<unknown, [key: string, value: string][]>('data/fetch', async (allQueryParams: [key: string, value: string][]) => {

    let queryString = '?'
    allQueryParams.forEach(element => {
        queryString += `${element[1]}=${element[0]}&`
    });

    console.log(queryString)

    const response = await axios.get(`/api/v1/data${queryString}`)
    const data = response.data
    return data
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
            state.default = action.payload as { count: number, data: SchemaType[]}
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const { reducer: dataReducer, actions: dataActions } = dataSlice
