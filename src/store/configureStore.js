import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../Reducers/expenses';
import filterReducer from '../Reducers/filters';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth:authReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
        
    );

    return store
};
