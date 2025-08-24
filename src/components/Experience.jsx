import React from 'react'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      company: 'AlphaX Capital',
      role: 'Accounting Investment Personnel',
      duration: 'Apr 2025 - present',
      location: 'Remote',
      description: 'Managing investor documents and financial operations for investment firm.',
      achievements: [
        'Draft and manage investor documents including termination agreements, exit packages, and full contract sets (SA, PPM, W-9, OA, etc.)',
        'Coordinate cross-functionally to validate legal documents, ensuring accuracy, compliance, and timely execution via DocuSign',
        'Maintain organized records across Juniper Square, Google Drive, and internal investor portals',
        'Support onboarding and offboarding processes for investors through end-to-end document preparation and workflow oversight'
      ]
    },
    {
      company: 'iHail / Aspen Lux Co.',
      role: 'Executive Assistant',
      duration: 'May 2024 - present',
      location: 'Remote',
      description: 'Providing executive support and managing luxury watch business operations.',
      achievements: [
        'Conducted research on high-end luxury watches to identify market trends, pricing strategies, and potential investment opportunities',
        'Managed the purchasing, marketing, and selling processes',
        'Handled insurance claims for StateFarm and GEICO'
      ]
    },
    {
      company: 'LoneCypressAI',
      role: 'Research Assistant',
      duration: 'May 2024 - present',
      location: 'Remote',
      description: 'Conducting AI research and developing technical content.',
      achievements: [
        'Develop detailed, persuasive proposals for funding and partnerships',
        'Write in-depth white papers on complex AI technologies and solutions',
        'Perform research on AI trends and technologies to support content development'
      ]
    },
    {
      company: 'Scholarly',
      role: 'Test Creation Personnel',
      duration: 'Dec 2022 - Feb 2023',
      location: 'Sydney, Australia',
      description: 'Creating and implementing educational test questionnaires.',
      achievements: [
        'Created and implemented test questionnaires for higher education level',
        'Automated test question generation',
        'Developed unique content for a variety of students to improve test performance'
      ]
    },
    {
      company: 'De La Salle University',
      role: 'Research Assistant',
      duration: 'Sep 2022 - Dec 2022',
      location: 'Manila, Philippines',
      description: 'Supporting research activities and data analysis.',
      achievements: [
        'Performed data gathering to begin assignments',
        'Served as a dedicated and supportive assistant in a fast-paced environment',
        'Reviewed and evaluated from the data sets given'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-dark-900"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="card p-6 hover:transform hover:scale-105 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
