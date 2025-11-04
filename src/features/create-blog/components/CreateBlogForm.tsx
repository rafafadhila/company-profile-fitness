import React from 'react'

export default function CreateBlogForm() {
    return (
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-black mx-auto my-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Create New Article</h2>

            <form className="space-y-4">
                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter article title"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.title}
                    />
                    {/* {formik.touched.title && formik.errors.title && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.title}</p>
                    )} */}
                </div>

                {/* Content */}
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        rows={5}
                        placeholder="Write your article content here..."
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                        Author
                    </label>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="John Doe"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Create Article
                </button>
            </form>
        </div>
    )
}
