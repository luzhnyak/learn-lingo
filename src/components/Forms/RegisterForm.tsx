import { FC, useState } from "react";
import css from "./Form.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
import eye from "../../images/eye.svg";
import eyeOff from "../../images/eye-off.svg";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const registerSchema = yup.object({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(30).required(),
});

export interface SubmitValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SubmitValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values: SubmitValues,
    { resetForm }: FormikHelpers<SubmitValues>
  ) => {
    const auth = getAuth();
    const { name, email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
            // photoURL: 'https://example.com/jane-q-user/profile.jpg',
          })
            .then(() => {
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
        }
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });

    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Register</h3>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values }) => (
          <Form>
            <div className={css.inputWrapper}>
              <Field
                className={`${css.input} ${errors.name ? css.inputError : ""}`}
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errormessage}
              />
            </div>
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
            <button className={css.btn}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
