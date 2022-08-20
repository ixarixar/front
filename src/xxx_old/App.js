import React, { Component } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Nawigacja from './nawigacja'
import BoardUser from "./components/board-user.component";

class App extends Component {
	
	// https://www.bezkoder.com/react-jwt-auth/
	
	render() {
		return (
			<BrowserRouter>
				<>
					<Nawigacja />
					
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/board" element={<BoardUser />} />
						<Route path="/register" element={<Register />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</>
			</BrowserRouter>
			
			
		)
	}
}

export default App;
