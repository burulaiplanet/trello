import './App.css'
// import { useSelector,useDispatch } from 'react-redux'
import LoginPage from './pages/LoginPage'
import { Redirect, Route } from 'react-router-dom'
import ToDos from './pages/ToDos'


function App() {

	return (
		<div className='App'>
			<Route path='/'>
				<Redirect to='/LoginPage' />
			</Route>
			<Route path='/LoginPage'>
				<LoginPage />
			</Route>

			<Route path='/ToDos' >
				<ToDos />
			</Route>
		</div>
	)
}

export default App
