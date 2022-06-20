import { useState } from "react";
import styled from "styled-components";
import { ModalWindow } from "./ModalWindow";

const TextStyled = styled.p`
  background-color: white;
  width: 250px;
  height: 40px;
  text-align: center;
  margin: 5px;
  border-radius: 5px;
  color: rgb(2, 106, 167);
  :hover {
    background-color: rgb(203, 194, 184);
    opacity: 0.8;
  }
`;
const ToDoCard = (props) => {
  const [modalDescription, setModalDescription] = useState(false);

  const modalHandler = () => {
    setModalDescription(true);
  };
  const modalHide = () => {
    setModalDescription(false);
  };
  console.log(props);
  return (
    <div>
      {props.todos.map((el) => (
        <div>
          <TextStyled onClick={modalHandler} key={el.items.id}>
            {el.items.item}{" "}
          </TextStyled>
          {modalDescription && (
            <ModalWindow title={el.items.item} onHideModal={modalHide} />
          )}
        </div>
      ))}
    </div>
  );
};
export default ToDoCard;
