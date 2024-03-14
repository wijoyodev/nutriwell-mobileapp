import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const loginFormSchema = object().shape({
  email: string().required().email('Field must be a valid email'),
});
