import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Context';
ReactDOM.render(
<Context children={<App/>}/>


, document.getElementById('root'));