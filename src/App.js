import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Hello World of react!!!</h1>
    <h2>This is trial for react hot reload.</h2>
  </div>
);


export default hot(module)(App);