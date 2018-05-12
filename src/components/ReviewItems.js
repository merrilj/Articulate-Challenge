import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import toMaterialStyle from 'material-color-hash';
import 'whatwg-fetch';

import './ReviewItems.css';

const fetchItemsForUser = async userId => {
  const response = await fetch(`/api/items?userId=${userId}`);

  if (response.status !== 200) {
    const text = await response.text();
    throw new Error(text);
  } 

  return await response.json();
}

export default class ReviewItems extends Component {
  state = {
    loading: true,
    items: []
  }

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser.id !== prevProps.currentUser.id) {
      this.fetchItems();
    }
  }

  fetchItems() {
    this.setState({
      loading: true
    });
    fetchItemsForUser(this.props.currentUser.id)
      .then(items => this.setState({
        loading: false,
        items
      }))
      .catch(err => {
        this.setState({
          loading: false,
          items: []
        })
        console.error(err)
      });
  }

  render() {
    return (
      <div className="review-items">
        <h3>Review items for {this.props.currentUser.name}:</h3>
        <div className="grid grid--columns-3">
          { this.state.loading && <div className="review-items__loading">Loading...</div>}
          { !this.state.loading && this.state.items.map(item =>
            <Link to={`/items/${item.id}`} key={item.id} className="grid__item" style={toMaterialStyle(item.id, 100)}>
              { item.title }
            </Link>
          ) }
        </div>
      </div>
    )
  }
}
