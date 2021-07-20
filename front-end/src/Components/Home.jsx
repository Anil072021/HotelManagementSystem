import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import Navigation from './Navigation';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import axios from "axios";
import { useHistory, useParams} from 'react-router-dom';

function Home(){
    const [hotelData, getData] = useState([]);
    const history = useHistory()
    useEffect(() =>{
        getHotelData();
        // console.log(this.state.hotel_data,'hotel')
    },[])
    const getHotelData = async() =>{
        console.log("commm")
        let reqObj = {
            cmd:"getHotels"          
        }
        axios({
            method:'post',
            url:'http://localhost:3636/web',
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': localStorage.getItem('authorization')
            },
            data:reqObj
        }).then((response)=>{
            console.log("respone",response)
            
            // this.setState({hotel_data: response.data.result})
            if(response.data.status === 'success'){
                // localStorage.setItem("obj",response.data.result)
                getData(response.data.result);
                // console.log(this.state.hotel_data,'hotel')
            }else {
                console.log("errror");
            }
        })
    }

    const bookingHandler=(id)=>{
        console.log("bookingHandler",id)
        history.push(`/BookingForm/${id}`);
    }

        return (
            <div>
                <div> <Navigation /></div>

                    
                    <div className="container mt-50" > <section className="online-courses">
                    <h1 color="black">Book Your Favourite Hotel!</h1>
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

                                { hotelData != undefined ?
                                    hotelData.map((hotel) => {
                                    
                                        console.log(hotel,'heree')
                                        return (
                                            <div className="col-lg-4 col-md-4" key={hotel._id}>
                                    <div className="card online-course-card">
                                        <img className="ranjith" height="250" src={hotel.image_url}  alt="" />
                                        <div className="card-body">
                                            {/* <h3 className="card-title"><strong>{hotel.hotel_name}</strong> </h3> */}
                                            {/* <p className="card-text">Situated in Bangalore, 21 km from Commercial Street, Holiday Inn Express & Suites Bengaluru Old Madras Road, an IHG Hotel features accommodation with a restaurant, free private parking, a fitness..</p> */}
                                            {/* <a href="http://localhost:4000/BookingForm" className="btn btn-sm btn-primary" >Book Now</a> */}
                                            <p className="card-text">{hotel.description}</p>
{localStorage.getItem("authorization") != undefined ?<button onClick={()=>bookingHandler(hotel._id)} className="btn btn-sm btn-primary" >Book Now</button>:
                                            <button onClick={()=>bookingHandler(hotel._id)} className="btn btn-sm btn-primary" >Book Now</button>}

                                        </div>
                                    </div>
                                </div>
                                        )
                                    }) : <span>Loading...</span>
                                }
                                
                               
                            </div>
                        </div>
                    </section></div>
               
            </div>
        );
    }


export default Home;