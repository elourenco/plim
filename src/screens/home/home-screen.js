import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { applicationActions } from '../../redux/actions';
import styles from './home.style';

class HomeScreen extends Component {
  componentWillMount() {
    this.props.fetchApplication();
  }

  render() {
    if (this.props.initialState || this.props.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    const { name, version } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {name}
        </Text>
        <Text style={styles.instructions}>
          {version}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ application }) => {
  const { initialState, loading, payload } = application.data;
  if (payload) {
    const { name, version } = payload;
    return { initialState, loading, name, version };
  }

  return { initialState, loading };
};

const mapActionsToProps = {
  fetchApplication: applicationActions.fetch
};

export default connect(mapStateToProps, mapActionsToProps)(HomeScreen);