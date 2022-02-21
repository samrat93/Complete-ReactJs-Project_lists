import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.button}>
      <button type="submit">LOGIN</button>
    </div>
  );
};

export default Button;
