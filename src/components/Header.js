import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth'

export const Header = ({ startLogOut }) => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink activeClassName="is-active" to="/" exact={true}>Home Page</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
            <button onClick={startLogOut} >Logout</button>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatchToProps)(Header)