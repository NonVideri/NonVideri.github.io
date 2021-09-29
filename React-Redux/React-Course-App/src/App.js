import { useState } from 'react';

function ToDoList(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>{props.title}</h1>
      {props.tasks.map((task) => (
        <div>
          <p>{task}</p>
        </div>
      ))}
      <input type="text" onChange={updateInput} />
      <button>Add task</button>
    </>
  );
}

function App() {
  const myTasks = ['Record a ReactJS Video', 'Go for a walk'];

  return <ToDoList title="My stuff" tasks={myTasks} />;
}

export default App;
