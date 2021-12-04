import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// Constants
import {theme} from '../constants';

// Theme
const {COLORS, FONTS} = theme;

const Button = ({completed}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => console.log('Button pressed!')}>
      <Text style={styles.btnText}>{completed ? "Let's Go" : 'Skip'}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.blue,
  },
  btnText: {
    ...FONTS.h1,
    color: COLORS.white,
  },
});
