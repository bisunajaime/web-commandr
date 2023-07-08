import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, decrement } from './redux/store';
import { increment } from './redux/store';
import { InputField } from './components/InputField';
import { CodeRecords } from './components/CodeRecords';
import './App.css';
import React from 'react';

const App = () => {
    const count = useSelector((state: RootState) => state.counter.counter);

    const dispatch = useDispatch<AppDispatch>();

    const incrementCounter = () => {
        dispatch(increment());
    };

    const decrementCounter = () => {
        dispatch(decrement());
    };

    return (
        <>
            <CodeRecords />
            <br />
            <InputField />
        </>
    );
};

export default App;
