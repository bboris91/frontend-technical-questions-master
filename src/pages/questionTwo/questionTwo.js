import React, { Component} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import withStyles from '@mui/styles/withStyles';

import CircularProgress from '@mui/material/CircularProgress';

import { getCardDetails } from './api'
import styles from './styles'

class QuestionTwo extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: null,
			imgSrc: null,
			body: '',
			loading: true,
		};
	}
	componentDidMount(){
		getCardDetails().then(({title, imgSrc, body}) =>{
			this.setState({
				title,
				imgSrc,
				body,
				loading: false,
			})
		})
	}
	render(){
		const { classes } = this.props;
		const { title, imgSrc, body, loading }  = this.state;
		if(loading){
			return (
				<div className={classes.spinner}>
					<CircularProgress/>
				</div>
			)
		}
		return(
			<div className={classes.container}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
						image={imgSrc}
						title={title}
					/>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<div
							className={classes.body}
							dangerouslySetInnerHTML={{__html:body}}
						/>
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(QuestionTwo);
