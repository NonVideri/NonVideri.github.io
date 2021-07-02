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

const splitIntoThreads = (comments) => {
  let postIds = [];
  let thread = [];
  let threads = [];
  for (let comment in comments) {
    if (!postIds.includes(comment.postId)) {
      postIds.push(comment.postId);
    }
  }
  for (let postId in postIds) {
    for (let comment in comments) {
      if (comment.postId === postId) {
        thread.push(comment);
      }
    }
    threads.push(thread);
    thread = [];
  }
  return threads
}

export default function Comments(props) {
  let threads = splitIntoThreads(props.comments);
  return (
    <div className="Comments">
      {threads.map(thread => (thread.map((comment, i) =>
        <Comment comment={comment} numeration={`comment${i}`} key={comment.id} />
      )))}
    </div>
  );
}