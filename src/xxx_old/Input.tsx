import React, { Component } from 'react'
import PropTypes from 'prop-types'


interface InputListProps{
//		name: string,
//		placeholder: string,
//		type: string,
//		className: string,
//		value: string,
//		handleError: any,
//		inputChange: boolean
}

interface InputListState{
		name: string,
		placeholder: string,
		type: string,
		className: string,
		value: string,
		handleError: any,
		inputChange: boolean,
		error: boolean
}

class Input extends Component <InputListProps, InputListState>{


    constructor(props : InputListState){
        super(props)
        this.state = {
            value: props.value? props.value : '',
            className: props.className? props.className : '',
            error: false
        }

        function newFunction() {
            return this.state;
        }
    }

    //...

    render () {
        const {handleError, ...opts} = this.props;
//        this.handleError = handleError;
        return (
          <input {...opts} value={ this.state }
            onChange={this.inputChange} className={this.state.className} /> 
        )
    }
}


//
//	Input.propTypes = {
//		name: PropTypes.string,
//		placeholder: PropTypes.string,
//		type: PropTypes.string,
//		className: PropTypes.string,
//		value: PropTypes.string,
//		handleError: PropTypes.func
//	}
//

export default Input