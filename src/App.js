import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div><h1>Hello world</h1></div>
//   );
// }
class App extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello, world!"
    )
  }
}

export default App;
