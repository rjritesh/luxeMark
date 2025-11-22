import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="text-gold text-sm tracking-widest uppercase font-light">Get in Touch</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Let's Create<br />
            <span className="text-gold">Something Exceptional</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Begin your journey to brand excellence with a conversation
          </p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-black mb-8">
                  Connect With Us
                </h2>
                <p className="text-gray-600 font-light leading-relaxed text-lg">
                  Our team of strategists and creatives is ready to discuss how we can elevate your brand to new heights of distinction.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Visit Our Studio</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      LuxeMark Digital<br />
                      Nariman Point, Mumbai 400021<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Call Us</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Email Us</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      hello@luxemark.in<br />
                      enquiries@luxemark.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-gold flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Business Hours</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-50 p-12 border-t-4 border-gold">
                <h3 className="text-3xl font-display font-bold text-black mb-8">
                  Request a Consultation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                      >
                        <option value="">Select a service</option>
                        <option value="brand-strategy">Brand Strategy</option>
                        <option value="creative-campaigns">Creative Campaigns</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="performance-marketing">Performance Marketing</option>
                        <option value="content-production">Content Production</option>
                        <option value="web-design">Website & Design</option>
                        <option value="consulting">Premium Consulting</option>
                        <option value="full-service">Full Service Package</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                        Monthly Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-2">Under ₹2,00,000</option>
                        <option value="2-5">₹2,00,000 - ₹5,00,000</option>
                        <option value="5-10">₹5,00,000 - ₹10,00,000</option>
                        <option value="10-plus">₹10,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 tracking-wide uppercase">
                      Tell Us About Your Brand *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gold focus:outline-none transition-colors duration-300 font-light resize-none"
                      placeholder="Share your vision, challenges, and goals..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-gold text-white hover:text-black py-4 font-medium tracking-wider uppercase transition-all duration-300 border-2 border-black hover:border-gold"
                  >
                    Submit Consultation Request
                  </button>

                  <p className="text-sm text-gray-500 font-light text-center">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full h-[500px] bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2098726145437!2d72.82270907493658!3d18.92546098220134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sNariman%20Point%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          ></iframe>
          <div className="absolute bottom-8 left-8 z-20 bg-gold p-8 max-w-md">
            <h3 className="text-2xl font-display font-bold text-black mb-3">
              Visit Our Premium Studio
            </h3>
            <p className="text-black font-light leading-relaxed">
              Experience luxury marketing excellence in person. Schedule your visit today.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Prefer to Speak Directly?
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
            Our senior strategists are available for immediate consultation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919876543210"
              className="bg-gold hover:bg-gold-dark text-black px-10 py-4 rounded-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              Call Now
            </a>
            <a
              href="mailto:hello@luxemark.in"
              className="border-2 border-white hover:border-gold hover:text-gold text-white px-10 py-4 rounded-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
