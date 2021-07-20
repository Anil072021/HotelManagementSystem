import React, { Component } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import LoginForm from '../Components/LoginForm';
import '../setupTests';

configure({ adapter: new Adapter() });

test('Check Ui is loaded or not', () => {
    expect(shallow(<LoginForm />)).toMatchSnapshot();
})

test('Check No of buttons', () => {
    const wrap = shallow(<LoginForm />);
    expect(wrap.find('button').length).toBe(1);
})

test('email check', () => {
    let wrapper = shallow(<LoginForm />);
    wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'monica@gmail.com' } });
    expect(wrapper.state('email')).toEqual('monica@gmail.com');
})

test('login check with right data',()=>{
    let wrapper = shallow(<LoginForm/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'monica@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '12345'}});
  //  wrapper.instance().find('button').simulate('click');
    wrapper.instance().handleSubmit();
    expect(wrapper.state('isExist')).toBe.equals(true);
    })

// test('login check with wrong data',()=>{
//         let wrapper = shallow(<LoginForm/>);
//         wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'monica@gmail.com'}});
//         wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '1234'}});
//         wrapper.find('button').simulate('click');
//         expect(wrapper.state('isExist')).toBe(false);
//         })    