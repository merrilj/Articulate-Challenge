import React, { Component } from 'react';
import 'whatwg-fetch';

import './CommentSidebar.css';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const fetchAllComments = async () => {
  const response = await fetch(`/api/comments`);

  if (response.status !== 200) {
    const text = await response.text();
    throw new Error(text);
  }

  return await response.json();
}

export default class CommentSidebar extends Component {
  constructor(props) {
    super()

    this.state = {
      loading: true,
      comments: []
    }

    this.appendReplies = this.appendReplies.bind(this);
    this.appendComments = this.appendComments.bind(this);
  }

  componentDidMount(){
    this.loadComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser.id !== prevProps.currentUser.id) {
      this.loadComments();
    }
  }

  loadComments() {
    this.setState({ loading: true });

    fetchAllComments()
    .then(comments => {
      this.setState({ loading: false, comments })
    })
    .catch(err => {
      this.setState({ loading: false, comments: [] })
      console.error(err)
    });
  }

  appendComments(commentText) {

    let comment = {}
    comment.replies = []
    comment.text = commentText
    comment.timeAgo = Date.now()
    comment.id = comment.timeAgo
    comment.author = this.props.currentUser.name

    let comments = this.state.comments
    let newComments = comments.concat([comment])

    newComments.sort((a, b) => {
      return new Date(b.timeAgo) - new Date(a.timeAgo)
    });
    
    this.setState({ comments: newComments });
  }

  appendReplies(replyText, index) {

    let reply = {}
    reply.text = replyText
    reply.timeAgo = Date.now()
    reply.id = reply.timeAgo
    reply.author = this.props.currentUser.name

    let comment = this.state.comments[index]
    let replies = comment.replies
    let newReplies = replies.concat([reply])

    this.setState(({ comments }) => {
      comments[index].replies = newReplies
      return comments
    });
  }

  render() {
    const { loading, comments } = this.state
    return (
      <div className="comment-sidebar">
        { loading && <div className="comment-sidebar__loading">Loading...</div> }
        { !loading && <div className="sidebar-content">
          <CommentForm
            className='comment-input'
            placeholder='Enter comment'
            appendComments={this.appendComments}
          />
          <CommentList
            {...this.props}
            comments={comments}
            appendReplies={this.appendReplies}
          />
        </div> }
      </div>
    )
  }
}
