import React from 'react'
import { FiClock, FiCode, FiTrendingUp, FiBookOpen } from 'react-icons/fi'

const InDevelopment = () => {
  const upcomingProjects = [
    {
      title: 'Research Blog Platform',
      subtitle: 'AI & Technology Insights',
      description: 'A comprehensive blog platform focused on AI research, technology trends, and educational content. Features include interactive articles, research summaries, and community discussions.',
      technologies: ['Next.js', 'MongoDB', 'TailwindCSS', 'AI Integration'],
      progress: 75,
      estimatedCompletion: 'Q2 2025',
      category: 'Web Development',
      icon: FiBookOpen
    },
    {
      title: 'Task Management App',
      subtitle: 'Productivity & Collaboration',
      description: 'A modern task management application with real-time collaboration, AI-powered task prioritization, and comprehensive project tracking capabilities.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
      progress: 45,
      estimatedCompletion: 'Q3 2025',
      category: 'Mobile App',
      icon: FiCode
    },
    {
      title: 'E-Commerce Platform',
      subtitle: 'Modern Shopping Experience',
      description: 'A full-featured e-commerce platform with AI-powered product recommendations, advanced search, and seamless payment integration.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      progress: 30,
      estimatedCompletion: 'Q4 2025',
      category: 'E-Commerce',
      icon: FiTrendingUp
    },
    {
      title: 'AI Research Assistant',
      subtitle: 'Intelligent Research Tool',
      description: 'An AI-powered research assistant that helps users gather, analyze, and synthesize information from multiple sources for academic and professional research.',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
      progress: 20,
      estimatedCompletion: 'Q1 2026',
      category: 'AI/ML',
      icon: FiCode
    }
  ]

  const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-2">
      <div
        className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )

  return (
    <section id="in-development" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            In Development
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Exciting projects currently in development. These innovative solutions showcase my 
            growing skills and passion for creating impactful applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <div
              key={index}
              className="card p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <project.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Progress Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Progress
                  </span>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {project.progress}%
                  </span>
                </div>
                <ProgressBar progress={project.progress} />
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <FiClock className="w-4 h-4 mr-1" />
                  Est. {project.estimatedCompletion}
                </div>
                <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new project ideas, collaborations, or opportunities. 
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              <FiCode className="w-5 h-5 mr-2" />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InDevelopment
