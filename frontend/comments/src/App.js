import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Search from './features/Search';
import Comments from './features/Comments';

export default function App() {
  const originalComments = useRef([]);
  const [state, setState] = useState({
    hasError: false,
    hasLoaded: false,
    comments: []
  });
  const [search, setSearch] = useState('');

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
      setState({...state, hasError: true})
      console.log(error);})
    .then(
      (comments) => {
        let numberedComments = numberComments(comments)
        originalComments.current = numberedComments;
        setState({...state, comments: numberedComments, hasLoaded: true})},
      (error) => {
        setState({...state, hasError: true})
        console.log(error);})
  }, [])

  useEffect(() => {
    let filteredComments = filterComments(originalComments.current)
    setState({...state, comments: filteredComments})
  }, [search])

  const filterComments = (comments) => {
    let filteredComments = comments.filter(comment => comment.email.toLowerCase().includes(search.toLowerCase()))
    return filteredComments
  }

  const onSearchChangeHandler = (e) => {
    const userInput = e.target.value;
    setSearch(userInput)
  };

  if (state.hasError) {
    return <h2>Error loading data!</h2>
  }

  return (
    <div className="App">
      <Search value={search} handler={onSearchChangeHandler}/>
      <Comments comments={state.comments} />
    </div>
  );
}

const numberComments = (comments) => {
  let postIds = [];

  for (let comment of comments) {
    if (!postIds.includes(comment.postId)) {
      postIds.push(comment.postId);
    }
  }

  let numberedComments = comments;

  for (let comment of numberedComments) {
    if (postIds.includes(comment.postId)) {
      comment.first = true;
      postIds = postIds.filter((id) => id !== comment.postId)
    }
  }
  console.log(numberedComments)

  return numberedComments
}