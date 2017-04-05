import React from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

import Editor from 'draft-js-plugins-editor';
import createAutosavePlugin from 'draft-js-autosave-plugin';



import { Snapshots } from '../api/snapshots.js';




class MyEditor extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
    	editorState: this.createEditorState(),
    	firstEdit: false
    };

    const config = {
      saveFunction: this.saveToDB.bind(this),
      debounceTime: 500,
    	saveAlways: true
    }

    this.autosavePlugin = createAutosavePlugin(config);
  }

  onChange(editorState){
  	this.setState({editorState:editorState});
  	/*
    if (this.props.snapshotID) {
    	let setAction = {}
    	const contentState = editorState.getCurrentContent();
    	const rawContent = JSON.stringify(convertToRaw(contentState));

    	setAction[this.props.field] = rawContent;
    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
    }*/
  }

  createEditorState(){
  	if(this.props.text) {

		const rawContent = this.props.text;
		const contentState = convertFromRaw(JSON.parse(rawContent));
		const editorStateFromDB = EditorState.moveFocusToEnd(EditorState.createWithContent(contentState));
		this.setState({firstEdit:true});
		return editorStateFromDB;
	} else {
		this.setState({firstEdit:true});
  		return EditorState.createEmpty()
  	}
  	
  }

  saveToDB() {
  	console.log('saveToDB');
  	if (this.props.snapshotID) {
    	let setAction = {}
    	const contentState = this.state.editorState.getCurrentContent();
    	const rawContent = JSON.stringify(convertToRaw(contentState));

    	setAction[this.props.field] = rawContent;
    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
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
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange.bind(this)}
          plugins={[this.autosavePlugin]}
        />
      </div>
    );
  }
  componentDidUpdate(nextProps, nextState) {
  	if(this.props.snapshotID) {
  		if(!this.state.firstEdit) {
  			this.setState({editorState:this.createEditorState()});
  		}
  	}
  }
}

export default MyEditor;