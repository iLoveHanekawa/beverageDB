import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type NewsType = { 
    headline: { 
        main: string 
    }, web_url: string
    multimedia: {
        url: string
    }[]
}

type NewsData = {
    loading: boolean,
    error: string,
    default: {
        count: number,
        data: NewsType[]
    }
}

const initialState = {
    loading: true,
    error: '',
    default: {
        count: 0,
        data: [] as NewsType[]
    }
}

export const fetchNews = createAsyncThunk<unknown, string>('news/fetch', async(url: string) => {
    const response = await axios.get(url)
    const data = await response.data
    return data.response.docs
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message as string
        })
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = false
            state.default.data = action.payload as NewsType[]
            state.default.count = state.default.data.length
        })
    }
})

export const { reducer: newsReducers, actions: newsActions} = newsSlice