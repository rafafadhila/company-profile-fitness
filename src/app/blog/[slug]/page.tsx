import Image from "next/image";

const getBlogDetail = async (slug: string) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/blogs/${slug}`, {
            next: { revalidate: 60 },
        });
        const product = await response?.json();
        return product?.data;
    } catch (error) {
        console.log(error);
    }
};

interface Params {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Params) {
    const { slug } = await params;
    const blogData = await getBlogDetail(slug);

    if (!blogData) {
        return {
            title: "Blog Not Found | Future Fitness",
            description: "The requested article could not be found.",
        };
    }

    const description =
        blogData.content.length > 160
            ? blogData.content.slice(0, 157) + "..."
            : blogData.content;

    return {
        title: `${blogData.title} | Future Fitness Blog`,
        description,
        keywords: [
            "Future Fitness",
            "fitness blog",
            "workout guide",
            "training tips",
            blogData.title,
            blogData.author,
        ],
        openGraph: {
            title: `${blogData.title} | Future Fitness`,
            description,
            type: "article",
            url: `https://yourdomain.com/blog/${params.slug}`,
            siteName: "Future Fitness",
            publishedTime: blogData.valueDate,
            authors: [blogData.author],
            images: [
                {
                    url: blogData.image,
                    width: 1200,
                    height: 630,
                    alt: blogData.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${blogData.title} | Future Fitness Blog`,
            description,
            images: [blogData.image],
        },
    };
}


export default async function Page({ params }: Params) {

    const { slug } = await params;
    const blogData = await getBlogDetail(slug);

    return (
        <main className="bg-white pt-36 pb-16">
            <div className="max-w-3xl mx-auto px-6">
                {/* {blogData.map((item, index) => ( */}
                <article key={blogData.objectId} className="flex flex-col gap-6 text-gray-800">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-950 leading-tight">
                        {blogData.title}
                    </h1>

                    {/* Meta info */}
                    <div className="text-center text-sm text-gray-500">
                        By <span className="font-medium text-indigo-700">{blogData.author}</span> • {new Date(blogData.valueDate).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </div>

                    {/* Image */}
                    <div className="w-full overflow-hidden rounded-xl shadow-md">
                        <Image
                            src={blogData.image}
                            alt={blogData.title}
                            width={1000}
                            height={600}
                            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-indigo max-w-none text-justify leading-relaxed text-gray-700">
                        {blogData.content}
                    </div>
                </article>
                {/* ))} */}
            </div>
        </main>
    );
}
