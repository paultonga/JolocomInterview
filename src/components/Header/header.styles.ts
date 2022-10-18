import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    ...Platform.select({
      ios: {
        marginTop: 40,
      },
    }),
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
