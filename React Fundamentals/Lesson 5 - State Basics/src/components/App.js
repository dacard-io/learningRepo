import React, { Component } from 'react';

/* States are a collection of values to be managed by the component. */
export default class App extends Component {
	// Lets create the state by initializing the constructor
	constructor(){
		super() // Super is the context of the state in the component
		// Create the state
		this.state = {
			txt: 'This is the state text'
		}
	}
	// Lets create a custom method called update!
	update(event){
		this.setState({txt: event.target.value})
	}
	render() {
		return (
			// Lets output the state!
			<div>
				<h1>Hello World!</h1>
				<p>The state is: {this.state.txt}</p>
				<input type="text" onChange={this.update.bind(this)} />
			</div>
		)
		// Create an input box, and bind the update method to this object
	}
}