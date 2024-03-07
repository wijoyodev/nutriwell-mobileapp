import { date, object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const registerDataSchema = object().shape({
  name: string().required(),
  email: string().required(),
  birthDate: date().required(),
  gender: string().required(),
  phoneNumber: string().required(),
});
