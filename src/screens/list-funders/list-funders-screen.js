import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, Item, Input, Label, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './list-funders-style';
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { purchaseActions } from '../../redux/actions';
import LoadingView from '../../components/loading-view';
import currencyFormatter from 'currency-formatter';


class ListFundersScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Seleciona financiadora',
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.push('ApplyFunder')}>
        <Icon style={{ marginRight: 8 }} name="add-to-list" size={24} color='#fff' />
        </TouchableOpacity>
      ),
    }
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
    const disabledItem = item.status === 'await'
    return (
      <TouchableOpacity style={{opacity: disabledItem ? 0.3: 1}} 
        disabled={disabledItem} 
        onPress={() => this._selectedFunderOnPress(item)}>
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
              <Text style={styles.valueText}>{currencyFormatter.format(item.credit, { locale: 'pt-BR' })}</Text>
            </View>
            <View style={styles.viewTextContainer}>
              <Text style={styles.labelText}>Saldo: </Text>
              <Text style={styles.valueText}>{currencyFormatter.format(item.balance, { locale: 'pt-BR' })}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { loading, fundersByUser, error } = this.props.purchase
    if (loading) {
      return <LoadingView />
    } 
    
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <FlatList
          data={ fundersByUser }
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