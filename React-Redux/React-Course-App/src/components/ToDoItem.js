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

export default function ToDoItem({ task }) {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <Item onClick={toggleDone} done={done}>
      <p>{task}</p>
    </Item>
  );
}
