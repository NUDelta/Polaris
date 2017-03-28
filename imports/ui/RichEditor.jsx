import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

class RichEditor extends React.Component {
	constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
	render() {
		return (
			<div className="editor">
				<Editor editorState={this.state.editorState} onChange={this.onChange} />
			</div>
		);
	}
}

export default RichEditor;