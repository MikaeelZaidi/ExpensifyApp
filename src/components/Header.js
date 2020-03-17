import React from 'react';
import { BrowserRouter, Route, Switch, Link ,NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink activeClassName="is-active" to="/" exact={true}>Home Page</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    )
}

export default Header