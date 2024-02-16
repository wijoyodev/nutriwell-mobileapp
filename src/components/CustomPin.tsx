/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Colors from 'themes/Colors';

export type CustomPinProps = {
  value: string;
  onChangeValue: (text: string) => void;
};

const CustomPin: React.FC<CustomPinProps> = ({ value, onChangeValue }) => {
  const placeholder = (
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 25,
        opacity: 0.3,
        backgroundColor: Colors.blue,
      }}
    />
  );
  const mask = (
    <View
      style={{
        width: 16,
        height: 16,
        borderRadius: 25,
        backgroundColor: Colors.blue,
      }}
    />
  );

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <SmoothPinCodeInput
        placeholder={placeholder}
        codeLength={6}
        mask={mask}
        password={true}
        maskDelay={500}
        cellStyle={null}
        cellStyleFocused={null}
        value={value}
        autoFocus={true}
        onTextChange={onChangeValue}
      />
    </View>
  );
};

export default CustomPin;
