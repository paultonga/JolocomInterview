import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    overflow: 'hidden',
  },
  pageHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  pageHeaderText: {
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 20,
  },
  pageDescriptionText: {
    fontSize: 15,
    textAlign: 'center',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    marginBottom: 20,
  },
  formInputWrapper: {
    flex: 1,
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  formInput: {
    flex: 1,
    borderWidth: 1.5,
    fontSize: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderColor: '#bababa',
    backgroundColor: '#d3d3d3',
    fontWeight: '600',
    color: 'black',
  },
});
