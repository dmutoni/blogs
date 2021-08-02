import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const Button = (props) => {
  return (
    <Pressable onPress={props.onPress} style={{...styles.button, ...props.style}}>
      <Text style={{...styles.text, ...props.textStyles}}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default Button;
