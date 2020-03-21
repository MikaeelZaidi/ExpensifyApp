import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(<ExpenseListFilter
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate}
        filters={filters}
    />)
})

test('Should test the snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should test with Alt test filters', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should test the text filter', () => {
    const value = "Testing"
    wrapper.find('input').simulate('change', {
        target: {
            value: value
        }
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('Should sort By Date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    })

    expect(sortByDate).toHaveBeenCalledWith()
})

test('Should handle Date Change', () => {
    const startDate=moment(0).add(111,'days')
    const endDate=moment(0).add(1113,'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate:startDate,
        endDate:endDate
    })
    expect(setStartDate).toHaveBeenCalledWith(startDate)
})