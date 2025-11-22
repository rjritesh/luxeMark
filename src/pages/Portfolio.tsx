import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useState } from 'react';

export function Portfolio() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      title: 'Heritage Luxury Watches',
      category: 'Brand Repositioning',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'A prestigious watch brand needed to appeal to younger affluent audiences while maintaining its heritage credibility.',
      approach: 'Developed a sophisticated digital-first strategy blending timeless elegance with contemporary storytelling across social platforms and premium publications.',
      results: [
        '247% increase in millennial engagement',
        '€3.2M in direct online sales',
        '85% brand sentiment improvement',
      ],
    },
    {
      title: 'Elite Properties Mumbai',
      category: 'Digital Campaign',
      image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'Launch of ultra-luxury residential towers requiring qualified high-net-worth lead generation.',
      approach: 'Created an exclusive invitation-only campaign with premium content showcasing architectural excellence and lifestyle elevation.',
      results: [
        '₹450 crore in pre-sales',
        '180 qualified UHNW inquiries',
        'Complete sellout in 4 months',
      ],
    },
    {
      title: 'Prestige Hospitality Group',
      category: 'Social Media Strategy',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'Five-star hotel chain needed to compete with international luxury brands on social platforms.',
      approach: 'Developed aspirational content strategy featuring exclusive experiences, culinary excellence, and guest testimonials from notable personalities.',
      results: [
        '320% growth in social following',
        '45% increase in direct bookings',
        'Featured in Condé Nast Traveller',
      ],
    },
    {
      title: 'Premium Automotive Launch',
      category: 'Integrated Campaign',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'Introduce a new luxury SUV model to India\'s most affluent automotive enthusiasts.',
      approach: 'Orchestrated an exclusive reveal event series combined with targeted digital advertising and influencer partnerships in the luxury lifestyle space.',
      results: [
        '500+ pre-orders in first month',
        '15M+ premium audience reach',
        'Waitlist of 18 months',
      ],
    },
    {
      title: 'Haute Couture Brand',
      category: 'E-commerce Excellence',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'High-fashion brand required a digital presence worthy of its runway reputation.',
      approach: 'Designed a luxurious e-commerce experience with editorial-quality imagery, virtual styling consultations, and white-glove delivery.',
      results: [
        '₹12 crore online revenue',
        '92% customer satisfaction',
        'Average order value ₹2.8 lakh',
      ],
    },
    {
      title: 'Luxury Wellness Retreat',
      category: 'Brand Development',
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200',
      challenge: 'New wellness destination needed to establish itself among discerning wellness travelers.',
      approach: 'Created complete brand identity and go-to-market strategy emphasizing holistic luxury and transformation.',
      results: [
        '95% occupancy year-round',
        'Featured in 12 luxury publications',
        '₹18 lakh average package value',
      ],
    },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block border border-gold/30 px-6 py-2 rounded-full">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Our Work</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Portfolio of<br />
            <span className="text-gold">Exceptional Results</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Discover how we've elevated India's most distinguished brands
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
                onClick={() => setSelectedCase(index)}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-gold text-xs tracking-widest uppercase mb-3 font-light">
                    {study.category}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">
                    {study.title}
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

      {selectedCase !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          onClick={() => setSelectedCase(null)}
        >
          <div className="min-h-screen py-20 px-6">
            <div
              className="max-w-5xl mx-auto bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <img
                  src={caseStudies[selectedCase].image}
                  alt={caseStudies[selectedCase].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-12 md:p-16">
                <div className="text-gold text-xs tracking-widest uppercase mb-4 font-light">
                  {caseStudies[selectedCase].category}
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-12">
                  {caseStudies[selectedCase].title}
                </h2>

                <div className="space-y-12">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 border-2 border-gold flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-black">The Challenge</h3>
                    </div>
                    <p className="text-gray-700 font-light leading-relaxed text-lg pl-16">
                      {caseStudies[selectedCase].challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 border-2 border-gold flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-black">Our Approach</h3>
                    </div>
                    <p className="text-gray-700 font-light leading-relaxed text-lg pl-16">
                      {caseStudies[selectedCase].approach}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 border-2 border-gold flex items-center justify-center mr-4">
                        <TrendingUp className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-black">The Results</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-16">
                      {caseStudies[selectedCase].results.map((result, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 border-l-4 border-gold">
                          <p className="text-gray-700 font-light leading-relaxed">
                            {result}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="text-gold hover:text-gold-dark font-medium tracking-wider uppercase transition-colors duration-300"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Success Metrics</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
              Results That Speak
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">₹850Cr+</div>
              <div className="text-gray-600 font-light tracking-wide">Revenue Generated</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">425%</div>
              <div className="text-gray-600 font-light tracking-wide">Average ROI</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">150+</div>
              <div className="text-gray-600 font-light tracking-wide">Luxury Brands</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-black mb-3">35+</div>
              <div className="text-gray-600 font-light tracking-wide">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Your Success Story Awaits
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
            Let's create remarkable results for your distinguished brand.
          </p>
          <button className="bg-gold hover:bg-gold-dark text-black px-12 py-5 rounded-sm font-medium tracking-wider uppercase transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}
