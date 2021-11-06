import { useState } from 'react/cjs/react.development';
import { SubmitButton } from '../helpers/theme';

export default function Login(props) {
  const [processing, setProcessing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fbLogin = () => {
    setProcessing(true);
    window.FB.getLoginStatus((response) => {
      console.log(response);
      if (response.status !== 'connected') window.FB.login();
      else
        window.FB.api('/me', (user) => {
          console.log(user);
          setProcessing(false);
          setCurrentUser(user);
        });
    });
  };

  return (
    <div>
      {currentUser ? <div>Hello, {currentUser.name}!</div> : <p>You must login to view page.</p>}
      {processing ? (
        <div>Authenticating...</div>
      ) : (
        <SubmitButton onClick={fbLogin}>Log in with Facebook</SubmitButton>
      )}
    </div>
  );
}
