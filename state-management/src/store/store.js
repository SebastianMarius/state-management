import pubSub from "../components/pubSub";

export default function store(){
     const {publish, subscribe}= pubSub();

    const storeObj={
        count:0
    }

  
 
    return{
        publish,subscribe,storeObj
    }
}

