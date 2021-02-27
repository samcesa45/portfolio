import { Typography, makeStyles, Box } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	boxRoot: {
		'&.MuiBox-root': {
			[theme.breakpoints.up('md')]: {
				textAlign: 'center',
				margin: '15rem auto',
			},
			[theme.breakpoints.down('sm')]: {
				marginTop: theme.spacing(6),
				marginLeft: theme.spacing(2),
				marginRight: theme.spacing(2),
			},
		},
	},
}));
const About = () => {
	const classes = useStyles();
	return (
		<Box className={classes.boxRoot}>
			<Typography style={{ color: 'tan' }} variant="h6">
				I am a developer based in Lagos, Nigeria.
			</Typography>
			<Typography style={{ color: 'tan' }} variant="h6">
				My Goal is to help National and International customers implement and
				manage their digital products,through heuristic development and testing.
			</Typography>
			<Typography style={{ color: 'tan' }} variant="h6">
				I drink coffee, I eat Pizza. I write code and improve my design and
				skills every day.
			</Typography>
			<Typography variant="h2" style={{ color: '#fff' }}>
				I am honoured to work with special people.
			</Typography>
			<Typography variant="h2" style={{ color: '#fff' }}>
				I'm always interested about cool stuff.
			</Typography>
			<Typography variant="h2" style={{ color: '#fff' }}>
				Are you minding a project?.
			</Typography>
			<Typography variant="h2" style={{ color: 'tan' }}>
				Let's talk.
			</Typography>
		</Box>
	);
};

export default About;
