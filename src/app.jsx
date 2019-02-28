import React,{ Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { Row, Col } from 'antd'

import Routes from './routes'
import UpperNav from './ui/template/upperNav'

export default class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Row>
                        <Col span={6}><UpperNav/></Col>
                        <Col span={18}><Routes/></Col>
                    </Row>
                </Router>
            </div>
        )
    }
}