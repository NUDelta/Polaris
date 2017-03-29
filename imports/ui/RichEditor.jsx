import React from 'react';
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

	render() {
		return (
			<div className="editor">
				<input
            id="editor" 
            onChange={this.changeHandler.bind(this)}
            value={this.props.text}
            autoComplete="off"
        />
			</div>
		);
	}
}

export default RichEditor;