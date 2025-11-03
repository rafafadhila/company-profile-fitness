'use client'

import Link from "next/link";

import useLoginForm from "../hooks/useLoginForm";

export default function LoginForm() {

    const { formik } = useLoginForm();

    return (
        <div className='w-sm bg-gray-100 p-5 shadow-md'>
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col text-left gap-5' >
                <h2 className='text-2xl font-bold text-center'>LOGIN</h2>
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

                <button
                    type="submit"
                    className='bg-purple-700 text-white py-3 rounded-md font-bold'>Login</button>

                <p>Don't have an account? <Link href={'/auth/register'} className='font-semibold text-blue-600'>Register</Link></p>
            </form>

        </div>
    )
}
