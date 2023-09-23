import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

export default function NotFound(props) {
  const [counter, setCounter] = useState(10);

  const countdown = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(countdown, 1000);
    return clearInterval(intervalId);
  }, []);

  return (
    <>
      <p>
        No match for <code>{props.location.pathname}</code>.
      </p>
      <p>Redirect to homepage in {counter} seconds...</p>
      {counter === 0 && <Redirect to="/" />}
    </>
  );
}
