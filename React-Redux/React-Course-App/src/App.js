import './App.css';
import { useState } from 'react';

function ToDoItem(props) {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <div onClick={toggleDone} className={done ? 'doneTodo' : ''}>
      <p>{props.task}</p>
    </div>
  );
}

function ToDoList(props) {
  const [tasks, setTasks] = useState(props.tasks);
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
      <h1>{props.title}</h1>
      {tasks.map((task) => (
        <ToDoItem task={task} />
      ))}
      <input type="text" onChange={updateInput} value={input} />
      <button onClick={addTask}>Add task</button>
    </>
  );
}

function App() {
  const myTasks = ['Record a ReactJS Video', 'Go for a walk'];

  return <ToDoList title="My stuff" tasks={myTasks} />;
}

export default App;
