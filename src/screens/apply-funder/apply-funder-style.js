import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 160,
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
  viewActionContainer: {
    justifyContent: "flex-end",
    flexDirection: 'row',
  },
  viewSliderTextContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 5,
    alignItems: "stretch",
    justifyContent: "center"
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
    // flex: 0.6,
    fontSize: 14,
    textAlign: 'right'
  },
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});