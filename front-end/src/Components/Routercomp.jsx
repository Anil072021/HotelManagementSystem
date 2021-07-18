import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BookingForm from './BookingForm';

import Home from './Home';
import LoginForm from './LoginForm';
import Registration from './Registration';
//import BookingForm from './BookingForm';

class RouterComp extends Component {
    state = {  
    }
    render() { 
        return ( 
            <Router>
                    {/* <Link to="/AddEditExpense"> + Add Expenses</Link> */}
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route  path='/LoginForm' component={LoginForm}></Route>
                    <Route  path='/Registration' component={Registration}></Route>
                     <Route  path='/BookingForm' component={BookingForm}></Route> 
                </Switch>
            </Router>
         );
    }
}
 
export default RouterComp;