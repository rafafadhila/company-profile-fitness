import Image from "next/image";

const getBlogDetail = async (slug: string) => {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/blogs/${slug}`
        );
        const product = await response?.json();
        return product?.data;
    } catch (error) {
        console.log(error)
    }
}

interface Params {
    params: {
        slug: string;
    }
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
                        By <span className="font-medium text-indigo-700">{blogData.author}</span> • {new Date(blogData.created).toLocaleDateString("en-US", {
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
