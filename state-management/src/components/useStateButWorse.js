import React, { useContext, useState } from 'react';

import pubSub from './pubSub';
import store from '../store/store';

export default function useStateButWorse(store) {
 
    const [value, setValue]= useState(store.getState('count'));   

    const pubSubRef= pubSub;
 

    store.subscribe('add', (param) => {
        console.log('sub '+ JSON.stringify(param));
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



 