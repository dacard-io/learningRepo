// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    View
} from 'react-native';

var styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
        flex: 1,
        marginLeft: 15
    }
})

class Separator extends Component {
    render(){
        return(
            <View style={styles.separator} />
        )
    }
}

module.exports = Separator