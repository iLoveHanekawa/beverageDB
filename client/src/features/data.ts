import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type DataStateType<T extends {}> = {
    loading: boolean,
    data: T[],
    error: string | undefined
}

const initialState: DataStateType<{}> = {
    loading: false,
    data: [],
    error: ''
}

const fetchData = createAsyncThunk('data/fetch', async () => {
    const response = await axios.get('/api/v1/data')
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
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
})

export const { reducer: dataReducer, actions: dataActions } = dataSlice
