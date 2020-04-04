import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm.js';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        //props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
      startAddExpense: (expense) => {
            return (
                dispatch(startAddExpense(expense))
            )
        }
    };
};

const ConnectedExpense = connect(undefined, mapDispatchToProps)(AddExpensePage)
export default ConnectedExpense