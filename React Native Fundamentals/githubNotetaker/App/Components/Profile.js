// Profile.js is the profile view

// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Include the reusable Badge component
var Badge = require('./Badge')
var Separator = require('./Helpers/Separator') // Then add the <Seperator /> component at the list render

// Require the api you created
var api = require('../../App/Utils/api')

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

class Profile extends Component {

    // Lets create a function to properly format data from the API

    getRowTitle(user, item){
        // If the item passed in is 'public_repos' and is a thing, replace the underscores with spaces, else return the item
        item = (item === 'public_repos') ? item.replace('_', ' ') : item;
        // If item[0] is a thing, uppercase that index and add together with the rest of the array, else return the item
        return item[0] ? item[0].toUpperCase() + item.slice(1) : item
    }

    // Remember in badges how you created propTypes, check out how its being used. So fucking cool
    render(){
        // Lets create an array to hold data
        var userInfo = this.props.userInfo;
        // Create a list of properties to pull from the Github API
        var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos']
        /* Okay so its been awhile since i've used map, all map does is iterate through an array, and
            modify each element of an array and returns a new one.

            In this case we're creating a views based off the array
         */
        var list = topicArr.map((item, index) => {
                if (!userInfo[item]){
                    return <View key={index} />
                } else {
                    return (
                        <View key={index}>
                            <View style={styles.rowContainer}>
                                <Text style={styles.rowTitle}>{this.getRowTitle(userInfo, item)}</Text>
                                <Text style={styles.rowContent}>{userInfo[item]}</Text>
                            </View>
                            <Separator />
                        </View>
                    )
                }
        })

        // Now the list variable holds all the view components, which can now be rendered below

        return (
            <ScrollView style={styles.container}>
                <Badge userInfo={this.props.userInfo} />
                {list}
            </ScrollView>
        )
    }
}

module.exports = Profile