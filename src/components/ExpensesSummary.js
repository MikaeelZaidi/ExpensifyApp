import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesSum from '../selectors/expense-total';
import ExpenseListItem from './ExpenseListItem';


export const ExpenseSummary = ({ expenseCount }) => {
    console.log(expenseCount)
    return (
        <div>
            <h1>{expenseCount}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length
    }
};

export default connect(mapStateToProps)(ExpenseSummary);

