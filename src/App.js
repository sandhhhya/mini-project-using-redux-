import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reg from './cmp/Reg';
import User from './cmp/User';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import Form from './cmp/Form';
import Plus from './cmp/Plus';
import Post from './cmp/Post';


const App = () => {

	return (
		<div>
			<Router>
				<main>
					<Routes>
						<Route path="/" exact element={<Reg/>}>  </Route>
						<Route path='/user' exact element={<User />}> </Route> 
						<Route path='/form' exact element={<Form />}> </Route>
						<Route path='/plus' exact element={<Plus/>}> </Route> 
						<Route path='/post' exact element={<Post/>}> </Route> 

					</Routes>
				</main>
			</Router>
		</div>
	)
}

export default App