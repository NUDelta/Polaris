import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Grid, Row, Col } from 'react-flexbox-grid';
import RichEditor from './RichEditor.jsx';
import { Snapshots } from '../api/snapshots.js';
import { Projects } from '../api/projects.js';
import Strings from '../strings/strings.js';

class Snapshot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snapshot: null
    };
  }

  getResponseText(section) {
    let text = "";

    let snapshot = this.state.snapshot;

    if (!snapshot) {
      return text;
    }

    if (this.state.snapshot) {
      switch(section) {
        case "THIS_WEEK":
          text = snapshot.responses.thisWeek.text;
          break;
        case "LEARNINGS_PROBLEM":
          text = snapshot.responses.learnings.problem.text;
          break;
        case "LEARNINGS_INTERVENTION": 
          text = snapshot.responses.learnings.intervention.text;
          break;
        case "LEARNINGS_RESULTS":
          text  = snapshot.responses.learnings.results.text;
          break;
        case "REFLECTION_ISSUE":
          text  = snapshot.responses.reflection.issue.text;
          break;
        case "REFLECTION_IMPACT":
          text  = snapshot.responses.reflection.impact.text;
          break;
        case "REFLECTION_CAUSE":
          text  = snapshot.responses.reflection.cause.text;
          break;
        case "NEXT_STEPS":
          text  = snapshot.responses.nextSteps.text;
          break;
      }
    }

    return text;
  }

	getResponseID() {
    let id = null;

    if (!this.state.snapshot) {
      return id;
    }

    return this.state.snapshot._id;
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

  componentDidUpdate(nextProps, nextState) {
    let projectID = this.props.params.projectID;

    let snapshots = this.props.snapshots.filter(function(snap) {
      return snap.project == projectID
    });

    if (snapshots.length != 0) {
      if (nextProps.snapshots != this.props.snapshots) {
        this.setState({
          snapshot: snapshots[0]
        });
      }
    }
  }
}

export default createContainer(() => {
  let projectIDs = Projects.find({}, {id: 1}).map(function(proj){
    return proj._id;
  });

  return {
    snapshots: Snapshots.find({ 
      "sprint": { $eq: 1 },
      "project": { $in: projectIDs}
    }).fetch(),
  };
}, Snapshot);