import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilter from './ExpenseListFilter';
import { connect } from 'react-redux';

const ExpenseDashBoardPage = (props) => {
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseList />


        </div>
    )
}


export default ExpenseDashBoardPage