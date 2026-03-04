import { Quote } from 'lucide-react';
import { memo } from 'react';

const DirectorMessage = memo(() => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Message from Our Director
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
        </div>

        {/* Director Message Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-white/20">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left Side - Director Info */}
            <div className="md:col-span-2 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 p-6 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 border-4 border-white/30 shadow-xl">
                <span className="text-3xl font-black text-white">AM</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Asim Mehmood
              </h3>
              <div className="w-10 h-0.5 bg-white/50 mb-2"></div>
              <p className="text-base text-cyan-100 font-semibold mb-1">
                Managing Director
              </p>
              <p className="text-white/80 text-xs">
                MAM Derby Services
              </p>
            </div>

            {/* Right Side - Message Content */}
            <div className="md:col-span-3 p-6 relative">
              {/* Quote Icon */}
              <div className="absolute top-3 right-3 opacity-10">
                <Quote size={50} className="text-cyan-400" />
              </div>

              <div className="relative z-10">
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-3">
                  Welcome to MAM Derby Services. It is my pleasure to introduce you to our company, where quality, reliability, and customer satisfaction are at the heart of everything we do.
                </p>
                
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-3">
                  With years of experience, we have built a reputation for delivering exceptional services across building, electrical, plumbing, and property maintenance.
                </p>
                
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                  Thank you for considering us. We look forward to serving you with trust and excellence.
                </p>

                {/* Signature */}
                <div className="border-t border-white/20 pt-3">
                  <p className="text-lg font-bold text-cyan-400 mb-0.5">
                    Asim Mehmood
                  </p>
                  <p className="text-white/70 text-xs">
                    Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm italic">
            "Building Trust, Delivering Excellence"
          </p>
        </div>
      </div>
    </section>
  );
});

DirectorMessage.displayName = 'DirectorMessage';

export default DirectorMessage;
