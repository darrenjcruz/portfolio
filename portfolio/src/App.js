import logo from './logo.svg';
import NaviBar from './components/navibar/NaviBar';
import './App.css';

function App() {
    return (
        <div className="App">
            <NaviBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            
                <h4>hi</h4>
                
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;