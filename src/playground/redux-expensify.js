import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


//add expense action  
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
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

const removeExpense = ({ id } = {}) => {
    return {
        type: 'Remove_Expense',
        id
    }
}


//Edit Expense
const editExpense = (id, updates) => {

    return {
        type: 'Edit_Expense',
        id,
        updates
    }
}

//Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'Add_Expense':
            return [
                ...state,
                action.expense
            ]

        case 'Remove_Expense':

            return state.filter((expensee) => {

                console.log(expensee)
                return expensee.id !== action.id
            })

        case 'Edit_Expense':
            return state.map((expense) => {

                if (expense.id === action.id) {

                    return {
                        ...expense,
                        ...action.updates
                    }
                }

                else {
                    return expense
                };
            });

        default:
            return state
    }

};



const filterReducerDefault = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (text = '') => {
    return {
        type: 'SET_TextFilter',
        text: text
    }
}

const sortByAmount = () => {
    return {
        type: 'Sort_BY_AMOUNT',
        amount: 'amount'
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
        date: 'date'
    }
}

const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        date: date
    }
}

const setEndDate = (dateE) => {
    return {
        type: 'SET_END_DATE',
        date: dateE
    }
}
const filterReducer = (state = filterReducerDefault, action) => {

    switch (action.type) {

        case 'SET_TextFilter':
            return {
                ...state,
                text: action.text
            }

        case 'Sort_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.amount
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.date
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }

        case 'SET_END_DATE':

            return {
                ...state,
                endDate:action.date

            }
        default:
            return state
    }
}




//GET VISIBLE Expense

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {

        if (sortBy === 'date') {

            return a.createdAt < b.createdAt ? 1 : -1
        }

        if (sortBy === 'amount') {

            return a.amount  <  b.amount ? 1:-1
        }
    })
}

//Creating a store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {

    const state=store.getState()
    const VisibleExpenses=getVisibleExpenses(state.expenses,state.filters)
    console.log(VisibleExpenses);

})

const exp2 = store.dispatch(addExpense({
    description: 'Rent',
    note:'hello',
    createdAt:-1000,
    amount:700
}));

const exp1 = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    createdAt:1000
}));



// store.dispatch(removeExpense({
//     id: exp1.expense.id
// }))

// store.dispatch(editExpense(exp2.expense.id, { amount: 500 }

// ));

  //store.dispatch(setTextFilter('coffee'));

 //store.dispatch(sortByAmount());//sortBy:amout
 store.dispatch(sortByDate());//sortByLdate
 //store.dispatch(setStartDate(-125))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(100))
// store.dispatch(setEndDate())