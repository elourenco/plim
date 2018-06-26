import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(1);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  monthChartContainer: {
    flex: 1,
    marginBottom: 8

  },
  monthDetails: {
    flex: 1,
    margin: 8,
    flexDirection: 'column',
  },
  monthDetailsTitleText: {
    fontSize: 20, 
    textAlign: 'left'
  },
  slideMonth: {
    flex:1,
    marginTop: 10,
    borderRadius: 8,
    overflow: 'visible',
    backgroundColor: 'white', 
  },
});