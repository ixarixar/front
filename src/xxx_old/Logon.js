import React from 'react';
import Form from './Form/Form'

class Logon extends React.Component {
	
	state = {
		login: 'jakislogin',
		password: 'tajnehasło',
	}
	
	
	submitFun = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
		console.log(e.target[1].value);
	} 
	
	render(){
		return (
			<>
				<Form 
					submitFn={this.submitFun}/>
			</>
		)
	}
		
}
export default Logon;
