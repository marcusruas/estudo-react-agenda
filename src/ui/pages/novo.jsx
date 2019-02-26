import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Input, Select, InputNumber, Button, Icon } from 'antd'

import '../static/template.css'
import { MudarNome, MudarSexo, MudarIdade, MudarTelefone, CadastrarContato } from '../../store/actions/novoContatoActions'

class NovoContato extends Component{
    render(){
        const Option = Select.Option
        return (
            <div id='novoContato'>
                <h1>Cadastro de novo Contato</h1>
                <Row>
                    <Col offset={1} span={22}>
                        <Form onSubmit={this.props.CadastrarContato}>

                            <Form.Item label='Nome: '>
                                <Input value={this.props.Nome} 
                                       prefix={<Icon type="user" 
                                       style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                       placeholder="Nome do Contato"
                                       onChange={this.props.MudarNome}/>
                            </Form.Item>

                            <Form.Item label='Sexo: '>
                            <Select defaultValue={this.props.Sexo} 
                                    style={{ width: 120 }} 
                                    onChange={this.props.MudarSexo}>
                                <Option value="M">Masculino</Option>
                                <Option value="F">Feminino</Option>
                            </Select>
                            </Form.Item>

                            <Form.Item label='Idade: '>
                                <InputNumber min={1} max={99} 
                                             defaultValue={this.props.Idade} 
                                             onChange={this.props.MudarIdade}/>
                            </Form.Item>

                            <Form.Item label='Telefone (Somente Números): '>
                                <InputNumber style={{width: 300}} 
                                             min={1} max={999999999} 
                                             defaultValue={this.props.Telefone} 
                                             onChange={this.props.MudarTelefone}/>
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

//manda as funções pro estado
function mapDispatchToProps(dispatch){
    //mapeia as funções e manda pelo dispatch pro reducer
    return bindActionCreators({ MudarNome, MudarSexo, MudarIdade, MudarTelefone, CadastrarContato }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NovoContato)