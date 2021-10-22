import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  ContextMain from "./Components/Context"

//wrap the  context function with the main app component
ReactDOM.render(
  <React.StrictMode>
    <ContextMain>
      <App />
</ContextMain>
  </React.StrictMode>,

  document.getElementById("root")
);