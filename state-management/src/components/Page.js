import useStateButWorse from './useStateButWorse';

export default function Page() {
    const { add, count, substract } = useStateButWorse();

    return (
        <>
            <div className='App'>
                <button onClick={add}>add</button>
                <button onClick={substract}>substract</button>
                <h1>value: {count}</h1>
            </div>
        </>
    );
}
