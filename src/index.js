import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import multi from 'redux-multi'

import { Provider } from 'react-redux'

import './ui/static/template.css'

import App from './app';
import Reducers from './store/reducers'
import * as serviceWorker from './core/services/serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

serviceWorker.register();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk, promise, multi)(createStore)(Reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
