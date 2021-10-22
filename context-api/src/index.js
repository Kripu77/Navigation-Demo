import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainContext from "./Components/Context"

//wrap the  context function with the
ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,

  document.getElementById("root")
);