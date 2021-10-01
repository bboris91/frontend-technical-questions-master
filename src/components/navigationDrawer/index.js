import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import { withRouter } from "react-router";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

const NavigationDrawer = ({toggleDrawer, open, history}) =>{
	const classes = useStyles();

	const handleCloseDrawer = (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		toggleDrawer(false)
	};

	const handleButtonClick = (event, url)=>{
		handleCloseDrawer(event)
		history.push(url)
	};

	return (
		<div>
			<Drawer open={open} onClose={handleCloseDrawer}>
				<div
					className={classes.list}
					role="presentation"
				>
					<List>
						<ListItem button onClick={(e)=>handleButtonClick(e, '/')}>
							<ListItemAvatar>
								<Avatar>
									<HomeIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Home' />
						</ListItem>
						<Divider />
							<ListItem button onClick={(e)=>handleButtonClick(e, 'questionOne')}>
									<ListItemAvatar >
										<Avatar>
											1
										</Avatar>
									</ListItemAvatar>
								<ListItemText primary='Question One' secondary='Render bug' />
							</ListItem>
						<ListItem button onClick={(e)=>handleButtonClick(e, 'questionTwo')}>
							<ListItemAvatar >
								<Avatar>
									2
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Question Two' secondary='Api Call' />
						</ListItem>
						<ListItem button onClick={(e)=>handleButtonClick(e, 'questionThree')}>
							<ListItemAvatar >
								<Avatar>
									3
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary='Question Three' secondary='List on the fritz' />
						</ListItem>
						<ListItem button onClick={(e)=>handleButtonClick(e, 'questionFour')}>
							<ListItemAvatar >
								<Avatar>
									3
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary='Question Four' secondary='Kobayashi Maru' />
						</ListItem>
					</List>
				</div>
			</Drawer>
		</div>
	);
}
export default withRouter(NavigationDrawer)