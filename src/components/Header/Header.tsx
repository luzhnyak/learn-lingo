import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import ukraine from "../../images/ukraine.svg";
import logIn from "../../images/log-in.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useLocal } from "../../store";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isShowLogin, setShowLogin] = useState(false);
  const [isShowRegister, setShowRegister] = useState(false);

  const { logout, isLogin, currentUser } = useLocal((state) => ({
    logout: state.logout,
    isLogin: state.isLogin,
    currentUser: state.currentUser,
  }));

  return (
    <header className={`container ${css.header}`}>
      <nav className={css.nav}>
        <NavLink className={css.logo} to="/">
          <img src={ukraine} alt="LearnLingo" width={28} height={28} />
          LearnLingo
        </NavLink>
        <ul
          className={
            isOpenMenu ? [css.menu, css.isShowMenu].join(" ") : css.menu
          }
        >
          <li className={css.menuItem}>
            <NavLink
              to="/"
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={css.menuItem}>
            <NavLink
              to="/teachers"
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              Teachers
            </NavLink>
          </li>
          {isLogin && (
            <li className={css.menuItem}>
              <NavLink
                to="/favorites"
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                }}
              >
                Favorites
              </NavLink>
            </li>
          )}
          <li className={css.menuItemBtn}>
            <button
              className={css.menuBtn}
              onClick={() => {
                setShowLogin(true);
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              Log In
            </button>
          </li>
          <li className={css.menuItemBtn}>
            <button
              className={css.menuBtn}
              onClick={() => {
                setShowRegister(true);
                setIsOpenMenu(!isOpenMenu);
              }}
            >
              Register
            </button>
          </li>
        </ul>
        <div className={css.wrapperBtn}>
          {isLogin && currentUser?.name && (
            <>
              <h3>{currentUser.name}</h3>
              <button className={css.btnLogin} onClick={() => logout()}>
                <img src={logIn} alt="Log In" width={20} height={20} />
                Log Out
              </button>
            </>
          )}
          {!isLogin && (
            <>
              <button
                className={css.btnLogin}
                onClick={() => setShowLogin(true)}
              >
                <img src={logIn} alt="Log In" width={20} height={20} />
                Log In
              </button>
              <button
                className={css.btnRegistration}
                onClick={() => setShowRegister(true)}
              >
                Registration
              </button>
            </>
          )}
        </div>
      </nav>
      <button
        className={css.burgerMenu}
        type="button"
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        {isOpenMenu ? <FaXmark size="24px" /> : <FaBars size="24px" />}
      </button>
      {isShowLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <LoginForm setShowLogin={setShowLogin} />
        </Modal>
      )}
      {isShowRegister && (
        <Modal onClose={() => setShowRegister(false)}>
          <RegisterForm setShowRegister={setShowRegister} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
