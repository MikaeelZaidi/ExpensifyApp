import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListItem } from '../../components/ExpenseListItem';
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

test('Should test the expense list item component', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})