import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilter from './ExpenseListFilter';
import {ExpenseSummary} from './ExpensesSummary'
import { connect } from 'react-redux';

const ExpenseDashBoardPage = (props) => {
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseSummary />
            <ExpenseList/>
        </div>
    )
}


export default ExpenseDashBoardPage