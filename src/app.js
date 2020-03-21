import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const e1 = store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 2000

}))

const e2 = store.dispatch(addExpense({
    description: 'Water Bill',
    createdAt: 1000
}))


const e3 = store.dispatch(addExpense({
    description: 'Rent',
    amount: 200

}))



const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

