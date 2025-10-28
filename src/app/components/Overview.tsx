export default function Overview() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus, dicta error quam nisi ea! Ducimus, obcaecati ad soluta nobis explicabo nostrum similique est. Suscipit repudiandae sit eius nihil corrupti!
            </p>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300">
              <span className="block text-3xl font-extrabold text-indigo-600 mb-2">3,000+</span>
              <h3 className="text-base font-semibold text-gray-700">
                Our Fitness Centers Worldwide
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300">
              <span className="block text-3xl font-extrabold text-indigo-600 mb-2">12,000+</span>
              <h3 className="text-base font-semibold text-gray-700">
                Active Memberships
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300">
              <span className="block text-3xl font-extrabold text-indigo-600 mb-2">6,000+</span>
              <h3 className="text-base font-semibold text-gray-700">
                Certified Personal Trainers
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-sm p-8 text-center hover:scale-105 hover:shadow-2xl hover:bg-white transition-all duration-300">
              <span className="block text-3xl font-extrabold text-indigo-600 mb-2">25+</span>
              <h3 className="text-base font-semibold text-gray-700">
                Award-winning Fitness Programs
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>

  )
}
