import { createServer, Model } from 'miragejs';
import {
  address,
  cartItems,
  historyList,
  historyRewardSummary,
  imageUrlTes,
  networkDetail,
  networkList,
  orderHistoryList,
  paymentList,
  product,
  profile,
  rewardSummary,
  shippingOptions,
} from './constant';

export default function () {
  return createServer({
    models: {
      reminder: Model,
    },

    routes() {
      this.get('/profile', () => ({
        data: profile,
      }));

      this.get('/reward/summary', () => ({
        data: rewardSummary,
      }));

      this.get('/product', () => ({
        data: product,
      }));

      this.get('/cart', () => ({
        data: cartItems,
      }));

      this.get('/shipping-option', () => ({
        data: shippingOptions,
      }));

      this.get('/payment-method', () => ({
        data: paymentList,
      }));

      this.get('/checkout', () => ({
        data: {
          items: cartItems,
          address: address,
        },
      }));

      this.get('/order/history', () => ({
        data: orderHistoryList,
      }));

      this.get('/network', () => ({
        data: networkDetail,
      }));

      this.get('/network/level', () => ({
        data: networkList,
      }));

      this.get('/network/all', () => ({
        data: networkList,
      }));

      this.get('/reward/history', () => ({
        data: {
          summary: historyRewardSummary,
          history: historyList,
        },
      }));

      this.get('/upline', () => ({
        data: {
          summary: historyRewardSummary,
          history: historyList,
        },
      }));

      this.post('/login', (schema, request) => {
        let body = JSON.parse(request.requestBody);
        if (body.email === 'yahya@gmail.com' && body.pin === '070700') {
          return {
            success: true,
            data: {
              accessToken: 'token',
            },
          };
        }
        return {
          success: false,
          data: null,
        };
      });

      this.post('/media/upload', (_, request) => {
        console.log('Ini di mock: ', request);
        return {
          success: true,
          data: {
            imageUrl: imageUrlTes,
          },
        };
      });

      let newId = 4;
      this.post('/api/reminders', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { reminder: attrs };
      });
    },
  });
}
