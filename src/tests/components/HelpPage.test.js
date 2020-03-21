import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HelpPage from '../../components/ExpenseDashBoardPage'

test('This should test the help page',()=>{
    const wrapper = shallow(<HelpPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})