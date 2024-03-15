import { FC } from "react";
import css from "./Card.module.css";
import photo from "../../images/photo/photo-1.jpg";
import heart from "../../images/heart.svg";
import book from "../../images/book.svg";
import star from "../../images/star.svg";

const Card: FC = () => {
  return (
    <article className={css.wrapper}>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={photo}
          alt="photo"
          width={96}
          height={96}
        />
      </div>
      <div className={css.cardBody}>
        <div className={css.cardHeader}>
          <span className={css.languages}>Languages</span>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <img src={book} alt="Book" width={16} height={16} />
              <span>Lessons online</span>
            </li>
            <li className={css.headerItem}>
              <span>Lessons done: 1120</span>
            </li>
            <li className={css.headerItem}>
              <img src={star} alt="Star" width={16} height={16} />
              <span>Rating: 4.6</span>
            </li>
            <li className={css.headerItem}>
              <span>
                Price / 1 hour: <span className={css.price}>28$</span>
              </span>
            </li>
          </ul>
          <button className={css.btnFav}>
            <img src={heart} alt="Favorites" width={26} height={26} />
          </button>
        </div>
        <h2 className={css.cardTitle}>Sarah Johnson</h2>
        <p className={css.cardInfo}>
          <span className={css.greyText}>Speaks: </span>German, French
        </p>
        <p className={css.cardInfo}>
          <span className={css.greyText}>Lesson Info: </span> Lessons are
          structured to cover grammar, vocabulary, and practical usage of the
          language.
        </p>

        <p className={css.cardInfo}>
          <span className={css.greyText}>Conditions: </span>
          Welcomes both adult learners and teenagers (13 years and
          above).Provides personalized study plans
        </p>
        <button className={css.btnReadMore}>Read more</button>
        <ul className={css.cardFooter}>
          <li className={css.footerItem}>#A1 Beginner </li>
          <li className={css.footerItem}>#A2 Elementary </li>
          <li className={css.footerItem}>#B1 Intermediate </li>
          <li className={css.footerItem}>#B2 Upper-Intermediate</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
