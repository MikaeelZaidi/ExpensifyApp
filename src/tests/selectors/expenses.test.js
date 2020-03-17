import selectExpenses from '../../selectors/expenses';
import moment from 'moment'

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
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id: '3',
    description: 'Rent',
    note: "",
    amount: 19211,
    createdAt: moment().add(3,'days').valueOf()
}
]

test('Should filter by text value', () => {

    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]])
})

test('Should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result =selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])
})

test('Should filter By End Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('Should sort by the Date',()=>{

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    }

    const result =selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]])

})

test('Should sort by the Amount',()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }

    const result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[1],expenses[0]])
})