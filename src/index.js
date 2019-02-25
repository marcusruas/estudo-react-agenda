import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './app';
import Reducers from './store/reducers'
import * as serviceWorker from './core/services/serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

serviceWorker.register();

ReactDOM.render(
    <Provider store={createStore(Reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')
);
