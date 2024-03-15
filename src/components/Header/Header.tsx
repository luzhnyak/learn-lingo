import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import ukraine from "../../images/ukraine.svg";
import logIn from "../../images/log-in.svg";
import { useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";

const Header = () => {
  const [isShowLogin, setShowLogin] = useState(false);
  const [isShowRegister, setShowRegister] = useState(false);

  return (
    <header className="container">
      <nav className={css.nav}>
        <NavLink className={css.logo} to="/">
          <img src={ukraine} alt="LearnLingo" width={28} height={28} />
          LearnLingo
        </NavLink>
        <ul className={css.menu}>
          <li className={css.menuItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.menu}>
            <NavLink to="/teachers">Teachers</NavLink>
          </li>
          <li className={css.menu}>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        <div className={css.wrapperBtn}>
          <button className={css.btnLogin} onClick={() => setShowLogin(true)}>
            <img src={logIn} alt="Log In" width={20} height={20} />
            Log In
          </button>
          <button
            className={css.btnRegistration}
            onClick={() => setShowRegister(true)}
          >
            Registration
          </button>
        </div>
      </nav>
      {isShowLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <LoginForm />
        </Modal>
      )}
      {isShowRegister && (
        <Modal onClose={() => setShowRegister(false)}>
          <RegisterForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
