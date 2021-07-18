import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './BookingForm.css';
//import ReactFormInputValidation, { Lang } from "react-form-input-validation";
class BookingForm extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        userData: {
            name: "",
            checkIn: "",
            checkOut: "",
            rooms: "",
            persons: "",
            roomType: ""
        },

        name: "",
        checkIn: "",
        checkOut: "",
        rooms: "",
        persons: "",
        roomType: "",
        isExit: false,
        errorMessage: '',

    }

    getData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.setState({
    //         userData: { name: this.state.password, checkIn: this.state.checkIn, checkOut: this.state.checkOut,
    //              rooms: this.state.rooms, persons: this.state.persons, roomType: this.state.roomType },
    //         errorMessage: ''
    //     })
    // }

    render() {
        return (
            <div>

                <div className="jumbotron mt-10" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-sm-8">
                                <div className="form-wrapper">
                                    <h4 className="mb-4 border-bottom pb-2">Make your Booking</h4>
                                    <form>
                                        <div className="mb-3 col-md-6">
                                            <label className="form-label" htmlFor="name"><b>In the name of</b></label>
                                            <input type="name" name="name" className="form-control" onChange={this.getData} />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>Check-in</b></label>
                                                    <input className="form-control mb-10" type="date" name="checkIn" onChange={this.getData} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" ><b>Check-Out</b></label>
                                                    <input className="form-control mb-10" type="date" name="checkOut" onChange={this.getData} required />
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
                                                    <label className="form-label mt-10" ><b>Room type</b></label>
                                                    <select className="form-control" name="roomType" onChange={this.getData} required>
                                                        <option value="" selected hidden>Select</option>
                                                        <option>Single</option>
                                                        <option>Double</option>
                                                        <option>Triple</option>
                                                    </select> <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-secondary mt-10" onSubmit={this.handleSubmit}>Book Now</button>                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default BookingForm;
