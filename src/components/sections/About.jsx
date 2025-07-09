import React from 'react';

const About = () => {
  const frontendSkills = [
    "HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS",
  ];
  
  const databaseSkills = [
    "SQL", "MySQl WorkBench", "MongoDB", "PostgreSQL"
  ];

  const tools = [
    "Git", "Github", "Vercel", "Figma", "VS Code", "AI Tools", "IntelliJ Idea"
  ];

  const probsol = [
    "DSA", "LeetCode", "Analytical Skills", "OOP"
  ];

  return (
    <section id='About' className='min-h-screen flex justify-center items-center py-20 relative overflow-hidden'>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className="text-center mb-16">
          <h2 className='text-5xl md:text-6xl font-light mb-6 text-white tracking-tight'>
            About <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>Me</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto"></div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20'>
          <div className='space-y-8'>
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-20'></div>
              <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-emerald-500/50 transition-all duration-300'>
                <h3 className='text-2xl font-light mb-6 text-white'>Frontend Development</h3>
                <div className='flex flex-wrap gap-3'>
                  {frontendSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 bg-slate-700/50 text-slate-300 rounded-sm text-sm font-light border border-slate-600 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20'></div>
              <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300'>
                <h3 className='text-2xl font-light mb-6 text-white'>Database Skills</h3>
                <div className='flex flex-wrap gap-3'>
                  {databaseSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 bg-slate-700/50 text-slate-300 rounded-sm text-sm font-light border border-slate-600 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20'></div>
              <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all duration-300'>
                <h3 className='text-2xl font-light mb-6 text-white'>Tools & Technologies</h3>
                <div className='flex flex-wrap gap-3'>
                  {tools.map((tool, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 bg-slate-700/50 text-slate-300 rounded-sm text-sm font-light border border-slate-600 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 cursor-default'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-20'></div>
              <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-indigo-500/50 transition-all duration-300'>
                <h3 className='text-2xl font-light mb-6 text-white'>Problem Solving</h3>
                <div className='flex flex-wrap gap-3'>
                  {probsol.map((skill, index) => (
                    <span 
                      key={index}
                      className='px-4 py-2 bg-slate-700/50 text-slate-300 rounded-sm text-sm font-light border border-slate-600 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 cursor-default'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-20'></div>
            <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-emerald-500/50 transition-all duration-300'>
              <h3 className='text-2xl font-light mb-6 text-white'>Education</h3>
              <div className='space-y-4'>
                <div>
                  <h4 className='text-lg font-medium text-white mb-2'>Bachelor of Science in Computer Science(2023-2027)</h4>
                  <p className='text-emerald-400 font-light'>National University of Sciences & Technology (NUST)</p>
                  <p className='text-slate-400 text-sm font-light mt-2'>
                    Focus: Software Engineering, Data Structures & Algorithms, Web Technologies
                  </p>
                </div>
                <div>
                  <h4 className='text-lg font-medium text-white mb-2'>Intermediate</h4>
                  <p className='text-emerald-400 font-light'>Britain International College Network</p>
                  <p className='text-slate-400 text-sm font-light mt-2'>
                    Result: 1045/100 (95%)
                  </p>
                </div>
                {/* <div>
                  <h4 className='text-lg font-medium text-white mb-2'>Matriculation</h4>
                  <p className='text-emerald-400 font-light'>Britain International School System</p>
                  <p className='text-slate-400 text-sm font-light mt-2'>
                    Result: 1058/100 (96%)
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20'></div>
            <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300'>
              <h3 className='text-2xl font-light mb-6 text-white'>Experience</h3>
              <div className='space-y-6'>
                <div>
                  <h4 className='text-lg font-medium text-white mb-2'>Frontend Intern</h4>
                  <p className='text-cyan-400 font-light'>Certura (July,25 - Aug,25)</p>
                  <p className='text-slate-400 text-sm font-light mt-2'>
                    Working on Real World Projects
                  </p>
                </div>
                {/* <div>
                  <h4 className='text-lg font-medium text-white mb-2'>Frontend Intern</h4>
                  <p className='text-cyan-400 font-light'>DevelopersHub.Co (July,25 - Aug,25)</p>
                  <p className='text-slate-400 text-sm font-light mt-2'>
                    Built end-to-end solutions using MERN stack and collaborated on various client projects
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;