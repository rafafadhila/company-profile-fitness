import Image from "next/image"

interface HeaderProps {
    image : string,
    title: string,
    subtitle: string
}
export default function Header({image, title, subtitle}: HeaderProps) {
    return (
        <section className="relative h-[45vh]">

            <Image
                src={image}
                alt="Header Background"
                fill
                className="object-cover brightness-30 z-0 bg-no-repeat bg-center"
                priority
            />

            <div className="relative flex flex-col mx-auto justify-center items-center w-full md:w-1/2 text-white space-y-5 text-center md:text-left pt-10 h-full z-10">
                <h1 className="text-xl sm:text-2xl lg:text-5xl font-extrabold leading-snug">
                    {title}
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-xl font-medium">
                    {subtitle}
                </h2>
            </div>

        </section>
    )
}
