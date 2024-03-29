import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';

//import ChatScreen from './ChatScreen'

let width = Dimensions.get('window').width;


export default class LoginScreen extends React.Component {
    state = {
        loggedIn: null,
        register: false,
        email: null,
        password: null,
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    register() {
        const { email, password } = this.state

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ password: '' })
            })
            .catch((error) => {
                Alert.alert(error.message)
            })
    }

    login() {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ email: '', password: '' })
            })
            .catch((error) => {
                Alert.alert(error.message)
            })
    }

    renderButton() {
        if (this.state.register) {
            return (
                <View>
                    <TouchableHighlight
                        style={styles.confirm}
                        onPress={() => this.register()}
                    >
                        <Text style={styles.confirmText}>Register</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.setState({
                            register: false,
                            email: '',
                            password: ''
                        })}
                    >
                        <Text style={styles.switchRegister}>Already have account ?</Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View>
                    <TouchableHighlight
                        style={styles.confirm}
                        onPress={() => this.login()}
                    >
                        <Text style={styles.confirmText}>Log In</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.setState({
                            register: true,
                            email: '',
                            password: ''
                        })}
                    >
                        <Text style={styles.switchRegister}>Don't have account ?</Text>
                    </TouchableHighlight>
                </View>
            )

        }
    }


    render() {
        if (!this.state.loggedIn) {
            return (
                <View>
                    <View style={styles.welcome}>
                        <Text style={[styles.welcomeText, { fontStyle: 'italic' }]}>welcome to</Text>
                        <Text style={[styles.welcomeText, { fontSize: 36, marginTop: 40 }]}>Let Smile </Text>
                        <Text style={[styles.welcomeText, { fontSize: 18, marginTop: 10 }]}>โ—(ใ€€โ—  โ—ก โ— ใ€€)๏พ</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        autoCapitalize='none'
                    />
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        autoCapitalize='none'
                    />
                    {this.renderButton()}
                </View>
            )
        } else {
            return(
                
                    <View style={styles.container}>
                        <ShopNavigator />
                    </View>
                  
                
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    welcome: {
        alignSelf: 'center',
        marginBottom: 80
    },
    welcomeText: {
        alignSelf: 'center',
        fontSize: 16,
    },
    input: {
        marginBottom: 20,
        width: width - 120,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#AAA',
        color: '#555',
        fontSize: 18,
    },
    confirm: {
        paddingTop: 12,
        paddingBottom: 12,
        width: width - 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f1f1f1'
    },
    confirmText: {
        color: '#555',
        fontSize: 18,
        alignSelf: 'center',
    },
    switchRegister: {
        marginTop: 40,
        fontSize: 14,
        color: '#555'
    }
})