import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import UserDash from './components/UserDash';

const users = [
  {
    id: 'c98f52d2-d521-4ecc-bba1-d63ce7591bfb',
    name: 'User A'
  },
  {
    id: 'e2d648f2-476e-4833-acec-9f7559544dd8',
    name: 'User B'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: users[0],
      users: users
    };
  }

  setUser = user => this.setState({
    currentUser: user
  })

  render() {
    return (
      <div className="app">
        <Header {...this.props} users={this.state.users} currentUser={this.state.currentUser} setUser={this.setUser} />
        <div className="app__content-container">
          <div className="app__content">
            <UserDash {...this.props} currentUser={this.state.currentUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
