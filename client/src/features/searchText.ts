import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    default: ''
}

const searchTextSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.default = action.payload as string
        }
    }
})

export const { reducer: textReducer, actions: textActions } = searchTextSlice