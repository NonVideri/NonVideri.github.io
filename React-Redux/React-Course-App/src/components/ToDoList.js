import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

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
    <>
      <h1>My stuff</h1>
      {tasks.map((task) => (
        <ToDoItem task={task} />
      ))}
      <ToDoForm onSubmit={addTask} onChange={updateInput} input={input} />
    </>
  );
}
