import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
    .required('Email is required')
    .email('Email format is invalid'),
    password: Yup.string().required('Password is required').min(6, 'Password cannot below 6 characters')
    
})