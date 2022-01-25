import logo from './assets/underconstruction.png';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* <header>
                <nav>
                    <ul>
                        <a href="">
                            <img src="" alt=""></img>
                        </a>

                        <a href="">
                            <img src="" alt=""></img>
                        </a>

                        <a href="">
                            <img src="" alt=""></img>
                        </a>
                    </ul>
                </nav>
            </header> */}
            <section className="App-header">
                <a href="https://storyset.com/online">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="Illustrations by Storyset"
                        title="Illustrations by Storyset"
                    />
                </a>
                <h1 className="title">Página em construção!</h1>
            </section>
        </div>
    );
}

export default App;
