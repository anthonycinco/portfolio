import React from 'react'

const About = () => {
  const tags = [
    'Adaptable',
    'Team Player',
    'Problem Solver',
    'Detail-Oriented',
    'Fast Learner',
    'Communication',
    'Leadership',
    'Research',
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-dark-700 rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                    AC
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Professional & Aspiring Developer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm Anthony Arbe Cinco, a dedicated professional with over 3 years of experience 
                in executive assistance, research, and project management. Currently pursuing my 
                BS in Electronics Engineering at the University of San Carlos, I've developed 
                strong analytical and problem-solving skills through various roles.
              </p>
              
              <p>
                My experience spans from managing high-stakes investor documents at AlphaX Capital 
                to conducting AI research at LoneCypressAI. I've maintained direct communication 
                with clients and suppliers, fostering strong relationships while delivering 
                exceptional results in fast-paced environments.
              </p>
              
              <p>
                As an aspiring full-stack developer, I'm passionate about creating innovative 
                solutions and continuously learning new technologies. My background in research 
                and technical writing has equipped me with the ability to understand complex 
                systems and communicate effectively with stakeholders.
              </p>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Key Strengths
              </h4>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
