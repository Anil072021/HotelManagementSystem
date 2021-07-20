import React, { Component } from "react";
import ReactFormInputValidation, { Lang } from "react-form-input-validation";
// import './register.css'
// import home from "./home";
// import Home from "./home";
import LoginForm from "./LoginForm";
import Navigation from './Navigation';
import { Redirect } from 'react-router-dom';
import axios from "axios";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                username: '',
                // lastname: '',
                email: '',
                mobile_no: '',
                password: '',
                // password_confirmation: ''
            },
            // password_confirmation:'',
            errors: '',
            isExit: false,
            // confirmPasswordErr: '',
            isInvalid: true,
            isRedirectohome: false,
            errorMessage:''
        }




        this.form = new ReactFormInputValidation(this);
        /*TO set custom messages*/
        ReactFormInputValidation.setMessages(Lang.en, {
            required: ':attribute is required.',
            alpha: ':attribute must contain only alphabets',
            between: ':attribute must contain minimun 3 and maximum 20 charcters',
            email: 'Please enter valid email address',
            alpha_num: ':attribute must contain alpha numeric characters',
            min: ':attribute must contain atleast 8 characters',
            numeric: ':attribute must contain only digits from 0-9 mobile starts with 7,8,9',
            digits: ':attribute must contain 10 digits',
            // confirmed: 'Password did not match'
        });


        this.form.useRules({
            // firstname: "required|alpha|between:3,20",
            // lastname: "required|alpha|between:3,20",
            username: "required|alpha_num|between:3,20",
            email: "required|email",
            mobile_no: "required|numeric|digits:10",
            password: "required|alpha_num|min:8",
            //password_confirmation: "required|alpha_num|min:8"
        });

        this.form.onformsubmit = (fields) => {
            // Do you ajax calls here.  
            console.log('field', fields);
            var reqObj = {
                cmd:"register_user",
                params:fields
            }
            console.log("reqObj",reqObj)
            axios({
                method: 'post',
                url: 'http://localhost:3636/web',
                data: reqObj
            }).then((response)=>{
                console.log("response",response);
                if(response.data.status === 'success'){
                    this.setState({
                        isRedirectohome: true
                    })
                } else {
                     this.setState({ errorMessage: "You Couldn't register into our system." });
                }
            })
            

        }

    }


    // handleBlur = (event) => {
    //     let password = this.state.fields.password;
    //     let confirmPassword = this.state.password_confirmation;
    //     if(confirmPassword == '') {
    //         this.setState({confirmPasswordErr: 'Confirm Password is required'});
    //     } else if(confirmPassword !== password) {
    //         this.setState({confirmPasswordErr: 'Password did not match'});
    //     } else {
    //         this.setState({confirmPasswordErr: '', isInvalid: false});
    //     }
    // }   

    // handleChange = (event) => {
    //     this.setState({password_confirmation: event.target.value})
    //     console.log('password',this.state.fields.password);
    // } 

    render() {

        if (this.state.isRedirectohome === true) {
            return <Redirect to="/LoginForm/" />
        }

        else {
            return (
                <div>
                    {/* <div >
                        <Navigation />
                    </div> */}
                    <div className="jumbotron " >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-sm-8">
                                    <div className="form-wrapper">
                                        <h6 className="mb-4 border-bottom pb-2"><b>Enter your details here to signUp</b></h6>

                                        {
                                            this.state.errorMessage !== '' ?
                                                <div className="alert alert-danger alert-sm">{this.state.errorMessage}</div>
                                                : ''
                                        }
                                        <form onSubmit={this.form.handleSubmit} autoComplete="off">
                                            <div className="form-group mb-3">
                                                <label className="form-label">Name<span className="text-danger">*</span></label>
                                                <input type="text" placeholder="Enter Name" className="form-control" id="username" name="username" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.username} data-attribute-name="name" />

                                                <small className="error">
                                                    {this.state.errors.username ? this.state.errors.username : ""}
                                                </small>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="email" className="form-label" >Email<span className="text-danger">*</span></label>
                                                <input type="email" placeholder="Enter Email" className="form-control" id="email" name="email" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email} data-attribute-name="Email" />

                                                <small className="error">
                                                    {this.state.errors.email ? this.state.errors.email : ""}
                                                </small>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="mobile_no" className="form-label" >Mobile<span className="text-danger">*</span></label>
                                                <input type="tel" placeholder="Enter Mobile Number" className="form-control" id="mobile_no" name="mobile_no" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.mobile} data-attribute-name="Mobile number" />

                                                <small className="error">
                                                    {this.state.errors.mobile_no ? this.state.errors.mobile_no : ""}
                                                </small>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                                <input type="password" placeholder="Enter password" className="form-control" id="password" name="password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password} data-attribute-name="Password" />

                                                <small className="error">
                                                    {this.state.errors.password ? this.state.errors.password : ""}
                                                </small>
                                            </div>
                                            {/* <div className="mb-3">
                                                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                                <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.password_confirmation} data-attribute-name="Confirm password" confirmed />

                                                <small className="error">
                                                    {this.state.errors.password_confirmation ? this.state.errors.password_confirmation : ""}
                                                </small>
                                                <small className="error">
                                                    {this.state.confirmPasswordErr ? this.state.confirmPasswordErr : ""}
                                                </small>
                                            </div> */}
                                            <button type="submit" className="btn btn-primary mt-3" >Submit</button>
                                        </form>
                                        <div className="registerMessage"><a href='http://localhost:4000/' className="loginText" >Go to home </a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default Registration;