import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import HomePage from '../../ui/HomePage.jsx';
import SnapshotInput from '../../ui/SnapshotInput.jsx';
import Snapshot from '../../ui/Snapshot.jsx';
import NotFoundPage from '../../ui/NotFoundPage.jsx';

export const renderRoutes = () => (
	<Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path="/" component={App}>
			<IndexRoute component={SnapshotInput} />
			<Route path="/snapshot" component={Snapshot} />
			<Route path="*" component={NotFoundPage} />
    </Route>
	</Router>
);