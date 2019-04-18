import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
//pass components to html 