import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let  startAddExpense,history,wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage   startAddExpense={startAddExpense} history={history} />)
});

test('Should render Add Expense Page correctly', () => {

    expect(toJSON(wrapper)).toMatchSnapshot()
})


test('Should render Add Expense Page on Submit correctly', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
})
