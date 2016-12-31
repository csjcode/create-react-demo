import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

  render() {
    return (
      <div className="commentList">
        I am a comment list!
        <Comment author="Bob Hunt">This is one comment witten by Bob Hunt</Comment>
        <Comment author="John Walke">This is *another* comment by John Walke </Comment>
        <Comment author="Chris">This is **another** comment</Comment>
      </div>
    );
  }
}

export default CommentList;
