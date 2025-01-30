import React, { Component } from "react";
import { Button, Container, FormControl, Navbar, NavbarCollapse, NavbarToggle, Form, Nav } from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contacts from '../Pages/Contacts.js';
import Blog from '../Pages/Blog.js';

export default class Header extends Component {
    render() {
        return (
           /*Сокращенная запись объявления фрагментов. Выравнивание кода:*/
           <> 
                <Navbar /* это «мета» компонент, который служит для заголовков навигации для вашего приложения или сайта*/
                    collapseOnSelect expand="md" /*Делает меню адаптивным, сворачивает и разворачивает элементы*/
                    bg="dark"/*Фон навбара*/
                    variant="dark" /*Цветовой стиль навбара по умолчанию*/
                    // fixed="top" /*Фиксирует навбар в верней части*/
                >
                    <Container>
                        <Navbar.Brand href="/">

                            <img
                                src={logo} /*Адрес изображения для импорта*/
                                height="30" /*Высота*/
                                width="30" /*Ширина*/
                                className="d-inline-block align-top"
                            />Репетитор Софья Половинкина
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Главная </Nav.Link>
                                <Nav.Link href="/about"> Обо мне </Nav.Link>
                                <Nav.Link href="/contacts"> Контакты </Nav.Link>
                                <Nav.Link href="/blog"> Блог </Nav.Link>
                            </Nav>

                            <Form inline>
                                <FormControl  /*Поисковая форма*/
                                    type="text" /*Тип поисковой формы (текстовый)*/
                                    placeholder="Search" /*Надпись внутри формы*/
                                    className="mr-sm-2" /*Класс*/
                                />
                                <Button variant="outline-info">Найти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Определяет набор маршрутов, когда какой-лиюо запрос совпадает с URL адресом, то этот маршрут выбирается для обработки запросов:*/ }
            <Router> 
                {/*Позволяет выбрать первый попавшийся маршрут и использовать его для обработки запроса:*/ }
                <Routes> 
                    <Route /*Каждый маршрут представляет объект Роуте*/
                      path="/" /*Шаблон адреса, с которым будет сопоставляться запрошенный адрес URL */
                      element ={ <Home/> } /*Компонент, который отвечает за работу запроса по данному маршруту, в нашем случае Home */
                    /> 
                     <Route path="/about" elemennt ={ <About/> } /> 
                     <Route path="/contacts" element ={ <Contacts/> } /> 
                     <Route path="/blog" element ={ <Blog/> } />  
                </Routes>
            </Router>
            </>
        )
    }
} 