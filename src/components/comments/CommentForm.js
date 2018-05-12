import React, { Component } from 'react';
import './CommentForm.css';

export default class CommentForm extends Component {

  state = {
    comment: '',
    focused: false
  }

  onFocus = () => {
    this.setState({ focused: true })
  }

  handleBlur = () => {
    this.setState({ focused: false, comment: '' })
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }

  handleSubmit = (comment, index) => {
    if (index === undefined) {
      this.props.appendComments(comment)
    } else {
      this.props.appendReplies(comment, index)
    }
    this.setState({ comment: '' })
  }


  render() {
    const { index } = this.props
    const { comment } = this.state
    return (
      <div className="comment-form">
          <input
            type="text"
            name="comment"
            value={comment}
            onFocus={this.onFocus}
            onChange={this.handleChange}
            className={this.props.className}
            placeholder={this.props.placeholder}
          />
          { this.state.focused && <div className="form-actions">
            <button
              onClick={this.handleBlur}
              className="form-actions__cancel"
            >Cancel</button>
            <button
              disabled={!comment.length}
              className="form-actions__post"
              onClick={() => this.handleSubmit(comment, index)}
            >Post</button>
          </div> }
      </div>
    )
  }
}