import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "EduSync Platform",
      description: "A comprehensive educational management system featuring real-time collaboration, progress tracking, and analytics dashboard. Built with modern technologies for optimal performance and user experience.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Figma", "Prisma ORM"],
      category: "Full-Stack Web Application",
      status: "Live",
      gradient: "from-emerald-500 to-cyan-500",
      link: "https://edu-sync-xi.vercel.app/"
    },
    {
      title: "Vibe-Beat",
      description: "A simple, Spotify-inspired music player built using HTML, CSS, and JavaScript, with a list of multiple tracks and updated features.",
      tech: ["HTML", "CSS", "JavaScript", "VSCODE"],
      category: "Front-end Web Application",
      status: "Live",
      gradient: "from-cyan-500 to-blue-500",
      link: "https://vibe-beat-ten.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing advanced CSS animations, smooth transitions, and optimized performance. Built with accessibility and SEO best practices in mind.",
      tech: ["React", "Tailwind CSS", "VSCode", "Vercel"],
      category: "Personal Project",
      status: "Live",
      gradient: "from-purple-500 to-pink-500",
      link: "https://rock-paper-scissor-neon-six.vercel.app/"
    },
    {
      title: "Rock-Paper-Scissor",
      description: "A simple Rock-Paper-Scissors game built with HTML, CSS, and JavaScript, where you play against the computer. It keeps track of the scores and includes a reset button to start fresh!",
      tech: ["HTML", "CSS", "JavaScript", "VSCODE"],
      category: "Front-End Game Application",
      status: "Live",
      gradient: "from-blue-500 to-purple-500",
      link: "https://rock-paper-scissor-neon-six.vercel.app/"
    },
  ];

  return (
    <section id='Projects' className='min-h-screen flex justify-center items-center py-20 relative overflow-hidden'>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className="text-center mb-16">
          <h2 className='text-5xl md:text-6xl font-light mb-6 text-white tracking-tight'>
            Featured <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>Projects</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in modern web development and problem-solving capabilities.
          </p>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='group relative'
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              <div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-300 h-full'>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-light text-slate-400 tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className={`text-xs font-light px-3 py-1 rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className='text-2xl font-light mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300'>
                  {project.title}
                </h3>
                
                <p className='text-slate-300 mb-6 leading-relaxed font-light'>
                  {project.description}
                </p>
                
                <div className='flex flex-wrap gap-2 mb-8'>
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-sm text-xs font-light border border-slate-600 hover:border-slate-500 transition-colors duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className='flex space-x-4'>
                  <a target='_blank'
                    href={`${project.link}`} 
                    className={`group/btn relative bg-gradient-to-r ${project.gradient} text-white py-3 px-6 rounded-sm font-medium text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 overflow-hidden`}
                  >
                    <span className="relative z-10">VIEW PROJECT</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-light tracking-wide transition-colors duration-300 group"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;