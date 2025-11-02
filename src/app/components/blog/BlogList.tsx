import Image from "next/image";

import dummyBlogData from '@/data/dummyBlogData.json'
import Link from "next/link";

export default function BlogList() {

    const blogs = dummyBlogData;

    return (
        < section className="max-w-6xl mx-auto p-6 space-y-6" >
            {/* Search Bar */}
            <div className="border-t border-gray-100 bg-white shadow-md text-black">
                <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2">
                    <button className="bg-indigo-600 px-4 rounded-md text-white font-bold">Sort</button>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                    <button className="bg-indigo-600 rounded-md text-white font-bold text-nowrap px-4">Create Blog</button>
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    blogs.map((blog: any, index: number) => (
                        <Link
                            href='/blog/01'
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div>
                                <Image
                                    src={blog?.image}
                                    alt='thumbnail'
                                    height={500}
                                    width={700}
                                    className='rounded-md mb-2'
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 mb-3 grow">{blog.content}</p>
                            <div className="text-sm text-gray-500">
                                By <span className="font-medium">{blog.author}</span> • {blog.date}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section >
    )
}
