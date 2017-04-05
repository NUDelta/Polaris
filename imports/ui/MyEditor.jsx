import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

import { Snapshots } from '../api/snapshots.js';


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
  }

  onChange(editorState){
    if (this.props.snapshotID) {
    	let setAction = {}
    	const contentState = editorState.getCurrentContent();
    	const rawContent = JSON.stringify(convertToRaw(contentState));

    	setAction[this.props.field] = rawContent;
    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
    }
  }

  createEditorState(){
  	if(this.props.snapshotID){
  		if(this.props.text) {

  			const rawContent = this.props.text;
  			const contentState = convertFromRaw(JSON.parse(rawContent));
  			const editorStateFromDB = EditorState.moveFocusToEnd(EditorState.createWithContent(contentState));

  			return editorStateFromDB;
  		} else {
  			return EditorState.createEmpty()
  		}
  	} else {
  		return EditorState.createEmpty();
  	}

  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          editorState={this.createEditorState()}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default MyEditor;