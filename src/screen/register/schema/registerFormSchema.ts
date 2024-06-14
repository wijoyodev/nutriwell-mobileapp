import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const registerFormSchema = object().shape({
  email: string().email('Please insert valid email').required(),
  referralCode: string(),
});
