import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { InputField } from './components/InputField';
import { CodeRecords } from './components/CodeRecords';
import './App.css';
import React from 'react';

const App = () => {
    const count = useSelector((state: RootState) => state.counter.counter);

    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <CodeRecords />
            <br />
            <InputField />
        </>
    );
};

export default App;
