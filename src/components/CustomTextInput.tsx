/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'themes/Colors';

export type CustomTextInputProps = {
  isPassword?: boolean;
  style?: TextStyle;
  onChangeText?: (text: string) => void;
  error?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const [showPassword, togglePassword] = useState(false);

  const textColor = props.disabled
    ? Colors.disabled
    : props.error
    ? Colors.red
    : Colors.black;
  return (
    <View
      style={{
        borderRadius: 12,
        borderWidth: 1,
        borderColor: props.disabled ? Colors.disabled : Colors.grey,
        paddingHorizontal: 12,
        backgroundColor: props.disabled ? Colors.disabledBg : Colors.white,
      }}>
      <TextInput
        returnKeyLabel="Done"
        returnKeyType="done"
        keyboardType={'default'}
        {...props}
        placeholder={props.placeholder}
        value={props.value}
        editable={!props.disabled}
        secureTextEntry={props.isPassword && !showPassword}
        style={{
          ...props.style,
          // ...styles.textInput,
          minHeight: 32,
          fontSize: 14,
          color: textColor,
        }}
        onChangeText={props.onChangeText}
        placeholderTextColor={Colors.placeholder}
        autoFocus={false}
        autoCorrect={false}
        blurOnSubmit={false}
      />
      {props.isPassword && (
        <TouchableOpacity
          style={{
            marginTop: -25,
            alignSelf: 'flex-end',
          }}
          onPress={() => togglePassword(!showPassword)}>
          {/* {showPassword ? <EyeOpen /> : <EyeClosed />} */}
        </TouchableOpacity>
      )}
      {props.error && (
        <Text
          style={{
            color: Colors.red,
            marginBottom: 4,
          }}>
          {props.error}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
