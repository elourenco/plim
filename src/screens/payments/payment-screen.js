import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import lnBackgroundColor from '../../config/linear-gradient-colors';

import styles from './payment-style';
import { sliderWidth, itemWidth } from './payment-style';

class PaymentScreen extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      slider1ActiveSlide: 0
};
    this.data = [];
    for (let i = 1; i <= 12; i++) {
      this.data.push({ key: i, num: i });
    }
  };

  space() {
    return (<View style={{ height: 50, width: 2, backgroundColor: 'black' }} />)
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slideMonth}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.num}</Text>
      </View>
    );
  }

  render() {
    return (
      <LinearGradient colors={lnBackgroundColor.backgroundColor} style={styles.container}>
        <View style={styles.monthChartContainer}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={this.data}
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
          {/* <Pagination
            dotsLength={this.data.length}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={{ paddingVertical: 8 }}
            dotColor={'rgba(255, 255, 255, 0.92)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor='#000'
            inactiveDotOpacity={0.2}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          /> */}
        </View>
        <View style={styles.monthDetails}>
          <Text style={styles.monthDetailsTitleText}>Extrato do mês:</Text>
          <FlatList
            data={this.data}
            renderItem={({ item }) =>
              <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.num}</Text>
            }
          />
        </View>
      </LinearGradient>
    );
  }
}

export default connect()(PaymentScreen);