import React, { useState } from "react";
import styled from 'styled-components'
import * as helpers from '../../Functions/helperFunctions';


const StyledLogin = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: flex-start;
  margin-top: 100px;
  color: black;
  background: #eeeeeedd;
  padding: 5% 2% 10% 2%;
  border: 3px solid #00bc98;
  border-radius: 10px;

  h1 {
    font-size: 4rem;
    margin: 20px;
  }

  h3 {
    font-size: 2.4rem;
    margin: 10px;
  }

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin: 10px;

    p {
      font-size: 1.4rem;
      padding: 5px 10px;
      border-radius: 5px;
    }

    .warning {
      background-color: #fb8570;
    }

    .info {
      background-color: #00bc98;
    }
  }

  .loginform {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  
    input {
      margin: 5px 0;
      height: 30px;
      width: 280px;
      font-size: 1.4rem;
      background: none;
      border: none;
      border-bottom: 1px solid white;
    }

    label {
      font-size: 1.4rem;
      font-style: italic;
      margin: 10px 0px 5px;
    }

    .dummy {
      display: none;
    }
    
    .buttonbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;

      button {
        height: 30px;
        width: 70px;
        font-size: 1.4rem;
        border: none;
        border-radius: 5px;
        background-color: #00bc98;
        color: white;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

`;


export default function Login(props) {

  const initialLogin = {
    username: '',
    password: '',
    email: '',
    imessage: '',
    emessage: ''
  };

  const [login, setLogin] = useState(initialLogin);


  // register a new user
  const registerHandler = e => {
    e.preventDefault();

    if (login.username === '' || login.password === '' || login.email === '') {
      setLogin({...login, imessage: '',
        emessage: 'You need to supply a username, password and email to register'});
    } else {
      setLogin({...login, emessage: '', imessage: 'Please wait, registration in progress...'});
      // message will change based on response from server
      helpers.register(setLogin, login.username, login.password, login.email);
    }
  };


  // login in as an existing user
  const loginHandler = e => {
    e.preventDefault();

    if (login.username === "" || login.password === "") {
      setLogin({...login, imessage: '',
        emessage: 'You need to supply both a username and password to log in'});
    } else {
      setLogin({...login, emessage: '', imessage: 'Please wait, login in progress...'});
      // message will change based on response from server
      helpers.login(props.setStatus, setLogin, login.username, login.password);
    }
  };


  // update local state on the form
  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setLogin(initialLogin);
  };

  const submitHandler = e => {
    // since we don't know if the user wants to
    // login or register, just ignore 'enter' key presses
    e.preventDefault();
  };


  return (
    <StyledLogin>
      <h1>Design Your Life</h1>
      <h3>Login / Register </h3>
      <div className='message'>
        { login.emessage && <p className='warning'>{login.emessage}</p> }
        { login.imessage && <p className='info'>{login.imessage}</p> }
      </div>

      <form className='loginform' onSubmit={submitHandler}>
        <input
          onChange={handleChange}
          placeholder="username"
          type="text"
          name="username"
          value={login.username}
        />
        <input
          onChange={handleChange}
          placeholder="password"
          type="password"
          name="password"
          value={login.password}
        />
        <label name='email' className='email'>To register, please also enter email:</label>
        <input
          onChange={handleChange}
          placeholder="email"
          type="text"
          name="email"
          value={login.email}
        />
        <input type='submit' className='dummy' value='' />

        <div className='buttonbar'>
          <button onClick={loginHandler}>Login</button>
          <button onClick={registerHandler}>Register</button>
          <button onClick={resetForm}>Reset</button>
        </div>

      </form>
    </StyledLogin>
  );
};


