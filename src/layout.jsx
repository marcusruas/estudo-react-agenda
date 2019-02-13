import React,{ Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import LeftNav from './template/leftNav'
import Menu from './ui/menu'

export default class Layout extends Component{
    render(){
        return (
            <div className='d-flex flex-column'>
                <Row>
                    <Col xs={3} sm={3} md={3}>
                        <LeftNav />
                    </Col>
                    <Col xs={9} sm={9} md={9}>
                        <Menu />
                    </Col>
                </Row>
            </div>
        )
    }
}