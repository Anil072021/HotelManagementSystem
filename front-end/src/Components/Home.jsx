import React, { Component } from 'react';
import './Home.css';
import Navigation from './Navigation';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

class Home extends Component {
    state = {
        tokenValue: sessionStorage.getItem('data')
    }
    render() {
        return (
            <div>
                <div> <Navigation tokenData={this.state.tokenValue} /></div>
                <Container>
                    <div className="container mt-50" > <section className="online-courses">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="online-courses-text-widget">
                                        <h2></h2>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/275017462.jpg?k=d06d27848bca199d7a8d11578def90a02a0fd7f788b2e74e3c1d6f3d2f915169&o=&hp=1" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title"><strong>Holiday Inn Express & Suites Bengaluru Old Madras Road, an IHG Hotel</strong> </h3>
                                            <p className="card-text">Situated in Bangalore, 21 km from Commercial Street, Holiday Inn Express & Suites Bengaluru Old Madras Road, an IHG Hotel features accommodation with a restaurant, free private parking, a fitness..</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary" >Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/43199751.jpg?k=da11c2d5663f7449fffa8d55704da74a6de0a5c4b69b7d8108cfa44d0d000037&o=&hp=1" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Fairfield by Marriott Bengaluru Rajajinagar</h3>
                                            <p className="card-text">Featuring a fitness centre, Fairfield by Marriott Bengaluru Rajajinagar offers a well-equipped business centre and meeting & banqueting space.</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/252005378.jpg?k=81158da90ee34041ec2e155f8aa86e8948d2ca4e404fcdbc943b885f9a6cef92&o=&hp=1" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">ibis Bengaluru City Centre Opens in new window</h3>
                                            <p className="card-text">Overlooking Cubbon Park in Bengaluru CBD (Central Business District), this modern Ibis Bengaluru City Centre offers a restaurant, rooftop bar and rooms with great city views.</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=&hp=1" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">The Taj Mahal Tower Mumbai Opens in new window Colaba, Mumbai</h3>
                                            <p className="card-text">Built in 1973, the iconic The Taj Mahal Tower Mumbai stands majestically across from the Gateway of India, overlooking the Arabian Sea.</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://www.booking.com/hotel/in/novotel-mumbai-juhu-beach.en-gb.html?aid=393655&label=msn-0DxtRkUhJSjW_Paq2PbmLQ-80333103645065%3Atikwd-16659120452%3Aloc-90%3Aneo%3Amte%3Adec%3Aqshotels&sid=162bf7b8dbaef51f1776ea011911f522&dest_id=-2092174&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=8&hpos=8&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1626412331&srpvid=2f77249579b10089&type=total&ucfs=1&activeTab=photosGallery" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi reiciendis</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="card online-course-card">
                                        <img src="https://source.unsplash.com/random/600x314" className="img-fluid" alt="" />
                                        <div className="card-body">
                                            <h3 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sequi reiciendis</p>
                                            <a href="http://localhost:4000/LoginForm" className="btn btn-sm btn-primary">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section></div>
                </Container>
            </div>
        );
    }
}

export default Home;