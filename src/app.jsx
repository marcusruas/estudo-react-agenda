import React,{ Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import { Row, Col } from 'antd'

import Routes from './routes'
import UpperNav from './ui/template/upperNav'

export default class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Row>
                    <ReduxToastr
                        timeOut={5000}
                        newestOnTop={false}
                        preventDuplicates
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                        closeOnToastrClick/>
                        <Col span={6}><UpperNav/></Col>
                        <Col span={18}><Routes/></Col>
                    </Row>
                </Router>
            </div>
        )
    }
}