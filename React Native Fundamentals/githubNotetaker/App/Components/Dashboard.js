// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Require the api you created
var api = require('../../App/Utils/api')
// Require view components
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var Notes = require('./Notes');

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex: 1
    },
    image: {
        height: 350
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        alignSelf: 'center'
    }
})

class Dashboard extends Component {

    // Create a simple function to style each button differently (Not necassary, but its interesting to see how an interface can be modified
    makeBackground(btn){
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }

        if (btn === 0) {
            obj.backgroundColor = '#48BBEC'
        } else if (btn === 1) {
            obj.backgroundColor = '#E77AAE'
        } else {
            obj.backgroundColor = '#758BF4'
        }

        return obj;
    }

    goToProfile(){
        // Push a new route in (Thats how going back works!) and render the profile component
        this.props.navigator.push({
            title: 'Profile',
            component: Profile,
            passProps: {userInfo: this.props.userInfo} // Pass some props in to!
        })
        // Reset the state
        this.setState({
            isLoading: false,
            error: false,
            username: ''
        })
    }
    goToRepos(){

        // Get the repos with the getRepos function from the API
        api.getRepos(this.props.userInfo.login)
            .then((res) => {
                this.props.navigator.push({
                    // Push a new route in (Thats how going back works!) and render the repositories component
                    title: 'Repositories',
                    component: Repositories,
                    passProps: {
                        userInfo: this.props.userInfo,
                        repos: res
                    } // Pass some props in to!
                })
            })
        // Reset the state
        this.setState({
            isLoading: false,
            error: false,
            username: ''
        })
    }
    goToNotes(){
        // Route to notes component
        api.getNotes(this.props.userInfo.login)
            .then((res) => {
                res = res || {}
                this.props.navigator.push({
                    component: Notes,
                    title: 'Notes',
                    passProps: {
                        notes: res,
                        userInfo: this.props.userInfo
                    }
                })
            })
    }

    render(){
        // Watch how we access the property we passed in the main component
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}>View Repos</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}>View Notes</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports = Dashboard