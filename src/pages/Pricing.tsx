import { Check } from 'lucide-react';

export function Pricing() {
  const packages = [
    {
      name: 'Essential',
      tagline: 'For Emerging Premium Brands',
      price: '₹2,50,000',
      period: 'per month',
      description: 'Foundation for brands entering the luxury market',
      features: [
        'Brand strategy consultation',
        'Social media management (2 platforms)',
        'Content creation (12 posts/month)',
        'Monthly performance reporting',
        'Email marketing setup',
        'Basic website optimization',
        'Dedicated account manager',
      ],
      highlight: false,
    },
    {
      name: 'Elite',
      tagline: 'For Established Luxury Brands',
      price: '₹5,00,000',
      period: 'per month',
      description: 'Comprehensive excellence for distinguished brands',
      features: [
        'Everything in Essential',
        'Multi-channel campaign management',
        'Social media (4 platforms)',
        'Premium content creation (24 posts/month)',
        'Paid advertising (₹2L ad budget)',
        'Influencer partnerships',
        'Website enhancement & SEO',
        'Bi-weekly strategy sessions',
        'Crisis management support',
        'Priority support access',
      ],
      highlight: true,
    },
    {
      name: 'Signature',
      tagline: 'For Ultra-Premium Brands',
      price: 'Custom',
      period: 'bespoke solutions',
      description: 'White-glove service for the most prestigious brands',
      features: [
        'Everything in Elite',
        'Dedicated senior strategist',
        'Unlimited content creation',
        'Full-service creative studio',
        'Comprehensive paid media (unlimited budget)',
        'PR & media relations',
        'Event marketing & experiential',
        'C-suite consultation',
        'Quarterly brand audits',
        'International expansion support',
        '24/7 concierge support',
      ],
      highlight: false,
    },
  ];

  const addons = [
    {
      name: 'Luxury Content Production',
      description: 'Cinema-quality photography and videography',
      price: 'From ₹3,00,000',
    },
    {
      name: 'Brand Identity Redesign',
      description: 'Complete visual identity transformation',
      price: 'From ₹8,00,000',
    },
    {
      name: 'Premium Website Development',
      description: 'Bespoke luxury web experience',
      price: 'From ₹12,00,000',
    },
    {
      name: 'Exclusive Event Marketing',
      description: 'High-society launch events and experiences',
      price: 'From ₹15,00,000',
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
              <span className="text-gold text-sm tracking-widest uppercase font-light">Investment</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Refined Packages<br />
            <span className="text-gold">For Refined Brands</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Transparent investment tiers designed to elevate brands at every stage
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative ${
                  pkg.highlight
                    ? 'bg-black text-white border-4 border-gold scale-105 shadow-2xl'
                    : 'bg-white text-black border-2 border-gray-200'
                } transition-all duration-500 hover:shadow-xl`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-black px-6 py-2 text-sm font-medium tracking-wider uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-12">
                  <div className={`text-xs tracking-widest uppercase mb-2 font-light ${pkg.highlight ? 'text-gold' : 'text-gray-500'}`}>
                    {pkg.tagline}
                  </div>
                  <h3 className="text-4xl font-display font-bold mb-4">
                    {pkg.name}
                  </h3>
                  <p className={`font-light mb-8 ${pkg.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>

                  <div className="mb-8 pb-8 border-b border-gold/20">
                    <div className="text-5xl font-display font-bold mb-2">
                      {pkg.price}
                    </div>
                    <div className={`text-sm font-light tracking-wide ${pkg.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                      {pkg.period}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check
                          className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                            pkg.highlight ? 'text-gold' : 'text-gold'
                          }`}
                        />
                        <span className={`font-light ${pkg.highlight ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 font-medium tracking-wider uppercase transition-all duration-300 ${
                      pkg.highlight
                        ? 'bg-gold hover:bg-gold-dark text-black'
                        : 'bg-black hover:bg-gray-900 text-white border-2 border-black hover:border-gold'
                    }`}
                  >
                    {pkg.price === 'Custom' ? 'Request Consultation' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 font-light text-lg">
              All packages include quarterly strategy reviews and unlimited email support
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Premium Add-Ons</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">
              Elevate Further
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              Specialized services to complement your chosen package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-10 border-l-4 border-gold hover:shadow-lg transition-all duration-500"
              >
                <h3 className="text-2xl font-display font-semibold text-black mb-3">
                  {addon.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {addon.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-gold font-semibold text-lg">{addon.price}</div>
                  <button className="text-black hover:text-gold text-sm font-medium tracking-wider uppercase transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block border-b-2 border-gold pb-2 mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-light">Value Proposition</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black">
              What You Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-6">
                <div className="text-3xl font-display font-bold">1</div>
              </div>
              <h3 className="text-2xl font-display font-semibold text-black mb-4">
                Strategic Excellence
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Every package includes comprehensive strategic planning tailored to your brand's unique positioning and aspirations.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-6">
                <div className="text-3xl font-display font-bold">2</div>
              </div>
              <h3 className="text-2xl font-display font-semibold text-black mb-4">
                Premium Execution
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our award-winning creative team brings luxury brand vision to life with exceptional attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold text-gold mb-6">
                <div className="text-3xl font-display font-bold">3</div>
              </div>
              <h3 className="text-2xl font-display font-semibold text-black mb-4">
                Measurable Impact
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Transparent reporting and analytics ensure you see tangible results from your investment in excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Not Sure Which Package Suits Your Brand?
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                Our strategists will assess your brand's current position and recommend the optimal investment tier for your goals.
              </p>
              <button className="bg-gold hover:bg-gold-dark text-black px-10 py-4 rounded-sm font-medium tracking-wider uppercase transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-8 border-l-4 border-gold">
                <h4 className="text-xl font-display font-semibold mb-3">Flexible Contracts</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Start with a 3-month engagement. No long-term lock-ins for Essential and Elite packages.
                </p>
              </div>
              <div className="bg-white/5 p-8 border-l-4 border-gold">
                <h4 className="text-xl font-display font-semibold mb-3">Money-Back Guarantee</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  If you're not satisfied within the first 30 days, we'll refund your investment.
                </p>
              </div>
              <div className="bg-white/5 p-8 border-l-4 border-gold">
                <h4 className="text-xl font-display font-semibold mb-3">Custom Solutions</h4>
                <p className="text-gray-300 font-light leading-relaxed">
                  Every brand is unique. We'll craft a bespoke package if our standard tiers don't align.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
