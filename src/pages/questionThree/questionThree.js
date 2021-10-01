import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';

import Paper from '@mui/material/Paper';

import Android from "@mui/icons-material/Android";
import Pets from "@mui/icons-material/Pets";
import BugReport from "@mui/icons-material/BugReport";

import QuestionListItem from './questionListItem'
import { createRowData } from './mocks'

const createMockData = () =>{
	/* Please do not refactor this function */
	return [
		createRowData({species: 'Robot', name: 'T-100', Icon: Android, description: "Likes long walks, walking over the bones of it's enemies"}),
		createRowData({species: 'Bug', name:'Barry', Icon: BugReport, description: "Likes long walks, and creating problems in all your code"}),
		createRowData({species: 'Rabbit', name:'Roger', Icon: Pets, description: "Likes long walks and getting to know the inner you"}),
		createRowData({species: null, name: null, Icon: null, description: null}),
	]
};

const useStyles = makeStyles(() => ({
	container:{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
}));

const QuestionThree= () => {
	const classes = useStyles();
	const mockData = createMockData();
	return (
		<div className={classes.container}>
			<Paper>
				<List className={classes.root}>
					{mockData.map((item, i) =>{
						return <QuestionListItem item={item} key={item.id} divider={i !== mockData.length -1}/>
					})}
				</List>
			</Paper>
		</div>
	);
}

export default QuestionThree;