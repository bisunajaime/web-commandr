import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Button } from 'antd';
import { AppDispatch, RootState, decrement } from './redux/store';
import { increment } from './redux/store';

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
        <div className="App">
            <h1>Counter {count}</h1>
            <Button type="primary" onClick={incrementCounter}>
                Increment
            </Button>
            <Button type="primary" onClick={decrementCounter}>
                Increment
            </Button>
        </div>
    );
};

export default App;
