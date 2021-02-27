import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';
import { Apps, ArrowBack, ContactMail, Home } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';

import Footer from './Footer';
const useStyles = makeStyles((theme) => ({
	active: {},
	box: {
		flexGrow: 1,
	},
	toolbar: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '0 1rem',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
		'& .MuiTypography-body1': {
			color: '#fff',
			fontWeight: 700,
			'&:hover': {
				color: '#fff',
			},
		},
	},
	sideDrawerContainer: {
		width: 250,
		height: '100%',
	},
}));

const menuItems = [
	{ listIcon: <Home />, listItemText: 'Home', listItemPath: '/' },
	{ listIcon: <ArrowBack />, listItemText: 'About', listItemPath: '/about' },
	{
		listIcon: <Apps />,
		listItemText: 'Projects',
		listItemPath: '/projects',
	},
	{
		listIcon: <ContactMail />,
		listItemText: 'Contacts',
		listItemPath: '/contacts',
	},
];

const appLinks = [
	{ linkText: 'Home', path: '/' },
	{ linkText: 'About', path: '/about' },
	{ linkText: 'Projects', path: '/projects' },
	{ linkText: 'Contact', path: '/contacts' },
];

const Navbar = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const sideDrawer = () => (
		<Box component="div" className={classes.sideDrawerContainer}>
			<Typography variant="h3">Logo</Typography>
			<Divider />

			<List>
				{menuItems.map((item, index) => (
					<ListItem key={index} component={Link} to={item.listItemPath}>
						<ListItemIcon>{item.listIcon}</ListItemIcon>
						<ListItemText primary={item.listItemText} />
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<Box component="nav" className={classes.box}>
			<AppBar position="static" className={classes.appbar}>
				<Toolbar>
					<IconButton onClick={() => setOpen(true)}>
						<MenuIcon style={{ color: '#fff' }} />
					</IconButton>
					<div className={classes.toolbar}>
						{appLinks.map((item, index) => (
							<NavLink
								exact
								activeStyle={{
									color: '#8f5c2c',
									borderBottom: '4px solid #40a4cb',
									padding: '18px 5px',
									transition: 'transform 2s linear',
								}}
								to={item.path}
								style={{ textDecoration: 'none' }}
								key={index}>
								<Typography style={{ margin: '0 1rem' }}>
									{item.linkText}
								</Typography>
							</NavLink>
						))}
					</div>
				</Toolbar>
			</AppBar>
			<Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
				{sideDrawer()}
				<Footer />
			</Drawer>
		</Box>
	);
};

export default Navbar;
