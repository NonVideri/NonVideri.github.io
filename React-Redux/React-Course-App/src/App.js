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

const PrivateRoute = (Component, ...rest) => {
  <Route>
    {...rest}
    {(props) =>
      isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: 'login', state: { from: props.location } }} />
      )
    }
  </Route>;
};

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <PrivateRoute path="/items/:itemId" component={ToDoEditForm} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
