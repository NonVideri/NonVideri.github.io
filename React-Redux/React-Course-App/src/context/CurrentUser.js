import { createContext, useState } from 'react';

const CurrentUserContext = createContext();

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Arthur' });
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
