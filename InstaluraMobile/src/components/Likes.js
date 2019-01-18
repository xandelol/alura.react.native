import {Image, TouchableOpacity, View, StyleSheet, Text} from "react-native";
import React, {Component} from "react";

export default class Likes extends Component{

    carregaIcone(likeada){
        return likeada ? require('../../resources/resources/img/s2-checked.png'):
            require('../../resources/resources/img/s2.png');
    }

    exibeLikes(likers){

        if (likers.length <= 0) {
            return;
        }

        return (
            <Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
        );
    }

    render(){
        const { likeCallback, foto } = this.props;
        return(
            <View>
                <TouchableOpacity onPress={() => {likeCallback(foto.id)}}>
                    <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)}/>
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    likes:{
        fontWeight: 'bold'
    },
    botaoDeLike:{
        marginBottom: 10,
        width: 30,
        height: 30
    }
});