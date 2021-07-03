import React, { useState, useEffect } from 'react';
import './App.css';

import Search from './features/Search';
import Comments from './features/Comments';

const splitIntoThreads = (comments) => {
  let postIds = [];
  let thread = [];
  let threads = [];
  for (let comment of comments) {
    if (!postIds.includes(comment.postId)) {
      postIds.push(comment.postId);
    }
  }
  console.log(postIds)
  for (let postId of postIds) {
    for (let comment of comments) {
      if (comment.postId === postId) {
        thread.push(comment);
      }
    }
    threads.push(thread);
    console.log(thread)
    thread = [];
  }
  return threads
}

export default function App() {
  const [mode, setMode] = useState({
    hasError: false,
    hasLoaded: false,
    comments: []
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(
      response => {
      // console.log('before json')
      const jsonresponse = response.json()
      /*console.log('after json')
      console.log(response)
      console.log(jsonresponse)*/
      return jsonresponse
      }, (error) => {
      setMode({...mode, hasError: true})
      console.log(error);})
    .then(
      (comments) => {
        console.log(comments)
        let threads = splitIntoThreads(comments)
        console.log(threads)
        setMode({...mode, comments: threads, hasLoaded: true})},
      (error) => {
        setMode({...mode, hasError: true})
        console.log(error);})
  }, [])

  if (mode.hasError) {
    return <h2>Error loading data!</h2>
  }

  return (
    <div className="App">
      <Search/>
      <Comments comments={mode.comments} />
    </div>
  );
}

