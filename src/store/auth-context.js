import React from 'react';

// returns an object that contains a component
// default value only used if you consume without having a provider
const AuthContext = React.createContext({
  isLoggedIn: false, //default value
});

export default AuthContext;
