import React from 'react';

const Comment = ({comment, numeration}) => {
  const { name, email, body } = comment;
  return (
    <div className={numeration}>
      <header className='comment-header'>
        Name: {name} <br/>
        E-mail: {email}
      </header>
      <span className='comment-body'>{body}</span>
    </div>
  );
}

export default function Comments(props) {
  let threads = props.comments;

  if (!props.comments && threads === undefined) {
    return null;
  }

  return (
    threads === undefined ? null :
    <div className="Comments">
      {threads.map(thread => (thread.map((comment, i) =>
        <Comment comment={comment} numeration={`comment-number${i+1}`} key={comment.id} />
      )))}
    </div>
  );
}