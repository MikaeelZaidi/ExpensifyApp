import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses'

export class EditPage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push("/")
       
    }

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    }

}


const ConnectEditPage = (state, props) => {
    return {
        expense: state.expenses.find((exp) => {
            return exp.id === props.match.params.id
        })
    }
}

const mapDispatchtoProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(ConnectEditPage, mapDispatchtoProps)(EditPage);