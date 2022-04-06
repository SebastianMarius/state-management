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
        ++storeObjValue;
        storeObj.count=storeObjValue;
        console.log(storeObj.count+' =========');
        // console.log(storeObjValue+ " valueee");
        // storeObj.count=storeObjValue;
        // console.log('executed add fnc '+storeObj.count)
        publish('add',storeObj.count);

      
      }
    
    const substract_fct=()=>{
        let storeObjValue= storeObjValue.count;
        storeObj.count=storeObjValue-1;
    }

 
    return{
        storeObj,add_fnc,subscribe,getState
    }
}

export default store;

