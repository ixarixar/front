import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
        if(props.error) {
            this.state = {
              failure: 'wrong username or password!',
              errcount: 0
            }
        } else {
            this.state = { errcount: 0 }
        }
    }

    handleError = (field, errmsg) => {
        if(!field) return

        if(errmsg) {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount + 1, 
                errmsgs: {...prevState.errmsgs, [field]: errmsg}
            }))
        } else {
            this.setState((prevState) => ({
                failure: '',
                errcount: prevState.errcount===1? 0 : prevState.errcount-1,
                errmsgs: {...prevState.errmsgs, [field]: ''}
            }))
        }
    }

    renderError = () => {
        if(this.state.errcount || this.state.failure) {
            const errmsg = this.state.failure 
              || Object.values(this.state.errmsgs).find(v=>v)
            return <div className="error">{errmsg}</div>
        }
    }

    //...

}

export default Form;