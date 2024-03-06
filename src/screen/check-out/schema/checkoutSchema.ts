import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
    notNull: 'Field can not be empty.',
  },
});

export const checkoutSchema = object().shape({
  paymentMethod: object().nonNullable().shape({
    name: string().required(),
  }),
  shippingOption: object().nonNullable().shape({
    name: string().required(),
  }),
  address: object().nonNullable().shape({
    name: string().required(),
  }),
});
