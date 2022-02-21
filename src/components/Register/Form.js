import React, { useState } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const [enterEmail, setEnteredEmail] = useState("");
  const [enterPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    if (enterEmail.trim().length === 0 || enterPassword.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid email and password (non-empty values).",
      });
      return;
    }
    props.onLogin(enterEmail, enterPassword);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={loginHandler}>
        <div className={classes.container}>
          <div className={classes["brand-logo"]}></div>
          <div className={classes["brand-title"]}>TWITTER</div>
          <div className={classes.inputs}>
            <label>EMAIL</label>
            <input
              type="email"
              value={enterEmail}
              placeholder="example@test.com"
              onChange={emailChangeHandler}
            />
            <label>PASSWORD</label>
            <input
              type="password"
              value={enterPassword}
              placeholder="Min 6 charaters long"
              onChange={passwordChangeHandler}
            />
            <Button />
          </div>
          <a href="https://fb.com/unique.s.shah">Made by Samrat Bikram Shah</a>
        </div>
      </form>
    </div>
  );
};

export default Form;
