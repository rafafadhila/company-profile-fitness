'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"
import useAuthStore from "@/stores/useAuthStore"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { IoIosCreate } from "react-icons/io";

interface BlogListProps {
    blogs: any[]
}

export default function BlogList({ blogs }: BlogListProps) {
    const { user } = useAuthStore()
    const [searchTerm, setSearchTerm] = useState("")
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

    const filteredBlogs = useMemo(() => {
        // Sort blogs by date based on sortOrder
        const sortedBlogs = [...blogs].sort((a, b) => {
            const dateA = new Date(a.valueDate).getTime()
            const dateB = new Date(b.valueDate).getTime()
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB
        })

        // Filter by search term
        return sortedBlogs.filter((blog) => {
            const title = blog.title?.toLowerCase() || ""
            const content = blog.content?.toLowerCase() || ""
            const author = blog.author?.toLowerCase() || ""
            const query = searchTerm.toLowerCase()

            return (
                title.includes(query) ||
                content.includes(query) ||
                author.includes(query)
            )
        })
    }, [blogs, searchTerm, sortOrder])

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"))
    }

    return (
        <section className="max-w-6xl mx-auto p-6 space-y-6">
            {/* Search Bar */}
            <div className="border-t border-gray-100 bg-white shadow-md text-black py-2 rounded-md">
                <div className="max-w-6xl mx-auto px-4 h-full flex gap-2 items-center">
                    <button
                        onClick={toggleSortOrder}
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                    >
                        {sortOrder === "newest" ? (
                            <>
                                <FaArrowDown className="text-base" />
                                <span className="hidden md:inline">Newest</span>
                            </>
                        ) : (
                            <>
                                <FaArrowUp className="text-base" />
                                <span className="hidden md:inline">Oldest</span>
                            </>
                        )}
                    </button>


                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                    />

                    {user?.objectId && (
                        <Link href="/blog/create">
                            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-4 py-2 rounded-md transition-colors">
                                <IoIosCreate className="text-base" />
                                <span className="hidden md:inline">Create</span>
                            </button>
                        </Link>

                    )}
                </div>
            </div>

            {/* Blog Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <Link
                            href={`/blog/${blog.slug ?? index}`}
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col"
                        >
                            <div className="relative w-full h-48 mb-2 overflow-hidden rounded-md">
                                <Image
                                    src={blog.image}
                                    alt="thumbnail"
                                    fill
                                    className="rounded-md mb-2 object-cover"
                                />
                            </div>

                            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                                {blog.title}
                            </h2>
                            <p className="text-gray-600 mb-3 grow line-clamp-3">
                                {blog.content.slice(0, 200) + '...'}
                            </p>
                            <div className="text-sm text-gray-500">
                                By <span className="font-medium">{blog.author}</span> •{" "}
                                {new Date(blog.valueDate).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No articles found for "{searchTerm}"
                    </p>
                )}
            </div>
        </section>
    )
}
