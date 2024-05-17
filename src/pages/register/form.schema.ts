import * as yup from 'yup'

export const formSchema = yup.object().shape({
  surname: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  email: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  name: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  password: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  login: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  stir: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
})
