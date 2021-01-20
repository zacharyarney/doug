import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Login } from './components/Login/Login';

function App() {
  const [redditAuthState, setRedditAuthState] = useState('');

  const loginExtension =
    'api/v1/authorize?client_id=' +
    process.env.REACT_APP_CLIENT_ID +
    '&response_type=code&state=' +
    redditAuthState +
    '&redirect_uri=' +
    process.env.REACT_APP_REDIRECT_URI +
    '&duration=permanent&scope=' +
    process.env.REACT_APP_SCOPE_STRING;

  useEffect(() => {
    setRedditAuthState(uuidv4());
  }, []);

  return (
    <Switch>
      <Route
        path="/login"
        component={() => {
          window.location.href =
            process.env.REACT_APP_API_BASE_URL + loginExtension;
          return null;
        }}
      />

      <Login />
    </Switch>
  );
}

export default App;
