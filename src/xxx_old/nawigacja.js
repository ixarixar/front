import React from "react";
import AuthService from "./services/auth.service";
import {NavLink} from 'react-router-dom';

class Nawigacja extends React.Component {
	
	constructor(props) {
		super(props);
		this.logOut = this.logOut.bind(this);
		this.state = {
			showModeratorBoard: false,
			showAdminBoard: false,
			currentUser: undefined,
		};
	}
	
	componentDidMount() {
		const user = AuthService.getCurrentUser();
		if (user) {
			this.setState({
				currentUser: user,
				showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
				showAdminBoard: user.roles.includes("ROLE_ADMIN"),
			});
		}
	}
	
	logOut() {
		AuthService.logout();
	}
	
	render() {
		const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
		return (
			
			
	              
	
	
	<div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        
        
        
          <NavLink to="/" className="navbar-brand">
            home
          </NavLink>
          
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            
            {showModeratorBoard && (
              <li className="nav-item">
                <NavLink to="/mod" className="nav-link">
                  Moderator Board
                </NavLink>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link">
                  Admin Board
                </NavLink>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <NavLink to="/user" className="nav-link">
                  User
                </NavLink>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  {currentUser.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Sign Up
                </NavLink>
              </li>
            </div>
          )}
        </nav>
        <div className="container mt-3">
        
         
        </div>
      </div>
     
	
	)
	}
}

export default Nawigacja;
