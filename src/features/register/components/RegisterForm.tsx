'use client'

import Link from "next/link"

import useRegisterForm from "../hooks/useRegisterForm"

export default function RegisterForm() {

    const { formik } = useRegisterForm()

    return (
        <div className='w-sm bg-gray-100 p-5 shadow-md'>
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col text-left gap-5' >
                <h2 className='text-2xl font-bold text-center'>Create an Account</h2>

                <div className="flex flex-col gap-1">
                    <input
                        id="name"
                        type="text"
                        placeholder='Full Name'
                        className=' bg-white py-3 px-4 rounded-md'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-red-600 text-sm">{formik.errors.name}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <input
                        id="email"
                        type="text"
                        placeholder='Email Address'
                        className=' bg-white py-3 px-4 rounded-md'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-red-600 text-sm">{formik.errors.email}</p>
                    )}
                </div>

                <div className="flex flex-col gap-1">
                    <input
                        id="password"
                        type="password"
                        placeholder='Password'
                        className='bg-white py-3 px-4 rounded-md'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-600 text-sm">{formik.errors.password}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className='bg-purple-700 text-white py-3 rounded-md font-bold'>Register</button>

                <p>Have an account? <Link href={'/auth/login'} className='font-semibold text-blue-600'>Login</Link></p>
            </form>

        </div>
    )
}
