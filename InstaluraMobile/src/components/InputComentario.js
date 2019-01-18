import React, {Component} from 'react';
import {Dimensions, StyleSheet, Image, TextInput, TouchableOpacity, View} from 'react-native';

const width = Dimensions.get('screen').width;

export default class InputComentario extends Component{

    constructor(){
        super();
        this.state = {
            valorComentario: ''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Adicione um comentário..."
                           ref={input => this.inputComentario = input}
                           onChangeText={texto => this.setState({valorComentario: texto})}
                />
                <TouchableOpacity onPress={() => {
                    this.props.comentarioCallback(this.state.valorComentario, this.inputComentario, this.props.idFoto)
                    this.setState({valorComentario: ''})
                }}>
                    <Image style={styles.icone} source={require('../../resources/resources/img/send.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    icone: {
        width:30,
        height:30
    },
    input: {
        flex: 1,
        height: 40
    }
});