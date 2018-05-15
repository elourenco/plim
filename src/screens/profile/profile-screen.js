import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signActions } from '../../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Text } from 'native-base';
import LoadingView from '../../components/loading-view';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';

import styles from './profile-style';

class ProfileScreen extends Component {

  componentDidMount() {
    this.props.signProfile()
  }

  signOutOnPress() {
    this.props.signOutProfile()
      .then(() => this.props.navigation.navigate('AuthContainers'));
  }

  render() {
    const { loading, email, cpf, name, address } = this.props.profile;
    if (loading) {
      return <LoadingView />
    } else {
      return (
        <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
          <View style={styles.card}>
            <View style={styles.viewDisplay}>
            <Icon
              name="account-circle"
              size={80}
              color="#f1f1f1"
              style={styles.displayLogo} />
            </View>
            <View style={styles.sectionInfo}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
              <Text style={{fontSize: 14}}>{email}</Text>
            </View>
            <Button block style={styles.logoffButton} 
              onPress={() => this.signOutOnPress()} >
              <Text>Sair</Text>
            </Button>
          </View>
        </LinearGradient>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(signActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);