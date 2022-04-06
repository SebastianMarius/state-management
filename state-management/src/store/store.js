import pubSub from "../components/pubSub";

function store(){
    const  {publish,subscribe}=pubSub();

    console.log('renderrr')

    const storeObj={
        count:0
    }

    const getState=(storeField)=>{
        return storeObj[storeField];
    }

    const add_fnc= () =>{
        let storeObjValue=getState('count');
        storeObj.count=storeObjValue+1;
        publish('add',storeObj.count);
      }
    
    const substract_fct=()=>{
        let storeObjValue= getState('count');
        storeObj.count=storeObjValue-1;
        publish('substract',storeObj.count);
    }

 
    return{
        storeObj,add_fnc,substract_fct, subscribe,getState
    }
}

export default store;

