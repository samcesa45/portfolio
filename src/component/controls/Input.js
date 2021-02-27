import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	// root: {
	// 	'& .MuiInputBase-root': {
	// 		'& fieldSet': {
	// 			borderColor: 'tan',
	// 		},
	// 	},
	// 	'&.Mui-focused fieldset': {
	// 		color: '#fff',
	// 		borderColor: 'tan',
	// 	},
	// '& .MuiInputLabel-root': {
	// 	color: '#fff',
	// },
	// '& .MuiInputLabel': {
	// 	color: '#fff',
	// },
	// input: {
	// 	color: '#fff',
	// },
	// },
}));
const Input = (props) => {
	const classes = useStyles();
	const { label, name, value, onChange, error = null, ...other } = props;
	return (
		<TextField
			inputProps={{ className: classes.input }}
			className={classes.root}
			variant="outlined"
			label={label}
			name={name}
			value={value}
			onChange={onChange}
			{...other}
			{...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;
