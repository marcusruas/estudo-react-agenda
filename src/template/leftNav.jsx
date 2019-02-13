import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../static/templates.css'


export default class LeftNav extends Component{
    render() {
        return (
            <div className='leftNav-body d-flex flex-column'>
                <h1>AGENDA VIRTUAL</h1>
                <Container>
                    <Row><Col><Button className='btn btn-light mt-10' block>MENU</Button></Col></Row>
                    <Row><Col><Button className='btn btn-light mt-10' block>CADASTRAR</Button></Col></Row>
                    <Row><Col><Button className='btn btn-light mt-10' block>CONTATOS</Button></Col></Row>
                    <Row><Col><Button className='btn btn-light mt-10' block>SOBRE</Button></Col></Row>
                </Container>
            </div>
        )
    }
}