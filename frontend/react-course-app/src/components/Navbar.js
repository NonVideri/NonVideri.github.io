import { CurrentUserConsumer } from '../context/CurrentUser';

export default function Navbar(props) {
  return (
    <CurrentUserConsumer>
      {({ user, logout }) => {
        {
          user ? (
            <div>
              Hello, {user.name}! <button onClick={logout}>Log out</button>
            </div>
          ) : (
            <div>Please log in...</div>
          );
        }
      }}
    </CurrentUserConsumer>
  );
}
