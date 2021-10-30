import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ToDoCreateForm from './ToDoCreateForm';
import ToDoItem from './ToDoItem';
import * as tasksApi from '../helpers/tasksApi';

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
    const tasks = await tasksApi.getAll();
    setTasks(tasks);
  }, []);

  useEffect(async () => {
    const response = await fetch('http://localhost:5000/todo');
    const json = await response.json();
    setTasks(json);
  }, []);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = async () => {
    const newTask = await tasksApi.create({ text: input });

    setTasks([...tasks, newTask]);
    setInput('');
  };

  const findById = (id, arr) => {
    const index = arr.findIndex((task) => task.id === id);
    return [index, arr[index]];
  };

  const toggleDone = async (id) => {
    const [index, task] = findById(id, tasks);
    const response = await tasksApi.update(id, { done: !task.done });
    setTasks(
      tasks
        .slice(0, index)
        .concat([response])
        .concat(tasks.slice(index + 1))
    );
  };

  const removeTask = async (id) => {
    await tasksApi.destroy(id);
    const [index] = findById(id, tasks);
    setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
  };

  const destroyAll = async () => {
    for (let task of tasks) await tasks.Api.destroy(task.id);
    setTasks([]);
  };

  return (
    <Container>
      <Header>My stuff</Header>
      <DestroyButton onClick={destroyAll}>Remove all</DestroyButton>
      {tasks.map((task) => (
        <ToDoItem
          id={task.id}
          key={task.key}
          text={task.text}
          done={task.done}
          toggleDone={toggleDone}
          removeTask={removeTask}
        />
      ))}
      <ToDoCreateForm onSubmit={addTask} onChange={updateInput} input={input} />
    </Container>
  );
}
