import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';

function App() {
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
