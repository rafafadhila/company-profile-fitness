import Image from "next/image";

export default function Page() {
    // Dummy data Blog Detail
    const blogData = [
        {
            title: "How to Stay Consistent in Coding",
            content: `
        Consistency is the key to mastering programming. In this post, we explore simple habits you can build to code every day. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic doloremque odio nulla beatae eligendi atque nostrum impedit soluta cum quo. 
        Iusto a obcaecati odio adipisci. Odit facere quidem ratione incidunt. 
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus, rem eius eveniet ex non culpa dolore natus doloremque porro omnis 
        excepturi voluptates error eum eos similique unde aperiam. Eveniet.
        
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aliquam veniam fugiat quam quasi beatae quod in nostrum delectus similique 
        soluta provident, aut, deleniti culpa? Perferendis placeat atque esse fugiat.
      `,
            author: "Rafa Fadhila",
            date: "October 29, 2025",
            image: "/images/services/class-session.jpg",
        },
    ];

    return (
        <main className="bg-white pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-6">
                {blogData.map((item, index) => (
                    <article key={index} className="flex flex-col gap-6 text-gray-800">

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-950 leading-tight">
                            {item.title}
                        </h1>

                        {/* Meta info */}
                        <div className="text-center text-sm text-gray-500">
                            By <span className="font-medium text-indigo-700">{item.author}</span> • {item.date}
                        </div>

                        {/* Image */}
                        <div className="w-full overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1000}
                                height={600}
                                className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-indigo max-w-none text-justify leading-relaxed text-gray-700">
                            {item.content.split("\n").map((paragraph, i) => (
                                <p key={i} className="mb-4">
                                    {paragraph.trim()}
                                </p>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
