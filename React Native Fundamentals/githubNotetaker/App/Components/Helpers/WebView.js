// WebView component

// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    View,
    WebView
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    },
})

class Web extends Component {
    render(){
        return(
            <View style={styles.container}>
                <WebView source={{uri: this.props.url}} />
            </View>
        )
    }
}

Web.proptypes = {
    url: React.PropTypes.string.isRequired
}

module.exports = Web