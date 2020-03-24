import sumExpenses from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import moment from 'moment';

test('Should print 0 if no expenses', () => {
    const result = sumExpenses([])
    expect(result).toBe(0)
});

test('Should print amount if single amount', () => {
    const result = sumExpenses(expenses)
    expect(result).toBe(21325)
})