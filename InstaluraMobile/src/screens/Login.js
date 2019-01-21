import React, {Component} from 'react';
import {Button , Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
const width = Dimensions.get('screen').width;

export default class Login extends Component{

    constructor(){
        super();
        this.state = {
            usuario:'',
            senha:'',
            messagem:''
        }
    }

    efetuaLogin(){
        const uri = 'https://instalura-api.herokuapp.com/api/public/login';

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            }),
            headers: new Headers({
                'Content-type':'application/json'
            })
        }

        fetch(uri, requestInfo).then(response => {
            if(response.ok) return response.text();

            throw new Error('Não foi possível efetuar login');
        })
        .then(token => {
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('usuario', this.state.usuario);
        })
        .catch(error => this.setState({messagem: error.message}));


    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                               placeholder="Usuário..."
                               onChangeText={text => this.setState({usuario: text})}
                               autoCapitalize="none"
                    />
                    <TextInput style={styles.input}
                               placeholder="Senha..."
                               onchangeText={text => this.setState({senha: text})}
                               secureTextEntry={true}
                    />

                    <Button
                        style={styles.button}
                        title="Login"
                        onPress={this.efetuaLogin.bind(this)}
                    />

                </View>

                <Text style={styles.mensagem}>
                    {this.state.messagem}
                </Text>
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
    },
    mensagem:{
        marginTop: 15,
        color: '#e74c3c'
    }
});