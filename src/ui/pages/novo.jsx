import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Form, Input, Select, InputNumber, Button, Icon } from 'antd'

import * as ContatoService from '../../core/services/contatoService'

import '../static/template.css'
import ContatoFactory from '../../core/models/contatoFactory';

export default class NovoContato extends Component{
    constructor(props){
        super(props)
        this.state = {Nome: '', Sexo: "M", Idade: 18, Telefone: 993939190}
        
        this.SubmitForm = this.SubmitForm.bind(this)
        
        this.GetNewName = this.GetNewName.bind(this)
        this.GetNewSex = this.GetNewSex.bind(this)
        this.GetNewAge = this.GetNewAge.bind(this)
        this.GetNewPhone = this.GetNewPhone.bind(this)

    }

    //Verificam mudanças nos inputs para atualizar o estado
    GetNewName(e){
        this.setState({...this.state, Nome: e.target.value})
    }
    GetNewSex(e){
        this.setState({...this.state, Sexo: e})
    }
    GetNewAge(e){
        this.setState({...this.state, Idade: e})
    }
    GetNewPhone(e){
        this.setState({...this.state, Telefone: e})
    }

    //empacota o estado e manda pra API
    SubmitForm = (e) => {
        e.preventDefault()

        var obj = ContatoFactory.build({...this.state})
        ContatoService.AdicionarContato(obj)
    }

    render(){
        const Option = Select.Option
        return (
            <div id='novoContato'>
                <h1>Cadastro de novo Contato</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Form onSubmit={this.SubmitForm}>

                            <Form.Item label='Nome: '>
                                <Input value={this.state.Nome} 
                                       prefix={<Icon type="user" 
                                       style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                       placeholder="Nome do Contato" 
                                       onChange={this.GetNewName}/>
                            </Form.Item>

                            <Form.Item label='Sexo: '>
                            <Select defaultValue={this.state.Sexo} style={{ width: 120 }} onChange={this.GetNewSex}>
                                <Option value="M">Masculino</Option>
                                <Option value="F">Feminino</Option>
                            </Select>
                            </Form.Item>

                            <Form.Item label='Idade: '>
                                <InputNumber min={1} max={99} defaultValue={this.state.Idade} onChange={this.GetNewAge}/>
                            </Form.Item>

                            <Form.Item label='Telefone (Somente Números): '>
                                <InputNumber style={{width: 300}} min={1} max={999999999} defaultValue={this.state.Telefone} onChange={this.GetNewPhone}/>
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Enviar
                                </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
                
            </div>
        )
    }
}