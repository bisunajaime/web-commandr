import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { InputField } from './components/InputField';
import { CodeRecords } from './components/CodeRecords';
import './App.css';
import React from 'react';

const App = () => (
    <>
        <CodeRecords />
        <br />
        <InputField />
    </>
);

export default App;
