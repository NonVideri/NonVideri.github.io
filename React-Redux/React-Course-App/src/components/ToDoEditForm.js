import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { get, update } from '../helpers/tasksApi';
import { SubmitButton, TextInput, Label, Select, ErrorMsg } from '../helpers/theme';

function ToDoEditForm(props) {
  const [fetched, setFetched] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [item, setItem] = useState(null);
  const itemId = props.match.params.itemId;

  useEffect(() => {
    (async function () {
      const editedItem = await get(itemId);
      setItem(editedItem);
      setFetched(true);
    })();
  }, []);

  return (
    <div>
      Edit form for {itemId}
      {fetched ? (
        <Formik
          initialValues={{ ...item }}
          onSubmit={async (values) => {
            await update(itemId, { ...values });
            props.history.push('/');
          }}
          validate={(values) => {
            let errors = {};
            if (!values.content) errors.content = 'Required.';
            else if (values.content.length < 3) errors.content = 'Too short. Minimum 3 characters.';

            if (!errors.content) setDisabled(false);
            else setDisabled(true);
            return errors;
          }}>
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Label>
                Content *<ErrorMsg>{errors.content}</ErrorMsg>
                <TextInput name="content" onChange={handleChange} value={values.content} />
              </Label>
              <Label>
                Priority
                <Select name="priority" onChange={handleChange} value={values.priority}>
                  <option value="low">Low</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </Select>
              </Label>

              <Label>
                Done?{' '}
                <input
                  type="checkbox"
                  name="done"
                  value={values.done}
                  checked={values.done}
                  onChange={handleChange}
                />
              </Label>
              <br />
              <SubmitButton type="submit" disabled={disabled}>
                Update
              </SubmitButton>
            </form>
          )}
        </Formik>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default withRouter(ToDoEditForm);
