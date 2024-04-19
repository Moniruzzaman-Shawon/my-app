import logo from './logo.svg';
import './App.css';

const singer = { name: "Atif Aslam", job: "singer" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>React is going on.</h3>
          <div className="music">
            <p>Name: {singer.name} </p>
            <p>Job: {singer.job} </p>
          </div>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is introduction of first React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore First React
        </a>
      </header>
    </div>
  );
}

export default App;
