import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../features/data'

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
})

export type StateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 