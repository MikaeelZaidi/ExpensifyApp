import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses'

const EditPage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {

                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push("/")
                    console.log('updated', expense)
                }}
            />
            <button onClick={(e) => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push("/")
            
            }}>Remove</button>
        </div>
    )
}

const ConnectEditPage = (state, props) => {
    return {
        expense: state.expenses.find((exp) => {
            return exp.id === props.match.params.id
        })
    }
}

export default connect(ConnectEditPage)(EditPage);