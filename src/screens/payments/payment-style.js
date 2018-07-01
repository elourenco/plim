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
    padding: 8,
    flexDirection: 'column',
  },
  monthDetailsTitleText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff'
  },
  slideMonth: {
    flex:1,
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'visible',
    backgroundColor: 'white', 
    // overflow: 'hidden'
  },
  stretch:{
    width: slideWidth - 20,
    margin: 8,
  },
  itemStatement: {
    flex: 1,
    margin: 3,
    height: 100,
    borderRadius: 4,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  itemStatementLogoStore: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemStatementDesc: {
    flex: 1,
    margin: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemStatementValue: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemStatementDescStore: {
    fontSize: 12,
  },
  itemStatementDescStoreLoc: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '100',
  },
  itemStatementDescProd: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemStatementDescDate: {
    fontSize: 12,
    fontWeight: '100',
  },
  itemStatementValueLoop: {

  },
  itemStatementValueTotal: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});