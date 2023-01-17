import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider is a componenet wrapped around other componenets
  // all descendents will have access to that context, more consise/clean than having props being passed on that are not directly being used, instead being forwarded to other comopnents
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
