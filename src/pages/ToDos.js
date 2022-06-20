import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { AddColumn } from "./AddColumn";
import Columns from "./Column";
import MainHeader from "./MainHeader";
import { ModalWindow } from "./ModalWindow";
import { TodoList } from "./ToDoList";

const GlobalStyle = createGlobalStyle`
	body{
	background-image: url('https://look.com.ua/pic/201403/2560x1600/look.com.ua-95273.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
		
		
			
	
}
.columns{
	display: flex;
	overflow-x:auto;
	white-space:nowrap;
  min-height: 100vh;
  /* border: 1px solid red; */
  z-index: 1;
  position: relative;
  padding-top: 100px; 
	}
`;

const ToDos = () => {
  const { showColumn } = useSelector((state) => state.uiSlice);

  return (
    <div>
      <GlobalStyle />
      <MainHeader />

      <div className="columns">
        <TodoList />
        {showColumn ? <Columns /> : <AddColumn />}
      </div>
    </div>
  );
};

export default ToDos;
