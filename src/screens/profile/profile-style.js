import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#0084ec',
    shadowOpacity: 0.6,
    shadowRadius: 5
  },
  displayLogo: {
    margin: 15,
  },
  sectionInfo: {
    margin: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoffButton: {
    margin: 40,
  }
});