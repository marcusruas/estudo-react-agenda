import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd'
import { Button, Icon, Table} from 'antd'
import { Modal, Form, Select, Input, InputNumber } from 'antd'

import * as ContatoActions from '../../store/actions/contatosActions'

class Contatos extends Component{
    constructor(props){
        super(props)

        this.state = { AbrirModal: false }
    }

    componentDidMount(){
        this.props.ObterTodosContatos()
    }

    AbrirModal = () => {
        this.setState({
            AbrirModal: true,
        });
    }
    
    handleOk = () => {
        this.props.AtualizarContato(this.props.travaContato)
        this.setState({
            AbrirModal: false,
        });
    }
    
    handleCancel = () => {
        this.props.ContatoParaEdicao(null)
        this.setState({
            AbrirModal: false,
        });
    }

    render(){
        const Option = Select.Option
        const columns = [
            {title: 'Nome', dataIndex: 'Nome', key: 'Nome'},
            {title: 'Sexo', dataIndex: 'Sexo', key: 'Sexo'},
            {title: 'Idade', dataIndex: 'Idade', key: 'Idade'},
            {title: 'Telefone', dataIndex: 'Telefone', key: 'Telefone'},
            {title: 'Ações', dataIndex: 'Acoes', key: 'Acoes'}
        ]
        
        const startDataSource = () => {
            const dataSource = this.props.dados || []
            return dataSource.map(contato => (
                {
                    key: contato.Idcontato.toString(),
                    ...contato,
                    Acoes: (
                        <div>
                            <Button onClick={() => {
                                this.props.ContatoParaEdicao(contato)
                                this.AbrirModal()
                            }}><Icon type="edit" theme="filled" /></Button>
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
                        <Table dataSource={startDataSource()} columns={columns} />
                    </Col>
                </Row>
                <Modal
                    title="Atualizar Usuário"
                    visible={this.state.AbrirModal}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Form onSubmit={this.props.CadastrarContato}>
                        <Form.Item label='Nome: '>
                            <Input value={this.props.travaContato? this.props.travaContato.Nome : null} 
                                    prefix={<Icon type="user" 
                                    style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="Nome do Contato"
                                    onChange={this.props.AtualizarNome}/>
                        </Form.Item>
                        <Form.Item label='Sexo: '>
                        <Select value={this.props.travaContato? this.props.travaContato.Sexo : null} 
                                style={{ width: 120 }} 
                                onChange={this.props.AtualizarSexo}>
                            <Option value="M">Masculino</Option>
                            <Option value="F">Feminino</Option>
                        </Select>
                        </Form.Item>
                        <Form.Item label='Idade: '>
                            <InputNumber min={1} max={99} 
                                            value={this.props.travaContato? this.props.travaContato.Idade : null} 
                                            placeholder="Idade"
                                            onChange={this.props.AtualizarIdade}/>
                        </Form.Item>
                        <Form.Item label='Telefone (Somente Números): '>
                            <InputNumber style={{width: 300}} 
                                            min={1} max={999999999} 
                                            value={this.props.travaContato? this.props.travaContato.Telefone : null} 
                                            placeholder="Telefone do Contato"
                                            onChange={this.props.AtualizarTelefone}/>
                        </Form.Item>
                    </Form>
                </Modal>
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
    return bindActionCreators({ 
        ObterTodosContatos: ContatoActions.ObterTodosContatos, 
        RemoverContato: ContatoActions.RemoverContato, 
        ContatoParaEdicao: ContatoActions.ContatoParaEdicao, 
        AtualizarContato: ContatoActions.AtualizarContato, 
        AtualizarNome: ContatoActions.AtualizarNome,
        AtualizarSexo: ContatoActions.AtualizarSexo,
        AtualizarIdade: ContatoActions.AtualizarIdade,
        AtualizarTelefone: ContatoActions.AtualizarTelefone
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Contatos)