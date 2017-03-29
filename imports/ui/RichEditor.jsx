import React from 'react';

class RichEditor extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  changeHandler(e) {
    this.setState({text: e.target.value});
  }

	render() {
		return (
			<div className="editor">
				<input
            id="editor" 
            onChange={this.changeHandler.bind(this)}
            value={this.state.text}
            autoComplete="off"
        />
			</div>
		);
	}
	componentWillReceiveProps(nextProps){
	  if (nextProps.text !== this.props.text) {
	    this.setState({ text: nextProps.text })
	  }
	}
}

export default RichEditor;