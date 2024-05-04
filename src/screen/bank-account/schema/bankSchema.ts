import { object, setLocale, string } from 'yup';

setLocale({
  mixed: {
    required: 'Field can not be empty.',
    notType: 'Format Input Tidak Sesuai',
    notNull: 'Field can not be empty.',
  },
});

export const bankSchema = object().shape({
  bank: string().required(),
  accountHolder: string().required(),
  accountNumber: string().required(),
});
