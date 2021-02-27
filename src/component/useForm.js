import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
export const useForm = (
	initialFormValues,
	validateOnChange = false,
	validate
) => {
	const [values, setValues] = useState(initialFormValues);
	const [errors, setErrors] = useState({});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		if (validateOnChange) validate({ [name]: value });
	};

	const resetForm = () => {
		setValues(initialFormValues);
		setErrors({});
	};

	return {
		values,
		setValues,
		handleFormChange,
		errors,
		setErrors,
		resetForm,
	};
};

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiFormControl-root': {
			width: '100%',
			marginTop: theme.spacing(2),
		},
	},
}));

export const Form = (props) => {
	const classes = useStyles();
	const { children, other } = props;
	return (
		<form {...other} className={classes.root} autoComplete="off">
			{children}
		</form>
	);
};
