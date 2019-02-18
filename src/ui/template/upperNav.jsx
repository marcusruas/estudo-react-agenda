import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd';
import { Link } from 'react-router-dom'

import "antd/dist/antd.css";
import "../static/template.css"

export default class UpperNav extends Component{ 
    render() {
        return (
            <div id="UpperNav">
                <h1>AGENDA</h1>
                    <Row className="mb-10">
                        <Col offset={1} span={22}>
                            <Link to='home'><Button block><Icon type="home"/> Menu</Button></Link>
                        </Col>
                    </Row>
                    <Row className="mb-10">
                        <Col offset={1} span={22}>
                            <Link to='sobre'><Button block><Icon type="question"/>Sobre</Button></Link>
                        </Col>
                    </Row>
                    <Row className="mb-10">
                        <Col offset={1} span={22}>
                            <Link to='novo'><Button block><Icon type="plus"/>Novo Contato</Button></Link>
                        </Col>
                    </Row>
                    <Row className="mb-10">
                        <Col offset={1} span={22}>
                            <Button block><Icon type="search"/>Ver Contatos</Button>
                        </Col>
                    </Row>
                <div className="space-footer"></div>
            </div>
        )
    }
}