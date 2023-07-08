import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AppState } from './interfaces/index';
import {
    codeRecordsSlice,
    counterSlice,
    searchTextSlice,
} from './slices/index';

export const initialState: AppState = {
    counter: 0,
    searchText: '',
    codeRecords: [
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
    ],
};

const counterReducer = counterSlice.reducer;
const searchTextReducer = searchTextSlice.reducer;
const codeRecordsReducer = codeRecordsSlice.reducer;

const rootReducer = combineReducers({
    counter: counterReducer,
    searchText: searchTextReducer,
    codeRecords: codeRecordsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increment, decrement } = counterSlice.actions;
export const { add, remove, update } = codeRecordsSlice.actions;
export default store;
