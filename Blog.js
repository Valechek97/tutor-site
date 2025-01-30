import React, { Component } from 'react'
import {Media, Container, Col, Row, Card, ListGroup} from 'bootstrap'
import { ListGroup } from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">

                    <Media className="m-5">
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src=""
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>-</p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src=""
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>-</p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src=""
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>-</p>
                        </Media.Body>
                    </Media>

                    <Media className="m-5">
                        <img 
                        width={150}
                        height={150}
                        className="mr-3"
                        src=""
                        />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>-</p>
                        </Media.Body>
                    </Media>
                    </Col>

<Col md="3">
<h5 className="text-center mt-5">Рубрики блога</h5>
<Card>
    <ListGroup variant="flush">
        <ListGroup.Item>Педагогика</ListGroup.Item>
        <ListGroup.Item>Вожатство</ListGroup.Item>
        <ListGroup.Item>Репетиторство</ListGroup.Item>
        <ListGroup.Item>Высшее образование</ListGroup.Item>
        <ListGroup.Item>ЕГЭ/ОГЭ</ListGroup.Item>
    </ListGroup>
</Card>

<Card class Name="mt-3" bg="light">
    <Card.Body>
        <Card.Title>Side widget</Card.Title>
         <Card.Text></Card.Text>
    </Card.Body>
</Card>
</Col>

                </Row>
            </Container>
        )
    }
 }