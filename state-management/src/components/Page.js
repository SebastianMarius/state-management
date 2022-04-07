import useStateButWorse from './useStateButWorse';
import pubSub from './pubSub';
import { useState } from 'react';
import store from '../store/store';




export default function Page({store}) {
    const {value,add,substract}= useStateButWorse(store);



    return (
        <>
            <div className='App'>
                <div className='app-ui'>         
                 
                      <p>A friendly counter..</p>

                      <button className='buttons-style' onClick={()=>substract(1)}>take outtt</button>
                      <button className='buttons-style' onClick={()=>add(1)}>add button</button>

                      <h1>value: {value}</h1>
                </div>

                
               
                  
            </div>
        </>
    );
}
