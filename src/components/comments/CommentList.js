import React from 'react';
import Comment from './Comment';

export default props => (
  props.comments.map((comment, index) => (
    <Comment key={comment.id} index={index} comment={comment} {...props} />
  ))
)