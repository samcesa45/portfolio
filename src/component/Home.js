import {
	Grid,
	ListItemIcon,
	Typography,
	ListItem,
	ListItemText,
	makeStyles,
	Box,
	Avatar,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ReactLogo from '../asset/images/logo.svg';
import JavascriptLogo from '../asset/images/javascript-js-vector-logo-E19624B9BC-seeklogo.com/javascript-js-seeklogo.com.svg';
import MaterialLogo from '../asset/images/material-ui-vector-logo-F3917B6B98-seeklogo.com/material-ui-seeklogo.com.svg';
import NodeLogo from '../asset/images/nodejs-vector-logo-5A813456C7-seeklogo.com/nodejs-seeklogo.com.svg';
import ReduxLogo from '../asset/images/redux-vector-logo-677C048347-seeklogo.com/redux-seeklogo.com.svg';
import samLogo from '../asset/images/20201206_153234.jpg';
import Typed from 'react-typed';
import React from 'react';
import Particles from 'react-particles-js';

const Home = () => {
	const useStyles = makeStyles((theme) => ({
		logo: {
			width: '80px',

			'MuiListItemText - root': {
				padding: theme.spacing(1),
				margin: theme.spacing(1),
			},
		},
		container: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		subtitle: {
			color: 'tan',
		},
		typedContainer: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			zIndex: 1,
			width: '100vw',
			textAlign: 'center',
			transform: 'translate(-50%,-50%)',
			// background: '#233',
		},
		listItem: {
			[theme.breakpoints.down('sm')]: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-evenly',
			},
		},
	}));

	const classes = useStyles();
	return (
		<>
			<Box elevation={0} className={classes.typedContainer}>
				<Grid container className={classes.container}>
					<Grid item xs={false} sm={3} />
					<Grid item xs={12} sm={6}>
						<Avatar
							alt="me"
							src={samLogo}
							style={{ margin: '0 auto', width: '6rem', height: '6rem' }}
						/>
						<Typography variant="h2" style={{ color: '#8f5c2c' }}>
							<Typed strings={["Hello, I'm Sam Chris!"]} typeSpeed={40} />
						</Typography>
						<Typography
							variant="h4"
							color="primary"
							className={classes.subtitle}>
							<Typed
								strings={[
									'	I am a self taught frontend developer',
									'	I am a self taught frontend developer',
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
							/>
						</Typography>
						<Typography
							variant="h4"
							color="primary"
							style={{
								textDecoration: 'underline',
								color: '#8f5c2c',
							}}>
							Skills
						</Typography>
						<ListItem className={classes.listItem}>
							<ListItemIcon>
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
							</ListItemIcon>
							<ListItemText>
								<img src={ReactLogo} alt="reactlogo" className={classes.logo} />
							</ListItemText>
							<ListItemText>
								<img
									src={JavascriptLogo}
									alt="javascriptlogo"
									className={classes.logo}
								/>
							</ListItemText>
							<ListItemText>
								<img
									src={MaterialLogo}
									alt="materiallogo"
									className={classes.logo}
								/>
							</ListItemText>
							<ListItemText>
								<img src={NodeLogo} alt="Nodelogo" className={classes.logo} />
							</ListItemText>
							<ListItemText>
								<img src={ReduxLogo} alt="nodelogo" className={classes.logo} />
							</ListItemText>
							<ListItemIcon>
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
								<StarIcon fontSize="large" style={{ color: 'yellow' }} />
							</ListItemIcon>
						</ListItem>
					</Grid>
					<Grid item xs={false} sm={3} />
				</Grid>
			</Box>
			<Particles />
		</>
	);
};

export default Home;
