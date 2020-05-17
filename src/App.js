import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'Jon' }];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ]
  }

  addMessage = newMsg => {
   	this.setState((currState) => ({
     	messages: [...currState.messages, newMsg]
    })); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        
    	<ChatWindow user={users[0].username} messages={this.state.messages} addMessage={this.addMessage}/>
		<ChatWindow user={users[1].username} messages={this.state.messages} addMessage={this.addMessage}/>

	  </div>
    );
  }
}

export default App;
