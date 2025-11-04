import BlogList from "../components/blog/BlogList"
import Header from "../components/Header"


async function getBlogs() {
    const response = await fetch(`${process.env.API_BASE_URL}/blogs`, {
        cache: 'no-store',
    })
    const data = await response.json()
    return data?.data || []
}

export default async function BlogPage() {
    const blogs = await getBlogs()

    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                image="/images/header.jpg"
                title="Blog"
                subtitle="Learning is the best for our body.">
            </Header>
            <BlogList blogs={blogs} />
        </div>
    )
}
