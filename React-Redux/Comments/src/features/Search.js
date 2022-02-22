import React from 'react';

export default function Search(props) {
  const onSearchChangeHandler = props.handler;
  
  return (
    <div>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={onSearchChangeHandler}
        placeholder="Search by e-mail"
      />
    </div>
  );
}