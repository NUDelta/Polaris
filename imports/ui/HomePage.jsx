import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
      	<AccountsUIWrapper />	
        <h1>HomePage</h1>
      </div>
    );
  }
}

export default App;