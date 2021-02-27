import {
	CardMedia,
	Card as MuiCard,
	CardContent,
	Typography,
	CardActions,
	makeStyles,
} from '@material-ui/core';

import React from 'react';
import Controls from '../controls/Controls';
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 340,
		margin: theme.spacing(3),
		marginTop: '70px',
		'&:hover': {
			transform: 'scale(1.05) ',
			transition: 'linear 0.2s ease',
		},
	},
	image: {
		height: 200,
	},
}));

const Card = (props) => {
	// const { item } = props;
	const classes = useStyles();

	return (
		<>
			<MuiCard className={classes.root}>
				<CardMedia
					image={props.item.img}
					title={props.item.title}
					className={classes.image}
				/>
				<CardContent>
					<Typography variant="h6" color="primary">
						{props.item.title}
					</Typography>
				</CardContent>
				<CardActions>
					<a
						href={props.item.siteUrl}
						style={{ listStyle: 'none', textDecoration: 'none' }}
						target="_blank"
						rel="noopener noreferrer">
						<Controls.Button
							style={{ flexGrow: '1', color: ' #3f51b5' }}
							text="view"
							variant="text"
							size="small"></Controls.Button>
					</a>
					<a
						style={{ listStyle: 'none', textDecoration: 'none' }}
						href={props.item.path}
						target="_blank"
						rel="noopener noreferrer">
						<Controls.Button
							style={{ flexGrow: '1', color: ' #3f51b5' }}
							text="source code"
							variant="text"
							size="small"></Controls.Button>
					</a>
				</CardActions>
			</MuiCard>
		</>
	);
};

export default Card;
