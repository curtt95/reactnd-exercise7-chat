import React, { Component } from 'react';
import Messages from './Messages.js';
import NewMessage from './NewMessage.js';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
 	render() {
     	return (
        	<div className="container">
              <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.user}</div>

				<Messages user={this.props.user} messages={this.props.messages}/>
				<NewMessage user={this.props.user} addMessage={this.props.addMessage}/>

				</div>
			</div>
        ); 
    }
}

ChatWindow.PropTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired
}

export default ChatWindow;