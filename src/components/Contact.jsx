import React, { useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiClock, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'aam.cinco@gmail.com',
      href: 'mailto:aam.cinco@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+63 939 190 6523',
      href: 'tel:+639391906523'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'aam-cinco',
      href: 'https://linkedin.com/in/aam-cinco'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'anthnycinco',
      href: 'https://github.com/anthnycinco'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Cebu City, Philippines',
      href: '#'
    }
  ]

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM (PHT)' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM (PHT)' },
    { day: 'Sunday', time: 'Available for urgent matters' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a proper notification system)
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just a friendly chat about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        target={info.label === 'Email' || info.label === 'Phone' ? undefined : '_blank'}
                        rel={info.label === 'Email' || info.label === 'Phone' ? undefined : 'noopener noreferrer'}
                        className="text-gray-900 dark:text-white font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiClock className="w-5 h-5 mr-2 text-primary-600" />
                Availability
              </h3>
              <div className="space-y-2">
                {availability.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {item.day}
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-200 dark:border-primary-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Quick Response
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond to emails within 24 hours during weekdays. 
                For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
