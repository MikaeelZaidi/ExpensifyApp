import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'
import { NavLink } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => {

    return (
        <div>
            <NavLink to={`/edit/${id}`}> <h1>{description}</h1></NavLink>
            <p>{createdAt}-{amount}</p>
           
        </div>
    )

}

const ExpenseListItemConnect = connect()(ExpenseListItem)
export default ExpenseListItemConnect