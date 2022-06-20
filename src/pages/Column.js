import styled from "styled-components";

import { useDispatch } from "react-redux";
import { columnActions } from "../store/slices/columnsChangeSlise";
import { uiActions } from "../store/slices/uiSlices";
const Div = styled.div`
  button {
    width: 300px;
    height: 40px;
    background-color: white;
    opacity: 0.6;
    padding: 10px;
    margin: 50px;
    color: rgb(2, 106, 167);
    align-items: center;
    font-weight: bold;
    border: none;
    border-radius: 5px;
  }
`;

const Columns = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(uiActions.showColumn());
  };

  return (
    <Div>
      <button onClick={toggleHandler}>+ Добавьте еще одну колонку</button>
    </Div>
  );
};
export default Columns;
