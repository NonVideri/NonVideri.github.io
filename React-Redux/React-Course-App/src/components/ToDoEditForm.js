import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { get, update } from '../helpers/tasksApi';
import { SubmitButton, TextInput, Label, Select } from '../helpers/theme';

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
              <Label>
                <TextInput name="content" onChange={handleChange} value={values.content} />
              </Label>

              <br />
              <SubmitButton type="submit">Update</SubmitButton>
            </form>
          )}
        </Formik>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
