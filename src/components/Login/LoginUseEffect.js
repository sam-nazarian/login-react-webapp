import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(); //if invalid highlight red color when blurred

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); //if invalid highlight red color when blurred

  const [formIsValid, setFormIsValid] = useState(false); //valid if email has @ & password is longer than 6 char

  // runs after every componenet render cycle, & the first time component mounts / initially created
  // useEffect(() => {
  // console.log('EFFECT RUNNING!!!');
  // });

  // runs at beginning of render cycle
  // console.log('EFFECT RUNNING!!!');

  // useEffect(() => {
  //   console.log('HELLO EFFECT!!!');

  //   return () => {
  //     console.log('BYE EFFECT!!!');
  //   };
  // }, []);

  /*
  // side effect of user entering data, an action that should be executed in reponse to another action (which is a side effect)
  useEffect(() => {
    // debouncing - debounce the user input, don't do something on every key stroke
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
    }, 500);

    // clean up func doesn't happen on start but everytime useEffect is used after that it is ran
    // reset previous timeout, (runs before timeout to clean it up before function runs)
    // clear last timer before we creating a new one
    return () => {
      console.log('CLEANUP!!!!!');
      clearTimeout(identifier); //stops the timeout from happening if another input is entered
    };
  }, [enteredEmail, enteredPassword]); //add the values that you're using as dependencies
  */

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    // setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes('@'));
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" autoComplete="off" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        </div>

        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="off" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        </div>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
