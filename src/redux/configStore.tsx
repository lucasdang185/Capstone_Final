import {configureStore} from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type';

export const store = configureStore({
    reducer:{
        state1: (state=1)=>{
            return state;
        }
    }
})

export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch;