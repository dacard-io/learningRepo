// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Require the api you created
var api = require('../../App/Utils/api')
// Require dashboard component
var Dashboard = require('./Dashboard');

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
} from 'react-native';

// Add styles
var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#4BBBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

class Main extends Component{
    // Create states in the constructor!
    constructor(props){
        super(props)
        this.state = {
            username: '',
            isLoading: false,
            error: false
        }
    }

    // Create function to change the state of the component
    handleChange(event){
        this.setState({
            username: event.nativeEvent.text
        })
    }

    handleSubmit(event) {
        // Update our indicatorIOS spinner
        this.setState({
            isLoading: true
        })
        // You can use the debug console to view console log
        console.log('SUBMIT', this.state.username)
        // Fetch data from gitub
        api.getBio(this.state.username)
            .then((res) => {
                console.log(res.message)
                // If Github returns user not found, send an error
                if (res.message == 'Not Found') {
                    this.setState({
                        error: 'User not found',
                        isLoading: false
                    })
                } else {
                    // Push a new route in (Thats how going back works!) and render the Dashboard component
                    this.props.navigator.push({
                        title: res.name || "Select an Option",
                        component: Dashboard,
                        passProps: {userInfo: res} // Pass some props in to!
                    })
                    // Reset the state
                    this.setState({
                        isLoading: false,
                        error: false,
                        username: ''
                    })
                }
            })
        // Reroute us to next route passing in GitHub information
    }

    render(){
        // Create a function called show error.
        var showErr = (
            /* Check out the logic of whats happening!
               Notice how in the program, the error state is set to false, its only defined in the
               handleSubmit() function, so if the error is set to false or is non-existent, show the component that
               outputs the error, else show the other view component.
             */
            this.state.error ? <Text>{this.state.error}</Text> : <View></View>
        )
        return (
            // You can add custom styles right to the component :o
            // Notice how you bind the context components action to a custom function, such as handleChange
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Search for a Github User</Text>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.username}
                    onChange={this.handleChange.bind(this)}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor="white">
                    <Text style={styles.buttonText}> SEARCH </Text>
                </TouchableHighlight>
                <ActivityIndicatorIOS
                    animating={this.state.isLoading}
                    color="#111"
                    size="large">
                </ActivityIndicatorIOS>
                {showErr}
            </View>
        )
        // Notice how the showErr is run at the bottom of the render
        /* Now for the loading animation, its super simple. You use the activity indicator component.
           Notice we were using a state called isLoading, and its set to a bool which is what the animating
           property takes. You get the picture. Pretty simple
         */
    }
}

// Export Main back to Index
module.exports = Main