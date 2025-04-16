// @ts-nocheck
import * as Yup from 'yup'

// Validation schema for CropInsurance form
export const cropInsuranceSchema = Yup.object().shape({
  credit_area_contour_numbers: Yup.array()
    .of(
      Yup.object().shape({
        cad_num: Yup.string()
          .required('Kontur raqami kiritilishi shart')
          .matches(
            /^\d{2}:\d{2}:\d{9}$/,
            'Kontur raqami formati noto‘g‘ri (masalan, 12:34:123456789)',
          ),
      }),
    )
    .min(1, 'Kamida bitta kontur raqami kiritilishi shart'),
})
