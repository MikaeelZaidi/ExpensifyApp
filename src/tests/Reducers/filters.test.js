import filterReducers from '../../Reducers/filters';
import moment from 'moment';

test('should setup default filter value', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('Should set sortBy to Amount', () => {
    const state = filterReducers(undefined, { type: 'Sort_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should sort By date', () => {
    const currentState = {
       text:'',
       startDate:undefined,
       endDate:undefined,
       sortBy:'amount'
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe('date')
});

test('Should test text filter', () => {

    const texts='This is my text filter'
    const state = filterReducers(undefined, { type: 'SET_TextFilter',text:texts })
    expect(state.text).toBe(texts)
})

test('Should test start Date Filter', () => {
    const startDateT = moment()
    const state = filterReducers(undefined, {
        type: 'SET_START_DATE',
        startDate: startDateT
    });
    expect(state.startDate).toEqual(startDateT)
})

test('Should test end date filter',()=>{
    const endDateT=moment()
    const state=filterReducers(undefined,{
        type:'SET_END_DATE',
        endDate:endDateT
    })
    expect(state.endDate).toBe(endDateT)
})