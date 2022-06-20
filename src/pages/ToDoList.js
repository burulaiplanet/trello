import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { ModalWindow } from "./ModalWindow";
import ToDoCard from "./ToCard";
import { ToDoLists } from "./ToDoLIsts";

const Container = styled.div`
  background-color: rgb(235, 236, 240);

  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
`;
const TexStyle = styled.p`
  color: rgb(2, 106, 167);
  font-weight: 600;
`;
const Div = styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  /* border: 1px solid red; */
`;

export const TodoList = (props) => {
  const { toDo } = useSelector((state) => state.column);

  console.log(toDo);
  return (
    <Div>
      {toDo.map((el) => {
        console.log(el.toDos);
        return (
          <Container key={el.id}>
            <TexStyle>{el.title}</TexStyle>
            <ToDoCard todos={el.toDos} />
            <ToDoLists todo={el} />
          </Container>
        );
      })}
    </Div>
  );
};
