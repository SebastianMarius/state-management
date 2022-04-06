import useStateButWorse from './useStateButWorse';
import pubSub from './pubSub';
import { useState } from 'react';
import store from '../store/store';




export default function Page() {
    const {value,add}= useStateButWorse();



    return (
        <>
            <div className='App'>
                {/* <button onClick={add}>add</button> */}
                <button onClick={add}>add button</button>
                <h1>value: {value}</h1>
            </div>
        </>
    );
}
