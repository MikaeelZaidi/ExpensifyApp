import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { EditPage } from '../../components/EditPage';
import expenses from '../fixtures/expenses';


test('Should test rendering the edit page', () => {
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<EditPage editExpense={editExpense} history={history} removeExpense={removeExpense}
        expense={expenses[2]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle edit Expenses', () => {
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<EditPage editExpense={editExpense} history={history} removeExpense={removeExpense}   expense={expenses[2]}/>)
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
   console.log(expenses[2])
})

test('Should handle remove Expenses', () => {
    const editExpense = jest.fn();
    const removeExpense = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow(<EditPage editExpense={editExpense} history={history} removeExpense={removeExpense}   expense={expenses[2]} />)
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})