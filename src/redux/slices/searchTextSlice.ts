import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../store';

export const searchTextSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        onTextChange: (state, action) => action.payload,
    },
});

export const searchTextReducer = searchTextSlice.reducer;
