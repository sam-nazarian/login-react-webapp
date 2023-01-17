import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // creates side effects, also happends everytime the page reloads thus crates an infinite loop of re-rendering the component
  // const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
  // if (storedUserLoggedInfo === '1') {
  //   setIsLoggedIn(true);
  // }

  // runs only after component evaluation if the dependencies change, but it runs for the first time when the site starts
  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    // Provider is a componenet wrapped around other componenets
    // all descendents will have access to that context, more consise/clean than having props being passed on that are not directly being used, instead being forwarded to other comopnents
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn, //setting the value of the context
        onLogout: logoutHandler, //passing function to toher components
      }}
    >
      <MainHeader />
      <main>
        {/* directly using the props on the components, not passing/fowarding it on to another component */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
