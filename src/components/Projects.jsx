import React from 'react'
import { FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'HOOM (Pitch Deck)',
      subtitle: 'Perfecting the Real Estate Process',
      description: 'HOOM is a next-generation real estate platform for student housing that is revolutionizing the way people buy and sell homes. With its innovative features and user-friendly interface, HOOM makes it easier than ever to find the perfect home for your needs.',
      image: '/hoom-project.jpg',
      technologies: ['React', 'TailwindCSS', 'Framer Motion'],
      links: [
        { name: 'Live Demo', url: '#', icon: FiExternalLink },
        { name: 'GitHub', url: 'https://github.com/anthnycinco/hoom', icon: FiGithub }
      ],
      date: 'Dec 2024',
      featured: true
    },
    {
      title: 'SBIR Proposal for StreetLink: AI for Urban Mobility',
      subtitle: 'Technical White Paper Proposal',
      description: 'As the main researcher, I meticulously outlined a comprehensive SBIR proposal for StreetLink, an innovative AI-driven urban transportation management tool. Leveraging advanced technologies like OCR and NLP, StreetLink aims to address congestion, enhance safety, and promote equity.',
      image: '/streetlink-project.jpg',
      technologies: ['AI/ML', 'Technical Writing', 'Research'],
      links: [
        { name: 'View Proposal', url: '#', icon: FiExternalLink }
      ],
      date: '2024',
      featured: true
    },
    {
      title: 'AI Integration Memo: Transforming Gaming Dynamics',
      subtitle: 'Business Memo',
      description: 'As a technical writer and researcher, I conducted extensive online research to create a comprehensive memo on AI\'s transformative impact on the gaming industry. The memo covered procedural content generation, dynamic game design, automated testing, and personalized player experiences.',
      image: '/ai-gaming-project.jpg',
      technologies: ['AI Research', 'Technical Writing', 'Business Analysis'],
      links: [
        { name: 'Read Memo', url: '#', icon: FiExternalLink }
      ],
      date: '2024',
      featured: true
    },
    {
      title: 'Test Questionnaire Design for NSW Students',
      subtitle: 'Test Question',
      description: 'This project involved creating test questionnaires for New South Wales (NSW) students, designed to assess critical thinking and comprehension across various subjects. I contributed by researching and developing questions, structuring them for multiple-choice and open-ended responses.',
      image: '/test-design-project.jpg',
      technologies: ['Education', 'Research', 'Content Creation'],
      links: [
        { name: 'View Project', url: '#', icon: FiExternalLink }
      ],
      date: '2023'
    },
    {
      title: 'Sporty Caloy Program',
      subtitle: 'Student-Athlete Support Initiative',
      description: 'Co-developed a program supporting student-athletes through funding, training, and engagement activities. This initiative aimed to enhance athletic development and student engagement in sports-related activities.',
      image: '/sporty-caloy-project.jpg',
      technologies: ['Program Development', 'Leadership', 'Student Affairs'],
      links: [
        { name: 'Learn More', url: '#', icon: FiExternalLink }
      ],
      date: '2024'
    },
    {
      title: 'G-Scope Initiative',
      subtitle: 'Governance Enhancement Program',
      description: 'Contributed to an initiative aimed at enhancing governance and student participation in university policies. This project focused on improving transparency and student engagement in institutional decision-making.',
      image: '/g-scope-project.jpg',
      technologies: ['Governance', 'Policy', 'Student Leadership'],
      links: [
        { name: 'Learn More', url: '#', icon: FiExternalLink }
      ],
      date: '2024'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center">
                <div className="text-4xl text-primary-600 dark:text-primary-400">
                  {project.title.charAt(0)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <FiCalendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      <link.icon className="w-4 h-4 mr-1" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
