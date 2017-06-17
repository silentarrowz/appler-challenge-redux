import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {searchName} from './reducer';

const store= createStore(searchName);

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	 document.getElementById('root'));
