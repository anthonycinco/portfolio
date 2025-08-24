import React from 'react'
import { FiExternalLink, FiCalendar, FiBookOpen } from 'react-icons/fi'

const Articles = () => {
  const articles = [
    {
      title: 'AI Integration in Modern Gaming: A Comprehensive Analysis',
      subtitle: 'Exploring the transformative impact of artificial intelligence on gaming dynamics',
      excerpt: 'A detailed analysis of how AI is revolutionizing the gaming industry through procedural content generation, dynamic game design, automated testing, and personalized player experiences.',
      platform: 'Medium',
      url: '#',
      date: 'March 2024',
      readTime: '8 min read',
      category: 'Technology',
      featured: true
    },
    {
      title: 'Urban Mobility Solutions: AI-Powered Transportation Management',
      subtitle: 'Technical insights into AI-driven urban transportation systems',
      excerpt: 'A comprehensive technical white paper exploring AI solutions for urban mobility challenges, including congestion management, safety enhancement, and equity promotion.',
      platform: 'Technical Publication',
      url: '#',
      date: 'February 2024',
      readTime: '15 min read',
      category: 'AI/ML',
      featured: true
    },
    {
      title: 'Student Housing Revolution: The HOOM Platform Case Study',
      subtitle: 'Innovative approaches to real estate for student communities',
      excerpt: 'An in-depth analysis of how technology is transforming the student housing market, with insights into platform design, user experience, and market validation.',
      platform: 'Business Case Study',
      url: '#',
      date: 'January 2024',
      readTime: '12 min read',
      category: 'Real Estate',
      featured: false
    },
    {
      title: 'Educational Assessment Design: NSW Student Success Framework',
      subtitle: 'Methodologies for creating effective educational assessments',
      excerpt: 'A research-based approach to designing educational assessments that promote critical thinking and comprehension across various subjects.',
      platform: 'Educational Research',
      url: '#',
      date: 'December 2023',
      readTime: '10 min read',
      category: 'Education',
      featured: false
    },
    {
      title: 'Luxury Watch Market Analysis: Investment Opportunities and Trends',
      subtitle: 'Comprehensive market research for luxury timepiece investments',
      excerpt: 'An analysis of market trends, pricing strategies, and investment opportunities in the high-end luxury watch market.',
      platform: 'Market Research',
      url: '#',
      date: 'November 2023',
      readTime: '6 min read',
      category: 'Investment',
      featured: false
    },
    {
      title: 'Student Leadership in University Governance: USC Council Insights',
      subtitle: 'Effective student representation and policy development',
      excerpt: 'Insights into student leadership roles, governance structures, and policy development processes within university settings.',
      platform: 'Leadership Blog',
      url: '#',
      date: 'October 2023',
      readTime: '7 min read',
      category: 'Leadership',
      featured: false
    }
  ]

  return (
    <section id="articles" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Articles & Publications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Technical writing, research insights, and thought leadership articles covering AI, technology, 
            education, and business innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                article.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Article Header */}
              <div className="p-6 border-b border-gray-100 dark:border-dark-700">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {article.subtitle}
                    </p>
                  </div>
                  {article.featured && (
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full ml-2 flex-shrink-0">
                      Featured
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <FiBookOpen className="w-4 h-4 mr-1" />
                    {article.platform}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                {/* Category & Read Time */}
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                >
                  Read Full Article
                  <FiExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Writing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I regularly publish articles on technology, AI, education, and business innovation. 
              Follow me on Medium for the latest insights and research.
            </p>
            <a
              href="https://medium.com/@anthonycinco"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <FiBookOpen className="w-5 h-5 mr-2" />
              Follow on Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles
