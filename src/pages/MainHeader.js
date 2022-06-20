import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = styled.header`
  height: 80px;
  background-color: white;
  opacity: 0.8;
  width: 100%;

  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search {
    color: rgb(2, 106, 167);
    width: 18px;
    height: 18px;
    margin-left: -190px;
  }
  .input {
    border: none;
    outline: none;
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgb(2, 106, 167);
    padding-left: 50px;
    width: 150px;
    height: 30px;
    padding-top: 5px;
    color: black;
    font-weight: bold;

    &:focus {
      background-color: white;
      opacity: 0.5;
      color: solid rgb(2, 106, 167);
      border: 1px solid rgb(2, 106, 167);
    }
  }
  .img {
    width: 80px;
    height: 50px;
  }
  select {
    outline: none;
    border: none;
    color: rgb(2, 106, 167);
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: bold;
  }
  .icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 800px;
  }
  .searchinput {
    width: 250px;
  }
`;

const MainHeader = () => {
  return (
    <Header>
      <nav>
        <ul className="icon">
          <img
            className="img"
            alt="Trello"
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
          ></img>

          <select>
            <optgroup>
              <option>Рабочие пространства</option>
            </optgroup>
          </select>
          <select>
            <optgroup>
              <option>Не давние</option>
            </optgroup>
          </select>
          <select>
            <optgroup>
              <option>В избранном</option>
            </optgroup>
          </select>
          <select>
            <optgroup>
              <option>Шаблоны</option>
            </optgroup>
          </select>
          <select>
            <optgroup>
              <option>Создать</option>
            </optgroup>
          </select>
        </ul>
        <ul className="searchinput">
          <input className="input" type="text" placeholder="Поиск..." />

          <BsSearch className="search" />
        </ul>
      </nav>
    </Header>
  );
};
export default MainHeader;
