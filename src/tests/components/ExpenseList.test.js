import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import {ExpenseList} from '../../components/ExpenseList';
import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: "",
    amount: 192,
    createdAt: 0
}, {
    id: '2',
    description: 'Gas',
    note: "",
    amount: 1922,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Rent',
    note: "",
    amount: 19211,
    createdAt: moment().add(3, 'days').valueOf()
}
]

test('This should test the expense list component', () => {

    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})


test('Should render expense list with empty message',()=>{
    const wrapper =shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})