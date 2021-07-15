import React, { Component } from 'react';
import './Home.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


class Navigation extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* <Navbar collapseOnSelect fixed='top' bg='dark' variant='dark'>
                    
                    <Container>

                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav' />
                        <a class="navbar-brand" href="#">Logo</a>
                        <Nav.Link href="/" >Home</Nav.Link>
                        <Nav.Link href="/LoginForm">Signin</Nav.Link>
                        <Nav.Link href="/Registration">Signup</Nav.Link>
                    </Container>
                </Navbar> */}
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <a class="navbar-brand text-info" href="#"><b >BookHotels.com </b></a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/"><i class="fa fa-fw fa-home"></i>Home</a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" />
                        </div>
                    </form>
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/LoginForm">Signin</NavDropdown.Item>
                        <NavDropdown.Item href="/Registration">Signup</NavDropdown.Item>

                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </nav>
            </div>
        );
    }
}

export default Navigation;