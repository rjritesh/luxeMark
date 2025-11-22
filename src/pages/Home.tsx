import { ArrowRight, Sparkles, Target, Zap, Users, Award, TrendingUp } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Brand Strategy',
      description: 'Crafting distinctive identities that resonate with premium audiences.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Creative Campaigns',
      description: 'Elevated storytelling that captures attention and drives desire.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Marketing',
      description: 'Data-driven excellence delivering measurable luxury brand growth.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Media Excellence',
      description: 'Curated presence across platforms that matter to elite audiences.',
    },
  ];

  const portfolio = [
    {
      title: 'Heritage Luxury Watches',
      category: 'Brand Repositioning',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Premium Real Estate',
      category: 'Digital Campaign',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Five-Star Hospitality',
      category: 'Social Media Strategy',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const testimonials = [
    {
      quote: 'LuxeMark transformed our brand presence with unparalleled sophistication and strategic brilliance.',
      author: 'Rajesh Khanna',
      position: 'CEO, Heritage Timepieces',
    },
    {
      quote: 'Their refined approach to digital marketing elevated our luxury real estate portfolio beyond expectations.',
      author: 'Priya Sharma',
      position: 'Director, Elite Properties',
    },
    {
      quote: 'A partnership that truly understands the nuances of premium brand communication.',
      author: 'Arjun Malhotra',
      position: 'Founder, Prestige Hospitality',
    },
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block border border-gold/30 px-6 py-2 rounded-full">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Premium Digital Excellence</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
            Elevate Your Brand<br />
            <span className="text-gold">To Luxury</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Where refined strategy meets exceptional creativity for India's most distinguished brands
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-gold hover:bg-gold-dark text-black px-10 py-4 rounded-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center space-x-3">
              <span>Discover Excellence</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white hover:border-gold hover:text-gold text-white px-10 py-4 rounded-sm font-medium tracking-wider uppercase transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">The LuxeMark Distinction</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">
              Why Premium Brands Choose Us
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              We don't just market brands. We elevate them to their rightful position in the luxury landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-black">Uncompromising Quality</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Every strategy, every campaign, every interaction reflects the highest standards of excellence.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-4">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-black">Precision Targeting</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We understand affluent audiences and craft messages that resonate with discerning consumers.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-black">Measurable Prestige</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Luxury meets analytics. Our data-driven approach ensures tangible elevation of your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
              Premium Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-12 hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gold"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-gold group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm tracking-wider uppercase font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Portfolio Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-square cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-gold text-xs tracking-widest uppercase mb-2 font-light">
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm tracking-wider uppercase font-medium">View Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
              Voices of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 border-t-4 border-gold"
              >
                <p className="text-gray-700 font-light leading-relaxed text-lg mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gold/30 pt-6">
                  <div className="font-semibold text-black">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm font-light mt-1">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
            Join India's most distinguished brands in experiencing the LuxeMark difference.
          </p>
          <button className="group bg-gold hover:bg-gold-dark text-black px-12 py-5 rounded-sm font-medium tracking-wider uppercase transition-all duration-300 inline-flex items-center space-x-3">
            <span>Begin Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}
