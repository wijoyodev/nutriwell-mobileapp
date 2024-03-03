/* eslint-disable react-native/no-inline-styles */
import React, { JSXElementConstructor, useRef } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomModal, { CustomModalHandle } from './CustomModal';

export type CustomPickerProps = {
  style?: TextStyle;
  containerStyle?: ViewStyle;
  onChangeText?: (text: string) => void;
  error?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  items?: any[];
  renderOption: (a: any) => any;
  onSelect: (item: any) => void;
};

const CustomPicker: React.FC<CustomPickerProps> = props => {
  const textColor = props.disabled
    ? Colors.disabled
    : props.error
    ? Colors.red
    : Colors.black;
  const modalRef = useRef<CustomModalHandle | null>();
  return (
    <>
      <TouchableOpacity
        onPress={() => modalRef.current?.openModal()}
        style={{
          ...props.containerStyle,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: props.disabled ? Colors.disabled : Colors.grey,
          paddingHorizontal: 12,
          paddingVertical: 8,
          backgroundColor: props.disabled ? Colors.disabledBg : Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {props.value ? (
          <Text style={{ fontSize: 14, color: textColor }}>{props.value}</Text>
        ) : (
          <Text style={{ fontSize: 14 }}>{props.placeholder}</Text>
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
        <Icon name={'chevron-down'} color={Colors.black} />
      </TouchableOpacity>
      <CustomModal
        animationType="slide"
        isPicker={true}
        ref={e => (modalRef.current = e)}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 16,
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 8,
            }}>
            {props.title}
          </Text>

          <FlatList
            data={props.items}
            renderItem={(info: ListRenderItemInfo<any>) => (
              <TouchableOpacity
                onPress={() => {
                  props.onSelect(info.item);
                  modalRef.current?.closeModal();
                }}>
                {props.renderOption(info.item)}
              </TouchableOpacity>
            )}
          />
        </View>
      </CustomModal>
    </>
  );
};

export default CustomPicker;
