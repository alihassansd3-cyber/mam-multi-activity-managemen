const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-full mb-8 border border-cyan-400/30">
            <span className="text-cyan-300 font-semibold text-sm"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">MAM</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-400 mb-8">
            Multi Activity Management
          </h2>

          {/* Description */}
          <div className="space-y-6 mb-10">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              MAM – Multi Activity Management provides <span className="text-cyan-400 font-semibold">reliable and professional services</span> for homes and businesses. Our team specializes in building work, property repairs, electrical services, plumbing, and house moving solutions.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We focus on delivering <span className="text-white font-semibold">high-quality work</span>, dependable service, and complete customer satisfaction. Whether you need construction, maintenance, or relocation services, we are here to help.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-cyan-500/50 hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-xl font-bold text-lg transition-all">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
