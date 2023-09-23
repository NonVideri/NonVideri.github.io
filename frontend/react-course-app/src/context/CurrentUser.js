import { createContext, useState } from 'react';

const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const getUser = () => {
    window.FB.api('/me', (currentUser) => {
      setUser(currentUser);
      setProcessing(false);
      setRedirecting(true);
    });
  };

  const login = () => {
    setProcessing(true);
    window.FB.getLoginStatus((res) => {
      if (res.status === 'connected') getUser();
      else
        window.FB.login((user) => {
          getUser();
        });
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <CurrentUserContext.Provider value={{ user, login, logout }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const CurrentUserConsumer = CurrentUserContext.Consumer;
