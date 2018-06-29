import React, { Component } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import lnBackgroundColor from '../../config/linear-gradient-colors';
import { paymentActions } from '../../redux/actions';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';
import currencyFormatter from 'currency-formatter';

import styles from './payment-style';
import { sliderWidth, itemWidth } from './payment-style';

class PaymentScreen extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      slider1ActiveSlide: moment().month()
    };
    
    this.months = [];
    
    for (let i = 0; i < 11; i++) {
      this.months.push({ key: i, month: moment().month(i).format('MMMM YYYY') });
    }

  };

  componentWillMount() {
    this.props.monthlyStatement(this.state.slider1ActiveSlide)
  }

  _renderItemCarousel({ item, index }) {
    return (
      <View style={styles.slideMonth}>
        <Text style={{ fontSize: 20, textAlign: 'center', color:'gray' }}>{item.month}</Text>
        <Image
          style={styles.stretch}
          resizeMode='contain'
          source={require('../../img/graficoLinhaMes.png')}
        />
      </View>
    );
  }

  _renderItemFlatList({ item, index }) {
    return (
      <View style={styles.itemStatement}>
        <View style={styles.itemStatementLogoStore}>
          <Icon name="credit-card" size={40} color='#DCDCDC' />
        </View>
        <View style={styles.itemStatementDesc}>
        <Text style={styles.itemStatementDescDate}>{moment(item.createDate.toDate()).format('dd, DD MMMM YYYY')}</Text>
          <Text style={styles.itemStatementDescProd}>{item.description}</Text>
          <Text style={styles.itemStatementDescStore}>{item.store.name}</Text>
          <Text style={styles.itemStatementDescStoreLoc}>{item.store.location}</Text>
        </View>
        <View style={styles.itemStatementValue}>
          <Text style={styles.itemStatementValueLoop}>{item.numberOfLoop > 1 ? item.numberOfLoop + ' x ' +  currencyFormatter.format((item.price / item.numberOfLoop), { locale: 'pt-BR' }) : 'À vista'}</Text>
          <Text style={styles.itemStatementValueTotal}>{currencyFormatter.format(item.price, { locale: 'pt-BR' })}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <View style={styles.monthChartContainer}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={this.months}
            renderItem={this._renderItemCarousel}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={this.state.slider1ActiveSlide}
            inactiveSlideScale={0.90}
            inactiveSlideOpacity={0.6}
            contentContainerCustomStyle={{ paddingVertical: 10 }}
            loop={false}
            autoplay={false}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }, () => {
              this.props.monthlyStatement(index);
            })}
          />

        </View>
        <View style={styles.monthDetails}>
          <Text style={styles.monthDetailsTitleText}>Extrato</Text>
          <FlatList
            data={this.props.payment.monthlyStatement}
            renderItem={this._renderItemFlatList}
          />
        </View>
      </LinearGradient>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    payment: state.payment
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(paymentActions.actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);