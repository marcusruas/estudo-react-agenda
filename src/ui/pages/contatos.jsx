import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd'
import { Button, Table } from 'antd'

import { ObterTodosContatos } from '../../store/actions/contatosActions'

class Contatos extends Component{
    constructor(props){
        super(props)
        this.dataSource = []
        this.props.ObterTodosContatos()
    }

    render(){
        const columns = [
            {title: 'Nome', dataIndex: 'Nome', key: 'Nome'},
            {title: 'Sexo', dataIndex: 'Sexo', key: 'Sexo'},
            {title: 'Idade', dataIndex: 'Idade', key: 'Idade'},
            {title: 'Telefone', dataIndex: 'Telefone', key: 'Telefone'}
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ObterTodosContatos}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)