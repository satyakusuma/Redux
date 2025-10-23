import { useSelector, useDispatch } from "react-redux";
import type {RootState } from "../redux/store";

export const CounterComponent = () => {
    //1. Use selector untuk membaca data dari state
    const count = useSelector((state: RootState) => state.value);

    //2. useDispatch untuk mengirim actopm
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}