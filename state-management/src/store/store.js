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

    const add_fnc= (param) =>{
        let storeObjValue=getState('count');
        storeObj.count=storeObjValue+param;
        publish('add',storeObj);
        console.log('publish')
      }
    
    const substract_fct=(param)=>{
        let storeObjValue= getState('count');
        storeObj.count=storeObjValue-param;
        publish('substract',storeObj.count);
    }

 
    return{
        storeObj,add_fnc,substract_fct, subscribe,getState
    }
}

export default store;

