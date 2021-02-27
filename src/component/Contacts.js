import React, { useEffect, useState } from 'react';
import { Form, useForm } from './useForm';
import Controls from './controls/Controls';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import Notification from './Notification';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	typography: {
		'&.MuiTypography-root': {
			margin: '0 auto',
			width: '50%',
			[theme.breakpoints.down('xs')]: {
				fontSize: '1.5rem',
			},
		},
	},

	boxContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#fff',
		height: '100vh',
		width: '100vw',
	},
}));

const initialFormValues = {
	id: '',
	fullName: '',
	email: '',
	message: '',
};
const Contacts = (props) => {
	const classes = useStyles();
	let history = useHistory();
	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});

	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ('fullName' in fieldValues)
			temp.fullName = fieldValues.fullName
				? ''
				: 'This field must not be empty';
		if ('email' in fieldValues)
			temp.email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
				fieldValues.email
			)
				? ''
				: 'Please enter a valid email';
		if ('message' in fieldValues)
			temp.message = fieldValues.message ? '' : 'This field cannot be empty';
		setErrors({
			...temp,
		});
		if (fieldValues === values)
			return Object.values(temp).every((x) => x === '');
	};
	const {
		values,
		setValues,
		resetForm,
		errors,
		setErrors,
		handleFormChange,
	} = useForm(initialFormValues, true, validate);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			setNotify({
				isOpen: true,
				message: 'Mesaage delivered',
				type: 'success',
			});
		}
		setTimeout(() => {
			history.push('/');
		}, 1500);
		resetForm();
	};

	useEffect(() => {}, [setValues]);

	return (
		<>
			<Paper component="div" className={classes.boxContainer}>
				<Form onSubmit={handleSubmit}>
					<Grid
						container
						style={{
							border: '1px solid #ccc',
							borderRadius: '5px',
							padding: '20px',
							margin: 'auto',
						}}>
						<Grid item xs={12}>
							<Typography
								className={classes.typography}
								variant="h3"
								color="primary">
								Contact Me
							</Typography>
							<Controls.Input
								label="fullName"
								name="fullName"
								onChange={handleFormChange}
								error={errors.fullName}
							/>
							<Controls.Input
								label="Email"
								name="email"
								onChange={handleFormChange}
								error={errors.email}
							/>
							<Controls.Input
								label="Enter Message"
								name="message"
								onChange={handleFormChange}
								multiline
								rows={4}
								error={errors.message}
							/>
							<div>
								<Controls.Button
									text="Contact"
									fullWidth
									type="submit"
									onClick={handleSubmit}
								/>
							</div>
						</Grid>
					</Grid>
				</Form>
			</Paper>

			<Notification notify={notify} setNotify={setNotify} />
		</>
	);
};

export default Contacts;
