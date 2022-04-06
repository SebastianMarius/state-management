import React, { useContext, useState } from 'react';

import pubSub from './pubSub';
import store from '../store/store';

export default function useStateButWorse() {
    const localStore = store();
   
    const [value, setValue]= useState(localStore.getState('count'));
    console.log('it renders')
    

    const pubSubRef= pubSub;
 

    localStore.subscribe('add', () => {
        console.log('sub')
        // console.log(localStore.getState('count')+'  +++++++')
        setValue(localStore.getState('count'))
    });


    
 
    // console.log(localStore);
    
    return {
        value,
        setValue, 
        pubSubRef, 
        add: localStore.add_fnc   
    }
}



 