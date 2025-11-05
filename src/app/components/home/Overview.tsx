export default function Overview() {

  const stats = [
    {
      number: "3,000+",
      title: "Our Fitness Centers Worldwide",
    },
    {
      number: "12,000+",
      title: "Active Memberships",
    },
    {
      number: "6,000+",
      title: "Certified Personal Trainers",
    },
    {
      number: "25+",
      title: "Award-winning Fitness Programs",
    },
  ];

  return (
    <section id="overview" className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What Makes Us Different
            </h2>
            <p className=" text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus, dicta error quam nisi ea! Ducimus, obcaecati ad soluta nobis explicabo nostrum similique est. Suscipit repudiandae sit eius nihil corrupti!
            </p>
            <a href="#" className="bg-indigo-600 px-4 py-3 text-white rounded-md font-bold shadow-md hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">More About Us</a>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300"
              >
                <span className="block text-3xl font-extrabold text-indigo-600 mb-2">
                  {item.number}
                </span>
                <h3 className="text-base font-semibold text-gray-700">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>

  )
}
