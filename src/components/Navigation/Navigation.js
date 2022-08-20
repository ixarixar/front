import React from "react";
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.scss';
import AuthService from "../../services/auth.service";


class Navigation extends React.Component {
	
	state = {
		showModeratorBoard: false,
		showAdminBoard: false,
		currentUser: undefined,
	};
	
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
			<nav className={styles.wrapper}>
				<ul className={styles.navigation}>
				
					<li className={styles.navigationItem}>
						<NavLink to="/" className={styles.navigationItemLink}>
							home
						</NavLink>
					</li>
					
					{showModeratorBoard && (
						<li className={styles.navigationItem}>
							<NavLink to="/mod" className={styles.navigationItemLink}>
								Moderator Board
							</NavLink>
						</li>
					)}
					
					{showAdminBoard && (
						<li className={styles.navigationItem}>
							<NavLink to="/admin" className={styles.navigationItemLink}>
								Admin Board
							</NavLink>
						</li>
					)}
					
					{currentUser && (
						<li className={styles.navigationItem}>
							<NavLink to="/admin" className={styles.navigationItemLink}>
								Admin Board
							</NavLink>
						</li>
					)}
					
					{currentUser ? (
						<>
							<li className={styles.navigationItem}>
								<NavLink to="/profile" className={styles.navigationItemLink}>{currentUser.username}</NavLink>
							</li>
							<li className={styles.navigationItem}>
								<a href="/login" className={styles.navigationItemLink} onClick={this.logOut}>
									LogOut
								</a>
							</li>
						</>
					) : (
						<>
							<li className={styles.navigationItem}>
								<NavLink to="/login" className={styles.navigationItemLink}>Login</NavLink>
							</li>
							<li className={styles.navigationItem}>
								<NavLink to="/register" className={styles.navigationItemLink}>Sign Up</NavLink>
							</li>
						</>
					)}
					
					
				</ul>
			</nav>
		);
	};
}


export default Navigation;