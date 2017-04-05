import React from 'react';
import ReactDOM from 'react-dom';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

import Editor from 'draft-js-plugins-editor';
import createAutosavePlugin from 'draft-js-autosave-plugin';
import createAutoListPlugin from 'draft-js-autolist-plugin'




import { Snapshots } from '../api/snapshots.js';




class MyEditor extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
    	editorState: EditorState.createEmpty(),
    	firstEdit: false
    };

    const config = {
      saveFunction: this.saveToDB.bind(this),
      debounceTime: 200,
    	saveAlways: true
    }

    this.autosavePlugin = createAutosavePlugin(config);
    this.autoListPlugin = createAutoListPlugin();

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
  	if (this.props.snapshotID) {
  		console.log('saveToDB');
    	let setAction = {}
    	const contentState = this.state.editorState.getCurrentContent();
    	const rawContent = JSON.stringify(convertToRaw(contentState));

    	setAction[this.props.field] = rawContent;
    	Snapshots.update(this.props.snapshotID, {
	      $set: setAction,
	    });
    }

  }

  updateSidebar(e) {
    this.props.selectSidebarContent(this.props.editorID);
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange.bind(this)}
          onFocus={this.updateSidebar.bind(this)}
          plugins={[this.autosavePlugin, this.autoListPlugin]}
        />
      </div>
    );
  }
  componentDidUpdate(nextProps, nextState) {
  	if(this.props.snapshotID) {
  		if(!this.state.firstEdit) {
  			this.setState({editorState:this.createEditorState()});
        updateSidebar();
  		}
  	}
  }
}

export default MyEditor;