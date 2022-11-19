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
    reference: string | undefined
}

type DataStateType<T extends {}> = {
    loading: boolean,
    default: { total: number, count: number, data: T[], qString: string},
    error: string | undefined
}

const initialState: DataStateType<SchemaType> = {
    loading: false,
    default: { total: 0, count: 0, data: [], qString: ''},
    error: ''
}

export const fetchData = createAsyncThunk<unknown, string>('data/fetch', async (queryString: string) => {
    console.log(queryString)

    const response = await axios.get(`/api/v1/data${queryString}`)
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
            state.default = action.payload as { total: number, count: number, data: SchemaType[], qString: string}
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const { reducer: dataReducer, actions: dataActions } = dataSlice
