"use strict"
import React, { Component } from 'react';
import './Home.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';


class Navigation extends Component {
    state = {}
    logoutHandler = (e) => {
        sessionStorage.removeItem('data')
        localStorage.removeItem('authorization');
        localStorage.removeItem('email');
        localStorage.removeItem('user_name');
        window.location.reload();
    }
    render() {
        console.log(this.props, "okokok")
        return (
            <div>
                <Navbar bg="light" expand="lg" className=" nav navbar">
                    <Navbar.Brand href="/Home" className="text-info"><b>BookHotels.com</b></Navbar.Brand>
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
                        {localStorage.getItem("authorization") != undefined ? <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="ranjith ml-auto" href="" onClick={e => this.logoutHandler(e)}>Logout</a>
                            </li>
                        </ul> : <NavDropdown title="Profile" className="profileMargin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/LoginForm">Signin</NavDropdown.Item>
                            <NavDropdown.Item href="/Registration">Signup</NavDropdown.Item>
                        </NavDropdown>}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}
export default Navigation;