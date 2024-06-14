import { date, object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const registerDataSchema = object().shape({
  name: string().required(),
  email: string().email('Please insert valid email').required(),
  birthDate: date().required(),
  gender: string().required(),
  phoneNumber: string()
    .matches(/^\d+$/, 'Please insert number')
    .min(8, 'Min. 8 numbers')
    .required(),
  image: object().nullable(),
  code: string().required(),
  country: string().required(),
  imageUrl: string(),
});
