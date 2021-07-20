import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import BookingForm from './BookingForm';
import Home from './Home';
import Footer from './Footer';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: "",
        password: "",
        isExit: false,
        errorMessage: '',
    }

    getData = (event) => {

        this.setState({ [event.target.name]: event.target.value })
        console.log("state", this.state.email, this.state.password);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("credentials", this.state.email, this.state.password);
        // this.setState({
        //     userData: { password: this.state.password, email: this.state.email },
        //     errorMessage: ''
        // })
        sessionStorage.setItem('data', "hotelData")

        let requestObj = {
            cmd: "login_user",
            params: { email: this.state.email, password: this.state.password }
        }

        console.log("in loginform", requestObj);
        axios.post("http://localhost:3636/web", requestObj)
            .then((response) => {
                console.log("sttausaaa", response.data.state,response.data)
                if (response.data.status === 'success' && response.data.message !== 'Invalid Credentials') {
                    let data = response.data.result;
                    console.log("checking", data);
                    if (data) {
                        localStorage.setItem('authorization', data.token);
                        localStorage.setItem('email', data.email);
                        localStorage.setItem('user_name', data.user_name);
                        this.setState({ isExit: true });
                    }
                } else if(response.data.status === 'success'&& response.data.message === 'Invalid Credentials') {
                    this.setState({ errorMessage: 'invalid credentials' });
                }else{
                    this.setState({ errorMessage: 'invalid credentials' });}

            })
    }


    render() {
        if (this.state.isExit === true) {
            return <Redirect to='/' />

        } else {
            return (
                <div >
                    <Modal 
                    show={this.props.show}
                    onHide={this.props.handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {
                                'Login'
                            }

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                    {/* <div className="jumbotron mt-20" >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-8">
                                    <div className="form-wrapper"> */}
                                        {/* <h4 className="mb-4 border-bottom pb-2">Login Now</h4> */}
                                        {
                                            this.state.errorMessage !== '' ?
                                                <div className="alert alert-danger alert-sm">{this.state.errorMessage}</div>
                                                : ''
                                        }

                                        <form  onSubmit={this.handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="email">Email ID</label>
                                                <input type="email" name="email" className="form-control" id="email" onChange={this.getData} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="password" onChange={this.getData} />
                                            </div>
                                            <div className="col-lg-4">
                                            <button type="submit" className="btn btn-secondary" >SignIn</button>
                                            </div>
                                        </form>
                                        <div className="registerMessage">
                                            <span>New User? </span>
                                            <a href='http://localhost:4000/registration' className="loginText" >SignUp </a>
                                        </div>
                                        <div className="registerMessage"><a href='http://localhost:4000/' className="loginText" >Go to home </a></div>
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </Modal.Body>
                </Modal>
                    
                </div>
            );
        }
    }

}

export default LoginForm;