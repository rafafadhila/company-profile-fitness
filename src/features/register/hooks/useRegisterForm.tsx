'use client'

import { useFormik } from 'formik'
import { registerSchema } from '../schemas/registerSchema'
import { axiosInstance } from '@/utils/axios-instance'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

export default function useRegisterForm() {

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosInstance.post('/auth/register', {
          name: values.name,
          email: values.email,
          password: values.password,
        })

        toast.success(response?.data?.message || 'Register Succesfully!')
        router.push('/auth/login')
      } catch (error: any) {
        toast.error(error?.response?.data?.message || 'Failed to register')
      }
    },
  })

  return {
    formik,
  }
}
