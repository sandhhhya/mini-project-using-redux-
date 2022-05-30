import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './cmp/Login';
import Product from './cmp/Product';
import Register from './cmp/Register';
import User from './cmp/User';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';


const App = () => {



	// const user = useSelector(state => user.state);
	const dispatch = useDispatch();

	return (
		<div>
			<Router>
				<main>
					<Routes>
						<Route path="/" exact element={<Register />}>  </Route>
						<Route path="/login" exact element={<Login />}>  </Route>
						<Route path='/user' exact element={<User />}> </Route>
					</Routes>
				</main>
			</Router>
		</div>
	)
}

export default App