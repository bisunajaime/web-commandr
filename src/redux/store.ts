import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import { CodeRecord } from './interfaces/CodeRecord';

// Define your initial state interface
interface AppState {
    counter: number;
    searchText: string;
    codeRecords: CodeRecord[];
    // Add other state properties here
}

// Define your initial state object
const initialState: AppState = {
    counter: 0,
    searchText: '',
    codeRecords: [
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
        {
            id: '0',
            label: 'Test',
            code: 'document.querySelector()',
        },
    ],
    // Add other initial state properties here
};

// slices
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

export const counterSlice = createSlice({
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

export const searchTextSlice = createSlice({
    name: 'searchText',
    initialState,
    reducers: {
        onTextChange: (state, action) => action.payload,
    },
});

const counterReducer = counterSlice.reducer;
const searchTextReducer = searchTextSlice.reducer;
const codeRecordsReducer = codeRecordsSlice.reducer;

// Create your reducer function
const rootReducer = combineReducers({
    counter: counterReducer,
    searchText: searchTextReducer,
    codeRecords: codeRecordsReducer,
});
// Create the store using configureStore
const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { increment, decrement } = counterSlice.actions;
export const { add, remove, update } = codeRecordsSlice.actions;
export default store;
