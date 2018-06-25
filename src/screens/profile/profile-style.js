import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
  
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 7,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#0084ec',
    shadowOpacity: 0.6,
    shadowRadius: 5
  },
  viewDisplay: {
    borderRadius: 50,
    backgroundColor: '#fff'
  },
  displayLogo: {
    margin: 8
  },
  sectionInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoffButton: {
    margin: 40,
  }
});