import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from '../grid/Grid';
import Detail from '../detail/Detail';

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/" component={Grid} />
			<Route path="/member/:id" component={Detail} />
		</Switch>
	)
};

export default Routing;