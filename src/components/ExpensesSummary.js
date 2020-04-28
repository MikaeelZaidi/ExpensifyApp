import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expensesSum from '../selectors/expense-total';
import ExpenseListItem from './ExpenseListItem';


export const ExpenseSummary = ({ expenseCount }) => {
    console.log(expenseCount)
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> with a total of </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>

            </div>

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

