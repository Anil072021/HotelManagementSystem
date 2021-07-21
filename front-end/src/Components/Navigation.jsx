"use strict"
import React, { Component } from 'react';
import './Home.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import LoginForm from './LoginForm';


class Navigation extends Component {
    state = {
        // user_name: localStorage.getItem('email'),
        show: false,
    }
    logoutHandler = (e) => {
        localStorage.removeItem('data')
        localStorage.removeItem('authorization');
        localStorage.removeItem('email');
        localStorage.removeItem('user_name');
        window.location.reload();
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    render() {
        console.log(this.props, "okokok")
        return (
            <div>
                <Navbar bg="dark" expand="lg" className=" nav navbar">
                    <Navbar.Brand href="http://localhost:4000/" className="text-info"><b>BookHotels.com</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search" />
                            </Form>
                        </div>
                        {localStorage.getItem("authorization") != undefined ?
                            <NavDropdown title="Profile" className="profileMargin" id="basic-nav-dropdown">
                                <NavDropdown.Item >{localStorage.getItem('email')}</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => this.logoutHandler(e)}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            : <NavDropdown title="Signin/Signup" className="profileMargin" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={this.handleShow}>Signin</NavDropdown.Item>
                                <NavDropdown.Item href="/Registration">Signup</NavDropdown.Item>
                            </NavDropdown>}
                    </Navbar.Collapse>
                </Navbar>
                <LoginForm show={this.state.show} handleShow={this.handleShow} handleClose={this.handleClose} />
            </div>
        );
    }

}
export default Navigation;