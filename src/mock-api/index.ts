import { createServer, Model } from 'miragejs';
import {
  NetworkType,
  RewardSummary,
} from 'screen/reward-home/RewardHomeScreen';

const networkList: NetworkType[] = [
  {
    name: 'Gill Lucy',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy B',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy C',
    level: 1,
    network: 500,
  },
];

const rewardSummary: RewardSummary = {
  redeemableReward: 22500000,
  monthlyReward: 1600000,
  totalReferenceNetwork: 50,
  referralCode: 'YBSH21',
  referenceNetworkList: networkList,
};

export default function () {
  return createServer({
    models: {
      reminder: Model,
    },

    routes() {
      this.get('/profile', () => ({
        data: {
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          imageUrl: '',
          birthDate: new Date(),
          phoneNumber: '(+62) 812312312',
          gender: 'male',
        },
      }));

      this.get('/reward/summary', () => ({
        data: rewardSummary,
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
