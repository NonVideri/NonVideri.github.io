import React from 'react';

const Comment = ({comment, first}) => {
  const { name, email, body } = comment;
  return (
    <div className={first ? 'comment-number-one' : 'comment-number-next'}>
      <header className='comment-header'>
        Name: {name} <br/>
        E-mail: {email}
      </header>
      <span className='comment-body'>{body}</span>
    </div>
  );
}

export default function Comments(props) {
  let comments = props.comments;

  if (!props.comments && comments === undefined) {
    return null;
  }

  return (
    comments === undefined ? null :
    <div className="Comments">
      {comments.map((comment) =>
        <Comment comment={comment} first={comment.first} key={comment.id} />
      )}
    </div>
  );
}