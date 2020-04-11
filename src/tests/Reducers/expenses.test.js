import expensesReducer from '../../Reducers/expenses';
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

test('Should set the default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should test the Remove Expense Obj', () => {
    const state = expensesReducer(expenses, { type: 'Remove_Expense',id:expenses[1].id })
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should test the Add Expense Obj', () => {

    const updates = {
        id: '32',
        description: 'Shopping',
        note: "",
        amount: 1233,
        createdAt: moment().add(7, 'days').valueOf()
    }

    const state = expensesReducer(expenses, { type: 'Add_Expense', expense: updates })
    expect(state).toEqual([...expenses,updates])
})

test('Should set expenses', () => {

    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[2]]
    };

    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[2]])
})

// test("Should Edit a valid expense Item", () => {
//    const amountT=1000

//     const state = expensesReducer(expensesReducer, {
//         type: 'Edit_Expense',
//         id: expenses[0].id,
//         updates: {
//             amount:amountT
//         }

//     })

//     expect(state[0].amount).toBe(amountT)
// })
