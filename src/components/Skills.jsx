import React from 'react'
import { FiCode, FiBookOpen } from 'react-icons/fi'

const Skills = () => {
  const currentSkills = [
    { name: 'React', percentage: 85, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 80, color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML/CSS', percentage: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'TailwindCSS', percentage: 85, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Git/GitHub', percentage: 75, color: 'from-gray-600 to-gray-700' },
    { name: 'Responsive Design', percentage: 80, color: 'from-green-500 to-green-600' },
  ]

  const learningSkills = [
    { name: 'Next.js', percentage: 60, color: 'from-black to-gray-800' },
    { name: 'Node.js', percentage: 50, color: 'from-green-600 to-green-700' },
    { name: 'MongoDB', percentage: 45, color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', percentage: 55, color: 'from-blue-600 to-blue-700' },
    { name: 'Python', percentage: 40, color: 'from-blue-500 to-blue-600' },
    { name: 'AWS', percentage: 35, color: 'from-orange-500 to-orange-600' },
  ]

  const otherSkills = [
    'Project Management',
    'Technical Writing',
    'Research & Analysis',
    'Data Analysis',
    'Client Communication',
    'Problem Solving',
    'Team Leadership',
    'Financial Management',
  ]

  const SkillBar = ({ skill }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-900 dark:text-white">
          {skill.name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3">
        <div
          className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Skills */}
          <div>
            <div className="flex items-center mb-8">
              <FiCode className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Current Skills
              </h3>
            </div>
            <div className="space-y-4">
              {currentSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Learning & Developing */}
          <div>
            <div className="flex items-center mb-8">
              <FiBookOpen className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Learning & Developing
              </h3>
            </div>
            <div className="space-y-4">
              {learningSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg p-4 text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="max-w-2xl mx-auto">
            <div className="card p-6 text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AWS Academy Cloud Foundations
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                AWS Academy
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                October 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
