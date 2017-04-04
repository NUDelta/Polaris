import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';

import { Snapshots } from '../api/snapshots.js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  /*onChange(){
  	(editorState) => this.setState({editorState});
    if (this.props.snapshotID) {
    	let setAction = {}
    	console.log(this.props.field);
    	console.log(this.state.editorState.getCurrentContent().hasText())
    	console.log(this.state.editorState.getCurrentContent().getPlainText())
    	setAction[this.props.field] = this.state.editorState.getCurrentContent().getPlainText();
    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
    }
  }*/

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          //onChange={this.onChange.bind(this)}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default MyEditor;

/*ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);*/