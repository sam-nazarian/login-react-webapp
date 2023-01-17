import React, { useState, useEffect } from 'react';

// returns an object that contains a component
// default value only used if you consume without having a provider
const AuthContext = React.createContext({
  //default values
  isLoggedIn: false,
  onLogout: () => {}, //allows IDE auto completion
  onLogin: (email, password) => {},
});

// A context managment componenet
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  // all descendents will have access to that context
  return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
