import { Award, Target, Users, Heart, TrendingUp, Sparkles } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, every strategy, every execution.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Data-driven insights meet creative brilliance for targeted impact.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'Trust and transparency form the foundation of every partnership.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pioneering approaches that keep luxury brands ahead of the curve.',
    },
  ];

  const leadership = [
    {
      name: 'Vikram Khanna',
      position: 'Founder & Chief Strategist',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: '15 years crafting luxury brand narratives',
    },
    {
      name: 'Anika Desai',
      position: 'Creative Director',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Award-winning designer with global recognition',
    },
    {
      name: 'Rohan Malhotra',
      position: 'Head of Strategy',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Performance marketing expert for elite brands',
    },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block border border-gold/30 px-6 py-2 rounded-full">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Our Story</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Crafting Excellence<br />
            <span className="text-gold">Since 2015</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            We are a distinguished collective of strategists, creatives, and innovators dedicated to elevating India's most prestigious brands
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block border-b-2 border-gold pb-2 mb-6">
                <span className="text-gold text-sm tracking-widest uppercase font-light">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8">
                Born from a Vision of Refined Excellence
              </h2>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                <p>
                  LuxeMark began with a singular ambition: to redefine how premium brands communicate in the digital age. We recognized that luxury required more than marketing—it demanded artistry.
                </p>
                <p>
                  Founded in Mumbai's vibrant business district, we've grown into India's premier agency for distinguished brands seeking to make an indelible impression.
                </p>
                <p>
                  Our approach marries time-honored principles of luxury brand building with cutting-edge digital innovation, creating campaigns that resonate with sophistication and substance.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold p-12 max-w-xs">
                <div className="text-5xl font-display font-bold text-black mb-2">150+</div>
                <div className="text-black font-light">Premium Brands Elevated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Creative workspace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Strategy session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Brand presentation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block border-b-2 border-gold pb-2 mb-6">
                <span className="text-gold text-sm tracking-widest uppercase font-light">Mission & Vision</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-8">
                Elevating Brands to Their Pinnacle
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-gold pl-8">
                  <h3 className="text-2xl font-display font-semibold text-black mb-4">Our Mission</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">
                    To craft distinguished digital presences that honor the essence of luxury while driving measurable success for India's most prestigious brands.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-8">
                  <h3 className="text-2xl font-display font-semibold text-black mb-4">Our Vision</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">
                    To be recognized globally as the definitive agency for luxury brand elevation, where artistry meets analytics and excellence is the standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Core Values</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
              What Defines Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 group hover:bg-gray-50 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Meet the Visionaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-display font-semibold mb-2">
                    {leader.name}
                  </h3>
                  <div className="text-gold text-sm tracking-wider uppercase mb-3 font-light">
                    {leader.position}
                  </div>
                  <p className="text-gray-400 font-light">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">150+</div>
              <div className="text-gray-600 font-light tracking-wide">Premium Brands</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">$50M+</div>
              <div className="text-gray-600 font-light tracking-wide">Revenue Generated</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">25+</div>
              <div className="text-gray-600 font-light tracking-wide">Industry Awards</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">98%</div>
              <div className="text-gray-600 font-light tracking-wide">Client Retention</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
