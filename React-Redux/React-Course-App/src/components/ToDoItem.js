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

export default function ToDoItem({ text, id, destroy }) {
  const [done, setDone] = useState(false);

  const removeTask = () => {
    destroy(id);
  };

  const toggleDone = async () => {
    const response = await fetch(`http://localhost:5000/todo/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        item: { done: !done }
      })
    });
    if (response.ok) setDone(!done);
  };

  return (
    <Item done={done}>
      <p>{text}</p>
      <button onClick={destroy}>x</button>
    </Item>
  );
}
