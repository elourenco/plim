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
    shadowColor: '#000000',
    shadowOpacity: 0.3,
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
  },
  viewTextContainer: {
    flex:1,
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  labelText: {
    flex: 0.4,
    fontSize: 14,
    color: 'gray',
    textAlign: 'left'
  },
  valueText: {
    flex: 0.6,
    fontSize: 14,
    textAlign: 'right'
  }
});