/* eslint-disable react-native/no-inline-styles */
import CustomPin from 'components/CustomPin';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

export type PinConfirmationComponentProps = {
  selectedPin: string;
  onComplete?: (pin: string) => void;
};

const PinConfirmationComponent: React.FC<PinConfirmationComponentProps> = ({
  selectedPin,
  onComplete,
}) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (pin.length === 6) {
      if (selectedPin === pin) {
        onComplete?.(pin);
      } else {
        setError('Pin tidak sesuai');
      }
    } else {
      setError('');
    }
  }, [pin, onComplete, selectedPin]);

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: Colors.black,
        }}>
        Konfirmasi PIN
      </Text>
      <Text
        style={{
          color: Colors.black,
          fontSize: 14,
          marginTop: 8,
          marginBottom: 78,
        }}>
        Silakan konfirmasi ulang pin Anda. Pastikan pin yang Anda masukkan sama.
      </Text>

      <CustomPin value={pin} onChangeValue={setPin} />
      {error && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 4,
          }}>
          <Text style={{ color: Colors.red }}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default PinConfirmationComponent;
