import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage, startLogin } from '../../components/LoginPage'

test('Should Render Login Page correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => { }} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render the startLogin on button click',()=>{
    const startLogin=jest.fn()
    const wrapper=shallow(<LoginPage startLogin={startLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled()
})
