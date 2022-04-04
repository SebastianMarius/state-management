import './App.css';
import { CounterProvider } from './components/context';
import Page from './components/Page.js';

function App() {
    return (
        <>
            <div>ssss</div>
            <CounterProvider>
                <Page />
            </CounterProvider>
        </>
    );
}

export default App;
