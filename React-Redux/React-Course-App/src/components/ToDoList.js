import { useState } from 'react';
import styled from 'styled-components';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 88%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

const Header = styled.h1`
  color: #fff;
`;

export default function ToDoList(props) {
  const [tasks, setTasks] = useState(['Record a ReactJS Video', 'Go for a walk']);
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  };

  return (
    <Container>
      <Header>My stuff</Header>
      {tasks.map((task) => (
        <ToDoItem task={task} />
      ))}
      <ToDoForm onSubmit={addTask} onChange={updateInput} input={input} />
    </Container>
  );
}
