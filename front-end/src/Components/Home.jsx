import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import Navigation from './Navigation';
import Footer from './Footer';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

function Home() {
    const [hotelData, getData] = useState([]);
    const [show, setShow] = useState(false);
    const history = useHistory();

    const errHandler = ()=>{
        setShow(true);
    }

    useEffect(() => {
        getHotelData();
        // console.log(this.state.hotel_data,'hotel')
    }, [])
    const getHotelData = async () => {
        console.log("commm")
        let reqObj = {
            cmd: "getHotels"
        }
        axios({
            method: 'post',
            url: 'http://localhost:3636/web',
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': localStorage.getItem('authorization')
            },
            data: reqObj
        }).then((response) => {
            console.log("respone", response)

            // this.setState({hotel_data: response.data.result})
            if (response.data.status === 'success') {
                // localStorage.setItem("obj",response.data.result)
                getData(response.data.result);
                // console.log(this.state.hotel_data,'hotel')
            } else {
                console.log("errror");
            }
        })
    }

    // handleShow = () => {
    //     this.setState({ show: true });
    // }
    // handleClose = () => {
    //     this.setState({ show: false });
    // }

    const bookingHandler = (id) => {
        console.log("bookingHandler", id)
        history.push(`/BookingForm/${id}`);
    }

    return (
        <div className="bg">
            <div> <Navigation /></div>
            <Container>
                <div className="container " > <section className="online-courses">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="online-courses-text-widget">
                                    <button className="btn btn-color"><b>Book Your Hotels Here</b></button>
                                    {
                                            show === true ?
                                                <div className="alert alert-danger alert-sm mt">Please Signin!!</div>
                                                : ''
                                        }

                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {hotelData != undefined ?
                                hotelData.map((hotel) => {
                                    console.log(hotel, 'heree')
                                    return (
                                        <div className="col-lg-4 col-md-4" key={hotel._id}>
                                            <div className="card online-course-card">
                                                <img className="ranjith" height="250" src={hotel.image_url} alt="" />
                                                <div className="card-body">
                                                    <p className="card-text">{hotel.description}</p>
                                                    {localStorage.getItem("authorization") != undefined ? <button onClick={() => bookingHandler(hotel._id)} className="btn btn-sm btn-primary" >Book Now</button> :
                                                        <button  onClick={errHandler} className="btn btn-sm btn-primary" >Book Now</button>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <span>Loading...</span>
                            }
                        </div>
                    </div>
                </section>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}


export default Home;