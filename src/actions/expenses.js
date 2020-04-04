import uuid from 'uuid';
import database from '../firebase/firebase'
import { Redirect } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore= configureMockStore([thunk])

export const addExpense = (expense) => {
    return {
        type: 'Add_Expense',
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt }
       return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        })

    };
};

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