import React,{ Component } from "react"
import { Route } from 'react-router-dom'

import Menu from './ui/pages/menu'
import Sobre from './ui/pages/sobre'
import NovoContato from './ui/pages/novo'
import Contatos from './ui/pages/contatos'

export default class Routes extends Component{
    render(){
        return (
            <div>
                <Route path='/home' component={Menu}/>
                <Route path='/sobre' component={Sobre}/>
                <Route path='/novo' component={NovoContato}/>
                <Route path='/contatos' component={Contatos}/>
            </div>
        )
    }
}

