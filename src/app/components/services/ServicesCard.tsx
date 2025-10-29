import Image from "next/image"

export default function ServicesCard() {

    const services = [
    {
        image: '/images/services/personal-trainer.jpg',
        title: 'Personal Trainer',
        description: 'Get one-on-one training tailored to your goals. Our certified trainers will guide you with customized workouts, proper form, and nutrition advice.'
    },
    {
        image: '/images/services/class-session.jpg',
        title: 'Class Session',
        description: 'Join our dynamic group classes — from HIIT and Zumba to strength and mobility. Stay motivated while training with others.'
    },
    {
        image: '/images/services/personal-trainer.jpg',
        title: 'Nutrition Consultation',
        description: 'Fuel your progress with a personalized meal plan designed by our nutrition experts. Learn how to eat smarter to match your training routine.'
    },
    {
        image: '/images/services/class-session.jpg',
        title: 'Body Assessment',
        description: 'Track your journey with professional body composition analysis, strength tests, and progress tracking to fine-tune your training approach.'
    },
    {
        image: '/images/services/personal-trainer.jpg',
        title: 'Recovery Therapy',
        description: 'Relax and recover faster with our post-workout therapy — including massage, stretching, and ice bath sessions to prevent injuries.'
    },
    {
        image: '/images/services/class-session.jpg',
        title: 'Online Coaching',
        description: 'Train anywhere with our virtual coaching sessions. Get real-time guidance, progress tracking, and motivation directly from your device.'
    },
]


    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col gap-16 items-center text-center">

                    {/* Featured Services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        { services.map((item, index) => (
                                <div
                                key={index}
                                className="group bg-gray-50 rounded-md shadow-sm p-8 text-left hover:scale-101 hover:shadow-2xl hover:bg-white transition-all duration-300 space-y-4">
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
                                    <a href="#" className="bg-indigo-600 px-4 py-3 text-white rounded-md font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">Learn More</a>
                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </section>

    )
}
