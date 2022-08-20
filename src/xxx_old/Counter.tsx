import React, { Component } from 'react';

interface CounterListProps{
}

interface CounterState {
	counter: number;
//	items: any[]; //replace any with suitable type
//	value: string;
}


class Counter extends Component<CounterListProps, CounterState>{
    timerId: NodeJS.Timer;
	
	constructor(props :CounterListProps) {
		super(props);
		this.state = {
			counter : 0
		};
		this.timerId=setInterval(this.increment, 100);
	}
	
	increment= () => {
		let c = this.state.counter + 1;
		this.setState({counter : c});
	}
	
	reset= () => {
		this.setState({counter : 0});
	}
	
	
	render() {
		return(
			<div> <button onClick={this.reset}>R</button> licznik : { this.state.counter }</div>
		)
	}
	
}

export default Counter;
