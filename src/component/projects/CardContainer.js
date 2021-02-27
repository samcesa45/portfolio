import React from 'react';
import Card from './Card';
import data from '../../data';

import { Grid, makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	cardcontainer: {
		background: '#ccc',
		minHeight: '100vh',
		minWidth: '100vw',
		boxSizing: 'border-box',
	},
}));
const Projects = () => {
	const classes = useStyles();
	return (
		<Paper className={classes.cardcontainer} elevation={0}>
			<Grid container spacing={1}>
				{data.map((item) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
							<Card item={item} />
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
};

export default Projects;
