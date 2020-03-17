import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('This should setup remove expense action object', () => {

    const action = removeExpense({ id: '1213w' });
    expect(action).toEqual({

        type: 'Remove_Expense',
        id: '1213w'
    })
});

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
    const action = addExpense({ description: 'Rent', note: 'Check Rent', amount: 100, createdAt: 10 })

    expect(action).toEqual({
        type: 'Add_Expense',
        expense: {
            id: expect.any(String),
            description: 'Rent',
            note: 'Check Rent',
            amount: 100,
            createdAt: 10
        }
    });
})

test('Should set up add expense action object with defaults', () => {

    const action = addExpense()

    expect(action).toEqual({
        type: 'Add_Expense',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }

    });
})