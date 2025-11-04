import CreateBlogForm from '@/features/create-blog/components/CreateBlogForm'
import React from 'react'

export default function page() {
    return (
        <main className='grow flex justify-center items-center bg-white pt-16'>
            <CreateBlogForm></CreateBlogForm>
        </main>
    )
}
