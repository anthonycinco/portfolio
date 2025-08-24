import React from 'react'
import { FiMail, FiLinkedin, FiGithub, FiDownload, FiMessageCircle } from 'react-icons/fi'

const Hero = () => {
  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Projects Completed', value: '8+' },
    { label: 'Certifications', value: '2' },
    { label: 'Articles Published', value: '3+' },
  ]

  const contactLinks = [
    { icon: FiMail, href: 'mailto:aam.cinco@gmail.com', label: 'Email' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/aam-cinco', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/anthnycinco', label: 'GitHub' },
  ]

  return (
    <section id="home" className="section-padding pt-32">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Anthony Arbe{' '}
            <span className="gradient-text">Cinco</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Executive Assistant & Aspiring Full Stack Developer
          </p>
          
          {/* Contact Links */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center justify-center"
            >
              <FiDownload className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <FiMessageCircle className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
