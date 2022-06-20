import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { spinnerActions } from "../store/slices/spinnerSlice";
import ToDos from "./ToDos";
import { Route } from "react-router-dom";

const FormClasses = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 200px;
    height: 100px;
  }
  > form {
    width: 400px;
    height: 400px;
    box-shadow: 1px 2px 5px black;
    border-radius: 3px;
    margin-bottom: 20px;
  }
  > form h3 {
    text-align: center;
    color: gray;
    font-size: 16px;
    letter-spacing: -0.01em;
    line-height: 28px;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  > form div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > input {
      padding: 10px;
      outline: none;
      margin-bottom: 40px;
      border-radius: 5px;
      font-size: 14px;
      background-color: #fafbfc;
      border: 2px solid #dfe1e6;
      box-sizing: border-box;
      border-radius: 3px;
      height: 44px;
      width: 300px;
      -webkit-transition: background-color 0.2s ease-in-out 0s,
        border-color 0.2s ease-in-out 0s;
      transition: background-color 0.2s ease-in-out 0s,
        border-color 0.2s ease-in-out 0s;

      &:focus {
        border: 3px solid rgb(149, 189, 243);
      }
    }

    > button {
      background: #5aac44;
      height: 44px;
      width: 300px;
      border-radius: 5px;
      border: none;
      color: white;
      font-weight: bold;
      font-size: 15px;
      &:hover {
        background-color: rgb(40, 138, 40);
      }
      &:disabled {
        background-color: gray;
      }
      &:disabled:hover {
        background-color: gray;
      }
      a {
        text-decoration: none;
        color: #fafbfc;
        font-weight: bold;
      }
    }
  }
`;

const LoginPage = () => {
  const dispatc = useDispatch();
  const emailData = useSelector((state) => state.login);
  const passwordData = useSelector((state) => state.login);
  const store = useSelector((state) => state.spinner.isValid);

  const [formIsValid, setFormISValid] = useState(false);
  const linkRef = useRef();

  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const userDataHandler = (e) => {
    const value = e.target.value;
    setUserState({
      ...userState,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    if (
      userState.email === emailData.email &&
      userState.password === passwordData.password
    ) {
      setFormISValid(true);
    } else {
      setFormISValid(false);
    }
  }, [userState]);

  const submitHandler = (e) => {
    e.preventDefault();

    setTimeout(() => {
      dispatc(spinnerActions.spinnerHandler());
      linkRef.current.click();
      <Link ref={linkRef} to="/ToDos">
        {" "}
      </Link>;
    }, 2000);
    dispatc(spinnerActions.spinnerHandler());
  };

  return (
    <FormClasses>
      <img
        alt="Trello"
        src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
      ></img>
      <form onSubmit={submitHandler}>
        <h3>Вход в Trello</h3>
        <div>
          <input
            placeholder="Укажите адрес электронной почты"
            onChange={userDataHandler}
            name="email"
            value={userState.email}
            type="text"
          />
          <input
            placeholder="Введите пароль"
            onChange={userDataHandler}
            name="password"
            value={userState.password}
            type="text"
          />
          <Link ref={linkRef} to="/ToDos">
            {" "}
          </Link>
          <button disabled={!formIsValid}>Login</button>
        </div>
      </form>
      {store && (
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color="rgba(0, 121, 191, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      )}
    </FormClasses>
  );
};

export default LoginPage;
