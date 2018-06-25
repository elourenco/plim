import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import firebase from './config/firebase';
//
// internal modules

import store from './redux/store-redux';
import Navigator from './navigator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = null;
  }

  componentWillMount() {
    this.store = store.configure();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;