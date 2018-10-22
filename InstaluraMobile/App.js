/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Post from "./src/components/Post";

type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super();
    this.state = {
      fotos:[]
    };
  }

  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => this.setState({fotos:json}))
  }

  render() {

    return (

        <FlatList style={styles.container}
            keyExtractor={item => String(item.id)}
            data={this.state.fotos}
            renderItem={ ({item}) =>
                <Post foto={item} />
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});
