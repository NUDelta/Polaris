import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {renderRoutes} from '../imports/startup/client/routes.js';
import '../imports/startup/accounts-config.js';
 
const App = () => (
  <MuiThemeProvider>
    {renderRoutes()}
  </MuiThemeProvider>
);


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});