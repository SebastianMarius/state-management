import useStateButWorse from './useStateButWorse';
import pubSub from './pubSub';
import { useState } from 'react';
import store from '../store/store';




export default function Page({store}) {
    const {value,add,substract}= useStateButWorse(store);



    return (
        <>
            <div className='App'>
                <button onClick={substract}>take outtt</button>
                <button onClick={add}>add button</button>
                <h1>value: {value}</h1>
            </div>
        </>
    );
}
