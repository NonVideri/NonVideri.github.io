import { useState } from 'react/cjs/react.development';
import { SubmitButton } from '../helpers/theme';

export default function Login(props) {
  const [processing, setProcessing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [finished, setFinished] = useState(false);

  const fbLogin = () => {
    setProcessing(true);
    window.FB.getLoginStatus((response) => {
      if (response.status !== 'connected') window.FB.login();
      else
        window.FB.api('/me', (user) => {
          sessionStorage.setItem('currentUser', user);
          setProcessing(false);
          setFinished(true);
          setCurrentUser(user);
        });
    });
  };

  const { from } = props.location.state || { from: { pathname: '/' } };

  return (
    <div>
      {currentUser ? (
        <div>Hello, {currentUser.name}!</div>
      ) : (
        <p>You must login to view page {from.pathname}.</p>
      )}
      {processing ? (
        <div>Authenticating...</div>
      ) : (
        <SubmitButton onClick={fbLogin}>Log in with Facebook</SubmitButton>
      )}
    </div>
  );
}
