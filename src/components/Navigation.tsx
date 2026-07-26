'use client';

import { BookOpen, Building, ChevronDown, Home, MapPin, Menu, Phone, Users, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from '@/components/motion';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    isMain: true,
  },
  {
    name: 'Services',
    href: '#services',
    icon: Building,
    submenu: [
      {
        name: 'Residential Relocation',
        href: '/services/residential-moving',
        description: 'Complete home buying and selling services',
      },
      {
        name: 'Corporate Relocation',
        href: '/services/corporate-relocation',
        description: 'Business relocation and employee assistance',
      },
      {
        name: 'International Relocation',
        href: '/services/international-relocation',
        description: 'Global relocation services',
      },
      {
        name: 'Moving & Transportation',
        href: '/services/moving-transportation',
        description: 'Professional moving and logistics',
      },
      {
        name: 'Settling-In Services',
        href: '/services/settling-in',
        description: 'Help you settle into your new home',
      },
      {
        name: 'Relocation Planning',
        href: '/services/relocation-planning',
        description: 'Strategic relocation planning',
      },
      {
        name: 'Luxury Relocation',
        href: '/services/luxury-relocation',
        description: 'Premium concierge services',
      },
      {
        name: 'Investment Properties',
        href: '/services/investment-properties',
        description: 'Real estate investment services',
      },
    ],
  },
  {
    name: 'Relocating From',
    href: '#relocating',
    icon: MapPin,
    submenu: [
      {
        name: 'Los Angeles',
        href: '/relocating-from/los-angeles',
        description: 'LA to Las Vegas relocation',
      },
      {
        name: 'San Diego',
        href: '/relocating-from/san-diego',
        description: 'San Diego to Las Vegas relocation',
      },
      {
        name: 'New York',
        href: '/relocating-from/new-york',
        description: 'NYC to Las Vegas relocation',
      },
      {
        name: 'Chicago',
        href: '/relocating-from/chicago',
        description: 'Chicago to Las Vegas relocation',
      },
      {
        name: 'Miami',
        href: '/relocating-from/miami',
        description: 'Miami to Las Vegas relocation',
      },
      {
        name: 'Seattle',
        href: '/relocating-from/seattle',
        description: 'Seattle to Las Vegas relocation',
      },
    ],
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: BookOpen,
    submenu: [
      {
        name: 'Relocation Guide',
        href: '/resources',
        description: 'Comprehensive relocation resources',
      },
      {
        name: 'Market Updates',
        href: '/resources',
        description: 'Latest Las Vegas market information',
      },
      {
        name: 'Contact Us',
        href: 'http://drjanduffy.realscout.com/onboarding',
        description: 'Get in touch with our team',
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    isMain: true,
  },
  {
    name: 'Contact',
    href: 'http://drjanduffy.realscout.com/onboarding',
    icon: Phone,
    isMain: true,
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LV</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-gray-900">Las Vegas</h1>
                  <p className="text-sm text-gray-600">Relocation Services</p>
                </div>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50"
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Desktop Submenu */}
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                            >
                              <span className="font-medium text-gray-900 group-hover/item:text-blue-600">
                                {subItem.name}
                              </span>
                              <span className="text-sm text-gray-500 group-hover/item:text-gray-700">
                                {subItem.description}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-blue-50"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>(702) 707-7273</span>
            </div>
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {openSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 mt-2 space-y-2 border-l-2 border-blue-200"
                      >
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={closeAllMenus}
                          >
                            <div className="font-medium">{subItem.name}</div>
                            <div className="text-xs text-gray-500">{subItem.description}</div>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={closeAllMenus}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-6 border-t border-gray-200 space-y-4 bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>(702) 707-7273</span>
              </div>
              <button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  closeAllMenus();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
