import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './BookingForm.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
// import Moment from 'react-moment';
// import moment from 'moment';

//import ReactFormInputValidation, { Lang } from "react-form-input-validation";
class BookingForm extends Component {
    id;
    constructor(props) {
        super(props)
        let path = window.location.pathname;
        let split = path.split('/')
        this.id = split[2];
    } 

    state = {
        bookingData: {
            name: "",
            checkIn: "",
            checkOut: "",
            rooms: "",
            persons: "",
            roomType: "",
           status:false
        },

        name: "",
        checkIn: "",
        checkOut: "",
        rooms: "",
        persons: "",
        roomType: "",
        isExit: false,
        successMessage: '',
        mindate:new Date().getFullYear()+"-"+("0"+(new Date().getMonth()+1))+"-"+new Date().getDate(),
        maxdate:new Date().getFullYear()+"-"+("0"+(new Date().getMonth()+1))+"-"+(new Date().getDate()+1)

    }
    getData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     userData: { name: this.state.password, checkIn: this.state.checkIn, checkOut: this.state.checkOut,
        //          rooms: this.state.rooms, persons: this.state.persons, roomType: this.state.roomType },
        //     errorMessage: ''
        // })
        console.log("data",this.state.bookingData)
        // let { id } = useParams();
        var reqObj = {
            cmd:"hotel_booking",
            params:{
                id:this.id,
                user_name:localStorage.getItem('user_name'),
                email:localStorage.getItem('email'),
                in_the_name_of:this.state.name,
                room_type:this.state.roomType,
                no_of_persons:this.state.persons,
                check_in_time:this.state.checkIn,
                check_out_time:this.state.checkOut,
                no_of_rooms:this.state.rooms
            }
        }
        console.log("reqObj",reqObj)
        axios({
            method:'post',
            url:'http://localhost:3636/web',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            },
            data:reqObj
        }).then((response)=>{
            console.log("response",response)
            if(response.data.status === 'success'){
                this.setState({ status: true });
                this.setState({ successMessage: 'Booking Successfull' });
            } else {
                console.log("err");
            }
        })    
    }

    render() {
        // if(this.state.status === true){
        //     // setTimeout(()=>{
        //     //     return <Redirect to='/' />
        //     // },3000)
        //     return <Redirect to='/' />
        // } else {
        // console.log(this.state.mindate,"dataaaaaaaaa",window.location.pathname,this.id)
        return (
            
            <div className="bookingBg">
                <div> <Navigation /></div>

                <div className="jumbotron mt" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-sm-8">
                                <div className="form-wrapper">
                                    <h4 className="mb-4 border-bottom pb-2">Make your Booking</h4>
                                    {
                                            this.state.successMessage !== '' ?
                                                <div className="alert alert-success alert-sm">{this.state.successMessage}</div>
                                                : ''
                                        }
                                    
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="name"><b>In the name of</b></label>
                                            <input type="name" name="name" className="form-control" onChange={this.getData} />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>Check-in</b></label>
                                                    <input className="form-control mb-10" min={this.state.mindate}  type="date" name="checkIn" onChange={this.getData} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>Check-Out</b></label>
                                                    <input className="form-control mb-10" min={this.state.maxdate}  type="date" name="checkOut" onChange={this.getData} required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>No of rooms</b></label>
                                                    <select className="form-control" name="rooms" onChange={this.getData} required>
                                                        <option value="" selected hidden>Select</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select> <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>No of Persons</b></label>
                                                    <select className="form-control" name="persons" onChange={this.getData} required>
                                                        <option value="" selected hidden>Select</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select> <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label mt" ><b>Room type</b></label>
                                                    <select className="form-control" name="roomType" onChange={this.getData} required>
                                                        <option value="" selected hidden>Select</option>
                                                        <option>Single</option>
                                                        <option>Double</option>
                                                        <option>Triple</option>
                                                    </select> <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-secondary mt">Submit</button> 
                                    </form>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
         }
    }


export default BookingForm;
