import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './list-funders-style';
import lnBackgroundColor from '../../config/linear-gradient-colors';

class ListFundersScreen extends Component {
  static navigationOptions = {
    title: 'Seleciona financiadora',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        {
          id: "00",
          name: "Renner",
          activated: false,
          credit: 2500,
          dueDate: '05 de maio de 2018'
        },
        {
          id: "02",
          name: "Casas Bahia",
          activated: false,
          credit: 3000,
          dueDate: '10 de maio de 2018'
        },
        {
          id: "03",
          name: "Submarino",
          activated: false,
          credit: 1000,
          dueDate: '15 de maio de 2018'
        }, {
          id: "04",
          name: "Magazine Luiza",
          activated: false,
          credit: 700,
          dueDate: '20 de maio de 2018'
        },
      ]
    };
  }

  _selectedFunderOnPress(funder) {
    this.props.navigation.navigate('NewPurchase', funder);
  }

  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this._selectedFunderOnPress(item)}>
        <View style={styles.item}>
          <View style={styles.itemLogo}>
            <Icon name="credit-card" size={40} color='#DCDCDC' />
          </View>
          <View style={styles.itemDetails}>
            <View style={styles.viewTextContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.viewTextContainer}>
              <Text style={styles.labelText}>Credito: </Text>
              <Text style={styles.valueText}>R$ {item.credit}</Text>
            </View>
            <View style={styles.viewTextContainer}>
              <Text style={styles.labelText}>Saldo: </Text>
              <Text style={styles.valueText}>R$ {item.credit}</Text>
            </View>
            <View style={styles.viewTextContainer}>
              <Text style={styles.labelText}>Vencimento: </Text>
              <Text style={styles.valueText}>{item.dueDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </LinearGradient>
    );
  }
}

export default connect()(ListFundersScreen);