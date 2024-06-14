import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const shippingAddressSchema = object().shape({
  id: string(),
  name: string().required(),
  phoneNumber: string()
    .required()
    .matches(/^\d+$/, 'Please insert number')
    .min(8, 'Min. 8 numbers'),
  province: string().required(),
  code: string().required(),
  city: string().required(),
  district: string().required(),
  postalCode: string()
    .matches(/^\d+$/, 'Please insert number')
    .max(5, 'Max. 5 digits')
    .required(),
  streetAddress: string().required(),
});
