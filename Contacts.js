import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Контакты</h1>
                <P>Буду рада работать с Вами! Заполните свои контактные данные и я свяжусь с Вами в ближайшее время!</P>
                <Form>
                    <Form.Group controlID="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"/>
                    </Form.Group>

                    <Form.Group controlID="formBasicPassword">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlID="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">Отправить</Button>

                </Form>
            </Container>
        )
    }
 }