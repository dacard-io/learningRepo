import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Now lets cover component mounting basics. Mounting is when a component is added or removed from the DOM.
*/

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {val: 0}
		this.update = this.update.bind(this)
	}
	update(){
		this.setState({val: this.state.val + 1})
	}

	componentWillMount(){
		this.setState({m: 2})
	}

	render(){
		console.log('Rendering!')
		return (
			<button onClick={this.update}>
				{this.state.val * this.state.m}
			</button>
		)
	}

	// Now create functions to perform logic during the mounting process
	componentDidMount(){
		this.inc = setInterval(this.update, 500)
	}
	componentWillUnmount(){
		clearInterval(this.inc)
	}

}

// Create a wrapper component to work with the DOM
export default class Wrapper extends React.Component {
	constructor(){
		super()
	}

	mount(){
		ReactDOM.render(<App />, document.getElementById('a'))
	}
	unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	}
	render(){
		return (
			<div>
				<button onClick={this.mount.bind(this)}>Mount</button>
				<button onClick={this.unmount.bind(this)}>Unmount</button>
				<div id="a"></div>
			</div>
		)
	}
}