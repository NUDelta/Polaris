import { Meteor } from 'meteor/meteor';

import '../imports/api/snapshots.js';
import '../imports/api/projects.js';
import '../imports/api/quarters.js';

import Fixtures from '../imports/startup/server/fixtures.js';
import CustomLogin from '../imports/startup/custom-login.js';

Meteor.startup(() => {
  // code to run on server at startup
  Fixtures.projectFixtures();
});

