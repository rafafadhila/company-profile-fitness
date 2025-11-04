'use client'

import { useFormik } from 'formik'
import { createBlogSchema } from '../schemas/createBlogSchema'
import { axiosInstance } from '@/utils/axios-instance'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

export default function useCreateBlogForm() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            image: '',
            author: '',
            slug: '',
            valueDate: '',
        },
        validationSchema: createBlogSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axiosInstance.post('/blogs', {
                    title: values.title,
                    content: values.content,
                    image: values.image,
                    author: values.author,
                    valueDate: values.valueDate,
                    slug: values.title.toLowerCase().split(' ').join('-')
                })

                toast.success(response?.data?.message || 'Create Blog Succesfully!')
                router.push('/auth/login')
            } catch (error: any) {
                toast.error(error?.response?.data?.message || 'Failed to Create Blog')
            }
        },
    })

    return {
        formik,
    }
}
