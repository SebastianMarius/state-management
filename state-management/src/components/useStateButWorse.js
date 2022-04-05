import React, { useContext, useState } from 'react';

import pubSub from './pubSub';
import store from '../store/store';

export default function useStateButWorse() {
    const [value, setValue]= useState(0);
    const  {publish,subscribe}=pubSub();

    const storeValue = store().storeObj.count;
 
    console.log(storeValue);


    const add_fnc= () =>{
        setValue(storeValue+1);
        // storeObj=[...storeObj,value]
      }
    
    const substract_fct=()=>{
        setValue(storeValue-1);
        // storeObj=[...storeObj,value]
    }

    publish('add',add_fnc);
    publish('substract', substract_fct);
    
    return{
        subscribe,value,setValue    }
}



 