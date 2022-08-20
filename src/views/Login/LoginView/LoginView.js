import React from 'react';
import styles from "./LoginView.module.scss";
import KsefLogin from '../../../components/login/ksef/KsefLogin/KsefLogin'
import AuthService from '../../../services/auth.service'
import { useNavigate } from "react-router-dom";


class LoginView extends React.Component{

	async componentDidMount() {
//		this.setState({isLoading: true});
		console.log("run didmount");
		const response = await fetch('http://localhost:3000/somedata');
		const data = await response.text();
		console.log("text: "+data);
//		this.setState({profiles: data, isLoading: false});
 }
 
	state = {
		username: "",
		password: "",
		loading: false,
		message: "",
	};

	onChangeUsername = (e) => {
		this.setState({
			username: e.target.value
		});
	}
	
	onChangePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	}
	
	handleLogin = (e) => {
		e.preventDefault();
		
		this.setState({
			message: "",
			loading: true
		});
//	this.form.validateAll();
//	if (this.checkBtn.context._errors.length === 0) {
		AuthService.login(this.state.username, this.state.password).then(
			() => {
				this.props.navigation("/profile");
				window.location.reload();
			},
			error => {
				const resMessage =
					(error.response &&
					 error.response.data &&
					 error.response.data.message) ||
					 error.message ||
					 error.toString();
				this.setState({
					loading: false,
					message: resMessage
				});
			}
		);
	//    } else {
	//      this.setState({
	//        loading: false
	//      });
	//    }
	}
	
	
	render(){
		return (
			<div className={styles.wrapper}>
				<KsefLogin />
				<div className={styles.login_wrapper}>
					<h2>Logowanie do elektronicznego obiegu faktur</h2>
					<form onSubmit={this.handleLogin} className={styles.form_form} autoComplete="off">
					
					
						<input 
							placeholder="login" 
							name="username" 
							value={this.state.username} 
							onChange={this.onChangeUsername} 
							className={styles.form_item} 
							required/>
							
						<input 
							type="password" 
							placeholder="password" 
							name="password" 
							value={this.state.password} 
							onChange={this.onChangePassword} 
							className={styles.form_item} 
							required/>
							
						<button 
							type="submit" 
							disabled={this.state.loading} 
							className={styles.form_button}> 
							
								{this.state.loading && (<span ></span>)}
								<span>Login</span>
							
						</button>
					</form>
				</div>
			</div>
		);
	}
	
	
}


export default function LoginViews(props) {
	const navigation = useNavigate();
	return <LoginView {...props} navigation={navigation} />;
}













