import React from 'react';
import logo from '../../assets/logo.webp'
import './LoginPage.css'

const LoginPage = (props) => {

  const handleLogIn = (e) => {
    e.preventDefault()

  }

  return (
    <h3>
      <img src={logo} alt=""/>
      <form className="loginForm" onSubmit={handleLogIn}>
        <h2>Авторизация</h2>
        <div>
          <label
            htmlFor="login"
            className="labelLogin"
          > Логин
          </label>
          <input
            className="loginFormInput"
            type="text"
            id="login"
            placeholder="Логин"
            required
          />
        </div>


        <div>
          <label
            className="labelLogin"
            htmlFor="password"
          > Пароль
          </label>
          <input
            className="loginFormInput"
            type="password"
            id="password"
            placeholder="Пароль"/>
        </div>
        <p>Запомнить пароль</p>
        <div>
          <button className="login-btn" type="submit">Войти</button>
        </div>
        <p className="forgetPassword">Забыли пароль?</p>
      </form>
    </h3>
  );
};

export default LoginPage;