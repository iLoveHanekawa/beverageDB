import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../features/data'
import { textReducer} from '../features/searchText'
import { starterReducers } from '../features/Starter/starter'

export const store = configureStore({
    reducer: {
        data: dataReducer,
        text: textReducer,
        starter: starterReducers
    }
})

export type StateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 