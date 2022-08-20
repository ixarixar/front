import React, { Component } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import KsefView 	from '../../views/Login/KsefView/KsefView'
import LoginView 	from '../../views/Login/LoginView/LoginView'

import Navigation 	from '../../components/Navigation/Navigation'
import Login 		from "../../components/login/jwt/login.component";

import Register 	from "../../components/login/jwt/register.component";
import Home 		from "../../components/login/jwt/home.component";
import Profile 		from "../../components/login/jwt/profile.component";
import BoardUser 	from "../../components/login/jwt/board-user.component";

import "./index.css"

class Root extends Component {
  render() {
    return (
		<BrowserRouter>
			<>
				<Navigation />
				<Routes>
					<Route path="/login" element={<LoginView />} />
					<Route path="/ksef" element={<KsefView />} />
					
					
					
					<Route path="/home" element={<Home />} />
					<Route path="/login1" element={<Login />} />
					<Route path="/board" element={<BoardUser />} />
					<Route path="/register" element={<Register />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</>
		</BrowserRouter>
    );
  }
}

export default Root;
