import { useNavigate } from 'react-router-dom';
import { Building2, Wrench, Zap, Droplets, Truck, Flame, Home, Phone, Mail, Shield, Award, Clock, CheckCircle } from 'lucide-react';
import { useMemo, memo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = memo(() => {
  const navigate = useNavigate();
  
  const services = useMemo(() => [
    {
      icon: <Zap size={40} />,
      title: 'Wedding Light',
      description: 'Professional wedding and event lighting services to make your special day magical and memorable with stunning light decorations.',
      color: 'from-pink-500 to-purple-500',
      bgImage: '/src/assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg',
      slug: 'wedding-light'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Building & Construction',
      description: 'We provide professional building services including construction work, property extensions, renovations, and general building projects.',
      color: 'from-blue-500 to-cyan-500',
      bgImage: '/src/assets/working-with-blueprint.jpg',
      slug: 'building-construction'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Repair & Maintenance',
      description: 'Our team offers reliable repair and maintenance services to keep your property safe and in good condition.',
      color: 'from-purple-500 to-pink-500',
      bgImage: '/src/assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
      slug: 'repair-maintenance'
    },
    {
      icon: <Zap size={40} />,
      title: 'Electrical Services',
      description: 'We provide electrical installation, wiring, lighting installation, electrical fault finding, and repair services.',
      color: 'from-yellow-500 to-orange-500',
      bgImage: '/src/assets/man-electrical-technician-working-switchboard-with-fuses.jpg',
      slug: 'electrical-services'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Plumbing Services',
      description: 'Our plumbing services include pipe installation, leak repairs, bathroom fittings, drainage work, and general plumbing maintenance.',
      color: 'from-cyan-500 to-blue-500',
      bgImage: '/src/assets/worker-repairing-water-heater.jpg',
      slug: 'plumbing-services'
    },
    {
      icon: <Truck size={40} />,
      title: 'House Moving Services',
      description: 'We provide safe and reliable house moving services to help you relocate easily. Our team ensures your belongings are handled carefully during transport.',
      color: 'from-green-500 to-emerald-500',
      bgImage: '/src/assets/medium-shot-delivery-people-working.jpg',
      slug: 'house-moving'
    },
    {
      icon: <Home size={40} />,
      title: 'House & Marquee Decorating',
      description: 'Transform your events with our professional house and marquee decoration services. We create beautiful setups for weddings, parties, and special occasions.',
      color: 'from-rose-500 to-pink-500',
      bgImage: '/src/assets/beautiful-wedding-altar-made-white-pink-curtains.jpg',
      slug: 'house-marquee-decorating'
    },
    {
      icon: <Flame size={40} />,
      title: 'Heating Service',
      description: 'Professional heating system installation, repair, and maintenance services. Keep your home warm and comfortable all year round with our expert heating solutions.',
      color: 'from-orange-500 to-red-500',
      bgImage: '/src/assets/technician-checking-heating-system-boiler-room.jpg',
      slug: 'heating-service'
    },
    {
      icon: <Flame size={40} />,
      title: 'Gardening Services',
      description: 'Professional garden maintenance, lawn care, landscaping, and outdoor beautification services to keep your garden looking perfect all year round.',
      color: 'from-green-500 to-emerald-500',
      bgImage: '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',
      slug: 'gardening-services'
    }
  ], []);

  const handleServiceClick = useCallback((slug) => {
    navigate(`/service/${slug}`);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional services tailored to meet all your property needs. From construction to maintenance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Additional Info */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 25 years of experience, we provide comprehensive services for residential and commercial properties. Our expert team is dedicated to delivering quality workmanship and exceptional customer service.
            </p>
          </div>

          {/* Image with Description Section */}
          <div className="mb-20 bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-auto">
                <img 
                  src="/src/assets/pexels-alexapopovich-16552854.jpg" 
                  alt="Professional Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Excellence in Every Project
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  At MAM Multi Activity Management, we pride ourselves on delivering exceptional service across all our specializations. Our team of certified professionals brings decades of combined experience to every project.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From small repairs to large-scale renovations, we handle each job with the same level of dedication and attention to detail. Your satisfaction is our priority.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">1000+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                onClick={() => handleServiceClick(service.slug)}
                className="group rounded-2xl overflow-hidden relative min-h-[320px] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  backgroundImage: `url('${service.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-blue-900/50 to-slate-900/60 group-hover:from-slate-900/85 group-hover:via-blue-900/80 group-hover:to-slate-900/85 transition-all duration-500"></div>
                
                {/* Content - hidden by default, appears on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {service.description}
                  </p>
                  <button className="text-cyan-300 hover:text-cyan-200 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                    Learn More
                    <span className="transition-all">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Service Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Home repairs and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Property renovations and extensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Garden and outdoor maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Emergency repair services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Office building maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Commercial property repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Event venue setup and decoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Facility management solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process Section */}
          <div className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How We Work
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-300 text-sm">Get in touch via phone, email, or our website</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">We evaluate your needs and provide a detailed quote</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-gray-300 text-sm">Our expert team completes the work professionally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Follow-up</h3>
                <p className="text-gray-300 text-sm">We ensure your complete satisfaction</p>
              </div>
            </div>
          </div>

          {/* Our Guarantees Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully certified professionals with comprehensive insurance coverage</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600 text-sm">100% satisfaction guarantee on all our services and workmanship</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600 text-sm">Projects completed on schedule with no hidden delays</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Warranty Included</h3>
                <p className="text-gray-600 text-sm">Extended warranty on all installations and major repairs</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to help with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:123-456-789-0000"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                <Phone size={24} />
                Call Us Now
              </a>
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Mail size={24} />
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;
