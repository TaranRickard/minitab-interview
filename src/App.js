///////////////////////////////////////////////////////////////////////////////
//
// Project: Minitab Pre-Interview Assignment
//
// Author: Taran Rickard
// - tbr5094@psu.edu | taranrickard@gmail.com
// - 484-949-5540
//
// Created: 1/13/2021
//
import './App.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import FormClass from './components/FormClass';
import StatModal from './components/StatModal';
import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			statVars: {
				n: '',
				mu: '',
				sigma: '',
				muPrime: ''
			}
		}
	}

	/////////////////////////////////////////
	// hides the Modal with table
	//
	hideModalFunc = (e) => {
		this.setState({
			showModal: false
		})
	}

	/////////////////////////////////////////
	// initializes table and displays modal
	//
	showModalFunc = (statVars, hypTest) => {
		this.setState({
			showModal: true,
			statVars: statVars,
			hypTest: hypTest
		})
	}

	render() {
		return (
			<>
				<FormClass showModalFunc={this.showModalFunc} />
				<StatModal showModal={this.state.showModal}
					hideModalFunc={this.hideModalFunc}
					statVars={this.state.statVars}
					hypTest={this.state.hypTest} />
			</>
		)
	}

}

export default App;