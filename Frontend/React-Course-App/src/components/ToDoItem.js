import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${(props) => (props.done ? 'green' : 'auto')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'auto')};
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    color: white;
  }
`;

export default function ToDoItem(props) {
  const { id, done, content } = props;

  const removeTask = () => {
    props.removeTask(id);
  };

  const toggleDone = () => {
    props.toggleDone(id);
  };

  return (
    <Item done={done}>
      <p onClick={toggleDone}>{content}</p>
      <button onClick={removeTask}>x</button>
      <StyledLink to={`/items/${id}`}>Edit</StyledLink>
    </Item>
  );
}
