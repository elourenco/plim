import React, { Component } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import lnBackgroundColor from '../../config/linear-gradient-colors';
import moment from 'moment';

import styles from './payment-style';
import { sliderWidth, itemWidth } from './payment-style';

class PaymentScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slider1ActiveSlide: moment().month()
    };
    this.data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    this.months = [];
    for (let i = 0; i < 11; i++) {
      this.months.push({ key: i, month: moment().month(i).format('MMMM YYYY') });
    }

  };

  space() {
    return (<View style={{ height: 50, width: 2, backgroundColor: 'black' }} />)
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slideMonth}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.month}</Text>
        <Image
          style={styles.stretch}
          resizeMode='contain'
          source={require('../../img/graficoLinhaMes.png')}
        />
      </View>
    );
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <View style={styles.monthChartContainer}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={this.months}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={this.state.slider1ActiveSlide}
            inactiveSlideScale={0.90}
            inactiveSlideOpacity={0.6}
            contentContainerCustomStyle={{ paddingVertical: 10 }}
            loop={false}
            autoplay={false}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
          />

        </View>
        <View style={styles.monthDetails}>
          <Text style={styles.monthDetailsTitleText}>Extrato</Text>
          <FlatList
            data={this.months}
            renderItem={({ item }) =>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.month}</Text>
            }
          />
        </View>
      </LinearGradient>
    );
  }
}

export default connect()(PaymentScreen);