import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class HomePage extends Component {

  render() {
    return (
      <div className="container">
      	<AccountsUIWrapper />	
        <h1>Snapshot</h1>
        <p>
	        Lorem ipsum dolor sit amet, consectetur 
	        adipiscing elit, sed do eiusmod tempor incididunt 
	        labore et dolore magna aliqua. Ut enim ad minim 
	        veniam, quis nostrud exercitation ullamco laboris 
	        nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    );
  }
}

export default HomePage;