import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';

import { Grid, Row, Col } from 'react-flexbox-grid';
import RichEditor from './RichEditor.jsx';
import { Snapshots } from '../api/snapshots.js';
import Strings from '../strings/strings.js';

class SnapshotInput extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

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
    else {
      if(this.props.currentUser) {
        Meteor.call('snapshots.insertEmpty', );
      }
    }

		return id;
	}

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Grid fluid={true}>
        	<Row>
        		<Col xs={8}>
        			<h1>{Strings.Input.MAIN_TILE}</h1>
        		</Col>
        	</Row>
        	<Row>
        		<Col xs={8}>
        			<p>{Strings.Input.MAIN_INSTRUCTIONS_BASE}</p>
        			<p>{Strings.Input.MAIN_INSTRUCTIONS_TIMING}</p>
        		</Col>
        	</Row>
        	<Row>
        		<Col xs={8}>
              <Card className="card">
                <CardTitle 
                  title={Strings.Input.THIS_WEEK_TITLE} 
                  subtitle={Strings.Input.THIS_WEEK_DETAIL}
                />
          			<CardText>
                  <p>{Strings.Input.THIS_WEEK_INSTRUCTIONS}</p>
                  <RichEditor 
                    field={"responses.thisWeek.text"}
                    snapshotID={this.getResponseID()} 
                    text={this.getResponseText("THIS_WEEK")}
                  />
                </CardText>
              </Card>
        		</Col>
        	</Row>
        	<Row>
        		<Col xs={8}>
              <Card className="card">
                <CardTitle 
                  title={Strings.Input.LEARNINGS_TITLE}
                  subtitle={Strings.Input.LEARNING_DETAIL}
                />
                <CardText>
            			<h3>{Strings.Input.LEARNINGS_PROBLEM_TITLE}</h3>
            			<p>{Strings.Input.LEARNINGS_PROBLEM_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.learnings.problem.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("LEARNING_PROBLEMS")}
            			/>

            			<h3>{Strings.Input.LEARNINGS_INTERVENTION_TITLE}</h3>
            			<p>{Strings.Input.LEARNINGS_INTERVENTION_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.learnings.intervention.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("LEARNING_INTERVENTION")}
            			/>

            			<h3>{Strings.Input.LEARNINGS_RESULTS_TITLE}</h3>
            			<p>{Strings.Input.LEARNINGS_RESULTS_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.learnings.results.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("LEARNING_RESULTS")}
            			/>
                </CardText>
              </Card>
        		</Col>
        	</Row>
        	<Row>
        		<Col xs={8}>
              <Card className="card">
                <CardTitle 
                  title={Strings.Input.REFLECTION_TITLE}
                  subtitle={Strings.Input.REFLECTION_DETAIL}
                />
                <CardText>
            			<h3>{Strings.Input.REFLECTION_ISSUE_TITLE}</h3>
            			<p>{Strings.Input.REFLECTION_ISSUE_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.reflection.issue.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("REFLECTION_ISSUE")}
            			/>

            			<h3>{Strings.Input.REFLECTION_IMPACT_TITLE}</h3>
            			<p>{Strings.Input.REFLECTION_IMPACT_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.reflection.impact.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("REFLECTION_IMPACT")}
            			/>

            			<h3>{Strings.Input.REFLECTION_CAUSE_TITLE}</h3>
            			<p>{Strings.Input.REFLECTION_CAUSE_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.reflection.cause.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("REFLECTION_CAUSE")}
            			/>
                </CardText>
              </Card>
        		</Col>
        	</Row>
        	<Row>
        		<Col xs={8}>
              <Card className="card">
                <CardTitle 
                  title={Strings.Input.NEXT_STEPS_TITLE}
                  subtitle={Strings.Input.NEXT_STEP_DETAIL}
                />
                <CardText>
            			<p>{Strings.Input.NEXT_STEPS_INSTRUCTIONS}</p>
            			<RichEditor 
            				field={"responses.nextSteps.text"}
            				snapshotID={this.getResponseID()} 
            				text={this.getResponseText("NEXT_STEPS")}
            			/>
                </CardText>
              </Card>
        		</Col>
        	</Row>
        </Grid>
        <Drawer 
          width={400}
          openSecondary={true}
          open={this.state.open}>
          <Grid fluid={true}>
            <h3>Testing</h3>
          </Grid>
        </Drawer>
      </div>
    );
  }
}

export default createContainer(() => {
  let user = Meteor.user();
  return {
    snapshots: Snapshots.find({ 
      "sprint": { $eq: 1 },
    }).fetch(),
    currentUser: Meteor.user(),
  };
}, SnapshotInput);