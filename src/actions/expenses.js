import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return {
        type: 'Add_Expense',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt:createdAt
        }
    }
}

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'Remove_Expense',
        id
    }
}


//Edit Expense
export const editExpense = (id, updates) => {

    return {
        type: 'Edit_Expense',
        id,
        updates
    }
}