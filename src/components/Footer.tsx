import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <div className="text-2xl font-display font-bold mb-6">
              LUXE<span className="text-gold">MARK</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Elevating brands through refined digital strategies and premium creative excellence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-display text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'about', 'services', 'portfolio'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="text-gray-400 hover:text-white text-sm font-light transition-colors duration-300 capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-display text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li>Brand Strategy</li>
              <li>Creative Campaigns</li>
              <li>Social Media</li>
              <li>Performance Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span className="text-gray-400 text-sm font-light">hello@luxemark.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} LuxeMark Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
