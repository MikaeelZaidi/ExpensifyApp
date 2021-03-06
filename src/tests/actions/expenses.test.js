import {startAddExpense , addExpense, removeExpense, editExpense,setExpenses,startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

const createMockStore= configureMockStore([thunk])

// beforeEach(() => {
//     const expensesData = {};
//     expenses.forEach(({id, description, note, amount, createdAt}) => {
//         expensesData[id] = { description, note, amount, createdAt }
//     })
//     database.ref('expenses').set(expensesData);
// });

test('This should setup remove expense action object', () => {

    const action = removeExpense({ id: '1213w' });
    expect(action).toEqual({

        type: 'Remove_Expense',
        id: '1213w'
    })
});

// test('Should remove Expense for Async action', () => {
//    const action=startRemoveExpense({id:'111'})
//    expect(action).toEqual({
       
//     type: 'Remove_Expense',
//     id: '111'
//    })
// })

test('Should test Edit Expense', () => {

    const action = editExpense('34343', { description: "Water expense" })
    expect(action).toEqual({
        type: 'Edit_Expense',
        id: '34343',
        updates: {
            description: "Water expense"
        }
    })
});

test('Should set up add expense action object', () => {
    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: 'Add_Expense',
        expense: expenses[2]
    });
})


test('Should add expense to data base and store', () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Lenovo',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        expect(1).toBe(17)
        
    });
});


test('Should add expense with defaults to database and store', () => {

});

// test('Should set up add expense action object with defaults', () => {

//     const action = addExpense()

//     expect(action).toEqual({
//         type: 'Add_Expense',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }

//     });
// })

test('Should set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses:expenses
    });
});