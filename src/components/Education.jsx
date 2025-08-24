import React from 'react'
import { FiAward, FiCalendar, FiMapPin, FiStar } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      institution: 'University of San Carlos',
      degree: 'BS in Electronics Engineering',
      duration: '2022 - present',
      location: 'Cebu City, Philippines',
      honors: [
        'USC Supreme Student Council - Councilor',
        'Dean\'s Lister',
        'Current GWA: 2.0'
      ],
      achievements: [
        'Finance Committee, Vice-Chairman: Managed financial oversight, budgeting, and resource allocation for student council initiatives',
        'Committee on Grievances & Investigation, Member: Assisted in addressing student concerns, ensuring fair resolutions through structured investigative processes',
        'Special Committee on Sports, Vice-Chair: Advocated for athletic development and student engagement in sports-related initiatives',
        'USC FeesWatch, Proponent & Lead Author: Spearheaded a transparency initiative monitoring university fees to promote financial accountability'
      ]
    },
    {
      institution: 'University of San Jose - Recoletos',
      degree: 'Senior High School',
      duration: '2020 - 2022',
      location: 'Cebu City, Philippines',
      honors: [
        'Graduated with Honors (94% Grade Average)',
        'Award-winning Debater/Treasurer as part of the Josenian Debate Varsity'
      ],
      achievements: [
        'Philippine Debate Open 2022 - HS Semifinalist',
        '14th Visayas Universities Debating Championship (AP) – HS Grand Finalists',
        '7th Visayas Universities Debating Championship (BP) - HS Grand Finalists',
        'Best Paper (Josenian SHS Research Summit): Proposed All-Weather Carbon Lined Solar Roof Tiles as an Energy Alternative for Low-Income Individuals in Punta Princesa, Cebu City'
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="card p-6 hover:transform hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {edu.degree}
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>

              {/* Honors */}
              {edu.honors.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <FiAward className="w-5 h-5 mr-2 text-primary-500" />
                    Honors & Recognition
                  </h4>
                  <ul className="space-y-2">
                    {edu.honors.map((honor, idx) => (
                      <li key={idx} className="flex items-start">
                        <FiStar className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {honor}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {edu.achievements.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Activities */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Extra-Curricular Activities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Institute of Electronics Engineers of the Philippines
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-medium">Role:</span> Member (2022 - present)
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Served as a 1st Year Representative for the USC Chapter during 2022-2023.
              </p>
            </div>

            <div className="card p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                USC Supreme Student Council
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-medium">Role:</span> Councilor (2024 - 2025)
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Active member contributing to student governance and policy development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
