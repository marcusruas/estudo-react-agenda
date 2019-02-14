import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd';

import "antd/dist/antd.css";
import "./template.css"

export default class UpperNav extends Component{ 
    render() {
        return (
            <div id="UpperNav">
                <h1>AGENDA</h1>
                <Row className="mb-10">
                    <Col span={24}>
                        <a href="menu"><Button block><Icon type="home"/> Menu</Button></a>
                    </Col>
                </Row>
                <Row className="mb-10">
                    <Col span={24}>
                        <Button block><Icon type="plus"/>Nova Pessoa</Button>
                    </Col>
                </Row>
                <Row className="mb-10">
                    <Col span={24}>
                        <Button block><Icon type="search"/>Ver Contatos</Button>
                    </Col>
                </Row>
                <Row className="mb-10">
                    <Col span={24}>
                    <a href="sobre"><Button block><Icon type="question"/>Sobre</Button></a>
                    </Col>
                </Row>
                <div class="space-footer"></div>
            </div>
        )
    }
}