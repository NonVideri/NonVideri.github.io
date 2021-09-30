export default function ToDoForm({ onChange, onSubmit, input }) {
  return (
    <>
      <input type="text" onChange={onChange} value={input} />
      <button onClick={onSubmit}>Add task</button>
    </>
  );
}
