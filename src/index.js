import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import data from './data/Data';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
