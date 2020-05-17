import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {
  state = {
    value: ''
  }
  
  isDisabled = () => {
    return (this.state.value === '');
  };

	handleChange = event => {
     	this.setState({ value: event.target.value });
    }

	handleSubmit = event => {
     	event.preventDefault();
      	
      	const newMsg = {
          username: this.props.user,
          text: this.state.value
        }
      
      	this.props.addMessage(newMsg);
      
      	this.setState({ value: '' });
    }
  
 	render() {
     	return (
        	<div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input 
      				type="text" 
      				className="form-control" 
      				placeholder="Enter your message..."
      				value={this.state.value}
					onChange={this.handleChange}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        ); 
    }
}

NewMessage.PropTypes = {
  user: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default NewMessage;