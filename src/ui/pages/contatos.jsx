import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { Table } from 'antd'

import '../static/template.css'

class Contatos extends Component{
    render(){
        const columns = [
            {title: 'Nome', dataIndex: 'nome', key: 'nome'},
            {title: 'Sexo', dataIndex: 'sexo', key: 'sexo'},
            {title: 'Idade', dataIndex: 'idade', key: 'idade'},
            {title: 'Telefone', dataIndex: 'telefone', key: 'telefone'}
        ]


        return (
            <div>
                <h1>Contatos Cadastrados</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Table dataSource={this.props.dados} columns={columns} />
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        dados: state.contatos.dados
    }
}

export default connect(mapStateToProps)(Contatos)