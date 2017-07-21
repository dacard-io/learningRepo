import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* In this lesson we'll cover refs, which reference an instance of a component in an application
*/

export default class App extends Component {
	// Lets create the state by initializing the constructor
	constructor(){
		super() // Super is the context of the state in the component

		// We want each component to have its own value
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		// Bind update function this state
		this.update = this.update.bind(this)
	}

	// Lets create a custom method called update!
	update(event){
		this.setState({
			// What you can do is do this.update.red etc., but its easier to do it all in one function.
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}

	render() {
		// Lets pass in some refs
		return (
			<div>
				<hr/>
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<br/>
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br/>
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br/>
			</div>
		)
		// Return the widget component created below
	}
}

// Refs don't work with stateless components.
class Slider extends React.Component {
	render(){
		return (
			<input type="range"
				   min="0"
				   max="255"
				   onChange={this.props.update} />
		)
	}
}