import * as yup from 'yup'

export const formSchema = yup.object().shape({
  verify: yup.string().required('Ushbu maydon to`ldirilishi shart!'),
})
