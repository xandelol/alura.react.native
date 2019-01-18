import React, {Component} from 'react';
import {Button , Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
const width = Dimensions.get('screen').width;

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Usuário..." onchangeText={text => this.setState({usuário: text})}/>
                    <TextInput style={styles.input} placeholder="Senha..." onchangeText={text => this.setState({senha: text})}/>

                    <Button
                        style={styles.button}
                        title="Login"
                        onPress={() => console.warn("Login")}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: width *0.8,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        textAlign: 'center',
        marginBottom: 40
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#000',
        marginBottom: 20
    }
});