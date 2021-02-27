import React from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
	root: {
		top: theme.spacing(10),
	},
}));
const Notification = (props) => {
	const { notify, setNotify } = props;
	const classes = useStyles();

	const handleClose = (e, reason) => {
		if (reason === 'clickaway') return;
		setNotify({
			...notify,
			isOpen: false,
		});
	};
	return (
		<Snackbar
			className={classes.root}
			open={notify.isOpen}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
			autoHideDuration={3000}
			onClose={handleClose}>
			<Alert severity={notify.type} onClose={handleClose}>
				{notify.message}
			</Alert>
		</Snackbar>
	);
};

export default Notification;
