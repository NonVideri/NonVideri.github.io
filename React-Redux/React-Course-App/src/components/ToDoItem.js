import { useState } from 'react';

export default function ToDoItem({ task }) {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <div onClick={toggleDone} className={done ? 'doneTodo' : ''}>
      <p>{task}</p>
    </div>
  );
}
