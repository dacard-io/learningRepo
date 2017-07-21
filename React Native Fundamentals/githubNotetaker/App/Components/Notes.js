// Notes view component

// This is the file that will get rendered for the initial route
import React, { Component } from 'react';

var api = require('../Utils/api')
var Separator = require('./Helpers/Separator')
var Badge = require('./Badge')

// Remember to include any react native components you will be using here
import {
    StyleSheet,
    View,
    Text,
    ListView,
    TextInput,
    TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6EF',
        flexDirection: 'column'
    },
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

class Notes extends Component {
    constructor(){
        super(props)
        this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.notes),
            note: '',
            error: ''
        }
    }

    handleSubmit(){
        var note = this.state.note
        this.setState({
            note: ''
        })

        api.addNote(this.props.userInfo.login, note)
            .then((data) => {
                api.getNotes(this.props.userInfo)
                    .then((data) => {
                        this.setState({
                            dataSource: this.ds.cloneWithRows(data)
                        })
                    })
            }).catch((err) => {
            console.log('Request failed', err)
            this.setState({error})
        })
    }

    renderRow(){
        return (
            <View>
                <View style={styles.rowContainer}>
                    <Text>{rowData}</Text>
                </View>
                <Seperator />
            </View>
        )
    }

    footer(){
        return(
            <View style={styles.footContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.note}
                    onChange={this.handleChange.bind(this)}
                    placeholder="New Note"/>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.handleSubmit.bind(this)}
                    underlayColor="#88D4F5">
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    render={this.renderRow}
                    renderHeader={() => <Badge userInfo={this.props.userInfo}/>} />
                {this.footer()}
            </View>
        )
    }
}

Notes.propTypes = {
    userInfo: React.PropTypes.object.isRequired,
    notes: React.PropTypes.object.isRequired
}

module.exports = Notes