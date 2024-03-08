import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
  },
});

export const withdrawSchema = object().shape({
  nominal: string().required().min(5, 'Must be greater than Rp10.000'),
});
