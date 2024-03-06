import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const shippingAddressSchema = object().shape({
  name: string().required(),
  phoneNumber: string().required(),
  province: string().required(),
  city: string().required(),
  district: string().required(),
  postalCode: string().required(),
  streetAddress: string().required(),
});
