import { FC } from "react";
import css from "./Form.module.css";

const RegisterForm: FC = () => {
  //   const handle = () => {};

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Register</h3>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form action="">
        <input className={css.input} type="text" placeholder="Name" />
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="password" placeholder="Password" />
        <button className={css.btn}>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
