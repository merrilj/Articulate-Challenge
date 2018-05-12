import React, { Component } from 'react';
import classNames from 'classnames';

import logo from '../logo.svg';
import './Header.css';

export default class Header extends Component {
  setUser (user) {
    this.props.setUser(user);
  }

  render() {
    return (
      <header className="header">
        <img src={logo} className="header__logo" alt="Review" />
        <h2 className="header__title">Articulate Developer Challenge</h2>
        <div className="header__user">
          { this.props.users.map(user =>
            <button
              key={user.id}
              className={classNames('header__user-button', { 'user--active': this.props.currentUser.id === user.id })}
              title="Click to set active user"
              onClick={() => this.setUser(user)}
            >
              { user.name }
            </button>
          ) }
        </div>
      </header>
    )
  }
}
