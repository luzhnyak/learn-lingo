import { FC, useState } from "react";
import css from "./Card.module.css";
import photo from "../../images/photo/photo-1.jpg";
import photoComment from "../../images/photo/photo-comment-1.jpg";
import heart from "../../images/heart.svg";
import book from "../../images/book.svg";
import star from "../../images/star.svg";
import Modal from "../Modal/Modal";
import BookForm from "../Forms/BookForm";

const Card: FC = () => {
  const [isMore, setMore] = useState(false);
  const [isShowBook, setShowBook] = useState(false);

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
        {!isMore && (
          <button className={css.btnReadMore} onClick={() => setMore(!isMore)}>
            Read more
          </button>
        )}

        {isMore && (
          <p className={css.text}>
            Jane is an experienced and dedicated language teacher specializing
            in German and French. She holds a Bachelor's degree in German
            Studies and a Master's degree in French Literature. Her passion for
            languages and teaching has driven her to become a highly proficient
            and knowledgeable instructor. With over 10 years of teaching
            experience, Jane has helped numerous students of various backgrounds
            and proficiency levels achieve their language learning goals. She is
            skilled at adapting her teaching methods to suit the needs and
            learning styles of her students, ensuring that they feel supported
            and motivated throughout their language journey.
          </p>
        )}

        <ul className={css.commentsList}>
          <li className={css.commentItem}>
            <div className={css.commentHeader}>
              <img
                className={css.commentPhoto}
                src={photoComment}
                alt="Photo "
              />
              <div>
                <h4 className={css.commentTitle}>Frank</h4>
                <div className={css.commentRateWrapper}>
                  <img src={star} alt="Star" width={16} height={16} />
                  <span className={css.commentRate}>4.0</span>
                </div>
              </div>
            </div>
            <p className={css.commentText}>
              Jane's lessons were very helpful. I made good progress.
            </p>
          </li>
        </ul>

        <ul className={css.cardFooter}>
          <li className={css.footerItem}>#A1 Beginner </li>
          <li className={css.footerItem}>#A2 Elementary </li>
          <li className={css.footerItem}>#B1 Intermediate </li>
          <li className={css.footerItem}>#B2 Upper-Intermediate</li>
        </ul>
        {isMore && (
          <button className={css.btnBook} onClick={() => setShowBook(true)}>
            Book trial lesson
          </button>
        )}
        {isShowBook && (
          <Modal onClose={() => setShowBook(false)}>
            <BookForm />
          </Modal>
        )}
      </div>
    </article>
  );
};

export default Card;
