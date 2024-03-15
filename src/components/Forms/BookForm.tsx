import { FC } from "react";
import css from "./Form.module.css";

const BookForm: FC = () => {
  //   const handle = () => {};

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Book trial lesson</h3>
      <p className={css.text}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <p className={css.reason}>
        What is your main reason for learning English?
      </p>

      <form action="">
        <div className={css.radioWrapper}>
          <input
            className={css.inputRadio}
            type="radio"
            id="option-1"
            name="options"
          />
          <label htmlFor="option-1">Career and business</label>
        </div>

        <div className={css.radioWrapper}>
          <input
            className={css.inputRadio}
            type="radio"
            id="option-2"
            name="options"
          />
          <label htmlFor="option-2">Lesson for kids</label>
        </div>

        <div className={css.radioWrapper}>
          <input
            className={css.inputRadio}
            type="radio"
            id="option-3"
            name="options"
          />
          <label htmlFor="option-3">Living abroad</label>
        </div>

        <div className={css.radioWrapper}>
          <input
            className={css.inputRadio}
            type="radio"
            id="option-4"
            name="options"
          />
          <label htmlFor="option-4">Exams and coursework</label>
        </div>

        <div className={css.radioWrapper}>
          <input
            className={css.inputRadio}
            type="radio"
            id="option-5"
            name="options"
          />
          <label htmlFor="option-5">Culture, travel or hobby</label>
        </div>
        <div className={css.inputWrapper}>
          <input className={css.input} type="email" placeholder="Full Name" />
        </div>
        <div className={css.inputWrapper}>
          <input className={css.input} type="email" placeholder="Email" />
        </div>
        <div className={css.inputWrapper}>
          <input className={css.input} type="text" placeholder="Phone number" />
        </div>
        <button className={css.btn}>Book</button>
      </form>
    </div>
  );
};

export default BookForm;
