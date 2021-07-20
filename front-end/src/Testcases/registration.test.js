import React, { Component } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import Registration from '../Components/Registration';
import '../setupTests';

configure({ adapter: new Adapter() });

test('Check Ui is loaded or not', () => {
    expect(shallow(<Registration />)).toMatchSnapshot();
})

test('Check No of buttons', () => {
    const wrap = shallow(<Registration />);
    expect(wrap.find('button').length).toBe(1);
})

test('email check', () => {
    let wrapper = shallow(<Registration />);
    wrapper.find('input[type="text"]').simulate('change', { target: { name: "username", value: 'monica' } });
    expect(wrapper.state("username")).toEqual('monica');
})
