import { Metadata } from "next"
import BlogList from "../components/blog/BlogList"
import Header from "../components/Header"


async function getBlogs() {
    const response = await fetch(`${process.env.API_BASE_URL}/blogs`, {
        cache: 'no-store',
    })
    const data = await response.json()
    return data?.data || []
}

export const metadata: Metadata = {
    title: "Fitness Blog | Future Fitness",
    description:
        "Read expert fitness articles, workout guides, and nutrition tips from Future Fitness to stay inspired and informed.",
    openGraph: {
        title: "Future Fitness Blog",
        description:
            "Explore the latest health, fitness, and wellness insights from our professional trainers.",
        images: [
            {
                url: "/images/fitness-logo3.png",
                width: 1200,
                height: 630,
                alt: "Future Fitness Gym Facility",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Future Fitness Blog",
        description:
            "Stay updated with expert fitness tips and articles from Future Fitness.",
        images: ["/images/fitness-logo3.png"],
    },
};


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
