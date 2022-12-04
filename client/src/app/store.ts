import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../features/data'
import { textReducer} from '../features/searchText'
import { starterReducers } from '../features/Starter/starter'
import { geoJSONReducers } from '../features/geoJSON'
import { newsReducers } from '../features/news'
import { statsReducers } from '../features/stats'

export const store = configureStore({
    reducer: {
        data: dataReducer,
        text: textReducer,
        starter: starterReducers,
        geoJSON: geoJSONReducers,
        news: newsReducers,
        stats: statsReducers
    }
})

export type StateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 