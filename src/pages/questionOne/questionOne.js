import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'

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