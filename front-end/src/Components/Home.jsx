import React, { Component, useEffect } from 'react';
import './Home.css';
import Navigation from './Navigation';
import Footer from './Footer';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import axios from "axios";

class Home extends Component {
    state = {
        tokenValue: localStorage.getItem('data'),
        hotel_data:[]
    }

    componentDidMount(){
        let reqObj = {
            cmd:"getHotels"          
        }
        axios({
            method:'post',
            url:'http://localhost:3636/web',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            },
            data:reqObj
        }).then((response)=>{
            console.log("respone",response)
            if(response.data.status === 'success'){

                this.setState({hotel_data:[...this.state.hotel_data, response.data.result]})
            }else {
                console.log("errror");
            }
        })
        
    }
    
    
    render() {
        console.log(this.state.hotel_data);
        return (
            <div className="bg">
                <div> <Navigation tokenData={this.state.tokenValue} /></div>
                <Container>
                    <div className="container " > <section className="online-courses">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="online-courses-text-widget">
                                        <button className="btn btn-color"><b>Book Your Hotels Here</b></button>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img className="ranjith" height="250" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/275017462.jpg?k=d06d27848bca199d7a8d11578def90a02a0fd7f788b2e74e3c1d6f3d2f915169&o=&hp=1"  alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title"><strong>Holiday Inn Express & Suites Bengaluru Old Madras Road, an IHG Hotel</strong> </h3>
                                            {/* <p className="card-text">Situated in Bangalore, 21 km from Commercial Street, Holiday Inn Express & Suites Bengaluru Old Madras Road, an IHG Hotel features accommodation with a restaurant, free private parking, a fitness..</p> */}
                                            {/* <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary" >Book Now</a> */}
                                        
{this.state.tokenValue != null ?<a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary" >Book Now</a>:
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary" >Book Now</a>}

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img className="ranjith" height="250" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43199751.jpg?k=da11c2d5663f7449fffa8d55704da74a6de0a5c4b69b7d8108cfa44d0d000037&o=&hp=1"  alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Fairfield by Marriott Bengaluru Rajajinagar</h3>
                                            {/* <p className="card-text">Featuring a fitness centre, Fairfield by Marriott Bengaluru Rajajinagar offers a well-equipped business centre and meeting & banqueting space.</p> */}
                                            {/* <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary">Book Now</a> */}
                                       
{this.state.tokenValue != null ?<a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary" >Book Now</a>:
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary" >Book Now</a>}

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img className="ranjith" height="250" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/252005378.jpg?k=81158da90ee34041ec2e155f8aa86e8948d2ca4e404fcdbc943b885f9a6cef92&o=&hp=1" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">ibis Bengaluru City Centre Opens in new window</h3>
                                            {/* <p className="card-text">Overlooking Cubbon Park in Bengaluru CBD (Central Business District), this modern Ibis Bengaluru City Centre offers a restaurant, rooftop bar and rooms with great city views.</p> */}
                                            {/* <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary">Book Now</a> */}
                                       
{this.state.tokenValue != null ?<a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary" >Book Now</a>:
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary" >Book Now</a>}

                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img height="250" src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=&hp=1"  alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">The Taj Mahal Tower Mumbai Opens in new window Colaba, Mumbai</h3>
                                            {/* <p className="card-text">Built in 1973, the iconic The Taj Mahal Tower Mumbai stands majestically across from the Gateway of India, overlooking the Arabian Sea.</p> */}
                                            <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img height="250" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"  alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
                                            {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi reiciendis</p> */}
                                            <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img height="250" src="https://source.unsplash.com/random/600x314"  alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
                                            {/* <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi reiciendis</p> */}
                                            <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section></div>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Home;