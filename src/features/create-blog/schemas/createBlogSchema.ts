import * as Yup from 'yup'

export const createBlogSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required').min(100, 'Content required minimum 100 characters.'),
    image: Yup.string().required('Image is required'),
    author: Yup.string().required('Author is required'),
    valueDate: Yup.string().required('Date is required'),
})