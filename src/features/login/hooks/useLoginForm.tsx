'use client'

import { useFormik } from 'formik'
import { loginSchema } from '../schemas/loginSchema'
import { axiosInstance } from '@/utils/axios-instance'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
// import useAuthStore from '@/stores/useAuthStore'


export default function useLoginForm() {

    // const {setUser} = useAuthStore();
    const router = useRouter();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {

            try {
                const response = await axiosInstance.post('/auth/login', {
                    email: values?.email,
                    password: values?.password,
                })
                toast.success(response?.data?.message)
                console.log(response)
                // API returns the user under `user`, not `data`
                const user = response?.data?.user
                // setUser({
                //     email: user?.email ?? '',
                //     name: user?.name ?? '',
                //     objectId: user?.objectId ?? '',
                // })
                router.push('/')
            } catch (error: any) {
                toast.error(error?.response?.data?.message)
            }

        },
    })

    return {
        formik
    }
}