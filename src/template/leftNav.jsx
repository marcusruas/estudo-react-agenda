import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../static/templates.css'


export default class LeftNav extends Component{
    render() {
        return (
            <div className='leftNav-body d-flex flex-column'>
                <h1>AGENDA VIRTUAL</h1>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <Button className='btn btn-light mt-20 w-75'>MENU</Button>
                    <Button className='btn btn-light mt-20 w-75'>CADASTRAR</Button>
                    <Button className='btn btn-light mt-20 w-75'>CONTATOS</Button>
                    <Button className='btn btn-light mt-20 w-75'>SOBRE</Button>
                </div>
            </div>
        )
    }
}