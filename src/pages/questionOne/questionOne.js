import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'

class QuestionOne extends Component {
	constructor(props){
		super(props);
		this.state = {
			label: "I've been clicked: ",
			counter: 0
		}
	}
	handleAddClick = () =>{
		this.setState({
			counter: this.state.counter + 1
		})
	};
	handleResetClick = () =>{
		this.setState({
			counter: 0
		})
	};
	render(){
		const { label, counter } = this.state;
		return (
			<div style={{marginTop: 48}}>
				<ButtonGroup variant="contained" color="primary">
					<Button onClick={this.handleAddClick} >
						{label} {counter} {`time${counter !== 1 ? 's' : ''}`}
					</Button>
					<Button color="secondary" size="small" onClick={this.handleResetClick} >
						Reset
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}

export default QuestionOne