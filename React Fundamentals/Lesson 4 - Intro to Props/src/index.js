import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App'; We're going to create a local component in this example

class App extends React.Component {
    render(){
        // Lets hold the property inside a variable
        let txt = this.props.txt
        // Output the component's property
        return <h2>{txt}</h2>

        //return <h3>{this.props.txt}</h3>
    }
}

// You can also add the Property types that the component should be expecting
App.propTypes = {
    txt: React.PropTypes.string, // This property should be a string, but isn't required and won't throw an error
    cat: React.PropTypes.number.isRequired
}

// You can define default properties
App.defaultProps = {
    txt: 'This is the default text if the prop is not set',
}

ReactDOM.render(
    // You can add a prop (property) to a component similar to how you add an attribute to an HTML element
    <App cat={5} txt="Hello, I'm a prop!"/>, document.getElementById('root')
);