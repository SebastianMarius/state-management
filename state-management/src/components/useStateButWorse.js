import React, { useContext, useState } from 'react';

import pubSub from './pubSub';
import store from '../store/store';

export default function useStateButWorse(store) {
    console.log("store: ", store);
   
    const [value, setValue]= useState(store.getState('count'));
    console.log('it renders')
    

    const pubSubRef= pubSub;
 

    store.subscribe('add', () => {
        console.log('sub');
        // console.log(localStore.getState('count')+'  +++++++')
        setValue(store.getState('count'))
    });


    store.subscribe('substract', ()=>{
        console.log('take out');
        setValue(store.getState('count'))
    })


    
 
    // console.log(localStore);
    
    return {
        value,
        setValue, 
        pubSubRef, 
        add: store.add_fnc,
        substract: store.substract_fct
    }
}



 