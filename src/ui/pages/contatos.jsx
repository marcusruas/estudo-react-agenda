import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd'
import { Button, Icon, Table } from 'antd'

import { ObterTodosContatos, RemoverContato } from '../../store/actions/contatosActions'

class Contatos extends Component{
    constructor(props){
        super(props)
        this.props.ObterTodosContatos()
    }

    render(){
        const columns = [
            {title: 'Nome', dataIndex: 'Nome', key: 'Nome'},
            {title: 'Sexo', dataIndex: 'Sexo', key: 'Sexo'},
            {title: 'Idade', dataIndex: 'Idade', key: 'Idade'},
            {title: 'Telefone', dataIndex: 'Telefone', key: 'Telefone'},
            {title: 'Ações', dataIndex: 'Acoes', key: 'Acoes'}
        ]
        
        const getDataSource = () => {
            const dataSource = this.props.dados || []
            return dataSource.map(contato => (
                {
                    key: contato.Idcontato.toString(),
                    ...contato,
                    Acoes: (
                        <div>
                            <Button className="contatos-acao" ><Icon type="edit" theme="filled" /></Button>
                            <Button className="contatos-acao" onClick={() => this.props.RemoverContato(contato)}><Icon type="delete" theme="filled" /></Button>
                        </div>
                    )
                }
            ))
        }

        return (
            <div>
                <h1>Contatos Cadastrados</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Table dataSource={getDataSource()} columns={columns} />
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
    return bindActionCreators({ ObterTodosContatos, RemoverContato }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)