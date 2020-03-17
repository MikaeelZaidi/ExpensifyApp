import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';
import { toLocalizedDateString } from 'react-dates';

test('Should test the start date Obj', () => {

    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should test the end date Obj', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
});

test('This should test the text filter Object', () => {
    const action = setTextFilter('Testing123')
    expect(action).toEqual({

        type: 'SET_TextFilter',
        text: 'Testing123'
    }
    );
})


test('This should test the default text filter Object', () => {
    const action = setTextFilter()
    expect(action).toEqual({

        type: 'SET_TextFilter',
        text: ''
    }
    );
})

test('This should test the Sort By Amount Obj', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'Sort_BY_AMOUNT',
        amount: 'amount'
    })
})

test('This should test the Sort By Date Object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        date: 'date'
    })
})