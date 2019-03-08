import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd'
import { Button, Input, Icon, Table } from 'antd'

import { ObterTodosContatos, RemoverContato, AtualizarContato } from '../../store/actions/contatosActions'

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
                    //value: ternario? this.props.travaContato.Nome
                    Nome: (<Input placeHolder="Nome" value={contato.Nome} disabled={this.props.travaContato? this.props.travaContato.Idcontato === contato.Idcontato? false : true : true}/>),
                    Sexo: (<Input placeHolder="Sexo" value={contato.Sexo} disabled={this.props.travaContato? this.props.travaContato.Idcontato === contato.Idcontato? false : true : true}/>),
                    Idade: (<Input placeHolder="Idade" value={contato.Idade} disabled={this.props.travaContato? this.props.travaContato.Idcontato === contato.Idcontato? false : true : true}/>),
                    Telefone: (<Input placeHolder="Telefone" value={contato.Telefone} disabled={this.props.travaContato? this.props.travaContato.Idcontato === contato.Idcontato? false : true : true}/>),
                    Acoes: (
                        <div>
                            <Button onClick={() => this.props.AtualizarContato(contato)}><Icon type={this.props.travaContato? this.props.travaContato.Idcontato === contato.Idcontato? "check-circle" : "edit" : "edit"} theme="filled" /></Button>
                            <Button onClick={() => this.props.RemoverContato(contato)}><Icon type="delete" theme="filled" /></Button>
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
        dados: state.contatos.dados,
        travaContato: state.contatos.travaContato
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ ObterTodosContatos, RemoverContato, AtualizarContato }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)