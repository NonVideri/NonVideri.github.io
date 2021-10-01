import { useEffect, useState } from 'react';
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

const DestroyButton = styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
`;

export default function ToDoList(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(async () => {
    const response = await fetch('http://localhost:5000/todo');
    const json = await response.json();
    setTasks(json);
  });

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, input]);
    setInput('');
  };

  const removeAll = () => {
    setTasks([]);
  };

  return (
    <Container>
      <Header>My stuff</Header>
      <DestroyButton onClick={removeAll}>Remove all</DestroyButton>
      {tasks.map((task) => (
        <ToDoItem id={task.id} key={task.key} text={task.text} done={task.done} />
      ))}
      <ToDoForm onSubmit={addTask} onChange={updateInput} input={input} />
    </Container>
  );
}
