import './App.css';
import store from "./store/store";
import Page from './components/Page.js';


const testStore = store();

function App() {


    return (
        <>

            {/* <div>ssss</div> */}
            
            <Page store={testStore} />
            {/* <Page store={testStore} /> */}



        </>
    );
}

export default App;
