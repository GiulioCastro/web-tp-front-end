import React from 'react';
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		height: '100%',
		width: '100%'
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
	},
}));

function NoLayout() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<Outlet />
			</div>
		</div>
	);
};

export default NoLayout;