import React from 'react';
import CardContainer from './component/projects/CardContainer';
import Home from './component/Home';
import About from './component/About';
import Contacts from './component/Contacts';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import { CssBaseline } from '@material-ui/core';

const App = () => {
	return (
		<div>
			<CssBaseline />

			<Navbar />

			<Switch>
				<Route path="/projects" exact component={CardContainer} />
				<Route path="/contacts" exact component={Contacts} />
				<Route path="/about" exact component={About} />
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
};

export default App;
