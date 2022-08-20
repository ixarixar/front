import React from 'react'
import 'bulma'
import styles from './AuthorizationByCertificate.module.scss'

	const types = {
		nip: 'nip',
		pesel: 'pesel'
	}
	
	const descriptions = {
		nip: 'wprowadz NIP',
		pesel: 'wprowadz PESEL'
	}	
	
class AuthorizationByCertificate extends React.Component {
	
	state = {
		activeOption: types.nip,
		name: '',
		surname: '',
		ident: '',
	}
	
	handleRadioButtonChange = (type) => {
		this.setState({
			activeOption: type
		});
	}
//	async sendForm () {
//		
//					let data = new FormData();
//
//			data.append("_nip", _nip);
//			data.append("_cert_imie", _cert_imie);
//			data.append("_cert_nazwisko", _cert_nazwisko);
//
//			if (_r_cert_pesel.checked) data.append("serial", _cert_pesel);
//			if (_r_cert_nip.checked) data.append("serial", _cert_nip);
//
//			let response = await fetch("/SignByCert", {method: "POST", body: data});
//			if (response.ok) {
//				let response_text = await response.text();
//				//do TextArea
//				document.getElementById("acRespTArea").value = response_text;
//				//do chellange do inputa
//				let obj = JSON.parse(response_text);
//				document.getElementById("_challenge").value = obj.challenge;
//				document.getElementById("_challenge_timestamp").value = obj.timestamp;
//				document.getElementById("_challenge_nip").value = document.getElementById("_nip").value;
//				document.getElementById("_sn").value = document.getElementById("_nip").value;
//				return true;
//			} else {
//				document.getElementById("acRespTArea").value = "Error";
//				return false;
//			}
//
//		
//		
//	}



	handleSubmit = (event) => {
		event.preventDefault();
		
		
		
		
		
		//alert('Dane to: \n 	name ' + {event.target.name.value} + '\n surname ${surname}\n radio ${radio}\n adddada ${addata}');
		
		
//		const url = 'http://localhost:3000/authByCert'
//		const requestOptions = {
//			method: 'POST',
//			headers: { 'Content-Type': 'application/json' },
//			body: JSON.stringify({ email, password })
//		};
//		fetch(url, requestOptions)
//			.then(response => console.log('Submitted successfully'))
//			.catch(error => console.log('Form submit error', error))
		};
		
		handleInputChange = e => {
			this.setState({
				[e.target.name]: e.target.value,
			})
		}
		
		
		
	render() {
		return (
			<div className={styles.wrapper}>
				<form onSubmit={this.handleSubmit}>
					<div className="card">
						<header className="card-header">
							<p className="card-header-title">
								Autoryzacja za pomocą certyfikatu
								<br/>
								środowisko testowe
							</p>
							<button className="card-header-icon" aria-label="more options">
								<span className="icon">
									<i className="fas fa-angle-down" aria-hidden="true"></i>
								</span>
							</button>
						</header>
						<div className="card-content">
							<div className="content">
								
								<div className="field">
									<label className="label is-small">imię</label>
									<div className="control">
										<input 
											className="input is-small" 
											type="text" 
											placeholder="wprowadz imię"
											name="name"
											onChange={this.handleInputChange}
											value={this.state.name}
										/>

									</div>
								</div>
								
								<div className="field">
									<label className="label is-small">nazwisko</label>
									<div className="control">
										<input 
											className="input is-small" 
											type="text" 
											placeholder="wprowadz nazwisko"
											name="surname"
											onChange={this.handleInputChange}
											value={this.state.surname}
										/>
									</div>
								</div>
								
								<div className={styles.radios}>
									<label className="radio">
										<input
											className={styles.radio}
											id={types.nip} 
											type="radio"
											checked={this.state.activeOption === types.nip}
											onChange={() => this.handleRadioButtonChange(types.nip)}
											name="radio"
										/>
											nip
									</label>
								
									<label className="radio">
										<input
											className={styles.radio}
											id={types.pesel} 
											type="radio"
											checked={this.state.activeOption === types.pesel}
											onChange={() => this.handleRadioButtonChange(types.pesel)}
											name="radio"
										/>
										pesel
									</label>
									
								</div>
	
								<input 
									className="input is-small" 
									type="text" 
									placeholder={descriptions[this.state.activeOption]}
									
									name="ident" 
									onChange={this.handleInputChange}
									value={this.state.ident}
									
									onKeyPress={(event) => {
										if (!/[0-9]/.test(event.key)) {
											event.preventDefault();
										}
									}}
								/>
	
								<div className={styles.button_wraper}>
									<button 
										className="button is-primary is-small"
									>autoryzuj
									</button>
								</div>
								
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
}






export default AuthorizationByCertificate;
