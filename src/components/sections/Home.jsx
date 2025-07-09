import React from 'react';

const Home = () => {
  return (
    <section id='Home' className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.15),transparent_50%)]"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className='text-center z-10 px-6 max-w-5xl mx-auto'>
        <div className="mb-8">
          <h1 className='text-6xl md:text-8xl font-light mb-6 text-white leading-tight tracking-tight'>
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-normal'>
              Hamza
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <span className="text-emerald-400 font-light tracking-widest text-sm">CS Student at Nust</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>

        <p className='text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light'>
          I build sleek, high-performance web applications that blend clean code, modern design, 
          and seamless user experience. Passionate about creating responsive, fast, and user-friendly digital products using the latest technologies.
        </p>

        <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6'>
          <a
            className='group relative bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-8 rounded-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 overflow-hidden'
            href="#Projects"
          >
            <span className="relative z-10">VIEW MY WORK</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a
            className='group relative border border-emerald-500/50 text-emerald-400 py-4 px-8 rounded-sm font-medium tracking-wide transition-all duration-300 hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:scale-105 backdrop-blur-sm'
            href="#Contact"
          >
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;