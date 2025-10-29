import React from 'react'

export default function AboutUs() {
    return (
        <section className="bg-white text-black py-24">
            <div className="max-w-5xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col gap-16 items-center text-center">

                    {/*  Title & Short Description */}
                    <div className="space-y-6 w-full">
                        <h2 className="text-xl md:text-3xl font-extrabold leading-tight">
                            Who Are We?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Founded on a shared passion for health and movement, our company began as a small community of fitness enthusiasts who believed that strength goes beyond physical power — it’s a mindset. We started by helping people find balance between discipline and enjoyment in every workout.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Established in 2018, we have grown from a local training space into a trusted fitness brand that continues to inspire transformation. Our commitment to progress and education drives us to create programs and experiences that empower every individual to reach their full potential.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Over the years, we’ve proudly trained thousands of members, partnered with leading health professionals, and built a community that celebrates every milestone — big or small. From hosting fitness events to introducing innovative training methods, our journey has been fueled by one mission: helping people move better, feel stronger, and live healthier.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    )
}
