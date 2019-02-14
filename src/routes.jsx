import React from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Menu from './ui/pages/menu'
import Sobre from './ui/pages/sobre'

export default props => (
    <Router>
        <div>
            <Route path='/menu' component={Menu}/>
            <Route path='/sobre' component={Sobre}/>
        </div>
    </Router>
)