import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Form, Input, Select, InputNumber, Button, Icon } from 'antd'

import '../static/template.css'

export default class NovoContato extends Component{
    constructor(props){
        super(props)
        this.state = {nome: ''}
        
        this.SubmitForm = this.SubmitForm.bind(this)
        this.HandleNomeChange = this.HandleNomeChange.bind(this)
    }

    SubmitForm = (e) => {
        e.preventDefault()
        console.log(e)
        console.log(this.state.nome)
    }

    HandleNomeChange(e){
        this.setState({...this.state, nome: e.target.value})
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
                                <Input value={this.state.nome} 
                                       prefix={<Icon type="user" 
                                       style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                       placeholder="Nome do Contato" 
                                       onChange={this.HandleNomeChange}/>
                            </Form.Item>

                            <Form.Item label='Sexo: '>
                            <Select defaultValue="Masculino" style={{ width: 120 }}>
                                <Option value="M">Masculino</Option>
                                <Option value="F">Feminino</Option>
                            </Select>
                            </Form.Item>

                            <Form.Item label='Idade: '>
                                <InputNumber min={1} max={99} defaultValue={18}/>
                            </Form.Item>

                            <Form.Item label='Telefone (Somente Números): '>
                                <InputNumber style={{width: 300}} min={1} max={999999999} defaultValue={993939190}/>
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