import logo from './logo.svg';
import './App.css';

const singer = { name: "Atif Aslam", job: "singer" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person></Person>
        <Friend></Friend>

      </header>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Hello React</h1>
      <p>Welcome to the react world!</p>
    </div>
  )
}

function Friend() {
  return (
    <div>
      <h3>Library of Java Script</h3>
    </div>
  )
}
export default App;
