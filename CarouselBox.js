import React, { Component } from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import ForestImg from '../assets/Forest.jpg';
import DforestImg from '../assets/Dforest.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
             <Carousel>
               
                <Carousel.Item>
                    <img
                    ClassName="d-block w-100"
                    src = { Repetitor1 }
                    alt = ""
                    />

                <Carousel.Capton>
                      <h3></h3>
                      <p></p>
                 </Carousel.Capton>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                    ClassName="d-block w-100"
                    src = {Rgu}
                    alt = ""
                    />

                <Carousel.Capton>
                      <h3></h3>
                      <p></p>
                 </Carousel.Capton>

                </Carousel.Item>

                <Carousel.Item>
                    <img
                    ClassName="d-block w-100"
                    src = {School6}
                    alt = "Forest image"
                    />

                <Carousel.Capton>
                      <h3></h3>
                      <p></p>
                 </Carousel.Capton>

                </Carousel.Item>


             </Carousel>
            </div>
        )
    }
 }