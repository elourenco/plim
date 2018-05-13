import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 125,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#0084ec',
    shadowOpacity: 0.6,
    shadowRadius: 5
  },
  itemLogo: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDetails: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 8
  }
});