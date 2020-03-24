import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {


    return (
        <div>
            <h1>Expense List:</h1>
            {
                props.expenses.length === 0 ? (<p>No Expenses</p>) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                )
            }
        </div>
    )
}


const ConnectedExpenseList = connect((state) => {

    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
})(ExpenseList);


export default ConnectedExpenseList