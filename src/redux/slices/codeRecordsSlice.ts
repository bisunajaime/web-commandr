import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../store';

export const codeRecordsSlice = createSlice({
    name: 'codeRecords',
    initialState,
    reducers: {
        addCodeRecord: (state, action) => {
            state.codeRecords.push(action.payload);
        },
        updateCodeRecord: (state, action) => {
            const recordIdx = state.codeRecords.findIndex(
                (e) => e.id === action.payload.id
            );
            if (recordIdx !== -1) {
                state.codeRecords[recordIdx] = action.payload;
            }
        },
        removeCodeRecord: (state, action) => {
            state.codeRecords.filter((r) => r.id !== action.payload.id);
        },
    },
});

export const codeRecordsReducer = codeRecordsSlice.reducer;

export const { addCodeRecord, removeCodeRecord, updateCodeRecord } =
    codeRecordsSlice.actions;
