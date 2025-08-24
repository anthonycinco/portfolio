import React from 'react'
import { FiArrowUp, FiMail, FiLinkedin, FiGithub, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FiMail,
      href: 'mailto:aam.cinco@gmail.com',
      label: 'Email'
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/aam-cinco',
      label: 'LinkedIn'
    },
    {
      icon: FiGithub,
      href: 'https://github.com/anthnycinco',
      label: 'GitHub'
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold">Anthony Cinco</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Executive Assistant & Aspiring Full Stack Developer passionate about creating 
              innovative solutions and driving technological advancement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Cebu City, Philippines</p>
              <p>📧 aam.cinco@gmail.com</p>
              <p>📱 +63 939 190 6523</p>
              <p>🌐 anthonycinco.github.io/portfolio/</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Anthony Arbe Cinco. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <FiHeart className="inline w-3 h-3 text-red-500" /> using React & TailwindCSS
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
