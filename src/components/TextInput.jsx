import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  errorBox: {
    borderWidth: 2,
    borderColor: theme.colors.error,
    marginBottom: 0,
  },
  inputFields: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: theme.colors.background,
    padding: 10,
    borderRadius: 5,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.inputFields, error && styles.errorBox, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
