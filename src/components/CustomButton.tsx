/* eslint-disable react-native/no-inline-styles */
import React, { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Colors from 'themes/Colors';

type CustomButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  text: string;
  backgroundColor?: string;
  buttonIcon?: ReactElement;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  disabled,
  text,
  backgroundColor,
  buttonIcon,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: backgroundColor,
        opacity: disabled ? 0.5 : 1,
        ...containerStyle,
      }}
      disabled={disabled}>
      {buttonIcon}
      <Text
        style={{
          ...styles.buttonText,
          ...textStyle,
          fontSize: 14,
          marginLeft: buttonIcon ? 15 : 0,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default CustomButton;
