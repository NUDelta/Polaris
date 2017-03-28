import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Grid, Row, Col } from 'react-flexbox-grid';

import Strings from '../strings/strings.js';

class SnapshotInput extends Component {
  render() {
    return (
      <Grid>
      	<Row>
      		<Col xs={12}>
      			<h1>{Strings.SNAPSHOT_MAIN_TILE}</h1>
      		</Col>
      	</Row>
      	<Row>
      		<Col xs={12}>
      			<p>{Strings.SNAPSHOT_MAIN_INSTRUCTIONS_BASE}</p>
      			<p>{Strings.SNAPSHOT_MAIN_INSTRUCTIONS_TIMING}</p>
      		</Col>
      	</Row>
      </Grid>
    );
  }
}

export default SnapshotInput;