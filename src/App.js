import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { setMessage } from './store/actions/messageAction'

class App extends Component {

    componentDidUpdate = () => {
        if (this.props.text && this.props.text.toString().trim()) {
            Alert.alert(this.props.title || 'Message', this.props.text.toString())
            this.props.clearMessage()
        }
    }

    render() {
        return (
            <Navigator />
        )
    }
}

const mapStateToProps = ({ messageReducer }) => {
    return {
        title: messageReducer.title,
        text: messageReducer.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessage: () => dispatch(setMessage({ title: '', text: '' }))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App)