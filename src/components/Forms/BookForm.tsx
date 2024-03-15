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
      <p>What is your main reason for learning English?</p>

      <form action="">
        <label htmlFor="">Career and business</label>
        <input type="radio" />
        <label htmlFor="">Lesson for kids</label>
        <input type="radio" />
        <label htmlFor="">Living abroad</label>
        <input type="radio" />
        <label htmlFor="">Exams and coursework</label>
        <input type="radio" />
        <label htmlFor="">Culture, travel or hobby</label>
        <input type="radio" />
        <input className={css.input} type="email" placeholder="Full Name" />
        <input className={css.input} type="email" placeholder="Email" />
        <input className={css.input} type="text" placeholder="Phone number" />
        <button className={css.btn}>Book</button>
      </form>
    </div>
  );
};

export default BookForm;
