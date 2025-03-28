import React from 'react';
import Link from 'next/link';
import { 
  Dumbbell, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '/classes', label: 'Classes' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/trainers', label: 'Trainers' }
  ];

  const legalLinks = [
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/refund', label: 'Refund Policy' }
  ];

  const socialLinks = [
    { 
      href: 'https://facebook.com', 
      icon: <Facebook className="w-6 h-6 hover:text-blue-600" />,
      label: 'Facebook' 
    },
    { 
      href: 'https://instagram.com', 
      icon: <Instagram className="w-6 h-6 hover:text-pink-600" />,
      label: 'Instagram' 
    },
    { 
      href: 'https://twitter.com', 
      icon: <Twitter className="w-6 h-6 hover:text-blue-400" />,
      label: 'Twitter' 
    },
    { 
      href: 'https://linkedin.com', 
      icon: <Linkedin className="w-6 h-6 hover:text-blue-700" />,
      label: 'LinkedIn' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Iron Paradise</span>
            </div>
            <p className="text-gray-400">
              Your ultimate fitness destination. Transform your body, boost your confidence, and achieve your fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>Workout City, FT 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: support@ironparadise.com</li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Iron Paradise. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <Link 
                key={social.href} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;