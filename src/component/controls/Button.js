import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	label: {
		textTransform: 'Capitalize',
	},
}));
const Button = (props) => {
	const classes = useStyles();
	const { text, color, variant, size, onClick, ...other } = props;

	return (
		<MuiButton
			classes={{ root: classes.root, label: classes.label }}
			variant={variant || 'contained'}
			size={size || 'large'}
			color={color || 'primary'}
			onClick={onClick}
			{...other}>
			{text}
		</MuiButton>
	);
};

export default Button;
