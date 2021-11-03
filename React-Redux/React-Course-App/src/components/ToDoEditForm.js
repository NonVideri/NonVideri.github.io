import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { get, update } from '../helpers/tasksApi';
import { SubmitButton, TextInput, Label, Select, ErrorMsg } from '../helpers/theme';

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
          }}
          validate={(values) => {
            let errors = {};
            if (!values.content) errors.content = 'Required.';
            else if (values.content.length < 3) errors.content = 'Too short. Minimum 3 characters.';
            return errors;
          }}>
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Label>
                Content *<ErrorMsg>{errors.content}</ErrorMsg>
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
