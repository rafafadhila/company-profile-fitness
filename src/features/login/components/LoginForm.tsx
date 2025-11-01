import Link from "next/link";

export default function LoginForm() {
  return (
    <div className='w-sm bg-gray-100 p-5 shadow-md'>
                    <form className='flex flex-col text-left gap-5' >
                        <h2 className='text-2xl font-bold text-center'>LOGIN</h2>
                        <input
                            type="text"
                            placeholder='Email Address'
                            className=' bg-white py-3 px-4 rounded-md'
                            name='email'
                        />

                        <input
                            type="password"
                            placeholder='Password'
                            className='bg-white py-3 px-4 rounded-md'
                            name='password'
                        />

                        <button
                            type="submit"
                            className='bg-purple-700 text-white py-3 rounded-md font-bold'>Login</button>

                            <p>Don't have an account? <Link href={'/auth/register'} className='font-semibold text-blue-600'>Register</Link></p>
                    </form>

                </div>
  )
}
