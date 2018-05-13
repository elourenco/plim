import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './list-funders-style';
import lnBackgroundColor from '../../config/linear-gradient-colors';

class ListFundersScreen extends Component {
  static navigationOptions = {
    title: 'Financiadoras',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        { id: "00", name: "Relâmpago McQueen" },
        { id: "01", name: "Agente Tom Mate" },
        { id: "02", name: "Doc Hudson" },
        { id: "03", name: "Cruz Ramirez" }
      ]
    };
  }

  renderItem(item) {
    return (
      <View style={styles.item}>
        <View style={styles.itemLogo}>
          <Icon name="money-off" size={40} color='#DCDCDC' />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({item}) => this.renderItem(item)}
        />
      </LinearGradient>
    );
  }
}

export default connect()(ListFundersScreen);