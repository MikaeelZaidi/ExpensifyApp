import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


export const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {

    return (
        <div>
            <NavLink to={`/edit/${id}`}> <h1>{description}</h1></NavLink>
            <p>
                {moment(createdAt).format('MMMM Do, YYYY')}
            -
            {numeral(amount/100).format('$0,0.00')}
            </p>

        </div>
    )

}

const ExpenseListItemConnect = connect()(ExpenseListItem)
export default ExpenseListItemConnect