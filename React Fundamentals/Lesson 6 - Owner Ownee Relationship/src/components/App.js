import React, { Component } from 'react';

/* Now lets cover the owner ownee relationship. When one component renders another.
   The Parent component is sometimes referred to as the composite component.
*/

export default class App extends Component {
	// Lets create the state by initializing the constructor
	constructor(){
		super() // Super is the context of the state in the component
		// Create the state
		this.state = {
			txt: ''
		}
		// Bind update function this state
		this.update = this.update.bind(this)
	}

	// Lets create a custom method called update!
	update(event){
		this.setState({txt: event.target.value})
	}

	render() {
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		)
		// Return the widget component created below
	}
}

// Now create a new component that is stateless
const Widget = (props) => {
	return (
		<div>
			<p>The state is: {props.txt}</p>
			<input type="text" onChange={props.update} />
		</div>
	)
}