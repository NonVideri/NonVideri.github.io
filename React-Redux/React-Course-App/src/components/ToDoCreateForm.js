import styled from 'styled-components';

const Button = styled.button`
  background: #232632;
  color: #00a7fa;
  width: 80px;
  height: 32px;
  font-size: 1.7em;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 5px;
  font-size: 0.7em;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
  appearance: none;
`;

export default function ToDoCreateForm({ onChange, onSubmit, input }) {
  return (
    <>
      <TextInput type="text" onChange={onChange} value={input} />
      <Button onClick={onSubmit}>Add task</Button>
    </>
  );
}
