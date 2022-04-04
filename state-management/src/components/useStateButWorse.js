import React, { useContext } from 'react';
import { CounterContext } from './context';
import pubSub from './pubSub';

export default function useStateButWorse() {
    const { setCount, count } = useContext(CounterContext);

    const add = () => {
        setCount(count + 1);
    };

    const substract = () => {
        setCount(count - 1);
    };

    return {
        substract,
        add,
        count,
    };
}
