import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../features/data'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})
