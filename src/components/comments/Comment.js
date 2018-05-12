import React, { Component } from 'react';
import TimeAgo from 'react-timeago';

import './Comment.css';
import CommentForm from './CommentForm';

export default class Comment extends Component {

  render() {
    const { comment } = this.props
    return (
      <div className="comment-container">
        <CommentDetails comment={comment} />
         { comment.replies.length > 0 && <div>
          <Replies replies={comment.replies} />
        </div> }
        <div>
          <CommentForm {...this.props} id={comment.id} className='reply-input' placeholder='Reply...' />
        </div>
      </div>
    )
  }
}

const CommentDetails = ({ comment }) => (
  <div>
    <div className="comment-details">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-timeAgo">
        <TimeAgo date={comment.timeAgo} />
      </p>        
    </div>
    <p className="comment-text">{comment.text}</p>
  </div>
)

const Replies = ({ replies }) => (
  replies.map(reply => <CommentDetails key={reply.id} comment={reply} /> )
)