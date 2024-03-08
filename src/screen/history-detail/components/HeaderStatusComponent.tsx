/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryDetail } from '../HistoryDetailScreen';
import Status from 'themes/Status';

export type HeaderStatusComponentProps = {
  history: HistoryDetail;
};

const HeaderStatusComponent: React.FC<HeaderStatusComponentProps> = ({ history }) => {
  const statusLabel = Status.get(history.status)?.headerLabel ?? '';
  const headerColor = Status.get(history.status)?.headerColor ?? '';
  const headerDescription =
    Status.get(history.status)?.headerDescription?.(
      history.payment.date,
      history.payment.name,
      history.shipping.etdDate,
    ) ?? '';

  if (history.status === 3) {
    return <></>;
  }
  return (
    <View style={{ padding: 16, backgroundColor: headerColor }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
        {statusLabel}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          marginTop: 6,
          lineHeight: 20,
        }}>
        {headerDescription}
      </Text>
    </View>
  );
};

export default HeaderStatusComponent;
