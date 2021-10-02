import { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${(props) => (props.done ? 'green' : 'auto')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'auto')};
`;

export default function ToDoItem(props) {
  const removeTask = () => {
    props.removeTask(props.id);
  };

  const toggleDone = () => {
    props.toggleDone(props.id);
  };

  return (
    <Item done={props.done}>
      <p onClick={toggleDone}>{props.text}</p>
      <button onClick={removeTask}>x</button>
    </Item>
  );
}
