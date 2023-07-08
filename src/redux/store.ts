import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AppState } from './interfaces/index';
import {
    codeRecordsReducer,
    counterReducer,
    searchTextReducer,
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

export default store;
