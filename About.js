import React, { Component } from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap' 


export default class About extends Component {
    render() {
        return (
            <Container>
                {/*Левая область, которая будет содержать кнопки, атрибут defaultActiveKey для указания той вкладки, которая будет открыта при открытии страницы*/}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2"> {/*делаем отступ сверху margin-top*/}
                            <Nav.Item>
                                <Nav.Link eventKey="first">Образование</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="second">Педагогика</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="third">Проекты</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Вожатские навыки</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Программы</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className='mt-3'> {/*Часть справа*/}

                                <Tab.Pane eventKey="first">
                                    <img src=""/>
                                    <p>Описание-1</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src=""/>
                                    <p>Описание-2</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src=""/>
                                    <p>Описание-3</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src=""/>
                                    <p>Описание-4</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src=""/>
                                    <p>Описание-5</p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
            
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
 }