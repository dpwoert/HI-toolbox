import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './views/home/';
import Intro from './views/intro/';
import ToolDetail from './views/tool-detail/';
import GroupDev from './views/group-dev/';
import Literature from './views/literature/';

window.React = React;

const history = hashHistory;

render(
	(
		<Router history={history}>
			<Route path="/" component={Home}>
				<IndexRoute component={Intro}/>
				<Route path="/group-dev" component={GroupDev} />
				<Route path="/literature" component={Literature} />
				<Route path="/:tool" component={ToolDetail} />
			</Route>
		</Router>
	), document.getElementById('content')
);
