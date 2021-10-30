import { useEffect, useState } from 'react';
import { get } from '../helpers/tasksApi';

export default function ToDoEditForm(props) {
  const [fetched, setFetched] = useState(false);
  const [item, setItem] = useState(null);
  const itemId = props.match.params.itemId;

  useEffect(async () => {
    const editedItem = await get(itemId);
    setItem(editedItem);
    setFetched(true);
  }, []);

  return (
    <div>
      Edit form for {itemId}
      {fetched ? <p>Item fetched</p> : <p>Loading...</p>}
    </div>
  );
}
