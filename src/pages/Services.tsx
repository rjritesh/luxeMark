import { Sparkles, Target, Users, Zap, Video, Globe, TrendingUp, Crown } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Brand Strategy',
      description: 'Comprehensive strategic frameworks that position your brand at the apex of its category through meticulous research and refined positioning.',
      premium: 'Each strategy is tailored to resonate with affluent audiences and create lasting brand equity.',
    },
    {
      icon: <Crown className="w-12 h-12" />,
      title: 'Creative Campaigns',
      description: 'Bespoke creative excellence that captures imagination and drives desire through sophisticated visual storytelling and compelling narratives.',
      premium: 'Our award-winning creative team crafts campaigns worthy of the world\'s most distinguished brands.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Curated social presence across premium platforms with content that reflects the sophistication and exclusivity of luxury brands.',
      premium: 'We understand the nuances of communicating with high-net-worth individuals and discerning audiences.',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Paid Ads & Performance Marketing',
      description: 'Data-driven campaigns optimized for premium conversions with precise targeting of affluent demographics across all major platforms.',
      premium: 'Luxury meets analytics: sophisticated ROI tracking without compromising brand prestige.',
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: 'Luxury Content Production',
      description: 'Cinema-quality visual content including photography, videography, and motion graphics that elevate brand perception.',
      premium: 'Production values that match the caliber of five-star hotels and luxury publications.',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Website & Brand Design',
      description: 'Exceptional digital experiences with refined aesthetics, intuitive navigation, and premium functionality that command attention.',
      premium: 'Every pixel crafted to reflect luxury, every interaction designed to impress.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Premium Consulting',
      description: 'Strategic advisory services for market entry, brand repositioning, and luxury market expansion with deep industry expertise.',
      premium: 'White-glove consultation backed by proven success with India\'s most prestigious brands.',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Influencer Partnerships',
      description: 'Carefully curated collaborations with elite influencers and brand ambassadors who align with luxury brand values.',
      premium: 'Access to our exclusive network of premium influencers and high-society personalities.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Immersive brand exploration and market analysis',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Bespoke roadmap crafted for premium positioning',
    },
    {
      number: '03',
      title: 'Creation',
      description: 'Exceptional execution across all touchpoints',
    },
    {
      number: '04',
      title: 'Elevation',
      description: 'Continuous refinement and performance optimization',
    },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block border border-gold/30 px-6 py-2 rounded-full">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Premium Services</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Exceptional Services<br />
            <span className="text-gold">For Distinguished Brands</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Comprehensive luxury marketing solutions designed to elevate your brand presence
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">
              Refined Service Offerings
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Each service is delivered with meticulous attention to detail and an unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-12 hover:bg-gray-50 transition-all duration-500 border-l-4 border-gold"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-display font-semibold text-black mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-light leading-relaxed text-lg mb-6">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-gold/20">
                  <div className="text-sm text-gold tracking-wide uppercase font-medium mb-2">
                    What Makes This Premium
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {service.premium}
                  </p>
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
              <span className="text-gold text-sm tracking-widest uppercase font-light">Our Approach</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              The LuxeMark Process
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              A refined methodology perfected over years of elevating premium brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-7xl font-display font-bold text-gold/20 mb-6 group-hover:text-gold/40 transition-colors duration-500">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border-b-2 border-gold pb-2 mb-6">
                <span className="text-gold text-sm tracking-widest uppercase font-light">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8">
                The LuxeMark Advantage
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center text-gold font-display text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Proven Luxury Expertise</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Decades of combined experience working with India's most prestigious brands across hospitality, real estate, automotive, and lifestyle sectors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center text-gold font-display text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Bespoke Solutions</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      No templates, no cookie-cutter approaches. Every strategy is meticulously crafted for your unique brand DNA and aspirations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center text-gold font-display text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">Measurable Prestige</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      We blend the art of luxury branding with rigorous analytics to deliver campaigns that enhance prestige while driving tangible results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center text-gold font-display text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2">White-Glove Service</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Direct access to senior strategists and creatives. Your success is handled by our most experienced professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury brand strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
            Let's discuss how our premium services can elevate your brand to new heights of distinction.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-black px-12 py-5 rounded-sm font-medium tracking-wider uppercase transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
