import { configureStore, createSlice } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo.slice";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 }
    }
})


export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});