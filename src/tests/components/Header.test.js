import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header'


test('Should Render header', () => {
    const wrapper = shallow(<Header startLogOut={() => { }} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})


//should callout startLogout on button click


test('Should check button in start Log out ', () => {
    const startLogOut=jest.fn()
    const wrapper = shallow(<Header startLogOut={startLogOut}/>)
    wrapper.find('button').simulate('click')
    expect(startLogOut).toHaveBeenCalled()
})