import { useState } from 'react/cjs/react.development';
import { SubmitButton } from '../helpers/theme';

export default function Login(props) {
  const [processing, setProcessing] = useState(false);

  const fbLogin = () => {
    setProcessing(true);
  };

  return (
    <div>
      <p>You must login to view page.</p>
      {processing ? (
        <div>Authenticating...</div>
      ) : (
        <SubmitButton onClick={fbLogin}>Log in with Facebook</SubmitButton>
      )}
    </div>
  );
}
