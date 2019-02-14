import React,{ Component } from "react"
import { Row, Col } from 'antd'

import Routes from './routes'
import UpperNav from './ui/template/upperNav'

export default class App extends Component{
    render(){
        return (
            <div>
                <Row>
                    <Col span={6}><UpperNav/></Col>
                    <Col span={18}><Routes/></Col>
                </Row>
            </div>
        )
    }
}