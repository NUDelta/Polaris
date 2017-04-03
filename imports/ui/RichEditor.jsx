import React from 'react';
import TextField from 'material-ui/TextField';

import { Snapshots } from '../api/snapshots.js';

class RichEditor extends React.Component {
	constructor(props) {
    super(props);
  }

  changeHandler(e) {
    if (this.props.snapshotID) {
    	let setAction = {}
    	setAction[this.props.field] = e.target.value;

    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
    }
  }

  updateSideBar(e) {
    console.log("HELLO")
  }

	render() {
		return (
			<div className="editor">
        <TextField
          id="editor" 
          onChange={this.changeHandler.bind(this)}
          onFocus={this.updateSideBar.bind(this)}
          value={this.props.text}
          autoComplete="off"
          fullWidth={true}
          multiLine={true}
        />
			</div>
		);
	}
}

export default RichEditor;