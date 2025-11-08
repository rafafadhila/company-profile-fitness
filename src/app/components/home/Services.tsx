import Image from "next/image"
import Link from "next/link"

export default function Services() {

    const services = [
        {
            image: '/images/services/personal-trainer.jpg',
            title: 'Personal Trainer',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dignissimos corporis cumque distinctio rerum dicta voluptates quidem labore quas magnam, perspiciatis ratione? Cupiditate, hic exercitationem porro sit atque ipsa odio. '
        },
        {
            image: '/images/services/class-session.jpg',
            title: 'Class Session',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque eos natus omnis quibusdam vero alias officia, sunt ullam. Numquam explicabo tempora ullam dolores consequuntur sit ipsa, dolore soluta perspiciatis unde. '
        },
    ]

    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col gap-16 items-center text-center">

                    {/*  Title & Short Description */}
                    <div className="space-y-6 w-full">
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                            What We Provides For You
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus, dicta error quam nisi ea! Ducimus, obcaecati ad soluta nobis explicabo nostrum similique est. Suscipit repudiandae sit eius nihil corrupti!
                        </p>

                    </div>

                    {/* Featured Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-md shadow-sm p-8 text-center md:text-left hover:scale-101 hover:shadow-2xl hover:bg-white transition-all duration-300 space-y-4">
                                <div className="w-full overflow-hidden rounded-md">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all"
                                    />
                                </div>
                                <span className="block text-3xl font-semibold text-indigo-600">{item.title}</span>
                                <h3 className="text-base font-semibold text-gray-700 mb-6">
                                    {item.description}
                                </h3>
                                <Link href="/services" className="bg-indigo-600 px-4 py-3 text-white rounded-md font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">Learn More</Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    )
}
