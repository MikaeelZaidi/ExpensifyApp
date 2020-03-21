import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('Should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot()
});


test('Should render Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
});

test('Should test the description change', () => {
    const value = "New Description"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value)
})

test("Should set note on text area change", () => {
    const newNote = "This is the new note";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: {
            value: newNote
        }
    });
    expect(wrapper.state('note')).toBe(newNote)
})

test('Should test the valid amount', () => {
    const newAmount = '23.5'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: newAmount
        }
    });
    expect(wrapper.state('amount')).toBe(newAmount)
})

test('Should test the valid amount and throw error', () => {
    const newAmount = '12.122'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: newAmount
        }
    });
    expect(wrapper.state('amount')).toBe('')
})

test('Should call onSubmit prop on valid submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {
        }
    });
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Should call On date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
})


test('Should set calendar focused on Change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toEqual(true)
})