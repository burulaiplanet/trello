import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import LoginPage from './pages/LoginPage'
import { Redirect, Route } from 'react-router-dom'
import ToDos from './pages/ToDos'
import { Overlay  } from './pages/ModalWindow'
import ToDoCard from './pages/ToCard'


function App() {
	const valid = useSelector(state=>state.uiSlice.valid);

	return (
		<div className='App'>
			<Route path='/LoginPage'>
				<LoginPage />
			</Route>

			<Route path='/ToDos' >
				<ToDos />
			</Route>
			<Route path='/'>
				{
					!valid ? <Redirect to="/LoginPage" /> : <Redirect to="/ToDos" />
				}
	
			</Route>
		</div>
	)
}

export default App
