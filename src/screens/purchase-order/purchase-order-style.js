import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  infoHeaderPurchases:{
    padding:20,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
  },
  infoPurchases:{
    flex: 1,
    padding:20,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
  },
  fieldKey:{
    margin:5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  fieldValue:{
    fontWeight: '100',
  },
});