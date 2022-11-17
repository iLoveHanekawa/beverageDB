import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type StarterDataType = {
    loading: boolean,
    error: string,
    default: {
        name: string
        description: string
        _id: number
    }[]
}

export const fetchData = createAsyncThunk('fetch', async (url: string) => {
    const response = await axios.get(url)
    const data = await response.data
    return data.starters
})

const initialState: StarterDataType = { 
    loading: false,
    error: '',
    default: [] 
}

const starterSlice = createSlice({
    name: 'starter',
    initialState,
    reducers: {
        setData: (state, action: { payload: StarterDataType, type: string }) => {
            state = action.payload as StarterDataType
            console.log(state)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.default = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message as string
        })
    }
})

export const { reducer: starterReducers, actions: starterActions } = starterSlice
