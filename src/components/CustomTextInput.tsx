/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from 'themes/Colors';

export type CustomTextInputProps = {
  isPassword?: boolean;
  style?: TextStyle;
  containerStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  error?: string;
  value?: string;
  renderValue?: (text: string) => string;
  placeholder?: string;
  disabled?: boolean;
  prefix?: string;
  keyboardType?: KeyboardTypeOptions;
};

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const [showPassword, togglePassword] = useState(false);

  const textColor = props.disabled
    ? Colors.disabled
    : props.error
    ? Colors.red
    : Colors.black;
  return (
    <>
      <View
        style={{
          ...props.containerStyle,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: props.disabled ? Colors.disabled : Colors.grey,
          paddingHorizontal: 12,
          backgroundColor: props.disabled ? Colors.disabledBg : Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {props.prefix && (
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            {props.prefix}
          </Text>
        )}
        <TextInput
          returnKeyLabel="Done"
          returnKeyType="done"
          keyboardType={props.keyboardType}
          {...props}
          placeholder={props.placeholder}
          value={props.value}
          editable={!props.disabled}
          secureTextEntry={props.isPassword && !showPassword}
          style={{
            ...props.style,
            // ...styles.textInput,
            flex: 1,
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
      </View>
      {props.error && (
        <Text
          style={{
            color: Colors.red,
            marginBottom: 4,
            marginTop: 4,
            fontSize: 12,
          }}>
          {props.error}
        </Text>
      )}
    </>
  );
};

export default CustomTextInput;
