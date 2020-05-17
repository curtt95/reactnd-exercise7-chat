import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {
 	render() {
     	return (
        	<ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.user ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
        ); 
    }
}

Messages.PropTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired
}

export default Messages;