import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistory, {
  OrderHistoryItemResponse,
} from 'network/shop/order-history';

export type OrderHistory = {
  id: string;
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  totalPrice: number;
  paymentUrl: string;
};

export type HistoryItem = {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  imageUrl: string;
};

const useGetOrderHistory = (status: number, offset: number) => {
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      if (offset === 0) {
        setOrderHistory([]);
      }
      getOrderHistory({ status, offset }).then(response => {
        console.log(
          'Response order history list: ',
          response,
          ' offset: ',
          offset,
        );
        setLoading(false);

        const histories: OrderHistory[] = mapOrderHistoryResponse(
          response.result.data,
        );
        const orderHistoryList: OrderHistory[] =
          offset === 0 ? histories : [...orderHistory, ...histories];
        setOrderHistory(orderHistoryList);
      });
    }, [offset, status]),
  );

  return { loading, orderHistory };
};

const mapOrderHistoryResponse: (
  response: OrderHistoryItemResponse[],
) => OrderHistory[] = (response: OrderHistoryItemResponse[]) => {
  return response.map(history => ({
    id: history.id.toString(),
    orderId: history.order_number,
    createdDate: new Date(history.created_at),
    status: history.status,
    totalPrice: history.total_purchase,
    items: [
      {
        name: history.product_detail.product_name,
        quantity: history.product_detail.quantity,
        price: history.product_detail.price,
        totalPrice: history.product_detail.total_price,
        imageUrl: history.product_detail.product_image?.[0] ?? '',
      },
    ],
    paymentUrl: history.payment_url,
  }));
};

export default useGetOrderHistory;
