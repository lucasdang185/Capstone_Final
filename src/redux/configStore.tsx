import {configureStore} from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type';
import elearningReducer from './elearningReducer/elearningReducer';
export const store = configureStore({
    reducer:{
       elearningReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch;