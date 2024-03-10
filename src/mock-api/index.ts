import { createServer, Model } from 'miragejs';
import { cartItems, product, profile, rewardSummary } from './constant';

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

      let newId = 4;
      this.post('/api/reminders', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { reminder: attrs };
      });
    },
  });
}
