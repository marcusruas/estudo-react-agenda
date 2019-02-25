import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Table } from 'antd'

import '../static/template.css'

export default class Contatos extends Component{
    constructor(props){
        super(props)
        this.state = {dados: []}
        this.columns = [
            {
                title: 'Nome',
                dataIndex: 'nome',
                key: 'nome'
            },
            {
                title: 'Sexo',
                dataIndex: 'sexo',
                key: 'sexo'
            },
            {
                title: 'Idade',
                dataIndex: 'idade',
                key: 'idade'
            },
            {
                title: 'Telefone',
                dataIndex: 'telefone',
                key: 'telefone'
            }
        ]

    }
    render(){
        return (
            <div>
                <h1>Contatos Cadastrados</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Table dataSource={null} columns={this.columns} />
                    </Col>
                </Row>
                
            </div>
        )
    }
}