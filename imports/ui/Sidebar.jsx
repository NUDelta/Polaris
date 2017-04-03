import React from 'react';
import Drawer from 'material-ui/Drawer';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Strings from '../strings/strings.js';

class Sidebar extends React.Component {
	constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }

  buildSidebarContent() {
    let sidebarSections = [];
    
    if ("fft" in this.props.content) {
      let fftElements = [];
      this.props.content.fft.map(function(fftItem) {
        fftElements.push(<li key={fftElements.length}>{fftItem}</li>);
      });

      sidebarSections.push(
        <Row key={"fft"}>
          <Col xs={12}>
            <h3>{Strings.Sidebar.SECTION_FFT}</h3>
            <ul>
              {fftElements}
            </ul>
          </Col>
        </Row>
      );
    }

    return sidebarSections;
  }

	render() {
		return (
			<Drawer 
        width={400}
        openSecondary={true}
        open={this.state.open}>
        <Grid fluid={true}>
          {this.buildSidebarContent()}
        </Grid>
      </Drawer>
		);
	}
}

export default Sidebar;