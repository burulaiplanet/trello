import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { columnActions } from "../store/slices/columnsChangeSlise";

export const ToDoLists = ({ todo }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [columnData, setColumnData] = useState("");

  const columnDataHandler = (e) => {
    setColumnData(e.target.value);
  };

  const submitHandler = (e, id) => {
    e.preventDefault();
    console.log(columnData);
    if (columnData.trim().length > 0) {
      const data = {
        item: columnData,
        id: Math.random().toString(),
      };
      dispatch(columnActions.addData({ data, id }));
    }
    setColumnData("");
  };

  return (
    <Div>
      {show ? (
        <div>
          <StyledTextArea
            name="items"
            value={columnData}
            onChange={(e) => columnDataHandler(e)}
            placeholder="Вывести заголовок для этой карточки"
          />
          <div className="buttons">
            <button className="add" onClick={(e) => submitHandler(e, todo.id)}>
              Добавить список
            </button>
            <button onClick={() => setShow(false)} className="delete">
              X
            </button>
          </div>
        </div>
      ) : (
        <button className="addCart" id={todo.id} onClick={(e) => setShow(true)}>
          + Добавить карточку
        </button>
      )}
    </Div>
  );
};

const StyledTextArea = styled.textarea`
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 3px;
  overflow: auto;
  outline: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Div = styled.div`
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
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin-top: 20px;
  }

  .addCart {
    width: 250px;
    height: 40px;
    padding: 10px;
    color: rgb(2, 106, 167);
    align-items: center;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    :hover {
      background-color: rgb(203, 194, 184);
      opacity: 0.8;
    }
  }
`;
