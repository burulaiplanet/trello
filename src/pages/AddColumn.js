import styled from "styled-components";
import { useDispatch } from "react-redux/es/exports";
import { columnActions } from "../store/slices/columnsChangeSlise";
import { useState } from "react";
import { uiActions } from "../store/slices/uiSlices";

const Div = styled.div`
  width: 280px;
  height: 100px;
  background-color: white;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;

  > input {
    width: 250px;
    outline: 3px solid rgb(149, 189, 243);
    height: 20px;
    border: none;
    padding: 10px;
    border-radius: 3px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin-top: 20px;
    .add {
      background-color: rgb(0, 121, 191);
      opacity: 0.8;
      width: 120px;
      height: 40px;
      border: none;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    .delete {
      background: none;
      border: none;
      font-size: large;
      cursor: pointer;
    }
  }
`;

export const AddColumn = () => {
  const dispatch = useDispatch();
  const [columnName, setColumName] = useState("");

  const columnNameHandler = (e) => {
    setColumName({
      ...columnName,
      id: Math.random().toString(),
      title: e.target.value,
    });
  };
  const addHandler = () => {
    dispatch(columnActions.addColumn(columnName));

    dispatch(uiActions.showColumn());
    if (columnName.title.trim().length === 0) {
      return;
    }
  };

  const showColumn = () => {
    dispatch(uiActions.showColumn());
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="Вывести зоголовок списка"
        onChange={columnNameHandler}
        value={columnName.title}
      />
      <div>
        <button className="add" onClick={addHandler}>
          Добавить список
        </button>
        <button onClick={showColumn} className="delete">
          X
        </button>
      </div>
    </Div>
  );
};
