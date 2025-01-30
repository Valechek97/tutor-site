import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from "react-bootstrap";



export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>  
            <Container>
                <h2 className="text-center m-4"></h2>
                <CardDeck className="m-4">

                    <Card bg="warning" border="success" text="primary">
                        <Card.Img 
                        variant="top" 
                        src="url"
                        />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img 
                        variant="top" 
                        src="url"
                        />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img 
                        variant="top" 
                        src="url"
                        />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                            <Button variant="primary"></Button>
                        </Card.Body>
                    </Card>


                </CardDeck>
            </Container>
            </>
        )
    }
 }
