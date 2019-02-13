import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Menu extends Component{
    render() {
        return (
            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center'>
                    <h1>MENU DA AGENDA</h1>
                </div>
                <div className='d-flex justify-content-center'>
                    <h2>HELLO THERE :)</h2>
                </div>
            </div>
        )
    }
}