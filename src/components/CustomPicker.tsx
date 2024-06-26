/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
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
  error?: string;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  items?: any[];
  renderOption: (a: any) => any;
  renderValue?: (a: any) => any;
  onSelect?: (item: any) => void;
  loading?: boolean;
  enableSearch?: boolean;
  placeholderSearch?: string;
  onChangeSearch?: (text: string) => void;
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
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: props.disabled ? Colors.disabledBg : Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {props.value ? (
          <Text style={{ fontSize: 14, color: textColor }}>
            {props.renderValue ? props.renderValue?.(props.value) : props.value}
          </Text>
        ) : (
          <Text style={{ fontSize: 14, color: Colors.lightGrey }}>
            {props.placeholder}
          </Text>
        )}
        <Icon name={'chevron-down'} color={Colors.black} />
      </TouchableOpacity>
      {props.error && (
        <Text
          style={{
            color: Colors.red,
            marginTop: 4,
            fontSize: 12,
          }}>
          {props.error}
        </Text>
      )}
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
            maxHeight: '90%',
          }}>
          <Text
            style={{
              color: Colors.black,
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 8,
            }}>
            {props.title ? props.title : props.placeholder}
          </Text>

          {props.loading && (
            <ActivityIndicator color={Colors.blue} size={'large'} />
          )}
          {props.enableSearch && (
            <TextInput
              placeholderTextColor={Colors.grey2}
              style={{
                paddingHorizontal: 0,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: Colors.grey,
                color: Colors.black,
              }}
              onChangeText={value => {
                props.onChangeSearch?.(value);
              }}
              placeholder={props.placeholderSearch}
            />
          )}
          {(props?.items ?? []).length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.items}
              renderItem={(info: ListRenderItemInfo<any>) => (
                <TouchableOpacity
                  onPress={() => {
                    props.onSelect?.(info.item);
                    modalRef.current?.closeModal();
                  }}>
                  {props.renderOption ? (
                    props.renderOption(info.item)
                  ) : (
                    <Text
                      style={{
                        color: Colors.black,
                        fontSize: 14,
                        paddingVertical: 8,
                      }}>
                      {info.item}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            />
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
              }}>
              <Text>Tidak ada data</Text>
            </View>
          )}
        </View>
      </CustomModal>
    </>
  );
};

export default CustomPicker;
