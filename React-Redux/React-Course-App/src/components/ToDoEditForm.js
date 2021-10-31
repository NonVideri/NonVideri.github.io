import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { get, update } from '../helpers/tasksApi';

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
      {fetched ? (
        <Formik
          initialValues={{ ...item }}
          onSubmit={(values) => {
            update(itemId, { ...values });
          }}>
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <input name="content" onChange={handleChange} value={values.content} />
              <br />
              <button type="submit">Update</button>
            </form>
          )}
        </Formik>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
