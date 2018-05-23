import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './list-funders-style';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { purchaseActions } from '../../redux/actions';
import LoadingView from '../../components/loading-view';

class ListFundersScreen extends Component {
  static navigationOptions = {
    title: 'Seleciona financiadora',
  };

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.fundersByUser();
  }

  _selectedFunderOnPress(funder) {
    this.props.selectFunder(funder)
      .then(() => this.props.navigation.push('NewPurchase', funder));
  }

  renderItem(item) {
    console.log('>>', item);
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
              <Text style={styles.valueText}>{moment.unix(item.dueDate.seconds).format('DD MMMM YYYY')}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { loading, funders, error } = this.props.purchase
    if (loading) {
      return <LoadingView />
    } 
    
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <FlatList
          data={funders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </LinearGradient>
    );


  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    purchase: state.purchase
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(purchaseActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFundersScreen);