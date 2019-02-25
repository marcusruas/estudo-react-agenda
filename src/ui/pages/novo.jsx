import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { Form, Input, Select, InputNumber, Button, Icon } from 'antd'

import '../static/template.css'

class NovoContato extends Component{
    render(){
        const Option = Select.Option
        return (
            <div id='novoContato'>
                <h1>Cadastro de novo Contato</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Form>

                            <Form.Item label='Nome: '>
                                <Input value={this.props.Nome} 
                                       prefix={<Icon type="user" 
                                       style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                       placeholder="Nome do Contato"/>
                            </Form.Item>

                            <Form.Item label='Sexo: '>
                            <Select defaultValue={this.props.Sexo} style={{ width: 120 }}>
                                <Option value="M">Masculino</Option>
                                <Option value="F">Feminino</Option>
                            </Select>
                            </Form.Item>

                            <Form.Item label='Idade: '>
                                <InputNumber min={1} max={99} defaultValue={this.props.Idade}/>
                            </Form.Item>

                            <Form.Item label='Telefone (Somente Números): '>
                                <InputNumber style={{width: 300}} min={1} max={999999999} defaultValue={this.props.Telefone}/>
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

function mapStateToProps(state){
    return{
        Nome: state.novoContato.Nome,
        Sexo: state.novoContato.Sexo,
        Idade: state.novoContato.Idade,
        Telefone: state.novoContato.Telefone
    }
}

export default connect(mapStateToProps)(NovoContato)