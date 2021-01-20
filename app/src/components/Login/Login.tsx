import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';
import { Link } from 'react-router-dom';

export function Login() {
  // const [username, setUsername] = useInput('');
  // const [password, setPassoword] = useInput('');

  const instance = axios.create({
    baseURL: 'https://www.reddit.com/api/',
    headers: {
      Authorization: 'Basic' + process.env.REACT_APP_CLIENT_ID,
    },
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    instance
      .post('/v1/access_token')
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // axios
    //   .get(`${process.env.REACT_APP_API_BASE_URL}${loginExtension}`)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));
  };

  return (
    <form className="loginForm" onSubmit={handleLogin}>
      <Link to="/login">Login</Link>
      <label htmlFor="username">Username</label>
      {/* <input
        type="text"
        name="username"
        value={username}
        onChange={setUsername}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={setPassoword}
      /> */}
      <button type="submit">Login</button>
    </form>
  );
}
