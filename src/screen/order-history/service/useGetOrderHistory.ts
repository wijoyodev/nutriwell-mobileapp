import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistory, {
  OrderHistoryResponse,
} from 'network/shop/order-history';

export type OrderHistory = {
  id: string;
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  totalPrice: number;
};

export type HistoryItem = {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  imageUrl: string;
};

const useGetOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getOrderHistory().then(response => {
        setLoading(false);
        setOrderHistory(mapOrderHistoryResponse(response.result));
      });
    }, []),
  );

  return { loading, orderHistory };
};

const mapOrderHistoryResponse: (
  response: OrderHistoryResponse[],
) => OrderHistory[] = (response: OrderHistoryResponse[]) => {
  return response.map(history => ({
    id: history.id,
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
        imageUrl: history.product_detail.product_image,
      },
    ],
  }));
};

export default useGetOrderHistory;
