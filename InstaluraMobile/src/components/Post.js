import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import InputComentario from "./InputComentario";
import Likes from "./Likes";

const width = Dimensions.get('screen').width;

export default class Post extends Component{

    exibeLegenda(foto){

        if (foto.comentario === '') {
            return;
        }

        return(
            <View style={styles.comentarios}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    render(){
        const { foto, likeCallback, comentarioCallback } = this.props;
        return(
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{uri: foto.urlPerfil}}
                           style={styles.fotoDePerfil}/>
                    <Text>{foto.loginUsuario}</Text>
                </View>

                <Image source={{uri: foto.urlFoto}}
                       style={styles.fotoDoPost}/>
                <View style={styles.rodape}>

                    <Likes likeCallback={likeCallback} foto={foto}/>

                    {this.exibeLegenda(foto)}

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comentarios} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}
                    <InputComentario
                        idFoto={foto.id}
                        comentarioCallback={comentarioCallback}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width:40,
        height:40
    },
    fotoDoPost: {
        width:width,
        height:width
    },
    rodape: {
        margin: 10
    },
    comentarios: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }
});