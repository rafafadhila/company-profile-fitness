'use client'

import Image from "next/image"
import Link from "next/link"
import useAuthStore from "@/stores/useAuthStore"

interface BlogListProps {
    blogs: any[]
}

export default function BlogList({ blogs }: BlogListProps) {
    const { user } = useAuthStore()

    return (
        <section className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Search Bar */}
            <div className="border-t border-gray-100 bg-white shadow-md text-black">
                <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2">
                    <button className="bg-indigo-600 px-4 rounded-md text-white font-bold">
                        Sort
                    </button>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                    {user?.objectId && (
                        <Link href="/blog/create">
                            <button className="bg-indigo-600 rounded-md text-white font-bold text-nowrap px-4">
                                Create Blog
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Blog Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map((blog, index) => (
                    <Link
                        href={`/blog/${blog.slug ?? index}`}
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
                    >
                        <Image
                            src={blog.image}
                            alt="thumbnail"
                            height={500}
                            width={700}
                            className="rounded-md mb-2 object-cover"
                        />
                        <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                            {blog.title}
                        </h2>
                        <p className="text-gray-600 mb-3 grow line-clamp-3">
                            {blog.content}
                        </p>
                        <div className="text-sm text-gray-500">
                            By <span className="font-medium">{blog.author}</span> •{" "}
                            {new Date(blog.created).toLocaleDateString("en-US", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
