import {
	BottomNavigation,
	BottomNavigationAction,
	makeStyles,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { withRouter } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	bottomNav: {
		background: '#3f51b5',
		fontColor: '#fff',
	},
	root: {
		'& .MuiSvgIcon-root': {
			fill: '#fff',
			'&:hover': {
				fill: '#8f5c2c',
			},
		},
	},
}));

const socialIcons = [
	{ iconitem: <GitHubIcon />, path: 'https://github.com/samcesa45' },
	{
		iconitem: <LinkedInIcon />,
		path: 'https://www.linkedin.com/in/samuel-eshiet-christopher-2720b21aa',
	},
	{ iconitem: <TwitterIcon />, path: 'https://twitter.com/React_samscript' },
];
const Footer = (props) => {
	const classes = useStyles();

	return (
		<BottomNavigation className={classes.bottomNav}>
			{socialIcons.map((item, index) => (
				<a
					href={item.path}
					key={index}
					target="_blank"
					rel="noopener noreferrer">
					<BottomNavigationAction
						icon={item.iconitem}
						className={classes.root}
					/>
				</a>
			))}
		</BottomNavigation>
	);
};

export default withRouter(Footer);
