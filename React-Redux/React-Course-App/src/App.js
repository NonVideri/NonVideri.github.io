import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import NotFound from './components/NotFound';
import ToDoList from './components/ToDoList';
import ToDoEditForm from './components/ToDoEditForm';
import Login from './components/Login';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #343744;
  background: #232632;
  border-radius: 10px;
  padding: 5px;
`;

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route path="/items/:itemId" component={ToDoEditForm} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
