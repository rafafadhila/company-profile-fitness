'use client'

import useCreateBlogForm from "../hooks/useCreateBlogForm"
import { uploadImage } from "@/utils/uploadImage"

export default function CreateBlogForm() {

    const { formik } = useCreateBlogForm()

    return (
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-black mx-auto my-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">Create New Article</h2>

            <form
                onSubmit={formik.handleSubmit}
                className="space-y-4">
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.title}</p>
                    )}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                    ></textarea>
                    {formik.touched.content && formik.errors.content && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.content}</p>
                    )}
                </div>

                {/* Image URL */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image Upload
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        onChange={async (event) => {
                            const file = event.currentTarget.files?.[0]
                            if (!file) return

                            try {
                                const imageUrl = await uploadImage(file)
                                formik.setFieldValue("image", imageUrl)
                            } catch {
                                alert("Failed to upload image. Please try again.")
                            }
                        }}
                    />

                    {formik.values.image && (
                        <div className="mt-2">
                            <img
                                src={formik.values.image}
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-md"
                            />
                        </div>
                    )}

                    {formik.touched.image && formik.errors.image && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.image}</p>
                    )}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.author}
                    />
                    {formik.touched.author && formik.errors.author && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.author}</p>
                    )}
                </div>

                {/* Date */}
                <div>
                    <label htmlFor="valueDate" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        id="valueDate"
                        name="valueDate"
                        type="date"
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.valueDate}
                    />
                    {formik.touched.valueDate && formik.errors.valueDate && (
                        <p className="text-red-600 text-sm mt-1">{formik.errors.valueDate}</p>
                    )}
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
