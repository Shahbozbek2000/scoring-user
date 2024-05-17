import * as yup from 'yup'

export const formSchema = yup.object().shape({
  last_name: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  first_name: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
  email: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
})
