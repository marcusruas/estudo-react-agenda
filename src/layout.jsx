import React,{ Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import LeftNav from './template/leftNav'
import Menu from './ui/menu'

export default class Layout extends Component{
    render(){
        return (
            <div className='d-flex flex-column justify-content-center'>
                <Row>
                    <Col xs={4} sm={4} md={3}>
                        <LeftNav />
                    </Col>
                    <Col xs={8} sm={8} md={9}>
                        <Menu />
                    </Col>
                </Row>
            </div>
        )
    }
}