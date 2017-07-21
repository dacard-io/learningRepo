// Badge.js is a reusable component to be used across other components

// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Require the api you created
var api = require('../../App/Utils/api')

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#48BBEC',
        paddingBottom: 10
    },
    name: {
        alignSelf: 'center',
        fontSize: 21,
        marginTop: 10,
        marginBottom: 5,
        color: 'white'
    },
    handle: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: 125,
        width: 125,
        borderRadius: 65,
        marginTop: 10,
        alignSelf: 'center'
    }
})

class Badge extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: this.props.userInfo.avatar_url}}/>
                <Text style={styles.name}>{this.props.userInfo.name}</Text>
                <Text style={styles.handle}>{this.props.userInfo.login}</Text>
            </View>
        )
    }
}

/* Notice how the your relying on the userInfo state declared outside this component. This component will break
   break because of it, but not if you pass it a propType that interfaces with this data, and since this data
   is required, use the isRequired property.
 */
Badge.propTypes = {
    userInfo: React.PropTypes.object.isRequired
}

module.exports = Badge