import { FC } from "react";
import css from "./Form.module.css";

const LoginForm: FC = () => {
  //   const handle = () => {};

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Login</h3>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <form action="">
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="password" placeholder="Password" />
        <button className={css.btn}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
