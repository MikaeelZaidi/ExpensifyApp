import uuid from 'uuid';
import database from '../firebase/firebase'
import { Redirect } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expensesReducer from '../Reducers/expenses';

//const createMockStore= configureMockStore([thunk])

export const addExpense = (expense) => {
    return {
        type: 'Add_Expense',
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch,getState) => {
        const uid=getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = { description, note, amount, createdAt }
       return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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

export const startRemoveExpense = ({ id }) => {
    return (dispatch,getState) => {
        const uid= getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
        });
    };
};


//Edit Expense
export const editExpense = (id, updates) => {

    return {
        type: 'Edit_Expense',
        id,
        updates
    }
}

//SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startSetExpenses = () => {

    return (dispatch,getState) => {
        const uid=getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = []

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpenses(expenses))
        })
    }
}



export const startEditExpense = (id, updates) => {
    return (dispatch,getState) => {
        const uid=getState().auth.uid
        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}