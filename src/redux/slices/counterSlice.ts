import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../store';

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
    },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
