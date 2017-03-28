import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Grid, Row, Col } from 'react-flexbox-grid';
import RichEditor from './RichEditor.jsx';

import Strings from '../strings/strings.js';

class SnapshotInput extends Component {
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
      			<p>{Strings.Input.MAIN_INSTRUCTIONS_BASE}</p>
      			<p>{Strings.Input.MAIN_INSTRUCTIONS_TIMING}</p>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.THIS_WEEK_TITLE}</h2>
      			<p>{Strings.Input.THIS_WEEK_INSTRUCTIONS}</p>
      			<RichEditor />
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.LEARNINGS_TITLE}</h2>

      			<h4>{Strings.Input.LEARNINGS_PROBLEM_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_PROBLEM_INSTRUCTIONS}</p>
      			<RichEditor />

      			<h4>{Strings.Input.LEARNINGS_INTERVENTION_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_INTERVENTION_INSTRUCTIONS}</p>
      			<RichEditor />

      			<h4>{Strings.Input.LEARNINGS_RESULTS_TITLE}</h4>
      			<p>{Strings.Input.LEARNINGS_RESULTS_INSTRUCTIONS}</p>
      			<RichEditor />
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.REFLECTION_TITLE}</h2>

      			<h4>{Strings.Input.REFLECTION_ISSUE_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_ISSUE_INSTRUCTIONS}</p>
      			<RichEditor />

      			<h4>{Strings.Input.REFLECTION_IMPACT_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_IMPACT_INSTRUCTIONS}</p>
      			<RichEditor />

      			<h4>{Strings.Input.REFLECTION_CAUSE_TITLE}</h4>
      			<p>{Strings.Input.REFLECTION_CAUSE_INSTRUCTIONS}</p>
      			<RichEditor />
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<h2>{Strings.Input.NEXT_STEPS_TITLE}</h2>
      			<p>{Strings.Input.NEXT_STEPS_INSTRUCTIONS}</p>
      			<RichEditor />
      		</Col>
      	</Row>
      </Grid>
    );
  }
}

export default SnapshotInput;