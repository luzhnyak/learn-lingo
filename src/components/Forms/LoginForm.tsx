import { FC, useState } from "react";
import css from "./Form.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import eye from "../../images/eye.svg";
import eyeOff from "../../images/eye-off.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
});

export interface SubmitValues {
  email: string;
  password: string;
}

const initialValues: SubmitValues = {
  email: "",
  password: "",
};

const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: SubmitValues,
    { resetForm }: FormikHelpers<SubmitValues>
  ) => {
    const auth = getAuth();
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        // dispatch(
        //   setUser({
        //     id: user.uid,
        //     name: user.displayName,
        //     email: user.email,
        //     token: user.accessToken,
        //   })
        // );
      })
      .catch((error) => {
        console.log(error);

        // toast.error(error.message);
      });

    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Login</h3>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values }) => (
          <Form>
            <div className={css.inputWrapper}>
              <Field
                className={`${css.input} ${errors.email ? css.inputError : ""}`}
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errormessage}
              />
            </div>
            <div className={css.inputWrapper}>
              <Field
                className={`${css.input} ${
                  errors.password ? css.inputError : ""
                }`}
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder="Password"
                value={values.password}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.errormessage}
              />
              <button
                type="button"
                className={css.btnShowPassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? eyeOff : eye} alt="ShowPassword" />
              </button>
            </div>
            <button className={css.btn}>Log In</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
