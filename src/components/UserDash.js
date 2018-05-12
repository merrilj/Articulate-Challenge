import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './UserDash.css';
import ReviewItem from './ReviewItem';
import ReviewItems from './ReviewItems';
import CommentSidebar from './comments/CommentSidebar';

export default class UserDash extends Component {

  render() {
    return (
      <div className="user-dash">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <ReviewItems {...props} currentUser={this.props.currentUser} /> }
          />
          <Route path="/items/:itemId" component={ReviewItem} />
        </Switch>
        <CommentSidebar {...this.props} />
      </div>
    )
  }
}
