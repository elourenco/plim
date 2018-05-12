import React, { Component } from 'react';
import {
  View, ActivityIndicator, Alert
} from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Item, Input, Label, Text, Card, Body, CardItem } from 'native-base';
import { connect } from 'react-redux';
import { authUpActions } from '../../../redux/actions';
import { hasIsNullOrEmpty } from '../../../helpers/object-helper';
import FadeView from '../../../components/fade-view';

class AddressValidationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bairro: '',
      cep: '',
      complemento: '',
      localidade: '',
      number: '',
      logradouro: '',
      uf: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.profile !== this.props.profile) {
      if (this.props.profile.address) {
        const { bairro, cep, localidade, logradouro, uf } = this.props.profile.address
        this.setState({ bairro, cep, localidade, logradouro, uf })
      }
    }
  }

  signUpAndNextPreprocess(address) {
    this.props.signUpUpdateProfileWithAddress(address)
      .then(() => {
        this.props.nextFn();
      })
  }

  findAddressByCep(cep) {
    this.props.signUpAddressByCep(cep);
  }


  previousPreprocess() {
    this.props.prevFn();
  }

  renderLoadingInButton() {
    const { loading } = this.props.profile;
    if (loading) {
      return <ActivityIndicator size="small" color="#fff" />
    }

    return <Text>Finalizar</Text>
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
        <Item floatingLabel>
          <Label style={{ color: 'white' }} >CEP</Label>
          <Input style={{ color: 'white' }}
            keyboardType="numeric"
            autoFocus={true}
            maxLength={9}
            value={this.state.cep}
            onChangeText={(text) => {
              this.setState({ cep: text })
              if (text.length === 8) {
                this.findAddressByCep(text)
              }
            }
            }
          />
        </Item>
        <FadeView visible={true}>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Logradouro</Label>
            <Input style={{ color: 'white' }}
              value={this.state.logradouro}
              onChangeText={(text) => this.setState({ logradouro: text })} />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Número</Label>
            <Input style={{ color: 'white' }}
              value={this.state.number}
              onChangeText={(text) => this.setState({ number: text })} />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Complemento</Label>
            <Input style={{ color: 'white' }}
              value={this.state.complemento}
              onChangeText={(text) => this.setState({ complemento: text })} />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Bairro</Label>
            <Input style={{ color: 'white' }}
              value={this.state.bairro}
              onChangeText={(text) => this.setState({ bairro: text })} />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>UF</Label>
            <Input style={{ color: 'white' }}
              value={this.state.uf}
              onChangeText={(text) => this.setState({ uf: text })} />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Cidade</Label>
            <Input style={{ color: 'white' }}
              value={this.state.localidade}
              onChangeText={(text) => this.setState({ localidade: text })} />
          </Item>
        </FadeView>
        <Button style={{ marginTop: 50 }}
          disabled={this.props.profile.address == null}
          block
          onPress={() => this.signUpAndNextPreprocess(this.state)} >
          {this.renderLoadingInButton()}
        </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authUpActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressValidationScreen);