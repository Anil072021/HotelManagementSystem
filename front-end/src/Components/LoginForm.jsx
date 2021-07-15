import React, { Component } from 'react';
import './Login.css';
import axios from "axios";
import BookingForm from './BookingForm';
import Registration from './Registration';
import Home from './Home';
import Navigation from './Navigation';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        listOfUsers: [],

        userData: {
            email: "",
            password: ""
        },

        email: "",
        password: "",
        isExit: false,
        errorMessage: ''
    }

    getData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    readData = () => {
        axios.get("http://localhost:3006/user1")
            .then((response) => {
                this.setState({ listOfUsers: response.data });
                console.log(this.state.listOfUsers);
            })
    }



    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            userData: { password: this.state.password, email: this.state.email },
            errorMessage: ''
        })

        let requestObj = {
            cmd: "login_user",
            params: this.userData
        }


        // axios.post("http://localhost:3006/login", requestObj)
        //     .then((response) => {
        //         this.setState({ listOfUsers: response.data });
        //         console.log(this.state.listOfUsers);
        //     })


        let getUser = this.state.listOfUsers.filter((user) => {
            return (user.password === this.state.password && user.email === this.state.email)
        });

        if (getUser.length > 0) {
            this.setState({
                isExit: true,
                errorMessage: ''
            });
        } else {
            this.setState({ errorMessage: 'Invalid credentials' });
        }
    }

    componentDidMount() {
        this.readData();

    }


    render() {
        if (this.state.isExit === true) {
            console.log('this.state.isExit', this.state.isExit);
            // const { history } = this.props;
            // if(history) history.push('/Home');
            return <BookingForm />

        } else {
            return (
                <div>
                    <div >
                        <Navigation />
                    </div>
                    <div className="jumbotron " >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-8">
                                    <div className="form-wrapper">
                                        <h4 className="mb-4 border-bottom pb-2">Enter your details</h4>
                                        {
                                            this.state.errorMessage !== '' ?
                                                <div className="alert alert-danger alert-sm">{this.state.errorMessage}</div>
                                                : ''
                                        }

                                        <form onSubmit={this.handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="email">Email ID</label>
                                                <input type="email" name="email" className="form-control" id="email" onChange={this.getData} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="password" onChange={this.getData} />
                                            </div>
                                            <button type="submit" className="btn btn-secondary" >Login</button>
                                        </form>
                                        <div className="registerMessage">
                                            <span>New User? </span>
                                            <a href='http://localhost:4000/registration' className="loginText" >Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default LoginForm;