import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import Layout from './layout';
import * as serviceWorker from './services/serviceWorker';
import "antd/dist/antd.css";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.register();

ReactDOM.render(<Layout />, document.getElementById('root'));
