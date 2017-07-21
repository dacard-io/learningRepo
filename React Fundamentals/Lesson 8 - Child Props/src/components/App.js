import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* This short lesson is pretty simple. We will cover how to access child props!
*/

export default class App extends Component {
	// Notice how the stateless component below is rendered
	// Notice I'm also not using the regular <button> html tag but the button component below
	render(){
		return <Button>I <Heart/> React</Button>
	}
}

//
class Button extends React.Component {
	render(){
		return <button>{this.props.children}</button>
	}

}

// Create a stateless component
// The class is supposed to be a glyphicon, i don't feel like downloading it but you get the gist
const Heart = () => <span class="glyphicon glyphicon-heart"><i>LOVE</i></span>