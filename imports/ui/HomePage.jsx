import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Projects } from '../api/projects.js';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		if (event.target.value != 'none') {
			Meteor.users.update(Meteor.userId(), {
				$set: {
					profile: {
						project: event.target.value
					}
				}
			});
		}
  }

  getUserProject() {
  	let userProject = "none";

  	if ('profile' in Meteor.user()) {
  		userProject = Meteor.user().profile.project;
  	}

  	return userProject;
  }

	createProjectSelector() {
		let options = []

		options.push(
			<option key={0} value="none">None</option>
		);

		this.props.projects.map(function(proj) {
			options.push(
				<option key={proj._id} value={proj._id}>{proj.name}</option>
			);
		});

		return (
			<select 
				name="select" 
				value={this.getUserProject()}
				onChange={this.handleChange}>
				{options}
			</select>
		);

	}

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
        {this.props.currentUser 
        	? <div>
        			<h5>Select Your Project</h5>
        			{this.createProjectSelector()}
        			<br/>
        			<a href="/input">Fill Out Your Snapshot</a>
        		</div>
        	: <div></div>
	      }
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    projects: Projects.find().fetch(),
    currentUser: Meteor.user(),
  };
}, HomePage);