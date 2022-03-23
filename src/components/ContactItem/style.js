import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  left: {
    alignSelf: 'center',
    paddingVertical: 10,
    width: 22,
  },
  numberText: {
    fontSize: 12,
    textAlign: 'right',
  },
  right: {
    paddingHorizontal: 14,
    marginVertical: 10,
    flexGrow: 1,
  },
});

export default style;
