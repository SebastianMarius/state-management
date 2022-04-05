import useStateButWorse from './useStateButWorse';
import pubSub from './pubSub';
import { useState } from 'react';


const addPage=(subscribe)=>{
    subscribe();
}

export default function Page() {
    const {subscribe,value}= useStateButWorse();
    // const {publish} = useStateButWorse();
    // const { add, count, substract } = useStateButWorse();
    // const {publish, subscribe}= pubSub();

    // const [a, setA] = useState(0);

    // const add = (param) => {
    //     console.log(param);
    //     setA(param);
    // }

    // subscribe('add',add);
    
    // console.log(pubsubb);
 

    return (
        <>
            <div className='App'>
                {/* <button onClick={add}>add</button> */}
                <button onClick={addPage(subscribe)}>substract</button>
                <h1>value: {value}</h1>
            </div>
        </>
    );
}
