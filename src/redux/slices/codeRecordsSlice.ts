import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../store';

export const codeRecordsSlice = createSlice({
    name: 'codeRecords',
    initialState,
    reducers: {
        add: (state, action) => {
            state.codeRecords.push(action.payload);
        },
        update: (state, action) => {
            const recordIdx = state.codeRecords.findIndex(
                (e) => e.id === action.payload.id
            );
            if (recordIdx !== -1) {
                state.codeRecords[recordIdx] = action.payload;
            }
        },
        remove: (state, action) => {
            state.codeRecords.filter((r) => r.id !== action.payload.id);
        },
    },
});
