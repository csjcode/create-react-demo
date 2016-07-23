import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

  render() {
    return (
      <div className="commentList">
        I am a comment list!
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
        <Comment author="Chris">This is **another** comment</Comment>
      </div>
    );
  }
}

export default CommentList;
