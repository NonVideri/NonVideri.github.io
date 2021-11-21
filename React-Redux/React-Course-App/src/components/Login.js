import { Redirect } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { CurrentUserConsumer } from '../context/CurrentUser';
import { SubmitButton } from '../helpers/theme';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } };

  return (
    <CurrentUserConsumer>
      {({ user, login, processing }) => {
        <div>
          {user && <Redirect to={from} />}
          <p>You must login to view page {from.pathname}.</p>

          {processing ? (
            <div>Authenticating...</div>
          ) : (
            <SubmitButton onClick={login}>Log in with Facebook</SubmitButton>
          )}
        </div>;
      }}
    </CurrentUserConsumer>
  );
}
