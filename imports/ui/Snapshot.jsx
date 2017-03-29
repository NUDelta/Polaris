import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Grid, Row, Col } from 'react-flexbox-grid';
import RichEditor from './RichEditor.jsx';
import { Snapshots } from '../api/snapshots.js';
import Strings from '../strings/strings.js';

class SnapshotInput extends Component {
	getResponseText(section) {
		let text = "";

		if (this.props.snapshots.length > 0) {
			switch(section) {
				case "THIS_WEEK":
					text = this.props.snapshots[0].responses.thisWeek.text;
					break;
				case "LEARNING_PROBLEMS":
					text = this.props.snapshots[0].responses.learnings.problem.text;
					break;
				case "LEARNING_INTERVENTION": 
					text = this.props.snapshots[0].responses.learnings.intervention.text;
					break;
				case "LEARNING_RESULTS":
					text  = this.props.snapshots[0].responses.learnings.results.text;
					break;
				case "REFLECTION_ISSUE":
					text  = this.props.snapshots[0].responses.reflection.issue.text;
					break;
				case "REFLECTION_IMPACT":
					text  = this.props.snapshots[0].responses.reflection.impact.text;
					break;
				case "REFLECTION_CAUSE":
					text  = this.props.snapshots[0].responses.reflection.cause.text;
					break;
				case "NEXT_STEPS":
					text  = this.props.snapshots[0].responses.nextSteps.text;
					break;
			}
		}

		return text;
	}

	getResponseID() {
		let id = null;

		if (this.props.snapshots.length > 0) {
			id = this.props.snapshots[0]._id;
		}

		return id;
	}

  render() {
    return (
      <Grid>
      	<Row>
      		<Col xs={12}>
      			<h1>{Strings.Input.MAIN_TILE}</h1>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.THIS_WEEK_TITLE}</h2>
      			<p>{Strings.Input.THIS_WEEK_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("THIS_WEEK")}</p>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.LEARNINGS_TITLE}</h2>

      			<h4>{Strings.Input.LEARNINGS_PROBLEM_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_PROBLEM_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("LEARNING_PROBLEMS")}</p>

      			<h4>{Strings.Input.LEARNINGS_INTERVENTION_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_INTERVENTION_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("LEARNING_INTERVENTION")}</p>

      			<h4>{Strings.Input.LEARNINGS_RESULTS_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_RESULTS_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("LEARNING_RESULTS")}</p>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.REFLECTION_TITLE}</h2>

      			<h4>{Strings.Input.REFLECTION_ISSUE_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_ISSUE_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("REFLECTION_ISSUE")}</p>

      			<h4>{Strings.Input.REFLECTION_IMPACT_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_IMPACT_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("REFLECTION_IMPACT")}</p>

      			<h4>{Strings.Input.REFLECTION_CAUSE_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_CAUSE_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("REFLECTION_CAUSE")}</p>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.NEXT_STEPS_TITLE}</h2>
      			<p>{Strings.Input.NEXT_STEPS_INSTRUCTIONS}</p>
      			<p>{this.getResponseText("NEXT_STEPS")}</p>
      		</Col>
      	</Row>
      </Grid>
    );
  }
}

export default createContainer(() => {
  return {
    snapshots: Snapshots.find({ sprint: { $eq: 1 } }).fetch(),
  };
}, SnapshotInput);;